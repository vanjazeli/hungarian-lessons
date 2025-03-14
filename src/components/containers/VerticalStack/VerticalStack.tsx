type VerticalStackProps = {
  children: React.ReactNode;
};

export const VerticalStack = ({ children }: VerticalStackProps) => {
  return <div className="flex flex-col gap-6">{children}</div>;
};
