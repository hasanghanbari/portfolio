import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section id="section1" className="relative top-[120px]">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex">
            <div className="">
              <div className="text-black-500 font-semibold text-[24px]">
                Hi i am
              </div>
              <div className="text-orange-500 font-semibold text-[32px]">
                Hasan Ghanbari
              </div>
              <div className="relative h-[200px]">
                <div className="text-black-500 font-bold text-[100px] absolute top-[-30px]">
                  FrontEnd
                </div>
                <div className="text-black-500 font-bold text-[100px] absolute top-[60px] left-[230px]">
                  Developer
                </div>
              </div>
              <div className="text-black-500 text-[21px] pb-4">
                Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
                nibh lectus netus in. Aliquet donec morbi convallis pretium.
                Turpis tempus pharetra
              </div>
              <div className="">
                <Button>Hire Me</Button>
              </div>
            </div>
            <div>
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
      <section id="section2" className="relative top-[120px]">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"></div>
      </section>
    </>
  );
}
