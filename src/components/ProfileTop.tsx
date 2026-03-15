import profilePic from "../assets/images/profile-pic.jpeg";
import coverPic from "../assets/images/profile-coverPic.jpeg";
import nepathyaColzLogo from "../assets/images/nepathya-logo.png";
import "../assets/styles/profileTop.css";
export const ProfileTop = () => {
  return (
    <div
      className={`profile-container  flex flex-col 
bg-blue-50 dark:bg-slate-400/20 backdrop-blur-sm dark:text-blue-200 
rounded-2xl  relative text-nowrap `}>
      <div className="absolute sm:top-22 top-16 left-[5%] sm:border-4 border-3 border-white dark:border-black rounded-full">
        <img
          src={profilePic}
          className="rounded-full sm:w-40 w-30 aspect-square  "
          alt="Adarasha Gaihre profile picture"
        />
      </div>
      <div>
        <img
          src={coverPic}
          className=" rounded-t-lg w-3xl aspect-16/4"
          alt="Adarasha Gaihre Cover Picture"
        />
      </div>

      <div className="px-3 sm:pl-10 py-3 sm:pr-8 pt-[10%]  sm:pt-[12%]">
        <div className="flex justify-between flex-wrap">
          <h1 className=" text-2xl font-bold font-mono">Adarasha Gaihre</h1>
          <div className="flex flex-wrap items-center-safe gap-4">
            <img
              src={nepathyaColzLogo}
              height="24"
              width="34"
              className="bio_clzLogo"
            />
            <span>Nepathya College</span>
          </div>
        </div>
        <div className="mt-2">Student At Nepathya College</div>
        <div className="flex flex-row flex-wrap gap-5">
          <span>Rupandehi District, Lumbiniī, Nepal</span>
          <li className="text-blue-400 hover:cursor-pointer">Contact info</li>
        </div>
        <div className="connections mt-3">
          <a className="text-blue-400 font-mono hover:cursor-pointer">
            86 Connections
          </a>
        </div>

        <div className="mt-4 pl-0">
          <button className=" bg-sky-600 hover:bg-sky-700">Open to</button>
          <button> Add section</button>
          <button>Enhance profile</button>
          <button
            style={{
              border: "1px solid white",
            }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              data-supported-dps="16x16"
              viewBox="0 0 16 16"
              data-token-id="342"
              width="16"
              height="16"
              role="img"
              aria-hidden="true">
              <path d="M3 9.5A1.5 1.5 0 1 1 4.5 8 1.5 1.5 0 0 1 3 9.5M11.5 8A1.5 1.5 0 1 0 13 6.5 1.5 1.5 0 0 0 11.5 8m-5 0A1.5 1.5 0 1 0 8 6.5 1.5 1.5 0 0 0 6.5 8" />
            </svg>
          </button>
        </div>

        <div className="flex flex-wrap justify-between items-center">
          <div className="flex flex-col rounded-2xl  p-4 bg-sky-100/10 mt-4 hover:cursor-pointer hover:bg-sky-100/14">
            <div>Opean to work</div>
            <div>Web Developer, Js Developer, and ... </div>
            <a className="text-sky-500 hover:text-sky-600">Show details</a>
          </div>
          <div className="flex flex-col rounded-2xl  p-4 bg-sky-100/10 mt-4 hover:cursor-pointer hover:bg-sky-100/14">
            <div>Opean to Voluntire</div>
            <div>Education, Community import</div>
            <a className="text-sky-500 hover:text-sky-600">Show details</a>
          </div>
        </div>
      </div>
    </div>
  );
};
