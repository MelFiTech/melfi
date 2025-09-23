"use client";
import React from "react";
import { motion, useAnimationControls, AnimatePresence } from "framer-motion";
import { MousePointer2 } from "lucide-react";

type KanbanSnippetProps = {
  heightPx?: number;
  className?: string;
};

export const KanbanSnippet = ({ heightPx = 300, className = "" }: KanbanSnippetProps): React.ReactElement => {
  const mover = useAnimationControls();
  const cardMover = useAnimationControls();
  const [phase, setPhase] = React.useState<"prd" | "flow" | "tasks" | "launch">("prd");

  React.useEffect(() => {
    let cancelled = false;
    async function run() {
      while (!cancelled) {
        setPhase("prd");
        await new Promise((r) => setTimeout(r, 2000));

        setPhase("flow");
        await new Promise((r) => setTimeout(r, 2200));

        setPhase("tasks");
        await cardMover.start({ x: 0, y: 0, transition: { duration: 0 } });
        await mover.start({ x: 12, y: 70, transition: { duration: 0 } });
        await new Promise((r) => setTimeout(r, 300));
        await Promise.all([
          mover.start({ x: 140, y: 70, transition: { duration: 0.9, ease: "easeInOut" } }),
          cardMover.start({ x: 140, y: 0, transition: { duration: 0.9, ease: "easeInOut" } }),
        ]);
        await Promise.all([
          mover.start({ x: 290, y: 150, transition: { duration: 0.9, ease: "easeInOut" } }),
          cardMover.start({ x: 290, y: 80, transition: { duration: 0.9, ease: "easeInOut" } }),
        ]);
        await Promise.all([
          mover.start({ x: 430, y: 40, transition: { duration: 1.0, ease: "easeInOut" } }),
          cardMover.start({ x: 430, y: -10, transition: { duration: 1.0, ease: "easeInOut" } }),
        ]);
        await new Promise((r) => setTimeout(r, 500));

        setPhase("launch");
        await new Promise((r) => setTimeout(r, 1800));
      }
    }
    run();
    return () => {
      cancelled = true;
    };
  }, [mover, cardMover]);

  const float = {
    animate: {
      y: [0, -4, 0],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
    },
  };

  // Reset animation controllers on phase change to avoid stale positions
  React.useEffect(() => {
    if (phase === "prd" || phase === "flow") {
      mover.stop();
      cardMover.stop();
      void mover.start({ x: 0, y: 0, transition: { duration: 0 } });
      void cardMover.start({ x: 0, y: 0, transition: { duration: 0 } });
    }
  }, [phase, mover, cardMover]);

  return (
    <div className={`rounded-xl overflow-hidden isolate ${className}`} style={{ height: heightPx, background: "#0b1220" }}>
      <div className="flex items-center justify-between px-4 py-3">
        <div className="text-[12px] font-medium text-white/80 [font-family:'Sora',Helvetica]">Strategy Flow</div>
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-[#243b55]" />
          <span className="size-2.5 rounded-full bg-[#3b82f6]" />
          <span className="size-2.5 rounded-full bg-[#22c55e]" />
        </div>
      </div>

      <div className="relative w-full h-[calc(100%-44px)] px-4 pb-4 pointer-events-none">
        <motion.div key={phase} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }} className="absolute inset-0 rounded-lg bg-[#0f1b2e] p-4 border border-white/5">
          <div className="text-[12px] text-white/70 mb-3 [font-family:'Sora',Helvetica]">
            {phase === 'prd' ? 'PRD' : phase === 'flow' ? 'User Flow' : phase === 'tasks' ? 'Tasks' : 'Launch'}
          </div>

          {phase === 'prd' && (
            <div className="space-y-3">
              {["w-11/12","w-5/6","w-4/5","w-2/3","w-1/2"].map((w,idx)=> (
                <motion.div key={idx} initial={{ width: 0, opacity: 0.6 }} animate={{ width: "100%" }} transition={{ duration: 0.6, delay: idx*0.25 }} className={`h-3 rounded bg-white/10 ${w}`} />
              ))}
            </div>
          )}

          {phase === 'flow' && (
            <div className="relative h-[85%]">
              {[{x:20,y:10},{x:160,y:10},{x:300,y:10},{x:160,y:110}].map((p,idx)=> (
                <motion.div key={idx} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: idx*0.25 }} className="absolute rounded-md bg-[#17243a] w-28 h-10" style={{ left:p.x, top:p.y }} />
              ))}
              {[[48,20,160,20],[192,20,304,20],[92,20,176,120],[272,20,176,120]].map((l,idx)=> (
                <motion.div key={idx} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 + idx*0.2 }} className="absolute bg-white/15" style={{ left: Math.min(l[0],l[2]), top: Math.min(l[1],l[3]), width: Math.abs(l[2]-l[0]), height: 2 }} />
              ))}
            </div>
          )}

          {phase === 'tasks' && (
            <div className="relative h-[85%]">
              {[0,1,2].map((i)=> (
                <motion.div key={i} className="absolute h-8 w-32 rounded-md bg-[#1e293b]" style={{ left: i*80, top: i*28 }} />
              ))}
              <motion.div animate={cardMover} className="absolute top-0 left-0 h-8 w-32 rounded-md bg-[#c7d2fe]" />
            </div>
          )}

          {phase === 'launch' && (
            <div className="flex flex-col items-center justify-center h-[85%]">
              <motion.div animate={{ scale: [0.9,1.02,1] }} transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 1.2 }} className="h-12 w-64 rounded-md bg-[#22c55e]/20 border border-[#22c55e]/40" />
              <div className="h-2 rounded bg-white/10 w-1/2 mt-3" />
            </div>
          )}

          {phase !== 'launch' && (
            <motion.div animate={mover} className="absolute top-6 left-6 flex items-center gap-1 text-white/90">
              <MousePointer2 className="w-4 h-4" />
              <span className="text-[11px] [font-family:'Sora',Helvetica]">{phase === 'prd' ? 'Writing PRD' : phase === 'flow' ? 'Designing Flow' : 'Reprioritising Tasks'}</span>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};


