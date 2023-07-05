import img from "../assets/self.jpg";
import { FaMapLocationDot } from "react-icons/fa6";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

import { Card } from "../components/cards";

export default function HomePage() {
  return (
    <div
      className=" top-container bg-black rounded-lg w-full h-full  m-auto grid grid-rows-[repeat(9,1fr)] grid-cols-[repeat(15,1fr)] gap-2 lg:p-6 lg:gap-3  mmd:h-fit  mmd:grid-cols-[repeat(6,1fr)]  
    mmd:grid-rows-[repeat(23,minmax(20px,1fr))]
      mmd:p-2"
    >
      <Card
        className={
          " col-start-1 col-end-6 row-start-1 row-end-6 mmd:col-start-1 mmd:col-end-4 mmd:row-start-1 mmd:row-end-[9]"
        }
      >
        <p className=" lightyellow-yellow-lg  xl:text-5xl m-6 text-center">
          {" "}
          I write code
        </p>
      </Card>
      <Card
        className={"col-start-6 col-end-9 row-start-1 row-end-2 mmd:hidden"}
      >
        <p className="xl:text-4xl">Contact Me</p>
      </Card>
      <Card
        className={
          "col-start-9 col-end-12 row-start-1 row-end-2  bg-gradient-to-r from-blue-400 to-blue-500 p-1 mmd:col-start-4 mmd:col-end-7 mmd:row-start-1 mmd:row-end-3"
        }
      >
        <Card canScale={false}>
          <p className="xl:text-4xl">B-Tech</p>
        </Card>
      </Card>
      <Card
        className={
          "name-card col-start-12 col-end-[16] row-start-1 row-end-3  bg-gradient-to-r from-blue-200 to-blue-500 p-1 mmd:row-start-[9] mmd:row-end-[12] mmd:col-start-1 mmd:col-end-7"
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
          "col-start-6 col-end-[9] row-start-[2] row-end-[7] overflow-hidden p-1 bg-gradient-to-tr from-orange-400 via-violet-500 to-blue-500  mmd:row-start-3 mmd:row-end-[9] mmd:col-start-4 mmd:col-end-7"
        }
        src={img}
      >
        Photo
      </Card>

      <Card
        className={
          "col-start-[12] col-end-[14] row-start-[3] row-end-[6] text-center mmd:col-start-3 mmd:col-end-5 mmd:row-start-[12] mmd:row-end-[15]"
        }
      >
        <div>
          <p className="xl:text-5xl mb-2">3+</p>
          <p className="text-lg">Years of coding</p>
        </div>
      </Card>

      <Card
        className={
          "col-start-[14] col-end-[16] row-start-[3] row-end-[6] text-center mmd:row-start-[12] mmd:row-end-[15] mmd:col-start-5 mmd:col-end-7"
        }
      >
        <div>
          <p className="xl:text-5xl mb-2 lightblue-blue-lg">11+</p>
          <p className="text-lg break-words ">Technologies</p>
        </div>
      </Card>

      <Card
        className={
          "col-start-[11] col-end-[12] row-start-[2] row-end-[3] text-center mmd:col-start-1 mmd:col-end-3 mmd:row-start-[15] mmd:row-end-[17]"
        }
        isClickable={true}
        to="https://twitter.com/abkap_"
      >
        <BsTwitter />
      </Card>

      <Card
        className={
          "col-start-[11] col-end-[12] row-start-[3] row-end-[4] text-center mmd:col-start-3 mmd:col-end-5 mmd:row-start-[15] mmd:row-end-[17]"
        }
        isClickable={true}
        to="mailto:apabhishek2002@gmail.com"
      >
        <BiLogoGmail />
      </Card>

      <Card
        className={
          "col-start-[11] col-end-[12] row-start-[4] row-end-[5] text-center mmd:col-start-5 mmd:col-end-7 mmd:row-start-[15] mmd:row-end-[17]"
        }
        isClickable={true}
        to="https://www.instagram.com/abshk_ap/"
      >
        <BsInstagram />
      </Card>

      <Card
        className={
          "col-start-[11] col-end-[12] row-start-[5] row-end-[6] text-center mmd:hidden"
        }
        isClickable={true}
        to="https://github.com/abkap"
      >
        <BsGithub />
      </Card>

      <Card
        className={
          "col-start-[9] col-end-[11] row-start-[2] row-end-[5] text-center  mmd:col-start-1 mmd:col-end-3 mmd:row-start-[12] mmd:row-end-[15] "
        }
      >
        <div className="flex flex-col justify-center items-center gap-2">
          <FaMapLocationDot
            className="xl:text-4xl text-green-400 
          "
          />
          <p className="xl:text-4xl">Kannur</p>
        </div>
      </Card>

      <Card
        className={
          "col-start-[9] col-end-[11] row-start-[5] row-end-[7] text-center mmd:hidden"
        }
        isClickable={true}
        to="https://abkap.github.io/portfolio"
      >
        <p
          className="xl:text-4xl
        "
        >
          😎
        </p>
      </Card>

      <Card
        className={
          "col-start-1 col-end-[6] row-start-[6] row-end-[10] mmd:col-start-1 mmd:col-end-4 mmd:row-start-[17] mmd:row-end-[20]"
        }
        isClickable={true}
        to="https://github.com/abkap/chat-system"
      >
        <div>
          <p className=" lightyellow-yellow-lg xl:text-5xl mb-3">Chat System</p>
          <p className="text-center "> (Project) </p>
        </div>
      </Card>
      <Card
        className={
          "col-start-6 col-end-[11] row-start-[7] row-end-[10] mmd:col-start-4 mmd:col-end-7 mmd:row-start-[17] mmd:row-end-[20]"
        }
        isClickable={true}
        to="https://github.com/abkap/tresdet"
      >
        <div>
          <p className=" rose-violet-lg xl:text-5xl mb-3">TresDet</p>
          <p className="text-center "> (Project) </p>
        </div>
      </Card>

      <Card
        className={
          "col-start-11 col-end-[16] row-start-[6] row-end-[10] bg-gradient-to-r from-rose-300 to-violet-500 p-1 mmd:col-start-1 mmd:col-end-7 mmd:row-start-[20] mmd:row-end-[24]"
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
