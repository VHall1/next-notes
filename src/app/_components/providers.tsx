"use client";

import { getQueryClient } from "@/util/react-query";
import { Theme } from "@radix-ui/themes";
import { QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";

export const Providers: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Theme
      appearance="dark"
      accentColor="violet"
      grayColor="gray"
      panelBackground="solid"
      scaling="100%"
      radius="large"
    >
      <QueryClientProvider client={getQueryClient()}>
        {children}
      </QueryClientProvider>
    </Theme>
  );
};
