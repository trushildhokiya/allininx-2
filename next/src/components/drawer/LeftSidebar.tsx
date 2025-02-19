import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { FaBars } from "react-icons/fa";
import { useState, useEffect } from 'react';
import { DrawerItemButton, DrawerItemButtonLoader } from "./DrawerItemButton";
import type { DisplayProps } from "./Sidebar";
import Sidebar from "./Sidebar";
import { useAuth } from "../../hooks/useAuth";
import { api } from "../../utils/api";
import AuthItem from "../sidebar/AuthItem";
import LinkIconItem from "../sidebar/LinkIconItem";
import LinkItem from "../sidebar/LinkItem";
import { PAGE_LINKS, SOCIAL_LINKS } from "../sidebar/links";
import { Rocket, SquarePlus } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaX } from "react-icons/fa6";

const LeftSidebar = ({ show, setShow, onReload }: DisplayProps & { onReload?: () => void }) => {
  const router = useRouter();
  const { signIn, status } = useAuth();
  const [t] = useTranslation("drawer");
  const [isPageLoading, setIsPageLoading] = useState(false);

  const { isLoading, data } = api.agent.getAll.useQuery(undefined, {
    enabled: status === "authenticated",
  });
  const userAgents = data ?? [];

  useEffect(() => {
    const handleStart = (url: string) => {
      if (PAGE_LINKS.some(link => link.href === url)) {
        setIsPageLoading(true);
      }
    };

    const handleComplete = () => {
      setIsPageLoading(false);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  const navigateToPage = (href: string) => {
    if (router.pathname === href) {
      onReload?.();
      return;
    }
    void router.push(href);
  };

  return (
    <>
      {isPageLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="relative space-y-3 text-center">
            <div className="h-1.5 w-32 overflow-hidden rounded-full bg-gray-800">
              <div className="absolute inset-0">
                <div 
                  className="h-full w-1/3 bg-blue-500"
                  style={{
                    animation: 'loadingN 1.5s infinite ease-in-out',
                    transform: 'translateX(-100%)'
                  }}
                ></div>
              </div>
            </div>
            <p className="text-sm font-medium text-white/90">Loading...</p>
          </div>
        </div>
      )}
      
      <Sidebar show={show} setShow={setShow} side="left" className="border-2 bg-black border-gray-800">
        <div className="flex flex-row items-center pb-6">
          <Link href="/" className="flex cursor-pointer items-center">
            <Image src="/allinix-logo.png" width="42" height="42" alt="Reworkd AI" />
            <p className="text-xl">Allinix</p>
          </Link>

          <button
            className="btn-primary-orange ml-auto flex rounded-md border-none bg-orange-500/50 p-2 text-orange-500 transition-all"
            onClick={() => navigateToPage("/chat")}
          >
            <SquarePlus className="mr-2" /> New Agent
          </button>
          <button
            className="ml-auto rounded-md border-none hover:scale-110 transition-all duration-150"
            onClick={() => setShow(!show)}
          >
            <FaX size="18" className="z-20 text-white" />
          </button>
        </div>

        <div className="mb-2 mr-2 flex-1 overflow-y-auto overflow-x-hidden overflow-ellipsis">
          <p className="my-5 text-3xl font-semibold text-white">Welcome Back to Allinix</p>
          <p className="text-sm">Valid member of Allinix since Jan 2025</p>

          <ul role="list" className="flex flex-col">
            <ul className="mb-2">
              <div className="mb-2 ml-2 text-base my-4 font-semibold text-slate-10">Menu</div>
              {PAGE_LINKS.map((link, i) => (
                <LinkItem
                  key={i}
                  title={link.name}
                  href={link.href}
                  onClick={() => navigateToPage(link.href)}
                >
                  <link.icon className={link.className} />
                </LinkItem>
              ))}
            </ul>
          </ul>

          <h3 className="mb-2 ml-2 text-base my-4 font-semibold text-slate-10">Conversations</h3>
          {userAgents.map((agent, index) => (
            <DrawerItemButton
              key={`${index}-${agent.name}`}
              className="flex w-full rounded-md p-2 text-sm font-semibold text-white"
              text={agent.name}
              onClick={() => void router.push(`/agent?id=${agent.id}`)}
            />
          ))}
        </div>

        <ul role="list" className="flex flex-col">
          <li className="mb-2">
            <div className="mx-2 flex items-center justify-center gap-3">
              {SOCIAL_LINKS.map((link) => (
                <motion.div
                  key={link.name}
                  whileHover={{ scale: 1.2, opacity: 0.9 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <LinkIconItem
                    href={link.href}
                    onClick={() => {
                      void router.push(link.href);
                    }}
                  >
                    {link.icon instanceof Object ? (
                      <link.icon size={20} />
                    ) : (
                      <Image
                        src={link.icon}
                        width={link.width}
                        height={link.height}
                        alt="icon"
                      />
                    )}
                  </LinkIconItem>
                </motion.div>
              ))}
            </div>
          </li>
          <li>
            <div className="mb-2 ml-2  text-center text-xs font-semibold text-slate-10">
              @{new Date().getFullYear()} Allinix.ai | All Rights reserved
            </div>
          </li>
        </ul>
      </Sidebar>
    </>
  );
};

export default LeftSidebar;