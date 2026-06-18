import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "outline";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors",
        variant === "default" && "bg-gold text-navy-900",
        variant === "secondary" && "border border-gold/25 bg-gold/10 text-gold",
        variant === "outline" && "border border-gold/20 text-foreground/80",
        className
      )}
      {...props}
    />
  );
}
