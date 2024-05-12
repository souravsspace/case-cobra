import Image from "next/image";
import { Icons } from "@/components/Icons";
import Wrapper from "@/components/Wrapper";

export default function ValueProposition() {
  return (
    <div className="bg-slate-100 py-24">
      <Wrapper className="flex flex-col items-center gap-16 sm:gap-32">
        <div className="flex flex-col items-center gap-4 sm:gap-6 lg:flex-row">
          <h2 className="order-1 mt-2 text-balance text-center text-5xl font-bold !leading-tight tracking-tighter text-gray-900 md:text-6xl">
            What out{" "}
            <span className="relative px-2">
              customers{" "}
              <Icons.underline className="pointer-events-none absolute inset-x-0 -bottom-6 hidden text-green-500 sm:block" />
            </span>{" "}
            say!
          </h2>
          <Image
            src="/snake-2.png"
            width={120}
            height={100}
            alt="snake"
            className="lg:order-2"
          />
        </div>

        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {/* first user review */}
          <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
            <div className="mb-2 flex gap-0.5">
              <Icons.star className="size-5 fill-green-600 text-green-600" />
              <Icons.star className="size-5 fill-green-600 text-green-600" />
              <Icons.star className="size-5 fill-green-600 text-green-600" />
              <Icons.star className="size-5 fill-green-600 text-green-600" />
              <Icons.star className="size-5 fill-green-600 text-green-600" />
            </div>
            <div className="text-lg leading-8">
              <p>
                &quot;I usually keep my phone together with my keys in my pocket
                and that led to some pretty heavy scratchmarks on all of my last
                phone cases. This one, besides a barely noticeable scratch on
                the corner,{" "}
                <span className="rounded-md bg-slate-800 p-0.5 text-white">
                  looks brand new after about half a year
                </span>
                . I dig it.&quot;
              </p>
            </div>
            <div className="mt-2 flex gap-4">
              <Image
                width={48}
                height={48}
                className="rounded-full object-cover"
                src="/users/user-5.jpg"
                alt="user"
              />
              <div className="flex flex-col">
                <p className="font-semibold">Sourav</p>
                <div className="flex items-center gap-1.5 text-zinc-600">
                  <Icons.check className="size-5 stroke-[3px] text-green-600" />
                  <p className="text-sm">Verified Purchase</p>
                </div>
              </div>
            </div>
          </div>

          {/* second user review */}
          <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
            <div className="mb-2 flex gap-0.5">
              <Icons.star className="size-5 fill-green-600 text-green-600" />
              <Icons.star className="size-5 fill-green-600 text-green-600" />
              <Icons.star className="size-5 fill-green-600 text-green-600" />
              <Icons.star className="size-5 fill-green-600 text-green-600" />
              <Icons.star className="size-5 fill-green-600 text-green-600" />
            </div>
            <div className="text-lg leading-8">
              <p>
                &quot;The case feels durable and I even got a compliment on the
                design. Had the case for two and a half months now and{" "}
                <span className="bg-slate-800 p-0.5 text-white">
                  the image is super clear
                </span>
                , on the case I had before, the image started fading into
                yellow-ish color after a couple weeks. Love it.&quot;
              </p>
            </div>
            <div className="mt-2 flex gap-4">
              <Image
                width={48}
                height={48}
                className="rounded-full object-cover"
                src="/users/user-1.png"
                alt="user"
              />
              <div className="flex flex-col">
                <p className="font-semibold">Jonathan</p>
                <div className="flex items-center gap-1.5 text-zinc-600">
                  <Icons.check className="size-5 stroke-[3px] text-green-600" />
                  <p className="text-sm">Verified Purchase</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
