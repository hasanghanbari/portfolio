import Button from "@/components/Button";
import Progress from "@/components/Progress";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section id="section1" className="pt-[120px]">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-7">
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
                I am a Full-Stack Developer,
                currently focusing on Frontend development. With six years of
                experience as a programmer, I have gained the skills and
                knowledge necessary to ensure the success of projects. I am
                highly passionate and committed to my work.
              </div>
              <div className="">
                <Button>Hire Me</Button>
              </div>
            </div>
            <div className="col-span-5">
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
      <section id="section2" className="pt-[120px]">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-[20px]">
            <div className="col-span-5">
              <Image
                src={"/assets/images/image2.png"}
                alt={""}
                width={681}
                height={675}
              />
            </div>
            <div className="col-span-7">
              <div className="text-black-500 font-semibold text-[65px] pb-[15px]">
                About Me
              </div>
              <div className="text-black-500 text-[21px] pb-[15px]">
                Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
                nibh lectus netus in. Aliquet donec morbi convallis pretium.
                Turpis tempus pharetra
              </div>
              <div>
                <Progress title={"Javascript"} persent={"80%"} />
                <Progress title={"React"} persent={"70%"} />
                <Progress title={"Vue"} persent={"65%"} />
                <Progress title={"Css And Scss"} persent={"80%"} />
                <Progress title={"Angular"} persent={"50%"} />
                <Progress title={"PHP"} persent={"70%"} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
