import profilePic from "../assets/images/profile-pic.jpeg"
import coverPic from "../assets/images/profile-coverPic.jpeg"
import nepathyaColzLogo from "../assets/images/nepathya-logo.png"
import "../assets/styles/profileTop.css"
export const ProfileTop = () => {

  return (
    <div className={`profile-container  flex flex-col
bg-blue-50 dark:bg-slate-400/20 backdrop-blur-sm dark:text-blue-200 
rounded-2xl text-nowrap relative `}>
      <div className="absolute top-[20%] left-[5%] border-4 border-white dark:border-black rounded-full">
        <img src={profilePic}
          className="rounded-full w-40 aspect-square  "
          alt="Adarasha Gaihre profile picture" />
      </div>
      <div >
        <img src={coverPic}
          className=" rounded-t-lg w-3xl aspect-16/4"
          alt="Adarasha Gaihre Cover Picture" />
      </div>

      <div className="pl-10  py-3 pt-[38%] sm:pt-[11%]">
        <div className="flex justify-between flex-wrap">
          <h1 className=" text-2xl font-bold font-mono">Adarasha Gaihre</h1>
          <div className="bio_college flex items-center-safe gap-4 flex-nowrap text-nowrap">
            <img
              src={nepathyaColzLogo}
              height="24"
              width="34"
              className="bio_clzLogo"
            />
            <span>
              Nepathya College
            </span>
          </div>
        </div>
        <div className="mt-2">Student At Nepathya College</div>
        <div className="flex gap-5">
          <span>
            Rupandehi District, Lumbiniī, Nepal
          </span>
          <li className="text-blue-400 hover:cursor-pointer">
            Contact info
          </li>
        </div>
        <div className="connections mt-3">
          <a className="text-blue-400 font-mono hover:cursor-pointer">86 Connections</a>
        </div>


        <div className="mt-4 pl-0">
          <button className=" bg-sky-600 hover:bg-sky-700">
            Open to
          </button>
          <button> Add section</button>
          <button>Enhance profile</button>
          <button
            style={{
              border: "1px solid white"
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" data-supported-dps="16x16" viewBox="0 0 16 16" data-token-id="342" width="16" height="16"
              role="img" aria-hidden="true"><path d="M3 9.5A1.5 1.5 0 1 1 4.5 8 1.5 1.5 0 0 1 3 9.5M11.5 8A1.5 1.5 0 1 0 13 6.5 1.5 1.5 0 0 0 11.5 8m-5 0A1.5 1.5 0 1 0 8 6.5 1.5 1.5 0 0 0 6.5 8"></path></svg>
          </button>
        </div>

      </div>


    </div >
  )
}
