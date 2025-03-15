import { cn } from "lib";

type VerticalStackProps = React.HTMLAttributes<HTMLDivElement>;

export const VerticalStack = ({
  className,
  children,
  ...props
}: VerticalStackProps) => {
  return (
    <div className={cn("flex flex-col gap-4", className)} {...props}>
      {children}
    </div>
  );
};
