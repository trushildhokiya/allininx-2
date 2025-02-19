import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePrivy } from "@privy-io/react-auth";

const signin: React.FC = () => {
  const router = useRouter();
  const { login, authenticated, ready } = usePrivy();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (ready && authenticated) {
      setIsLoading(true);
      // Add a small delay to ensure smooth transition
      const redirectTimer = setTimeout(() => {
        router.push("/chat");
      }, 2000);
      
      return () => clearTimeout(redirectTimer);
    }
  }, [authenticated, router]);

  const handleAccess = () => {
    login();
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[#101010]">
      <div className="relative max-w-sm rounded-lg bg-[#222222] p-16 text-center shadow-lg">
        <div className="absolute left-0 top-0 h-full w-full rounded-lg opacity-50"></div>
        <div className="relative z-10">
          <div className="mb-6 flex justify-center">
            <Link href="/" className="cursor-pointer duration-300 hover:scale-110">
              <img src="/images/brand/logo.png" alt="Logo" width={40} height={40} />
            </Link>
          </div>
          <h1 className="text-xl font-bold text-white">Welcome to Allinix</h1>
          <p className="mb-8 text-gray-400">Get access to dashboard</p>
          {isLoading ? (
            <div className="w-full space-y-3">
              <div className="h-1 w-full overflow-hidden rounded-full bg-gray-700">
                <div className="h-full w-1/2 animate-[loading_1s_ease-in-out_infinite] bg-blue-500"></div>
              </div>
              <p className="text-sm text-gray-400">Redirecting to dashboard...</p>
            </div>
          ) : (
            <button
              onClick={handleAccess}
              className="btn-primary w-full rounded-md px-4 py-2 font-semibold text-white"
              disabled={isLoading}
            >
              SIGN IN
            </button>
          )}
          <div className="mt-8 flex justify-center gap-8">
            <Link
              href={"https://x.com/allinix_ai"}
              target="_blank"
              className="h-8 w-8 duration-300 hover:scale-110"
            >
              <svg
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.286 2.25293H26.2779L17.5567 12.2207L27.8165 25.7847H19.7832L13.4911 17.5582L6.29164 25.7847H2.29728L11.6255 15.123L1.7832 2.25293H10.0205L15.708 9.77222L22.286 2.25293ZM20.8849 23.3953H23.0969L8.81859 4.5168H6.4449L20.8849 23.3953Z"
                  fill="white"
                />
              </svg>
            </Link>
            <Link
              href={"https://allinix-ai.gitbook.io/allinix"}
              target="_blank"
              className="h-8 w-8 duration-300 hover:scale-110"
            >
              <img src="/gitbook.png" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default signin;