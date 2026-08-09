import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Edit, Trash2, ArrowLeft, Info } from 'lucide-react';
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
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    onEdit?.();
                  }}
                  style={{ 
                    display: "inline-flex", 
                    alignItems: "center", 
                    color: "#333",
                    transition: "color 0.2s ease, transform 0.2s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#2E7D32";
                    e.currentTarget.style.transform = "scale(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#333";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  <Edit size={20} />
                </span>

                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    onDelete?.();
                  }}
                  style={{ 
                    display: "inline-flex", 
                    alignItems: "center", 
                    color: "#333",
                    transition: "color 0.2s ease, transform 0.2s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#D32F2F";
                    e.currentTarget.style.transform = "scale(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#333";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  <Trash2 size={20} />
                </span>
              </div>

              <span
                onClick={(e) => {
                  e.stopPropagation();
                  flip(false);
                }}
                style={{ 
                  display: "inline-flex", 
                  alignItems: "center", 
                  color: "#333", 
                  cursor: "pointer",
                  transition: "color 0.2s ease, transform 0.2s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#2E7D32";
                  e.currentTarget.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#333";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <ArrowLeft size={24} />
              </span>
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
              onClick={(e) => {
                e.stopPropagation();
                flip(true);
              }}
            >
              <Info size={26} />
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