"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

const TanstackProvider = ({ children }: { children: React.ReactNode }) => {
  const query = new QueryClient();
  return (
    <>
      
        <QueryClientProvider client={query}>{children}</QueryClientProvider>
      
    </>
  );
};

export default TanstackProvider;
