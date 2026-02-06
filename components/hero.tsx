"use client";

import { cn } from "@/lib/utils";
import { Bug } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <div className="relative flex min-h-screen items-center justify-center px-4">
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute -top-10 left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full",
          "bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.08),transparent_50%)]",
          "blur-[60px]"
        )}
      />
      <div className="relative z-10 flex max-w-2xl flex-col items-center gap-8 text-center">
        <div className="flex items-center gap-3 rounded-full border border-border/50 bg-card/50 px-5 py-2 backdrop-blur-sm">
          <Bug className="h-5 w-5 text-destructive" />
          <span className="font-mono text-sm tracking-wide text-muted-foreground">
            {"PSYCHOLOGICAL QUIZ"}
          </span>
        </div>

        <h1 className="text-balance font-mono text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl">
          {"Кто ты из самых"}
          <br />
          <span className="text-destructive">{"мерзких существ"}</span>
          {"?"}
        </h1>

        <p className="max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
          {"Пройди тест из 10 психологических вопросов и узнай, какое отвратительное создание природы скрывается внутри тебя."}
        </p>

        <Link
          href="/quiz"
          className={cn(
            "group relative inline-flex items-center gap-3 rounded-lg px-8 py-4",
            "bg-foreground text-background",
            "font-mono text-lg font-semibold tracking-wide",
            "transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(220,38,38,0.3)]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          )}
        >
          {"Начать тест"}
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
            {"->"}
          </span>
        </Link>

        <p className="font-mono text-xs text-muted-foreground/60">
          {"10 вопросов / ~2 минуты / без регистрации"}
        </p>
      </div>
    </div>
  );
}
