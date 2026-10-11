"use client";

import type { Urls } from "@/app/music/types";
import { useEffect, useId, useRef, useState } from "react";

const SERVICES: [keyof Urls, string][] = [
  ["spotify", "Spotify"],
  ["appleMusic", "Apple Music"],
  ["googleMusic", "YouTube Music"],
  ["soundcloud", "SoundCloud"],
  ["bandCamp", "Bandcamp"],
];

// Streaming services don't allow embedded playback without their (heavy) players,
// so "Listen" opens a menu of links to wherever the release is available.
// On small screens the menu is presented as a bottom sheet.
export function ListenMenu({
  title,
  urls = {},
  variant = "primary",
}: {
  title: string;
  urls?: Urls;
  variant?: "primary" | "subtle";
}) {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const panelId = useId();

  const services = SERVICES.filter(([key]) => urls[key]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [isOpen]);

  if (services.length === 0) {
    return null;
  }

  return (
    <div className="relative shrink-0" ref={containerRef}>
      <button
        aria-controls={panelId}
        aria-expanded={isOpen}
        aria-label={`Listen to ${title}`}
        className={
          variant === "primary"
            ? "inline-flex min-h-11 items-center gap-2 rounded-full bg-accent px-4 font-semibold text-ink"
            : "inline-flex min-h-11 items-center gap-2 rounded-full border border-line px-4 text-sm text-fg-soft hover:border-subtle hover:text-fg"
        }
        onClick={() => setIsOpen(!isOpen)}
        ref={buttonRef}
        type="button"
      >
        Listen
        <svg
          aria-hidden="true"
          className={`h-3 w-3 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          viewBox="0 0 12 12"
        >
          <path d="M3 4.5l3 3 3-3" />
        </svg>
      </button>

      {isOpen && (
        <>
          <button
            aria-label="Close"
            className="fixed inset-0 z-40 cursor-default bg-black/70 sm:hidden"
            onClick={() => setIsOpen(false)}
            tabIndex={-1}
            type="button"
          />
          <div
            className="fixed inset-x-0 bottom-0 z-50 flex flex-col gap-2 rounded-t-3xl border-t border-line bg-panel px-4 pb-8 pt-4 sm:absolute sm:inset-x-auto sm:bottom-auto sm:right-0 sm:top-full sm:mt-2 sm:w-64 sm:gap-0 sm:rounded-2xl sm:border sm:bg-panel-raised sm:p-1.5 sm:shadow-2xl sm:shadow-black/60"
            id={panelId}
          >
            <div className="px-1 pb-2 sm:px-3 sm:pb-1.5 sm:pt-2">
              <div className="eyebrow text-accent sm:text-subtle">
                Listen on
              </div>
              <div className="text-xl font-bold tracking-tight sm:hidden">
                {title}
              </div>
            </div>
            {services.map(([key, label]) => (
              <a
                className="flex min-h-12 items-center justify-between rounded-xl bg-panel-raised px-4 font-semibold hover:bg-line sm:min-h-11 sm:rounded-lg sm:bg-transparent sm:px-3 sm:font-normal"
                href={urls[key]}
                key={key}
                onClick={() => setIsOpen(false)}
                rel="noopener noreferrer"
                target="_blank"
              >
                {label}
                <span aria-hidden="true" className="font-normal text-muted">
                  ↗
                </span>
              </a>
            ))}
            <button
              className="mt-2 min-h-12 rounded-full border border-line text-fg-soft sm:hidden"
              onClick={() => setIsOpen(false)}
              type="button"
            >
              Cancel
            </button>
          </div>
        </>
      )}
    </div>
  );
}
