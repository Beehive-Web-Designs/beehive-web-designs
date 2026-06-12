import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";

type PageShellProps = {
  children: React.ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
