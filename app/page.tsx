import Button from "@/components/Button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section id="section1" className="">
        <div className="flex">
          <div className="">
            <div className="text-black-500">Hi i am</div>
            <div className="">Hasan Ghanbari</div>
            <div className="">FrontEnd</div>
            <div className="">Developer</div>
            <div className="">
              Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
              nibh lectus netus in. Aliquet donec morbi convallis pretium.
              Turpis tempus pharetra
            </div>
            <div className="">
              <Button>Hire Me</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
