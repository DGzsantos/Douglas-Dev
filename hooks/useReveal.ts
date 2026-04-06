"use client";
import { useEffect, useRef } from "react";

/**
 * Attaches an IntersectionObserver to the returned ref.
 * When the element enters the viewport, all children with
 * class "reveal" receive class "is-visible" → CSS transition plays.
 */
export function useReveal() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        container
          .querySelectorAll<HTMLElement>(".reveal")
          .forEach((el) => el.classList.add("is-visible"));
        observer.disconnect();
      },
      { threshold: 0.05, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return ref as React.RefObject<HTMLElement>;
}
