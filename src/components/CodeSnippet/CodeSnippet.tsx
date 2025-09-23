"use client";
import React from "react";

// Add color styles for tokens
const colorfulStyles = `
  .token-keyword { color: #7c3aed; font-weight: 600; }
  .token-string { color: #059669; }
  .token-comment { color: #64748b; font-style: italic; }
  .token-boolean { color: #f59e42; }
  .token-number { color: #e11d48; }
  .token-function { color: #2563eb; }
  .token-variable { color: #f43f5e; }
`;

type Snippet = {
  language: string; // label only
  code: string; // full multi-line code
};

type CodeSnippetProps = {
  snippets: Snippet[];
  className?: string;
  charsPerSecond?: number; // typing speed
  pauseBetweenSnippetsMs?: number; // hold before switching
  heightPx?: number; // fixed container height
};

export const CodeSnippet = ({
  snippets,
  className = "",
  charsPerSecond = 88,
  pauseBetweenSnippetsMs = 300,
  heightPx = 500, // Increased height from 220 to 300
}: CodeSnippetProps): React.ReactElement => {
  const [snippetIndex, setSnippetIndex] = React.useState(0);
  const [charIndex, setCharIndex] = React.useState(0);
  const current = snippets[snippetIndex] ?? { language: "", code: "" };

  // Typing loop
  React.useEffect(() => {
    if (!current.code) return;
    let rafId: number;
    let last = performance.now();
    const intervalMs = 1000 / Math.max(1, charsPerSecond);
    let acc = 0;

    const step = (now: number) => {
      const dt = now - last;
      last = now;
      acc += dt;
      while (acc >= intervalMs) {
        acc -= intervalMs;
        setCharIndex((c) => {
          if (c < current.code.length) return c + 1;
          return c;
        });
      }
      rafId = requestAnimationFrame(step);
    };
    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [current.code, charsPerSecond]);

  // When one snippet finishes, wait then move to next
  React.useEffect(() => {
    if (!current.code) return;
    if (charIndex < current.code.length) return;
    const t = setTimeout(() => {
      setSnippetIndex((i) => (i + 1) % snippets.length);
      setCharIndex(0);
    }, pauseBetweenSnippetsMs);
    return () => clearTimeout(t);
  }, [charIndex, current.code, snippets.length, pauseBetweenSnippetsMs]);

  const visible = current.code.slice(0, charIndex);

  // Enhanced lightweight syntax highlighting for more color
  const highlight = React.useCallback((code: string, lang: string) => {
    // escape HTML
    const esc = code
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    const patterns: Array<[RegExp, string]> = [
      // keywords
      [/\b(const|let|var|function|return|import|from|export|async|await|if|else|for|while|type|interface|package|def|class|struct|enum|switch|case|break|continue|try|catch|finally|throw|new|extends|implements|public|private|protected|static|yield|go|map|chan|select|defer|range)\b/g, 'token-keyword'],
      // function names (simple heuristic)
      [/\b([a-zA-Z_][\w]*)\s*(?=\()/g, 'token-function'],
      // strings
      [/("[^"]*"|'[^']*'|`[^`]*`)/g, 'token-string'],
      // comments
      [/(\/\/.*$)/gm, 'token-comment'],
      [/(#.*$)/gm, 'token-comment'],
      // booleans/null/undefined
      [/\b(true|false|null|undefined|None)\b/g, 'token-boolean'],
      // numbers
      [/\b(\d+)(?![\w])/g, 'token-number'],
      // variable names after let/const/var/type/def/class/struct
      [/\b(let|const|var|type|def|class|struct)\s+([a-zA-Z_][\w]*)/g, 'token-keyword token-variable'],
    ];
    let out = esc;
    patterns.forEach(([re, cls]) => {
      // If the pattern is for variable names after let/const/var/type/def/class/struct, handle group 2
      if (cls === 'token-keyword token-variable') {
        out = out.replace(re, (m, kw, v) =>
          `<span class="token-keyword">${kw}</span> <span class="token-variable">${v}</span>`
        );
      } else {
        out = out.replace(re, (m) => `<span class="${cls}">${m}</span>`);
      }
    });
    return out;
  }, []);

  // Add a more colorful background and a gradient bar at the top
  return (
    <div
      className={`relative rounded-xl p-4 overflow-hidden shadow-lg border border-[#e0e7ef] ${className}`}
      aria-label={`Animated code snippet (${current.language})`}
      style={{
        height: heightPx,
        background: "linear-gradient(135deg, #f0f4ff 0%, #fdf6f0 100%)",
      }}
    >
      {/* Colorful gradient bar */}
      <div className="absolute left-0 top-0 w-full h-2 rounded-t-xl"
        style={{
          background: "linear-gradient(90deg, #7c3aed 0%, #059669 50%, #f59e42 100%)"
        }}
      />
      <style>{colorfulStyles}</style>
      <div className="flex items-center justify-between mb-3 relative z-10">
        <div className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-full" style={{ background: "radial-gradient(circle at 30% 30%, #ff5f56 70%, #ffb3b3 100%)" }} />
          <span className="size-2.5 rounded-full" style={{ background: "radial-gradient(circle at 30% 30%, #ffbd2e 70%, #fff2b3 100%)" }} />
          <span className="size-2.5 rounded-full" style={{ background: "radial-gradient(circle at 30% 30%, #27c93f 70%, #b3ffd1 100%)" }} />
        </div>
        <span className="text-[11px] font-semibold" style={{
          color: "#7c3aed",
          fontFamily: "'Sora', Helvetica"
        }}>{current.language}</span>
      </div>
      <div className="relative h-[calc(100%-40px)] overflow-hidden z-10">
        <pre className="m-0 text-[13px] leading-6 [font-family:'Source Code Pro',ui-monospace,Menlo,Monaco,Consolas,'Liberation Mono','Courier New',monospace] text-neutral-800 whitespace-pre-wrap bg-white/70 rounded-lg p-3 shadow-inner"
          style={{
            background: "linear-gradient(120deg, #f0f4ff 60%, #fdf6f0 100%)",
            border: "1px solid #e0e7ef"
          }}
        >
          <code
            dangerouslySetInnerHTML={{
              __html: `${highlight(visible, current.language)}<span class='inline-block w-2 bg-[#7c3aed] animate-pulse translate-y-[-2px] rounded-sm'></span>`,
            }}
          />
        </pre>
      </div>
    </div>
  );
};
