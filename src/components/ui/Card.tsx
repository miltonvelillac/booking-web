import React from "react";

type CardProps = { title: string, text: string, icon?: string };

export function Card({ title, text, icon }: CardProps) {  
  const styles = "w-full rounded-xl border border-gray-200/50 bg-background/50 p-8 text-center shadow-lg dark:border-gray-700/50";


  return <section className={[styles].join(" ")}>
    {icon && (
      <div className="mx-auto inline-flex items-center justify-center h-12 w-12 rounded-lg border border-black/10 dark:border-white/20 bg-foreground/10">
        <span className="text-2xl text-foreground">{icon}</span>
      </div>
    )}
    <h2 className="mt-6 text-xl font-bold text-foreground">{title}</h2>
    <p className="mt-2 text-foreground/70">{text}</p>
  </section>;
}
