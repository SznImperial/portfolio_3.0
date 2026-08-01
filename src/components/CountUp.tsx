import { useState, useEffect, useRef } from 'react';

interface CountUpProps {
  value: string | number; // accepts string like '1.5M+', '40+', or raw numbers
  duration?: number;      // animation duration in milliseconds, default 2400ms
}

export default function CountUp({ value, duration = 2400 }: CountUpProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  // Parse strings like "1.5M+" into numeric target 1500000 and suffix "+"
  const parseValue = (val: string | number) => {
    if (typeof val === 'number') {
      return { target: val, suffix: '' };
    }
    const str = val.trim();
    const hasPlus = str.includes('+');
    const cleanStr = str.replace(/[^0-9.a-zA-Z]/g, '');
    
    let target = 0;
    if (cleanStr.toUpperCase().endsWith('M')) {
      target = parseFloat(cleanStr) * 1000000;
    } else if (cleanStr.toUpperCase().endsWith('K')) {
      target = parseFloat(cleanStr) * 1000;
    } else {
      target = parseFloat(cleanStr) || 0;
    }

    return {
      target,
      suffix: hasPlus ? '+' : ''
    };
  };

  const { target, suffix } = parseValue(value);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animate();
        }
      },
      { threshold: 0.2 } // trigger when 20% visible
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, target, duration]);

  const animate = () => {
    let startTimestamp: number | null = null;

    // Smooth quartic ease-out curve for fast launch and realistic deceleration
    const easeOutQuart = (x: number): number => {
      return 1 - Math.pow(1 - x, 4);
    };

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easedProgress = easeOutQuart(progress);
      const currentVal = Math.floor(easedProgress * target);

      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(step);
  };

  const formatNumber = (val: number): string => {
    if (val >= 1000000) {
      const millions = (val / 1000000).toFixed(1);
      return `${millions.endsWith('.0') ? millions.slice(0, -2) : millions}M`;
    }
    if (val >= 1000) {
      const thousands = Math.floor(val / 1000);
      return `${thousands}K`;
    }
    return val.toLocaleString();
  };

  return (
    <span ref={elementRef} className="inline-block tabular-nums transition-opacity duration-300">
      {formatNumber(count)}{suffix}
    </span>
  );
}
