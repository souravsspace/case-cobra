"use client";

import Wrapper from "@/components/Wrapper";
import ReviewGrid from "@/components/home/reviews/ReviewGrid";
import Image from "next/image";

export default function Reviews() {
  return (
    <Wrapper className="relative max-w-5xl">
      {/* <img
        alt="What people are buying"
        aria-hidden="true"
        src="/what-people-are-buying.png"
        className="absolute -left-32 top-1/3 hidden select-none xl:block"
      /> */}
      <Image
        alt="What people are buying"
        width={150}
        height={0}
        aria-hidden="true"
        src="/what-people-are-buying.png"
        className="absolute -left-32 top-1/3 hidden select-none xl:block"
      />

      <ReviewGrid />
    </Wrapper>
  );
}
