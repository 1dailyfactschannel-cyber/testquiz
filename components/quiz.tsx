"use client";

import { cn } from "@/lib/utils";
import {
  calculateResult,
  type Creature,
  quizQuestions,
} from "@/lib/quiz-data";
import { useState, useCallback } from "react";
import { ArrowLeft, ArrowRight, RotateCcw, Home, ExternalLink, Image as ImageIcon } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import Link from "next/link";
import Image from "next/image";

function ProgressBar({
  current,
  total,
}: {
  current: number;
  total: number;
}) {
  const progress = ((current) / total) * 100;

  return (
    <div className="flex items-center gap-4">
      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full bg-destructive transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <span className="font-mono text-sm text-muted-foreground">
        {current}/{total}
      </span>
    </div>
  );
}

function QuestionCard({
  question,
  questionNumber,
  selectedAnswer,
  onSelect,
}: {
  question: (typeof quizQuestions)[0];
  questionNumber: number;
  selectedAnswer: number | undefined;
  onSelect: (answerIndex: number) => void;
}) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="font-mono text-sm text-destructive">
          {"Вопрос "}{questionNumber}
        </span>
        <h2 className="text-balance text-2xl font-semibold leading-tight text-foreground md:text-3xl">
          {question.question}
        </h2>
      </div>
      <div className="flex flex-col gap-3">
        {question.answers.map((answer, index) => (
          <button
            type="button"
            key={index}
            onClick={() => onSelect(index)}
            className={cn(
              "group relative rounded-lg border px-5 py-4 text-left transition-all duration-200",
              "hover:border-foreground/30 hover:bg-accent",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              selectedAnswer === index
                ? "border-destructive bg-destructive/5 text-foreground"
                : "border-border bg-card/50 text-muted-foreground backdrop-blur-sm"
            )}
          >
            <div className="flex items-start gap-3">
              <span
                className={cn(
                  "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full font-mono text-xs font-bold transition-colors",
                  selectedAnswer === index
                    ? "bg-destructive text-background"
                    : "bg-muted text-muted-foreground group-hover:bg-foreground/10"
                )}
              >
                {String.fromCharCode(65 + index)}
              </span>
              <span className="text-sm leading-relaxed md:text-base">
                {answer.text}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function ResultCard({
  creature,
  onRestart,
}: {
  creature: Creature;
  onRestart: () => void;
}) {
  return (
    <div className="flex flex-col items-center gap-8 text-center">
      <div className="flex items-center gap-2 rounded-full border border-destructive/30 bg-destructive/5 px-4 py-1.5">
        <span className="font-mono text-sm text-destructive">
          {"Результат"}
        </span>
      </div>

      <h2 className="text-balance text-3xl font-bold leading-tight text-foreground md:text-4xl">
        {"Ты -- "}
        <span className="text-destructive">{creature.name}</span>
      </h2>

      <div className="relative flex flex-col items-center gap-4">
        <a
          href={`https://www.google.com/search?q=${encodeURIComponent(creature.name)}&tbm=isch`}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "group inline-flex items-center gap-2 rounded-full border border-border/50 bg-card/50 px-6 py-3",
            "font-mono text-sm font-medium text-muted-foreground backdrop-blur-sm",
            "transition-all duration-200 hover:border-foreground/30 hover:bg-accent hover:text-foreground"
          )}
        >
          <ImageIcon className="h-4 w-4" />
          {"Посмотреть фотографии в Google"}
          <ExternalLink className="h-3.5 w-3.5 opacity-50 group-hover:opacity-100" />
        </a>
      </div>

      <div className="relative w-full max-w-lg rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem]">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="relative flex flex-col gap-4 overflow-hidden rounded-xl border-[0.75px] bg-background/80 p-6 shadow-sm backdrop-blur-md dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-8">
          <div className="rounded-lg bg-black/40 p-4 ring-1 ring-white/10">
            <p className="text-pretty text-base leading-relaxed text-foreground md:text-lg">
              {creature.description}
            </p>
          </div>
          <div className="mt-2 rounded-lg border border-border/50 bg-muted/50 px-4 py-2">
            <p className="font-mono text-sm text-muted-foreground">
              <span className="text-foreground">{"Твои черты: "}</span>
              {creature.traits}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-3 pt-2 sm:flex-row">
        <button
          onClick={onRestart}
          className={cn(
            "inline-flex items-center gap-2 rounded-lg px-6 py-3",
            "bg-foreground text-background",
            "font-mono text-sm font-semibold",
            "transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(220,38,38,0.3)]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          )}
        >
          <RotateCcw className="h-4 w-4" />
          {"Пройти ещё раз"}
        </button>
        <Link
          href="/"
          className={cn(
            "inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3",
            "bg-card/50 text-foreground backdrop-blur-sm",
            "font-mono text-sm font-semibold",
            "transition-all duration-200 hover:bg-accent",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          )}
        >
          {"На главную"}
        </Link>
      </div>
    </div>
  );
}

export function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [result, setResult] = useState<Creature | null>(null);

  const totalQuestions = quizQuestions.length;

  const handleSelect = useCallback(
    (answerIndex: number) => {
      setAnswers((prev) => ({
        ...prev,
        [quizQuestions[currentQuestion].id]: answerIndex,
      }));
    },
    [currentQuestion]
  );

  const handleNext = useCallback(() => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      const creature = calculateResult(answers);
      setResult(creature);
    }
  }, [currentQuestion, totalQuestions, answers]);

  const handlePrev = useCallback(() => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  }, [currentQuestion]);

  const currentQuestionData = quizQuestions[currentQuestion];
  const hasAnswer =
    answers[currentQuestionData.id] !== undefined;
  const isLast = currentQuestion === totalQuestions - 1;

  if (result) {
    return (
      <div className="flex min-h-screen items-center justify-center px-4 py-12">
        <div className="relative z-10 w-full max-w-xl">
          <ResultCard creature={result} />
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-12">
      <div className="relative z-10 w-full max-w-xl">
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className={cn(
                "inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground",
                "font-mono text-xs uppercase tracking-wider"
              )}
            >
              <Home className="h-3.5 w-3.5" />
              {"На главную"}
            </Link>
          </div>

          <ProgressBar
            current={currentQuestion + 1}
            total={totalQuestions}
          />

          <QuestionCard
            question={currentQuestionData}
            questionNumber={currentQuestion + 1}
            selectedAnswer={answers[currentQuestionData.id]}
            onSelect={handleSelect}
          />

          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentQuestion === 0}
              className={cn(
                "inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5",
                "bg-card/50 font-mono text-sm text-foreground backdrop-blur-sm",
                "transition-all duration-200 hover:bg-accent",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                "disabled:cursor-not-allowed disabled:opacity-30"
              )}
            >
              <ArrowLeft className="h-4 w-4" />
              {"Назад"}
            </button>
            <button
              type="button"
              onClick={handleNext}
              disabled={!hasAnswer}
              className={cn(
                "inline-flex items-center gap-2 rounded-lg px-5 py-2.5",
                "bg-foreground font-mono text-sm font-semibold text-background",
                "transition-all duration-200 hover:scale-105",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                "disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:scale-100"
              )}
            >
              {isLast ? "Узнать результат" : "Далее"}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
