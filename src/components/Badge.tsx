import { cn } from "../utils/cn";

export default function Badge({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={cn("px-3 py-2 font-semibold rounded-md", className)}>
      {children}
    </span>
  );
}
