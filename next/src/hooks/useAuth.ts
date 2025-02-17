import { useRouter } from "next/router";
import type { Session } from "next-auth";
import { signIn as nextAuthSignIn, signOut as nextAuthSignOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { usePrivy } from "@privy-io/react-auth";

type Provider = "google" | "github" | "discord";

interface Auth {
  signIn: (provider?: Provider) => Promise<void>;
  signOut: () => Promise<void>;
  status: "authenticated" | "unauthenticated" | "loading";
  session: Session | null;
}

interface UseAuthOptions {
  protectedRoute?: boolean;
  isAllowed?: (user: Session) => boolean;
}

export function useAuth(
  { protectedRoute, isAllowed }: UseAuthOptions = { protectedRoute: false, isAllowed: () => true }
): Auth {
  const { data: session, status: nextAuthStatus } = useSession();
  const { push } = useRouter();
  const { ready, authenticated, login, logout, user } = usePrivy();
  const [isInitializing, setIsInitializing] = useState(true);

  // Handle protected route redirects and permissions
  useEffect(() => {
    if (!ready || isInitializing) return;

    const handleAuthCheck = async () => {
      if (protectedRoute && !authenticated) {
        await handleSignIn().catch(console.error);
      } else if (
        protectedRoute &&
        authenticated &&
        session &&
        isAllowed &&
        !isAllowed(session)
      ) {
        await push("/404").catch(console.error);
      }
    };

    handleAuthCheck().finally(() => setIsInitializing(false));
  }, [protectedRoute, isAllowed, authenticated, session, ready]);

  // Sync Privy auth state with NextAuth session
  useEffect(() => {
    if (!ready || !authenticated || nextAuthStatus === "authenticated") return;

    // If Privy is authenticated but NextAuth isn't, create the session
    const syncSession = async () => {
      await nextAuthSignIn("credentials", {
        redirect: false,
        callbackUrl: "/",
        name: user?.email || user?.wallet?.address || "Anonymous",
      });
    };

    syncSession().catch(console.error);
  }, [ready, authenticated, nextAuthStatus, user]);

  const handleSignIn = async (provider?: Provider) => {
    try {
      if (provider) {
        // Use traditional OAuth providers
        await nextAuthSignIn(provider, { callbackUrl: "/" });
      } else {
        // Use Privy
        await login();
        // NextAuth session will be created by the sync effect above
      }
    } catch (error) {
      console.error("Error during sign in:", error);
      throw error;
    }
  };

  const handleSignOut = async () => {
    try {
      await Promise.all([
        logout(),
        nextAuthSignOut({ callbackUrl: "/" })
      ]);
    } catch (error) {
      console.error("Error during sign out:", error);
      throw error;
    }
  };

  // Compute final auth status
  const status =
    !ready || isInitializing || nextAuthStatus === "loading"
      ? "loading"
      : authenticated && session
      ? "authenticated"
      : "unauthenticated";

  return {
    signIn: handleSignIn,
    signOut: handleSignOut,
    status,
    session,
  };
}