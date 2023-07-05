import { Link } from "react-router-dom";

export function Card({
  children,
  className,
  src,
  canScale = true,
  isClickable = false,
  to = "#",
}) {
  const baseStyle =
    "w-full h-full bg-[#292817]  rounded-xl flex justify-center items-center text-2xl text-white transition-transform hover:bg-[#4F4C46] cursor-default ";
  var topLevelStyle =
    baseStyle +
    (className ?? " ") +
    " " +
    (canScale ? "hover:scale-105  " : "") +
    " " +
    (isClickable ? " hover:lightblue-blue-bg-lg cursor-pointer" : "");

  let content = src ? (
    <img
      src={src}
      className="w-full h-full rounded-lg
  "
    ></img>
  ) : (
    children
  );

  return (
    <div className={topLevelStyle}>
      {to != "#" ? (
        <Link
          to={to}
          className=" h-full w-full flex justify-center items-center"
        >
          {content}
        </Link>
      ) : (
        <>{content}</>
      )}
    </div>
  );
}

export function FixedSizedCard({ title, to }) {
  return (
    <Card
      className={
        " md:w-[400px] md:h-[240px] sm:w-5/6 sm:h-3/4 bg-gradient-to-r from-rose-300 to-violet-500 p-1"
      }
      to={to}
    >
      <Card canScale={false} isClickable={true}>
        <p className=" rose-violet-lg xl:text-2xl mb-3">{title}</p>
      </Card>
    </Card>
  );
}
