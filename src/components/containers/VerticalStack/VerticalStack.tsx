type VerticalStackProps = {
  children: React.ReactNode;
};

export const VerticalStack = ({ children }: VerticalStackProps) => {
  return <div className="flex flex-col gap-4">{children}</div>;
};
