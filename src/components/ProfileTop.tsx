import profilePic from "../assets/images/profile-pic.jpeg"
import coverPic from "../assets/images/profile-coverPic.jpeg"
import nepathyaColzLogo from "../assets/images/nepathya-logo.png"
export const ProfileTop = () => {

  return (
    <div className="profile-container flex flex-col bg-blue-50 dark:bg-slate-400/20 backdrop-blur-sm dark:text-blue-200 rounded-2xl relative">
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

        <div>
          <div className="flex justify-between flex-wrap">
            <h1 className="font-serif text-2xl font-bold">Adarasha Gaihre</h1>
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
        </div>
        <div>Student At Nepathya College</div>
        <div>
          Rupandehi District, Lumbiniī, Nepal
        </div>
      </div>

    </div >
  )
}
