import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import ListItem from "../public/components/listItem";
import Card from "../public/components/card";

export default function Home() {
  const [show, setShow] = useState(false);
  function handleCLick() {
    setShow(!setShow);
  }
  return (
    <div>
      <Head>
        <title>Frontend Challenge</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav id="Navigation" className="relative">
        <div className="relative container flex flex-row px-2 justify-between mx-auto items-center">
          <div className="flex">
            <Image
              alt="Logo"
              src={"/assets/img/logo.svg"}
              height={100}
              width={150}
              className="object-contain"
            />
          </div>
          <div className="hidden justify-between space-x-6 md:block">
            <a href="#" className="hover:text-darkGrayishBlue">
              Pricing
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              Product
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              About Us
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              Careers
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              Community
            </a>
          </div>
          <div className="hidden bg-brightRed rounded-full text-white px-4 py-2 md:block">
            Get started
          </div>
          <div
            className="px-4 cursor-pointer md:hidden"
            id="burger"
            onClick={handleCLick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
        </div>

        {/* Mobile Menu */}
        <div>
          <div
            id="menu"
            className="absolute hidden flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
          >
            <a href="#">Pricing</a>
            <a href="#">Product</a>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Community</a>
          </div>
        </div>
      </nav>
      <main className={styles.main}>
        {/* Top Section */}
        <section className="container flex flex-col-reverse items-start mx-auto md:flex-row">
          <div className="flex flex-col items-center pt-16 space-y-12 md:w-1/2 md:items-start">
            <h1 className="text-3xl font-bold max-w-md text-center md:text-5xl md:text-left">
              Bring everyone together to build better products
            </h1>
            <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </p>
            <div className="flex justify-center md:justify-start">
              <a
                href="#"
                className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight transition ease-in duration-500"
              >
                Get Started
              </a>
            </div>
          </div>
          <div>
            <Image
              alt="Description"
              src={"/assets/img/illustration-intro.svg"}
              height={600}
              width={600}
              className="object-contain"
            />
          </div>
        </section>

        {/* Section 2 */}

        <section className="container flex flex-col mx-auto mt-10 space-y-14 md:flex-row md:justify-between md:space-y-0 md:mt-0">
          <div className="flex flex-col space-y-10 items-center md:w-1/2 md:items-start ">
            <h1 className="text-3xl text-center font-bold max-w-md text-veryDarkBlue md:text-4xl md:text-left">
              Whats different about Manage?
            </h1>
            <p className="max-w-sm text-darkGrayishBlue text-center md:text-left">
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </p>
          </div>

          {/* Numbered list */}
          <div className="flex flex-col space-y-12 md:w-1/2 ">
            {/* Item 1 */}
            <ListItem
              number={"01"}
              title={"Track company-wide progress"}
              body={
                "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again."
              }
            />
            <ListItem
              number={"02"}
              title={"Advanced built-in reports"}
              body={`Set internal delivery estimates and track progress toward
                company goals. Our customisable dashboard helps you build out
                the reports you need to keep key stakeholders informed.`}
            />
            <ListItem
              number={"03"}
              title={"Everything you need in one place"}
              body={`Stop jumping from one service to another to communicate, store
                files, track tasks and share documents. Manage offers an
                all-in-one team productivity solution.`}
            />
          </div>
        </section>

        <section id="testimonials">
          <div className="container max-w-6xl flex flex-col mx-auto py-10 mt-16 items-center space-y-16">
            <h1 className="text-3xl text-veryDarkBlue text-center font-bold md:text-4xl">
              What&apos;s Different About Manage?
            </h1>
            <div className="flex justify-between space-x-4">
              <Card
                alt={"Person 1"}
                body={`“Manage has supercharged our team’s workflow. The ability to
                  maintain visibility on larger milestones at all times keeps
                  everyone motivated.”`}
                img={"/assets/img/avatar-anisha.png"}
                title={"Anisha Lee"}
              />
              <Card
                alt={"Person 2"}
                body={`“Manage has supercharged our team’s workflow. The ability to
                maintain visibility on larger milestones at all times keeps
                everyone motivated.”`}
                img={"/assets/img/avatar-ali.png"}
                title={"Ali Bravo"}
                hidden={true}
              />
              <Card
                alt={"Person 3"}
                body={`“Manage has supercharged our team’s workflow. The ability to
                maintain visibility on larger milestones at all times keeps
                everyone motivated.”`}
                img={"/assets/img/avatar-shanai.png"}
                title={"Richard Watts"}
                hidden={true}
              />
            </div>
            <div className="flex justify-center md:justify-start">
              <a
                href="#"
                className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight transition ease-in duration-500"
              >
                Get Started
              </a>
            </div>
          </div>
        </section>
      </main>

      <div className="flex flex-col bg-brightRed justify-between items-center px-10 py-20 space-y-8 md:flex-row md:py-12">
        <h1 className="text-white text-5xl leading-tight font-bold text-center md:text-left md:max-w-xl">
          Simplify how your team works today
        </h1>
        <div className="flex justify-center md:justify-start">
          <a
            href="#"
            className="p-3 px-6 pt-2 text-brightRed bg-white rounded-full baseline hover:bg-gray-900 transition ease-in duration-500"
          >
            Get Started
          </a>
        </div>
      </div>
      <footer className={styles.footer}>
        <div className="flex flex-col-reverse space-y-10 mx-auto pb-10 px-10 bg-veryDarkBlue md:flex-row md:justify-between">
          <div className="flex flex-col-reverse items-center md:justify-around md:flex-col md:items-start">
            <div className="mx-auto my-6 text-center text-white md:hidden">
              Copyright &copy; 2022, All Rights Reserved
            </div>
            <div>
              <Image
                alt="logo"
                src={"/assets/img/logo-white.svg"}
                height={70}
                width={150}
                className="object-contain"
              />
            </div>
            <div className="flex space-x-3">
              <a href="#">
                <Image
                  src="/assets/img/icon-facebook.svg"
                  alt="Facebook icon"
                  width={24}
                  height={24}
                />
              </a>
              <a href="#">
                <Image
                  src="/assets/img/icon-instagram.svg"
                  alt="Facebook icon"
                  width={24}
                  height={24}
                />
              </a>
              <a href="#">
                <Image
                  src="/assets/img/icon-youtube.svg"
                  alt="Facebook icon"
                  width={24}
                  height={24}
                />
              </a>
              <a href="#">
                <Image
                  src="/assets/img/icon-twitter.svg"
                  alt="Facebook icon"
                  width={24}
                  height={24}
                />
              </a>
              <a href="#">
                <Image
                  src="/assets/img/icon-youtube.svg"
                  alt="Facebook icon"
                  width={24}
                  height={24}
                />
              </a>
            </div>
          </div>
          <div className="flex flex-row justify-center pb-10 md:justify-around space-x-20 md:pb-0">
            <div className="flex flex-col items-start space-y-3 text-white">
              <a href="#" className="hover:text-brightRed">
                Home
              </a>
              <a href="#" className="hover:text-brightRed">
                Pricing
              </a>
              <a href="#" className="hover:text-brightRed">
                Products
              </a>
              <a href="#" className="hover:text-brightRed">
                About
              </a>
            </div>
            <div className="flex flex-col items-start space-y-4 text-white">
              <a href="#" className="hover:text-brightRed">
                Careers
              </a>
              <a href="#" className="hover:text-brightRed">
                Community
              </a>
              <a href="#" className="hover:text-brightRed">
                Privacy Policy
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <form>
              <div className="flex space-x-3">
                <input
                  type="text"
                  className="flex-1 px-4 rounded-full focus:outline-none"
                  placeholder="Updates in your inbox"
                />
                <button className="px-6 py-2 text-white bg-brightRed hover:bg-brightRedLight focus:outline-none rounded-full">
                  Go
                </button>
              </div>
            </form>
            <div className="hidden text-white md:block">
              Copyright &copy; 2022, All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
