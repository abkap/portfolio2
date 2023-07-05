import { FixedSizedCard } from "../components/cards";
import "../index.css";

const userProjects = [
  {
    id: 1,
    title: "TresDet",
    link: "https://github.com/abkap/tresdet",
  },
  {
    id: 2,
    title: "Blog",
    link: "https://github.com/abkap/blog",
  },
  {
    id: 3,
    title: "Bookkikko",
    link: "https://github.com/sarinmsari/meno-bussiness-frontend",
  },
  {
    id: 4,
    title: "Telegram Bot",
    link: "https://github.com/abkap/telegram_bot",
  },
  {
    id: 5,
    title: "Chat System",
    link: "https://github.com/abkap/chat-system",
  },
  {
    id: 6,
    title: "Cowin Center Details CLI",
    link: "https://github.com/abkap/cowin-center-detailsbot",
  },
  {
    id: 7,
    title: "Twitter UI ",
    link: "https://github.com/abkap/Twitter-Clone",
  },
  {
    id: 8,
    title: "Whatsapp Web UI ",
    link: "https://github.com/abkap/whatsapp-web-clone",
  },
];

export default function ProjectsPage() {
  return (
    <div className="w-11/12   h-full ">
      <h1 className=" m-auto  w-fit my-10 text-5xl rose-violet-lg leading-snug">
        My Works
      </h1>
      <div className="text-white   h-full flex justify-evenly flex-wrap  gap-9  ">
        {userProjects.map((item) => (
          <FixedSizedCard key={item.id} title={item.title} to={item.link} />
        ))}
      </div>
    </div>
  );
}
