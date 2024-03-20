import React from "react";
import Image from "next/image";

const Contactus = () => {
  return (
    <div>
      <main className="">
        <div className="flex justify-between items-center">
          <div className="email mt-5">
            <h1 className="text-[2.5vw] block mt-3 font-serif">
              My Personal Email
            </h1>
            <h1 className="text-[2vw] block mt-4 font-sans">
              aditya1596k@gmail.com
            </h1>
          </div>
          <div className="phone">
            <h1 className="text-[2.5vw] block mt-3 font-serif">
              Phone Number or Whats App
            </h1>
            <h1 className="text-[2.5vw] block mt-3 font-serif">9760157737</h1>
          </div>
        </div>
        <div className="social flex flex-col">
          <div className="linkedin">
            <h1 className="mt-7 text-[2vw]">Linkedin</h1>
            <h1 className="mt-5 text-[1.8vw]">
              https://www.linkedin.com/in/aditya-kushwaha-0687022aa/
            </h1>
          </div>
          <div className="github end">
            <h1 className="mt-7 text-[2vw]">GitHub</h1>
            <h1 className="mt-5 text-[1.8vw]">
              https://github.com/raxeraditya5638
            </h1>
          </div>
          <div className="Twitter">
            <h1 className="mt-7 text-[2vw]">Twitter</h1>
            <h1 className="mt-5 text-[1.8vw]">https://twitter.com/K37Aditya</h1>
          </div>
        </div>
        <div className="page-2">
          <div className="image flex-col flex justify-center items-center my-10">
            <div className="hover:backdrop-brightness-105">
              <Image
                src={"/Images/img.jpg"}
                width={400}
                height={400}
                alt="image"
                className="rounded-lg "
              ></Image>
            </div>
            <div className="para">
              <div className="text flex-col flex justify-center items-center mt-10">
                <h1 className="capitalize text-[2.5vw] mb-5 sm:mb-10">
                  My Python work
                </h1>
                <div className="flex sm:justify-evenly items-center gap-3 flex-col sm:flex-row sm:gap-10">
                  <div className="image">
                    <div className="image rounded-lg h-full w-full grid grid-cols-12 sm:flex">
                      <Image
                        src={"/Images/python.jpg"}
                        width={500}
                        height={500}
                        alt="image"
                        className="rounded-lg sm:w-full col-span-6 col-start-4"
                      ></Image>
                    </div>
                  </div>
                  <div className="para w-[70vw]">
                    <p className=" text-[1.5vw] p-1 capitalize">
                      As an aspiring Python developer with a year of personal
                      experience, I bring a strong foundation in Python
                      programming and a passion for coding. Eager to transition
                      from personal projects to a professional setting,
                      <span>
                        I am committed to learning and contributing effectively
                        to projects. With a solid understanding of Python
                        fundamentals, I am excited to embark on this journey and
                        make meaningful contributions to your teams success.
                      </span>
                    </p>
                  </div>
                </div>
                <div className="second-box mt-5 sm:mt-20 mb-10">
                  <h1 className="capitalize text-[2vw] text-center">
                    I Learn About Frameworks Like Next js
                  </h1>
                </div>
                <div className="flex sm:justify-evenly items-center gap-3 flex-col sm:flex-row-reverse sm:gap-10">
                  <div className="image">
                    <div className="image rounded-lg h-full w-full grid grid-cols-12 sm:flex">
                      <Image
                        src={"/Images/nextjs.webp"}
                        width={500}
                        height={500}
                        alt="image"
                        className="rounded-lg sm:w-full col-span-6 col-start-4"
                      ></Image>
                    </div>
                  </div>
                  <div className="para w-[70vw]">
                    <p className=" text-[1.5vw] pt-1 capitalize">
                      As a budding Next.js developer, I love honed my skills
                      through personal projects, including creating a chat app
                      and an eCommerce platform using Next.js. These projects
                      have equipped me with hands-on experience in building
                      robust web applications.
                      <span>
                        Eager to leverage my expertise and creativity in a
                        professional setting, I am committed to contributing
                        innovative solutions and growing alongside your team. I
                        am excited about the opportunity to collaborate and make
                        meaningful contributions to your projects.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contactus;
