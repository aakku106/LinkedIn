import profilePic from "../assets/images/profile-pic.jpeg"
import coverPic from "../assets/images/profile-coverPic.jpeg"
export const ProfileTop = () => {

  return (
    <section className="profile-container flex flex-col">
      <div className="absolute top-80 border-blue-200 rounded-full">
        <img src={profilePic}
          height="224"
          width="224"
          className="rounded-full"
          alt="Adarasha Gaihre profile picture" />
      </div>
      <div>
        <img src={coverPic} alt="Adarasha Gaihre Cover Picture" />
      </div>
      <div></div>
      <div></div>
      <div></div>

    </section>
  )
}
