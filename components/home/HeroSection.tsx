import React from "react";
import Button from "../Button";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section id="home" className="pt-[120px]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-4 grid-cols-1">
          <div className="lg:col-span-7 col-span-12">
            <div className="text-black-500 font-semibold text-[24px]">
              Hi i am
            </div>
            <div className="text-orange-500 font-semibold text-[32px]">
              Hasan Ghanbari
            </div>
            <div className="relative h-[200px]">
              <div className="text-black-500 font-bold md:text-[100px] text-[65px] absolute md:-top-[30px]">
                FrontEnd
              </div>
              <div className="text-black-500 font-bold md:text-[100px] text-[65px] absolute md:top-[60px] top-[80px] md:left-[230px]">
                Developer
              </div>
            </div>
            <div className="text-black-500 text-[21px] pb-4 text-justify">
              My projects are implemented with PHP, Javascript, React, Vue.js
              and Angular technologies
            </div>
            <div className="">
              <Button>Hire Me</Button>
            </div>
          </div>
          <div className="lg:col-span-5 col-span-12">
            <div className="mb-[32px]">
              <Image
                src={"/assets/images/image1.png"}
                alt={""}
                width={538}
                height={617}
              />
            </div>
            <div className="flex gap-[25px] justify-center">
              <Link href={"https://facebook.com"}>
                <Image
                  src={"/assets/images/facebook.png"}
                  alt={""}
                  width={32}
                  height={32}
                />
              </Link>
              <Link href={"https://x.com"}>
                <Image
                  src={"/assets/images/twitter.png"}
                  alt={""}
                  width={32}
                  height={32}
                />
              </Link>
              <Link href={"https://instagram.com"}>
                <Image
                  src={"/assets/images/instagram.png"}
                  alt={""}
                  width={32}
                  height={32}
                />
              </Link>
              <Link href={"https://linkedin.com"}>
                <Image
                  src={"/assets/images/linkedin.png"}
                  alt={""}
                  width={32}
                  height={32}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
