import { MaxWidthContainer } from "../components/max-width-container";

interface ApplicationLayoutProps {
  children: React.ReactNode;
}
export function ApplicationFooter({ children }: ApplicationLayoutProps) {
  return (
    <div className="min-h-screen">
      <MaxWidthContainer>{children}</MaxWidthContainer>
    </div>
  );
}
