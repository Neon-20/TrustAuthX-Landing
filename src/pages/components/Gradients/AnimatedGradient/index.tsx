// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

"use client";

import { useEffect } from "react";
import { Gradient } from "~/pages/components/Gradients/AnimatedGradient/miniGl";

function AnimatedGradient() {
  useEffect(() => {
    /**
     * Finally initializing the Gradient class, assigning a canvas to it and calling Gradient.connect() which
     * initializes everything, Use Gradient.pause() and Gradient.play() for controls.
     *
     * Here are some default property values you can change anytime:
     * Amplitude:    Gradient.amp = 0
     * Colors:       Gradient.sectionColors (if you change colors, use normalizeColor(#hexValue)) before you
     * assign it.
     *
     *
     * Useful functions
     * Gradient.toggleColor(index)
     * Gradient.updateFrequency(freq)
     */
    const gradient = new Gradient();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    gradient.initGradient("#gradient-canvas");
  }, []);

  return (
    <canvas
      id="gradient-canvas"
      className="absolute top-1/2  w-screen  -translate-y-1/2 overflow-hidden bg-no-repeat"
      style={{ height: "50%" }}
    />
  );
}

export default AnimatedGradient;
