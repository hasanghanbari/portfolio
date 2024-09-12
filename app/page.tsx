import Button from "@/components/Button";
import Image from "next/image";

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
              <div className="text-black-500 font-bold text-[100px]">
                FrontEnd
              </div>
              <div className="text-black-500 font-bold text-[100px]">
                Developer
              </div>
              <div className="text-black-500 text-[21px]">
                Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
                nibh lectus netus in. Aliquet donec morbi convallis pretium.
                Turpis tempus pharetra
              </div>
              <div className="">
                <Button>Hire Me</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
