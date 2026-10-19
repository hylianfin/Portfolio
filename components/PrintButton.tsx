"use client";

import { cn } from "@/lib/utils";

export default function PrintButton({ className }: { className?: string }) {
  return (
    <button
      onClick={() => window.print()}
      className={cn(
        "label border border-line rounded-full px-5 py-2.5 transition-colors hover:border-accent hover:text-accent print:hidden",
        className
      )}
    >
      Print / Save as PDF
    </button>
  );
}
