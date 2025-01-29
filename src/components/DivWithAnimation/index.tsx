import { ReactNode, useEffect, useState } from "react";
import { motion, MotionProps } from "framer-motion";

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
  const [isInView, setIsInView] = useState(false);

  const handleVisibilityChange = (inView: boolean) => {
    setIsInView(inView);
  };

  useEffect(() => {
    const options = { threshold: 0.5 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => handleVisibilityChange(entry.isIntersecting));
    }, options);

    const section = document.querySelector(`#${id}`);
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, [id]);

  return (
    <motion.div
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
