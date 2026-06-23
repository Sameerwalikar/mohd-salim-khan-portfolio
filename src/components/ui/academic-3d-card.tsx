"use client";

import React from "react";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { cn } from "@/lib/utils";

/* ─── Main Wrapper ─── */

interface Academic3DCardProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

/**
 * Academic3DCard — wraps content in a 3D perspective card
 * that tilts toward the cursor on hover while maintaining
 * the website's navy-and-gold design language.
 */
export function Academic3DCard({
  children,
  className,
  containerClassName,
}: Academic3DCardProps) {
  return (
    <CardContainer
      className={cn("w-full", className)}
      containerClassName={cn("w-full", containerClassName)}
    >
      <CardBody className="w-full">{children}</CardBody>
    </CardContainer>
  );
}

/* ─── Layered Elements ─── */

interface CardLayerProps {
  children: React.ReactNode;
  className?: string;
  depth?: "subtle" | "medium" | "high" | "dramatic";
}

const depthMap = {
  subtle: { z: 10, y: -2 },
  medium: { z: 25, y: -4 },
  high: { z: 40, y: -6 },
  dramatic: { z: 60, y: -8 },
};

/**
 * CardLayer — positions child elements at different Z depths
 * within the 3D card on hover.
 */
export function CardLayer({
  children,
  className,
  depth = "subtle",
}: CardLayerProps) {
  const { z, y } = depthMap[depth];
  return (
    <CardItem translateZ={z} translateY={y} className={cn("w-full", className)}>
      {children}
    </CardItem>
  );
}

/**
 * CardIcon — floats icons with medium depth
 */
export function CardIcon({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <CardItem translateZ={30} translateY={-3} className={className}>
      {children}
    </CardItem>
  );
}

/**
 * CardTitle — brings headings forward
 */
export function CardTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <CardItem translateZ={20} className={cn("w-full", className)}>
      {children}
    </CardItem>
  );
}

/**
 * CardBadge — lifts badges independently
 */
export function CardBadge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <CardItem translateZ={35} translateY={-2} className={className}>
      {children}
    </CardItem>
  );
}

/**
 * CardImage — moves images forward dramatically
 */
export function CardImage({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <CardItem translateZ={50} className={cn("w-full", className)}>
      {children}
    </CardItem>
  );
}

/**
 * CardContent — subtle depth for body content
 */
export function CardContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <CardItem translateZ={10} className={cn("w-full", className)}>
      {children}
    </CardItem>
  );
}
