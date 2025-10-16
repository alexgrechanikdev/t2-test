import type { ReactNode } from "react";

export interface IWithChildren {
  children: ReactNode;
}

export interface IProduct {
  id: number;
  slogan: string;
  title: string;
  taste: string;
  portions: number;
  present: number;
  weight: number;
  img: string;
  status: string;
  description: string;
  hoveredText: string;
}

export interface ICardProps extends IProduct {
  onClick?: () => void;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}
