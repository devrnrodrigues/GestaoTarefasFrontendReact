import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  CardContainer,
  CardInfoIcon,
  CardCategory,
  CardTitle,
  ProgressContainer,
  ProgressBar,
  ProgressText
} from './TaskCard.styles';

interface TaskCardProps {
  category: string;
  title: string;
  progress: number;
  description: string;
  onEdit?: () => void;
  onDelete?: () => void;
}

export const TaskCard: React.FC<TaskCardProps> = ({
  category,
  title,
  progress,
  description,
  onEdit,
  onDelete
}) => {
  const [expanded, setExpanded] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);
  const translateY = useTransform(mouseYSpring, [-0.5, 0.5], [-6, 6]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (expanded || isFlipping) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  function flip(to: boolean) {
    setIsFlipping(true);
    x.set(0);
    y.set(0);
    setTimeout(() => {
      setExpanded(to);
    }, 50);
  }

  return (
    <motion.div
      style={{
        perspective: 1000,
        width: "100%",
        height: "100%",
      }}
      animate={{ rotateY: isFlipping ? 180 : 0 }}
      transition={{ duration: 0.2 }}
      onAnimationComplete={() => setIsFlipping(false)}
    >
      <CardContainer
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
          rotateX: isFlipping ? 0 : rotateX,
          rotateY: isFlipping ? 0 : rotateY,
          y: isFlipping ? 0 : translateY,
        }}
      >
        {expanded ? (
          <>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
              <div style={{ display: "flex", gap: "16px", cursor: "pointer" }}>
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style={{ width: "20px", height: "20px", color: "#333" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    onEdit?.();
                  }}
                >
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                </svg>

                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style={{ width: "20px", height: "20px", color: "#333" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    onDelete?.();
                  }}
                >
                  <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                </svg>
              </div>

              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                style={{ width: "24px", height: "24px", color: "#333", cursor: "pointer" }}
                onClick={(e) => {
                  e.stopPropagation();
                  flip(false);
                }}
              >
                <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
              </svg>
            </div>

            <div style={{ display: "flex", flexDirection: "column", margin: "auto 0" }}>
              <CardCategory>Descrição</CardCategory>
              <CardTitle style={{ fontSize: "18px", fontWeight: "400", lineHeight: "1.4" }}>
                {description}
              </CardTitle>
            </div>

            <div />
          </>
        ) : (
          <>
            <CardInfoIcon
              viewBox="0 0 24 24"
              fill="currentColor"
              onClick={(e) => {
                e.stopPropagation();
                flip(true);
              }}
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
            </CardInfoIcon>
            <div>
              <CardCategory>{category}</CardCategory>
              <CardTitle>{title}</CardTitle>
            </div>
            <div>
              <ProgressContainer>
                <ProgressBar $progress={progress} />
              </ProgressContainer>
              <ProgressText>{progress}%</ProgressText>
            </div>
          </>
        )}
      </CardContainer>
    </motion.div>
  );
};