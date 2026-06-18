import { cn } from "@/lib/utils";
import { FadeUp } from "./fade-up";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <FadeUp className={cn("mb-12 md:mb-16", className)}>
      <div
        className={cn(
          "max-w-3xl",
          align === "center" && "mx-auto text-center",
          align === "left" && "text-left"
        )}
      >
        {eyebrow && (
          <p className="mb-3 text-sm font-medium tracking-[0.2em] text-gold uppercase">
            {eyebrow}
          </p>
        )}
        <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-[2.75rem] lg:leading-tight">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">{description}</p>
        )}
        <div className={cn("mt-6 h-0.5 w-16 bg-gold", align === "center" && "mx-auto")} />
      </div>
    </FadeUp>
  );
}
