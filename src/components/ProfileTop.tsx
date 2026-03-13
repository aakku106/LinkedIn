import profilePic from "../assets/images/profile-pic.jpeg"
import coverPic from "../assets/images/profile-coverPic.jpeg"
import nepathyaColzLogo from "../assets/images/nepathya-logo.png"
import "../assets/styles/profileTop.css"
export const ProfileTop = () => {

  return (
    <div className="profile-container font-sans flex flex-col pb-4 bg-blue-50 dark:bg-slate-400/20 backdrop-blur-sm dark:text-blue-200 rounded-2xl relative">
      <div className="absolute top-20 left-[5%] border-2 border-white dark:border-black rounded-full">
        <img src={profilePic}
          height="224"
          width="224"
          className="rounded-full "
          alt="Adarasha Gaihre profile picture" />
      </div>
      <div className="mb-28">
        <img src={coverPic}
          height="244"
          width="800"
          className=" rounded-t-lg"
          alt="Adarasha Gaihre Cover Picture" />
      </div>

      <div className="px-14 py-3">
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
          <li className="text-blue-400">
            Contact info
          </li>
        </div>
        <div className="connections mt-3">
          <span className="text-blue-400 font-mono">83 Connections</span>
        </div>
      </div>

      <div className="px-12 ">
        <button className=" bg-blue-500">Open to</button>
        <button> Add section</button>
        <button>Enhance profile</button>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" data-supported-dps="16x16" viewBox="0 0 16 16" data-token-id="342" width="16" height="16"
            role="img" aria-hidden="true"><path d="M3 9.5A1.5 1.5 0 1 1 4.5 8 1.5 1.5 0 0 1 3 9.5M11.5 8A1.5 1.5 0 1 0 13 6.5 1.5 1.5 0 0 0 11.5 8m-5 0A1.5 1.5 0 1 0 8 6.5 1.5 1.5 0 0 0 6.5 8"></path></svg>
        </button>
      </div>

    </div >
  )
}
