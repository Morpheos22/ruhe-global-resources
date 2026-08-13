"use client";

import { useEffect } from "react";

/**
 * Client-side image protection layer.
 *
 * Note: NOTHING on the public web is truly un-downloadable — if a browser
 * can render an image, a determined user can grab it. The measures below
 * add meaningful friction against casual copying, scraping and right-click
 * saving, which is the realistic goal for a public marketing site.
 *
 * - Disables right-click context menu on <img> elements
 * - Disables native drag-to-copy on <img> elements
 * - Disables long-press save on touch devices
 * - Adds an onContextMenu guard at document level
 */
export function ImageProtection() {
  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;

    const blockImageEvent = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (target && target.tagName === "IMG") {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };

    const onContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && target.tagName === "IMG") {
        e.preventDefault();
      }
    };

    // Right-click block on images
    document.addEventListener("contextmenu", onContextMenu);

    // Drag-to-copy block on images (desktop)
    if (!isTouch) {
      document.addEventListener("dragstart", blockImageEvent as EventListener);
    }

    // Long-press selection block (touch)
    document.addEventListener(
      "touchstart",
      blockImageEvent as EventListener,
      { passive: false },
    );

    return () => {
      document.removeEventListener("contextmenu", onContextMenu);
      if (!isTouch) {
        document.removeEventListener(
          "dragstart",
          blockImageEvent as EventListener,
        );
      }
      document.removeEventListener(
        "touchstart",
        blockImageEvent as EventListener,
      );
    };
  }, []);

  return null;
}
