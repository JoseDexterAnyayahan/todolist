"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CheckSquare, BarChart3, Settings } from "lucide-react";
import { useState } from "react";

const navItems = [
  { href: "/todo", label: "Tasks", icon: CheckSquare },
  { href: "/stats", label: "Stats", icon: BarChart3 },
  { href: "/settings", label: "Settings", icon: Settings },
];

export default function BottomNav() {
  const pathname = usePathname();
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number; href: string }[]>([]);

  const createRipple = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();

    setRipples((prev) => [...prev, { id, x, y, href }]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== id));
    }, 600);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 pb-safe">
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />
      
      <div className="relative border-t border-border bg-background/95 backdrop-blur-2xl shadow-[0_-4px_24px_rgba(0,0,0,0.1)] dark:shadow-[0_-4px_24px_rgba(0,0,0,0.4)]">
        <div className="flex justify-around items-center h-20 max-w-lg mx-auto px-6 relative">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => createRipple(e, item.href)}
                className="relative flex flex-col items-center justify-center gap-1.5 group py-2 px-5 min-w-[80px] overflow-hidden"
              >
                {ripples
                  .filter((ripple) => ripple.href === item.href)
                  .map((ripple) => (
                    <span
                      key={ripple.id}
                      className="absolute bg-amber-400/30 rounded-full animate-[ripple_0.6s_ease-out] pointer-events-none"
                      style={{
                        left: ripple.x,
                        top: ripple.y,
                        width: 0,
                        height: 0,
                      }}
                    />
                  ))}

                {isActive && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-b from-amber-500/15 to-amber-500/5 rounded-3xl" />
                    <div className="absolute inset-0 border border-amber-500/20 rounded-3xl" />
                  </>
                )}
                
                <div className={`relative transition-all duration-300 ${
                  isActive 
                    ? "translate-y-[-3px] scale-110" 
                    : "group-hover:translate-y-[-2px] group-hover:scale-105"
                }`}>
                  <Icon
                    size={24}
                    strokeWidth={isActive ? 2.5 : 2}
                    className={`transition-all duration-300 ${
                      isActive
                        ? "text-amber-400 drop-shadow-[0_0_12px_rgba(251,191,36,0.6)]"
                        : "text-muted-foreground group-hover:text-foreground"
                    }`}
                  />
                  
                  {isActive && (
                    <div className="absolute inset-0 bg-amber-400/25 blur-xl rounded-full scale-150" />
                  )}
                </div>

                <span className={`text-[11px] font-semibold tracking-wide transition-all duration-300 relative z-10 ${
                  isActive
                    ? "text-amber-400"
                    : "text-muted-foreground group-hover:text-foreground"
                }`}>
                  {item.label}
                </span>

                {isActive && (
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-amber-400 rounded-full shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
                )}

                {index < navItems.length - 1 && index === 0 && (
                  <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-px h-8 bg-gradient-to-b from-transparent via-border to-transparent" />
                )}
              </Link>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes ripple {
          to {
            width: 100px;
            height: 100px;
            opacity: 0;
          }
        }
      `}</style>
    </nav>
  );
}