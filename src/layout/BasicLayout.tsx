import { Header } from "@/components";
import { JSX, ReactNode } from "react";
import { Toaster } from "@/components/ui/sonner";

/**
 * BaseLayout component wraps the page with a consistent layout.
 *
 * @param {ReactNode} props.children - The content to be rendered within the layout
 * @returns {JSX.Element} The rendered layout with header and children
 */
export function BasicLayout({
  children,
}: Readonly<{ children: ReactNode }>): JSX.Element {
  return (
    <div className="container mx-auto px-4  flex flex-col h-screen">
      <Header />
      {children}
      <Toaster richColors />
    </div>
  );
}
