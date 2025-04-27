import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "min-h-dvh max-w-screen-md mx-auto border-x border-neutral-200",
        className
      )}
    >
      {children}
    </div>
  );
}
