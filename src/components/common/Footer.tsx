import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";
import { ImBehance2 } from "react-icons/im";
import logo from "../assets/logo.png";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-neutral-300">
      <div className="pt-[4rem] md:hidden">
        <div className=" w-full flex flex-col 2xl:flex-row xl:flex-row md:flex-row 2xl:justify-between xl:justify-between md:px-[2rem] 2xl:px-[15rem] xl:pl-[12rem] md:pl-[5rem]">
          {/* <div className="flex md:flex-col space-x-10 md:space-x-0 space-y-6 md:ml-0 ml-[2rem]"> */}
          {/* <div>
              <h1 className="text-xl font-medium text-white md:text-md whitesh1ace-nowrap">
                Get to know us
              </h1>
              <div className="2xl:text-5xl xl:text-3xl lg:text-3xl text-lg font-extrabold text-[#1D1D1F] space-y-3 md:space-y-5 xl:space-y-6 2xl:space-y-8 flex flex-col">
                <a className="whitespace-nowrap" href="/about">
                  About us
                </a>
                <a href="/portfolio">Portfolio</a>
                <a href="/services">Services</a>
              </div>
            </div> */}
          <div className="bounce mx-[2rem]">
            <img className="object-contain w-32" src={logo} />
          </div>
          {/* </div> */}
          <div className="hidden md:flex md:w-[40%] md:justify-center bounce">
            <img
              className="2xl:w-[20rem] xl:w-[15rem] md:w-[15rem] w-32 mt-[4rem] md:mt-0 object-contain"
              src={logo}
            />
          </div>

          <div className="flex flex-col space-y-4 md:space-y-5 mx-[2rem] 2xl:mx-0  pt-8 md:pt-0">
            <h1 className="text-xl font-medium  lg:text-lg 2xl:mt-6">
              Contact
            </h1>
            <h1 className="text-lg md:font-customLight tracking-wider font-medium 2xl:text-5xl lg:text-3xl">
              info@palnesto.biz
            </h1>
            <h1 className="font-medium tracking-wider md:font-customLight 2xl:text-5xl lg:text-3xl">
              +<span>91-8886911466</span>
            </h1>
            <h3 className="font-medium text-md">
              929, 2nd floor, Sudheekshas, Sainikpuri, <br /> Secunderabad,
              Telangana.
            </h3>
          </div>
        </div>
        <div className="hidden md:block 2xl:mx-[15rem] xl:mx-[8rem] md:mx-[4rem] h-[1px] bg-white mt-[4rem]" />
        <div className="flex justify-between mt-[3rem] 2xl:mx-[15rem] xl:mx-[8rem] md:mx-[4rem] lg:text-sm xl:text-base 2xl:text-lg font-medium md:pb-[3rem]">
          <div className="flex-row items-center hidden space-x-4 2xl:space-x-8 md:flex">
            <p className="whitespace-nowrap ">
              ©Palnesto {currentYear} All Rights Reserved{" "}
            </p>
            <a
              href="/privacy-policy"
              target="_blank"
              className="cursor-pointer whitespace-nowrap"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-conditions"
              target="_blank"
              className="cursor-pointer whitespace-nowrap"
            >
              Terms and Conditions
            </a>
          </div>
          <div className="md:flex 2xl:justify-end items-center space-x-4 md:space-x-2 text-white mx-[2rem] md:mx-0 hidden">
            <p className="whitespace-nowrap">Follow us:</p>
            <a
              href="https://www.instagram.com/palnesto/?igsh=djFnOXRqZTByNWR0"
              target="_blank"
              className="cursor-pointer"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.facebook.com/palnesto"
              target="_blank"
              className="cursor-pointer"
            >
              <MdFacebook size={24} />
            </a>
            <a
              href="https://www.behance.net/palnesto"
              target="_blank"
              className="cursor-pointer"
            >
              <ImBehance2 size={20} />
            </a>
            <a
              href="https://www.linkedin.com/company/palnsto/?originalSubdomain=in"
              target="_blank"
              className="cursor-pointer"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
        <div className="text-center lg:hidden">
          <div className="mx-[2rem] h-[0.1rem] bg-white mt-[1rem] lg:mt-[2rem]" />
          <h1 className="text-lg font-medium mt-6 ">Follow us:</h1>
          <div className="flex flex-row justify-center mt-2 space-x-4 text-white">
            <a
              href="https://www.instagram.com/palnesto/?igsh=djFnOXRqZTByNWR0"
              target="_blank"
            >
              <FaInstagram size={24} />
            </a>
            <a href="https://www.facebook.com/palnesto" target="_blank">
              <MdFacebook size={24} />
            </a>
            <a href="https://www.behance.net/palnesto" target="_blank">
              <ImBehance2 size={20} />
            </a>
            <a
              href="https://www.linkedin.com/company/palnsto/?originalSubdomain=in"
              target="_blank"
            >
              <FaLinkedin size={20} />
            </a>
          </div>{" "}
          <a
            href="/privacy-policy"
            target="_blank"
            className="cursor-pointer whitespace-nowrap text-lg font-medium mt-[4rem]"
          >
            Privacy Policy
          </a>
          <div className="mt-2 flex flex-row justify-center space-x-8 text-lg font-medium">
            <a
              href="/terms-conditions"
              target="_blank"
              className="cursor-pointer whitespace-nowrap"
            >
              Terms and Conditions
            </a>
             
          </div>
          <h1 className="text-lg font-medium mt-2 pb-8">
            ©Palnesto {currentYear} All Rights Reserved{" "}
          </h1>
        </div>
      </div>

      <div className="relative  2xl:pt-[8rem] 3xl:pt-[14rem] xl:pt-[6rem] pt-10 hidden md:block">
        <div
          className="absolute inset-0 bg-center bg-cover z-0"
          style={{ backgroundImage: 'url("/footer.png")' }}
        />
        <div className="relative z-10">
          <div className="w-full flex flex-col 2xl:flex-row xl:flex-row md:flex-row 2xl:justify-between 2xl:gap-14 3xl:gap-0 xl:justify-between md:px-[2rem] 2xl:px-[15rem] xl:pl-[12rem] md:pl-[5rem]">
            {/* <div className="flex md:flex-col space-x-10 md:space-x-0 space-y-6 md:ml-0 ml-[2rem]"> */}
            {/* <div>
                <h1 className="mt-6 text-xl font-medium text-white md:text-md whitespace-nowrap">
                  Get to know us
                </h1>
                <div className="2xl:text-5xl xl:text-3xl md:text-3xl text-md font-extrabold text-[#1D1D1F] space-y-3 md:space-y-5 xl:space-y-6 2xl:space-y-8 flex flex-col mt-8">
                  <a className="whitespace-nowrap" href="/about">
                    About us
                  </a>
                  <a href="/portfolio">Portfolio</a>
                  <a href="/services">Services</a>
                </div>
              </div> */}
            <div className="flex md:hidden bounce">
              <img className="object-contain w-32" src={logo} />
            </div>
            {/* </div> */}
            <div className="hidden md:flex md:w-[40%] md:justify-center bounce">
              <img
                className="2xl:w-[20rem] xl:w-[15rem] md:w-[15rem] w-32 mt-[4rem] md:mt-0 object-contain"
                src={logo}
              />
            </div>
            <div className="flex flex-col space-y-4 md:space-y-5 mx-[2rem] 2xl:mx-0 pt-8 md:pt-0">
              <h1 className="text-xl font-medium lg:text-lg 2xl:mt-6">
                Contact
              </h1>
              <h1 className="text-lg md:font-customLight tracking-wider font-medium 2xl:text-5xl lg:text-3xl">
                info@palnesto.biz
              </h1>
              <p className="font-medium tracking-wider md:font-customLight 2xl:text-5xl lg:text-3xl">
                + 91-8886911466
              </p>
              <h1 className="font-medium text-lg">
                929, 2nd floor, Sudheekshas, Sainikpuri, <br /> Secunderabad,
                Telangana.
              </h1>
            </div>
          </div>

          <div className="hidden lg:block 2xl:mx-[15rem] xl:mx-[8rem] md:mx-[4rem] h-[1px] bg-white mt-[4rem]" />
          <div className="relative flex justify-between mt-[3rem] 2xl:mx-[15rem] xl:mx-[8rem] lg:mx-[4rem] md:text-sm xl:text-base 2xl:text-md font-medium lg:pb-[3rem]">
            <div className="flex-row items-center hidden space-x-4 lg:flex 2xl:space-x-8">
              <h1 className="whitespace-nowrap">
                ©Palnesto {currentYear} All Rights Reserved
              </h1>
              <div className="2xl:space-x-6 3xl:space-x-12 xl:space-x-4 md:space-x-4">
                <a
                  href="/privacy-policy"
                  target="_blank"
                  className="cursor-pointer whitespace-nowrap"
                >
                  Privacy Policy
                </a> 
                <a
                  href="/terms-conditions"
                  target="_blank"
                  className="cursor-pointer whitespace-nowrap"
                >
                  Terms and Conditions
                </a>
              </div>
            </div>

            <div className="lg:flex 2xl:justify-end items-center md:space-x-6 2xl:space-x-8 mx-[2rem] md:mx-0 hidden">
              <h1 className="whitespace-nowrap ml-4">Follow us:</h1>
              <a
                href="https://www.instagram.com/palnesto/?igsh=djFnOXRqZTByNWR0"
                target="_blank"
                className="cursor-pointer"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.facebook.com/palnesto"
                target="_blank"
                className="cursor-pointer"
              >
                <MdFacebook size={24} />
              </a>
              <a
                href="https://www.behance.net/palnesto"
                target="_blank"
                className="cursor-pointer"
              >
                <ImBehance2 size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/palnsto/?originalSubdomain=in"
                target="_blank"
                className="cursor-pointer"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          <div className="text-center lg:hidden ">
            <div className="mx-[2rem] h-[0.1rem] bg-white mt-[1rem] lg:mt-[2rem]" />
            <p className="text-lg font-medium mt-6">Follow us:</p>
            <div className="flex flex-row justify-center mt-2 space-x-4 text-white">
              <a
                href="https://www.instagram.com/palnesto/?igsh=djFnOXRqZTByNWR0"
                target="_blank"
              >
                <FaInstagram size={24} />
              </a>
              <a href="https://www.facebook.com/palnesto" target="_blank">
                <MdFacebook size={24} />
              </a>
              <a href="https://www.behance.net/palnesto" target="_blank">
                <ImBehance2 size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/palnsto/?originalSubdomain=in"
                target="_blank"
              >
                <FaLinkedin size={20} />
              </a>
            </div>

            <a href="/privacy-policy" className="text-lg font-medium mt-[4rem]">
              Privacy Policy
            </a>
            <div className="mt-2 flex flex-row justify-center space-x-8 text-lg font-medium">
              <a
                href="/terms-conditions"
                target="_blank"
                className="cursor-pointer whitespace-nowrap"
              >
                Terms and Conditions
              </a> 
            </div>
            <p className="text-lg font-medium mt-2 pb-8">
              ©Palnesto {currentYear} All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
