"use client";

import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Session } from "next-auth";

const queryClient = new QueryClient();
export default function AppProvider({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session | null;
}): React.ReactNode {
  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </SessionProvider>
  );
}
