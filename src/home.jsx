import img from "./assets/self.jpg";
import { FaMapLocationDot } from "react-icons/fa6";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { BiLogoGmail, BiCoffeeTogo } from "react-icons/bi";

import { Card } from "./cards";

export default function HomePage() {
  return (
    <div className=" top-container bg-black rounded-lg w-full h-full  m-auto grid grid-rows-[repeat(9,1fr)] grid-cols-[repeat(15,1fr)] gap-2 lg:p-6 lg:gap-3">
      <Card className={" col-start-1 col-end-6 row-start-1 row-end-6 "}>
        <p className=" lightyellow-yellow-lg  xl:text-5xl m-6 text-center">
          {" "}
          I do full stack web developerment && Mobile app developerment with
          flutter && code automation
        </p>
      </Card>
      <Card
        className={"col-start-6 col-end-9 row-start-1 row-end-2 "}
        isClickable={true}
      >
        <p className="xl:text-4xl">Contact Me</p>
      </Card>
      <Card
        className={
          "col-start-9 col-end-12 row-start-1 row-end-2  bg-gradient-to-r from-blue-400 to-blue-500 p-1"
        }
      >
        <Card canScale={false}>
          <p className="xl:text-4xl">B-Tech</p>
        </Card>
      </Card>
      <Card
        className={
          "name-card col-start-12 col-end-[16] row-start-1 row-end-3  bg-gradient-to-r from-blue-200 to-blue-500 p-1"
        }
      >
        <Card canScale={false}>
          <div>
            <p className=" lightblue-blue-lg text-3xl xl:text-5xl mb-2">
              Abhishek A P
            </p>
            <p className="text-center text-lg">Developer</p>
          </div>
        </Card>
      </Card>
      <Card
        className={
          "col-start-6 col-end-[9] row-start-[2] row-end-[7] overflow-hidden p-1 bg-gradient-to-tr from-orange-400 via-violet-500 to-blue-500 "
        }
        src={img}
      >
        Photo
      </Card>
      <Card
        className={
          "col-start-[12] col-end-[14] row-start-[3] row-end-[6] text-center"
        }
      >
        <div>
          <p className="xl:text-5xl mb-2">3+</p>
          <p className="text-lg">Years of coding</p>
        </div>
      </Card>
      <Card
        className={
          "col-start-[14] col-end-[16] row-start-[3] row-end-[6] text-center"
        }
      >
        <div>
          <p className="xl:text-5xl mb-2 lightblue-blue-lg">11+</p>
          <p className="text-lg break-words ">Technologies</p>
        </div>
      </Card>
      <Card
        className={
          "col-start-[11] col-end-[12] row-start-[2] row-end-[3] text-center"
        }
        isClickable={true}
      >
        <BsTwitter />
      </Card>
      <Card
        className={
          "col-start-[11] col-end-[12] row-start-[3] row-end-[4] text-center"
        }
        isClickable={true}
      >
        <BiLogoGmail />
      </Card>
      <Card
        className={
          "col-start-[11] col-end-[12] row-start-[4] row-end-[5] text-center"
        }
        isClickable={true}
      >
        <BsInstagram />
      </Card>
      <Card
        className={
          "col-start-[11] col-end-[12] row-start-[5] row-end-[6] text-center"
        }
        isClickable={true}
      >
        <BiCoffeeTogo />
      </Card>
      <Card
        className={
          "col-start-[9] col-end-[11] row-start-[2] row-end-[5] text-center"
        }
      >
        <div className="flex flex-col justify-center items-center gap-2">
          <p className="xl:text-4xl">Kannur</p>
          <FaMapLocationDot
            className="xl:text-4xl text-green-400 
          "
          />
        </div>
      </Card>
      <Card
        className={
          "col-start-[9] col-end-[11] row-start-[5] row-end-[7] text-center"
        }
      >
        <p
          className="xl:text-4xl
        "
        >
          😎
        </p>
      </Card>
      <Card
        className={"col-start-1 col-end-[6] row-start-[6] row-end-[10]"}
        isClickable={true}
      >
        <div>
          <p className=" lightyellow-yellow-lg xl:text-5xl mb-3">Bookkikko</p>
          <p className="text-center "> (Project) </p>
        </div>
      </Card>
      <Card
        className={"col-start-6 col-end-[11] row-start-[7] row-end-[10]"}
        isClickable={true}
      >
        <div>
          <p className=" rose-violet-lg xl:text-5xl mb-3">TresDet</p>
          <p className="text-center "> (Project) </p>
        </div>
      </Card>
      <Card
        className={
          "col-start-11 col-end-[16] row-start-[6] row-end-[10] bg-gradient-to-r from-rose-300 to-violet-500 p-1"
        }
      >
        <Card canScale={false} isClickable={true} to="/works">
          <div>
            <p className=" rose-violet-lg xl:text-5xl mb-3">See More</p>
            <p className="text-center "> (Projects) </p>
          </div>
        </Card>
      </Card>
    </div>
  );
}
