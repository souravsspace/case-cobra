import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Wrapper({ children, className }: Props) {
  return (
    <main
      className={cn(
        "mx-auto h-full w-full max-w-screen-xl px-2.5 md:px-20",
        className,
      )}
    >
      {children}
    </main>
  );
}
