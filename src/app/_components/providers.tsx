"use client";

import { Theme } from "@radix-ui/themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren, useState } from "react";

export const Providers: React.FC<PropsWithChildren> = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <Theme
      appearance="dark"
      accentColor="violet"
      grayColor="gray"
      panelBackground="solid"
      scaling="100%"
      radius="large"
    >
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Theme>
  );
};
