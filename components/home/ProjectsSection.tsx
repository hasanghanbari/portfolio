import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectsSection = () => {
  const projects = [
    {
      label: "Angular | php",
      title: "Karzit",
      link: "https://Karzit.com",
      description: "Business Management System",
      images: {
        src1: "/assets/images/projects/Web Designs1.jpg",
        src2: "/assets/images/projects/Web Designs2.jpg",
      },
    },
    {
      label: "React | Next",
      title: "tikplan",
      link: "https://tikplan.ir",
      description: "Flight ticket sales system",
      images: {
        src1: "/assets/images/projects/Web Designs1.jpg",
        src2: "/assets/images/projects/Web Designs2.jpg",
      },
    },
    {
      label: "Angular | php",
      title: "falp",
      link: "https://falp.ir",
      description: "Local jobs system",
      images: {
        src1: "/assets/images/projects/falp2.png",
        src2: "/assets/images/projects/falp1.png",
      },
    },
  ];
  return (
    <section id="project" className="pt-[120px]">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="text-black-500 font-semibold sm:text-[65px] text-[50px] pb-[15px] text-center">
          My Projects
        </div>
        <div className="text-black-500 text-[21px] pb-[15px] text-center">
          I successfully delivered tailored solutions for clients, ensuring
          their specific needs were met through high-quality design, efficient
          development, and exceptional communication throughout the project
          lifecycle.
        </div>
        <div className="">
          <ul className="py-4 flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 justify-center">
            <li className="me-2">
              <a
                href="#"
                className="inline-block px-4 py-3 text-white bg-blue-600 rounded-lg active border border-black-100 bg-orange-500"
                aria-current="page"
              >
                All
              </a>
            </li>
            <li className="me-2">
              <a
                href="#"
                className="inline-block px-4 py-3 rounded-lg hover:text-black-900 hover:bg-orange-50 dark:hover:bg-gray-800 dark:hover:text-black-500 border border-black-100"
              >
                PHP
              </a>
            </li>
            <li className="me-2">
              <a
                href="#"
                className="inline-block px-4 py-3 rounded-lg hover:text-black-900 hover:bg-orange-50 dark:hover:bg-gray-800 dark:hover:text-black-500 border border-black-100"
              >
                React / Next
              </a>
            </li>
            <li className="me-2">
              <a
                href="#"
                className="inline-block px-4 py-3 rounded-lg hover:text-black-900 hover:bg-orange-50 dark:hover:bg-gray-800 dark:hover:text-black-500 border border-black-100"
              >
                Vue
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-block px-4 py-3 rounded-lg hover:text-black-900 hover:bg-orange-50 dark:hover:bg-gray-800 dark:hover:text-black-500 border border-black-100"
              >
                Angular
              </a>
            </li>
          </ul>
          <div className="md:grid md:grid-cols-3 sm:grid-cols-2 justify-center gap-4">
            {projects.map((item) => (
              <div className="">
                <div className="bg-orange-50 w-[100%] h-[489px] relative overflow-hidden rounded mb-[15px]">
                  <div className="absolute -top-[20px] right-[27px]">
                    <Image
                      src={item.images.src1}
                      alt={""}
                      width={274}
                      height={500}
                    />
                  </div>
                  <div className="absolute top-[84px] right-[132px]">
                    <Image
                      src={item.images.src2}
                      alt={""}
                      width={274}
                      height={405}
                    />
                  </div>
                </div>
                <div className="text-orange-500 text-[19px] pb-[8px]">
                  {item.label}
                </div>
                <Link
                  className="text-[19px] font-bold pb-[15px]"
                  href={item.link}
                  target="_blank"
                >
                  {item.title}
                </Link>
                <div className="text-black-500 text-[21px] pb-[15px]">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
