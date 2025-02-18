from importlib import metadata
import logging

from fastapi import FastAPI,Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import UJSONResponse

from reworkd_platform.logging import configure_logging
from reworkd_platform.settings import settings
from reworkd_platform.web.api.error_handling import platformatic_exception_handler
from reworkd_platform.web.api.errors import PlatformaticError
from reworkd_platform.web.api.router import api_router
from reworkd_platform.web.lifetime import (
    register_shutdown_event,
    register_startup_event,
)
import time


def get_app() -> FastAPI:
    """
    Get FastAPI application.

    This is the main constructor of an application.

    :return: application.
    """
    configure_logging()

    logger = logging.getLogger(__name__)

    logger.info("Starting FastAPI application")
    logger.debug(f"Frontend URL: {settings.frontend_url}")
    logger.debug(f"Allowed Origins Regex: {settings.allowed_origins_regex}")

    app = FastAPI(
        title="Reworkd Platform API",
        version=metadata.version("reworkd_platform"),
        docs_url="/api/docs",
        redoc_url="/api/redoc",
        openapi_url="/api/openapi.json",
        default_response_class=UJSONResponse,
    )

    # Middleware to log requests
    @app.middleware("http")
    async def log_requests(request: Request, call_next):
        start_time = time.time()
        logger.info(f"Request: {request.method} {request.url}")
        response = await call_next(request)
        process_time = time.time() - start_time
        logger.info(f"Completed: {request.method} {request.url} in {process_time:.2f} sec with status {response.status_code}")
        return response
    
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["https://dashboard.allinix.ai"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    # Adds startup and shutdown events.
    register_startup_event(app)
    register_shutdown_event(app)

    # Main router for the API.
    app.include_router(router=api_router, prefix="/api")

    app.exception_handler(PlatformaticError)(platformatic_exception_handler)

    return app
