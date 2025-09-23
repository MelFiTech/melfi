"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "../../components/ui/button";
import { ArrowUpRight } from "lucide-react";

export const Header = (): React.ReactElement => {
  const [isPastHero, setIsPastHero] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollRef = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      const last = lastScrollRef.current;
      
      // Set isPastHero based on hero section height (925px)
      setIsPastHero(y > 800);
      
      // Hide when scrolling down, show when scrolling up
      if (y > last && y > 20) setHidden(true);
      else setHidden(false);
      lastScrollRef.current = y;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={
        `fixed top-0 inset-x-0 z-50 w-full transition-transform duration-300` +
        ` ${hidden ? "-translate-y-full" : "translate-y-0"}`
      }
    >
      <div className={`${isPastHero ? "bg-white/95 backdrop-blur border-b border-black/5" : "bg-transparent"} transition-colors duration-300`}>
        <div className={
          `mx-auto flex w-full max-w-[1440px] items-center justify-between pt-6 pb-3 px-[60px]`
        }>
          <div className="inline-flex items-center gap-[66px] relative flex-[0_0_auto] rounded-[80px]">
            <img
              className="relative w-[102.41px] h-[35px] cursor-pointer"
              alt="Melfi LOGO"
              src={isPastHero ? "/MELFI-LOGO-BLACK.png" : "/MELFI-LOGO.png"}
              onClick={() => {
                setHidden(false);
                document.documentElement.scrollTop = 0;
                document.body.scrollTop = 0;
              }}
            />
            {/* Navigation items removed as per instruction */}
          </div>

          <Button className={`inline-flex px-6 py-4 h-auto items-center justify-center gap-2.5 relative rounded-[60px] [font-family:'Sora',Helvetica] font-semibold text-base tracking-[0] leading-[normal] ${isPastHero ? "bg-neutral-900 text-white hover:bg-neutral-800" : "bg-white text-neutral-900 hover:bg-gray-100"}`}>
            Book a Call with Melfi
            <ArrowUpRight className="w-4 h-4" aria-hidden />
          </Button>
        </div>
      </div>
    </header>
  );
};
