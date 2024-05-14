import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  imgSrc: string;
  dark?: boolean;
}

export default function Phone({
  imgSrc,
  className,
  dark = false,
  ...props
}: Props) {
  return (
    <div className={cn("relative z-50 overflow-hidden", className)} {...props}>
      <div className="relative aspect-[8.5/16]">
        <Image
          src={
            dark
              ? "/phone-template-dark-edges.png"
              : "/phone-template-white-edges.png"
          }
          className="pointer-events-none z-50 select-none"
          alt="phone image"
          fill
        />
        <div className="absolute inset-0 -z-10">
          <Image
            className="object-cover"
            src={imgSrc}
            alt="overlaying phone image"
            fill
          />
        </div>
      </div>
    </div>
  );
}
