import { ReactNode, useRef } from "react";
import { motion, MotionProps, useInView } from "framer-motion";

interface DivWithAnimationProps {
  children: ReactNode;
  id: string;
  initialAnimation: MotionProps["initial"];
  inViewAnimation: MotionProps["animate"];
  outViewAnimation: MotionProps["exit"];
  transition: MotionProps["transition"];
}

export function DivWithAnimation({
  children,
  id,
  initialAnimation,
  inViewAnimation,
  outViewAnimation,
  transition,
}: DivWithAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <motion.div
      ref={ref}
      id={id}
      initial={initialAnimation}
      animate={isInView ? inViewAnimation : outViewAnimation}
      exit={outViewAnimation}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
