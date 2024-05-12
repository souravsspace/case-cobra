import Image from "next/image";
import Phone from "@/components/Phone";
import { Icons } from "@/components/Icons";
import Wrapper from "@/components/Wrapper";

export default function Intro() {
  return (
    <Wrapper className="pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-3 lg:gap-x-0 lg:pb-52 lg:pt-24 xl:gap-x-8 xl:pt-32">
      <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
        <div className="relative mx-auto flex flex-col items-center text-center lg:items-start lg:text-left">
          <div className="absolute -top-20 left-0 hidden w-28 lg:block">
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-50 via-slate-50/50" />
            <Image
              width={130}
              height={120}
              src="/snake-1.png"
              alt="snake"
              className="object-contain"
            />
          </div>
          <h1 className="relative mt-16 w-fit text-balance text-5xl font-bold !leading-tight tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
            Your Image on a{" "}
            <span className="rounded-md bg-green-600 px-2 text-white">
              Custom
            </span>{" "}
            Phone Case.
          </h1>
          <p className="mt-8 max-w-prose text-balance text-center text-lg md:text-wrap lg:pr-10 lg:text-left">
            Capture your favorite memories with your own,{" "}
            <span className="font-semibold">one-of-one</span> phone case.
            CaseCobra allows you to protect your memories, not just your phone
            case.
          </p>

          <ul className="mt-8 flex flex-col items-center space-y-2 text-left font-medium sm:items-start">
            <div className="space-y-2">
              <li className="flex items-center gap-1.5 text-left">
                <Icons.check className="size-5 shrink-0 text-green-600" />
                High-quality, durable material
              </li>
              <li className="flex items-center gap-1.5 text-left">
                <Icons.check className="size-5 shrink-0 text-green-600" />5 year
                print guarantee
              </li>
              <li className="flex items-center gap-1.5 text-left">
                <Icons.check className="size-5 shrink-0 text-green-600" />
                Modern iPhone models supported
              </li>
            </div>
          </ul>

          <div className="mt-12 flex flex-col items-center gap-5 sm:flex-row sm:items-start">
            <div className="flex -space-x-4">
              <Image
                width={40}
                height={40}
                className="inline-block rounded-full ring-2 ring-slate-100"
                src="/users/user-1.png"
                alt="user image"
              />
              <Image
                width={40}
                height={40}
                className="inline-block rounded-full ring-2 ring-slate-100"
                src="/users/user-2.png"
                alt="user image"
              />
              <Image
                width={40}
                height={40}
                className="inline-block rounded-full ring-2 ring-slate-100"
                src="/users/user-3.png"
                alt="user image"
              />
              <Image
                width={40}
                height={40}
                className="inline-block rounded-full ring-2 ring-slate-100"
                src="/users/user-4.jpg"
                alt="user image"
              />
              <Image
                width={40}
                height={40}
                className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-slate-100"
                src="/users/user-5.jpg"
                alt="user image"
              />
            </div>

            <div className="flex flex-col items-center justify-between sm:items-start">
              <div className="flex gap-0.5">
                <Icons.star className="size-4 fill-green-600 text-green-600" />
                <Icons.star className="size-4 fill-green-600 text-green-600" />
                <Icons.star className="size-4 fill-green-600 text-green-600" />
                <Icons.star className="size-4 fill-green-600 text-green-600" />
                <Icons.star className="size-4 fill-green-600 text-green-600" />
              </div>
              <p>
                <span className="font-semibold">1,250</span> happy customers
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-full mt-32 flex h-fit w-full justify-center px-8 sm:px-16 md:px-0 lg:col-span-1 lg:mx-0 lg:mt-20">
        <div className="relative md:max-w-xl">
          <Image
            src="/your-image.png"
            width={160}
            height={160}
            alt="your image"
            className="absolute -top-20 left-56 hidden w-40 select-none sm:block lg:hidden lg:w-52 xl:block"
          />
          <Image
            src="/line.png"
            width={80}
            height={80}
            alt="line"
            className="absolute -bottom-6 -left-6 w-20 select-none"
          />
          <Phone className="w-64" imgSrc="/testimonials/1.jpg" />
        </div>
      </div>
    </Wrapper>
  );
}
