type CenterContainerProps = {
  children: React.ReactNode;
};

export const CenterContainer = ({ children }: CenterContainerProps) => {
  return <div className="container mx-auto max-w-md px-4">{children}</div>;
};
