import { JSX } from "react";
import { cn } from "@/lib";

type Types = "h1" | "h2" | "h3" | "p" | "span";

type TypographyProps = React.HTMLAttributes<HTMLElement> & {
  variant: Types;
  tag?: Types;
  muted?: boolean;
};

export const Typography = ({
  variant,
  tag,
  className,
  muted,
  ...props
}: TypographyProps) => {
  const Tag: keyof JSX.IntrinsicElements = tag ? tag : variant;

  switch (variant) {
    case "h1":
      return (
        <Tag
          className={cn(
            `text-4xl font-bold ${muted ? "text-muted-foreground" : ""}`,
            className
          )}
          {...props}
        />
      );
    case "h2":
      return (
        <Tag
          className={cn(
            `text-xl font-bold ${muted ? "text-muted-foreground" : ""}`,
            className
          )}
          {...props}
        />
      );
    case "h3":
      return (
        <Tag
          className={cn(
            `text-l font-bold ${muted ? "text-muted-foreground" : ""}`,
            className
          )}
          {...props}
        />
      );
    case "p":
      return (
        <Tag
          className={cn(
            `text-base font-normal ${muted ? "text-muted-foreground" : ""}`,
            className
          )}
          {...props}
        />
      );
    case "span":
      return (
        <Tag
          className={cn(
            `text-base font-normal ${muted ? "text-muted-foreground" : ""}`,
            className
          )}
          {...props}
        />
      );
  }
};
