import Image from "next/image";
import React from "react";
import Progress from "../Progress";

const AboutSection = () => {
  return (
    <section id="about" className="pt-[120px]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-[20px]">
          <div className="lg:col-span-5 col-span-12 mx-auto">
            <Image
              src={"/assets/images/image2.png"}
              alt={""}
              width={681}
              height={675}
            />
          </div>
          <div className="lg:col-span-7 col-span-12">
            <div className="text-black-500 font-semibold sm:text-[65px] text-[50px] pb-[15px]">
              About Me
            </div>
            <div className="text-black-500 text-[21px] pb-[15px]">
              I am a Full-Stack Developer, currently focusing on Frontend
              development. With six years of experience as a programmer, I have
              gained the skills and knowledge necessary to ensure the success of
              projects. I am highly passionate and committed to my work.
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
  );
};

export default AboutSection;
