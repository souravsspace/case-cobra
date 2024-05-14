import Image from "next/image";
import Wrapper from "@/components/Wrapper";
import { Icons } from "@/components/Icons";
import Phone from "@/components/home/Phone";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function KindaFooter() {
  return (
    <Wrapper className="py-24">
      <div className="mb-12 px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="order-1 mt-2 text-balance text-center text-5xl font-bold !leading-tight tracking-tighter text-gray-900 md:text-6xl">
            Upload your photo and get{" "}
            <span className="relative rounded-md bg-green-600 px-2 text-white">
              your own case
            </span>{" "}
            now
          </h2>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="relative flex grid-cols-2 flex-col items-center gap-40 md:grid">
          <Image
            width={150}
            height={0}
            src="/arrow.png"
            alt="Upload your photo"
            className="absolute left-1/2 top-[25rem] z-10 -translate-x-1/2 -translate-y-1/2 rotate-90 md:top-1/2 md:rotate-0"
          />
          <div className="relative h-80 w-full max-w-sm rounded-xl bg-gray-900/5 ring-inset ring-gray-900/10 md:h-full md:justify-self-end lg:rounded-2xl">
            <Image
              width={300}
              height={400}
              alt="Horse"
              src="/horse.jpg"
              className="h-full w-full rounded-md bg-white object-cover shadow-2xl ring-1 ring-gray-900/10"
            />
          </div>
          <Phone className="w-60" imgSrc="/horse_phone.jpg" />
        </div>
      </div>

      <ul className="mx-auto mt-12 w-fit max-w-prose space-y-2 sm:text-lg">
        <li className="w-fit">
          <Icons.check className="mr-1.5 inline h-5 w-5 text-green-600" />
          High-quality silicone material
        </li>
        <li className="w-fit">
          <Icons.check className="mr-1.5 inline size-5 text-green-600" />
          Scratch- and fingerprint resistant coating
        </li>
        <li className="w-fit">
          <Icons.check className="mr-1.5 inline size-5 text-green-600" />
          Wireless charging compatible
        </li>
        <li className="w-fit">
          <Icons.check className="mr-1.5 inline size-5 text-green-600" />5 years
          print warranty
        </li>

        <div className="flex justify-center">
          <Link
            className={buttonVariants({
              size: "lg",
              className: "mx-auto mt-8",
            })}
            href="/configure/upload"
          >
            Create your case now
            <ArrowRight className="ml-1.5 size-4" />
          </Link>
        </div>
      </ul>
    </Wrapper>
  );
}
