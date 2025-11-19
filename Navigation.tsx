import { APP_LOGO, APP_TITLE } from "@/const";
import { Link, useLocation } from "wouter";
import { Button } from "./ui/button";

export default function Navigation() {
  const [location] = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/prices", label: "Prices" },
    { path: "/stories", label: "Stories & Impact" },
    { path: "/feedback", label: "Feedback" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex items-center gap-2 mr-8">
          <Link href="/">
            <a className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <img src={APP_LOGO} alt={APP_TITLE} className="h-10 w-10" />
              <span className="font-bold text-lg text-foreground hidden sm:inline-block">
                {APP_TITLE}
              </span>
            </a>
          </Link>
        </div>

        <div className="flex gap-1 flex-1">
          {navItems.map((item) => {
            const isActive = location === item.path;
            return (
              <Link key={item.path} href={item.path}>
                <Button
                  variant={isActive ? "default" : "ghost"}
                  className={isActive ? "" : "text-muted-foreground"}
                  size="sm"
                >
                  {item.label}
                </Button>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
