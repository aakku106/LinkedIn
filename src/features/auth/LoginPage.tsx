import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import LoginWelcomeImg from "../../assets/images/welcomeToCommunityLoginPage.jpeg";
import "../../assets/styles/login.css";
import LoginWithEmail from "../../components/LoginWithEmail";
import { db } from "../../lib/db";
import { useAuthStore } from "./authStore";
export default function LoginPage() {
  const [signInOption, setSignInOption] = useState("none");
  const [demoCredentials, setDemoCredentials] = useState<{
    email: string;
    password: string;
  } | null>(null);

  useEffect(() => {
    document.title = "Login | LinkedIn Clone";

    let isMounted = true;

    const loadDemoCredentials = async () => {
      const firstUser = await db.users.orderBy("id").first();

      if (isMounted && firstUser) {
        setDemoCredentials({
          email: firstUser.email,
          password: firstUser.password,
        });
      }
    };

    loadDemoCredentials();

    return () => {
      isMounted = false;
    };
  }, []);

  const userId = useAuthStore((s) => s.userId);

  if (userId) return <Navigate to="/feed" replace />;

  if (signInOption === "email") return <LoginWithEmail />;
  else if (signInOption === "google")
    return (
      <div className="fixed top-40 left-30">
        <h1>Not implemented yet</h1>
        <h1>Use login with email</h1>
        <h1>demo email: {demoCredentials?.email ?? "not available"}</h1>
        <h1>demo password: {demoCredentials?.password ?? "not available"}</h1>
        <Link
          to="/login"
          onClick={() => setSignInOption("none")}
          className="mt-3 inline-block text-blue-700 underline hover:text-blue-800">
          Go back
        </Link>
      </div>
    );
  return (
    <section className="relative">
      <LoginNav />
      <section className="flex flex-col justify-between">
        <article className=" p-6 login-outer-container login-section flex flex-row flex-wrap justify-around bg-white-50">
          <div className="login-sections  flex flex-col items-center justify-center-safe">
            <p className="font-medium text-5xl text-pretty max-w-96">
              Welcome to your professional community
            </p>
            <button
              onClick={() => {
                setSignInOption("google");
              }}
              className="bg-blue-600 border-blue-50 text-blue-100 min-w-96 p-2 mt-6 rounded-full flex flex-row justify-around items-center hover:cursor-pointer hover:bg-blue-700">
              <img
                src="https://www.svgrepo.com/show/444571/social-google-plus.svg"
                alt="Social Google Plus SVG File"
                title="Social Google Plus SVG File"
                width="50"
                height="50"
                loading="lazy"
              />
              <span className="text-center mr-8">Continue with Google</span>
            </button>
            <button
              onClick={() => {
                setSignInOption("email");
              }}
              className=" bg-blue-100 border text-center border-blue-950 min-w-96 p-4 mt-4 rounded-full  hover:cursor-pointer hover:bg-blue-50">
              <span>Sign in with email</span>
            </button>
            <p className="text-pretty text-center max-w-52 mt-2">
              By clicking Continue to join or sign in, you agree to LinkedIn’s
              <span className="text-blue-600">User Agreement</span>
              <span className="text-blue-600">, Privacy Policy</span>, and
              <span className="text-blue-600">Cookie Policy.</span>
            </p>
          </div>
          <div className="login-sections">
            <img
              className="min-w-96"
              height="480"
              width="480"
              alt="Welcome to your professional community"
              src={LoginWelcomeImg}
              loading="lazy"
            />
          </div>
        </article>

        <article className="login-outer-container bg-[#0f172a] px-6 py-14 sm:px-10 md:px-16">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-start">
            <div>
              <h2 className="text-4xl font-normal leading-tight text-slate-50 sm:text-5xl">
                Explore top LinkedIn content
              </h2>
              <p className="mt-5 max-w-2xl text-2xl leading-relaxed text-slate-200 sm:text-3xl">
                Discover relevant posts and expert insights curated by topic in
                one place.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 text-xl font-semibold text-slate-100 sm:text-[28px]">
              <button className="rounded-full border border-slate-400 px-7 py-3 transition hover:bg-slate-100 hover:text-slate-900 hover:cursor-pointer">
                Career
              </button>
              <button className="rounded-full border border-slate-400 px-7 py-3 transition hover:bg-slate-100 hover:text-slate-900 hover:cursor-pointer">
                Productivity
              </button>
              <button className="rounded-full border border-slate-400 px-7 py-3 transition hover:bg-slate-100 hover:text-slate-900 hover:cursor-pointer">
                Finance
              </button>
              <button className="rounded-full border border-slate-400 px-7 py-3 transition hover:bg-slate-100 hover:text-slate-900 hover:cursor-pointer">
                Soft Skills & Emotional Intelligence
              </button>
              <button className="rounded-full border border-slate-400 px-7 py-3 transition hover:bg-slate-100 hover:text-slate-900 hover:cursor-pointer">
                Project Management
              </button>
              <button className="rounded-full border border-slate-400 px-7 py-3 transition hover:bg-slate-100 hover:text-slate-900 hover:cursor-pointer">
                Education
              </button>
              <button className="rounded-full border border-slate-400 px-7 py-3 transition hover:bg-slate-100 hover:text-slate-900 hover:cursor-pointer">
                Technology
              </button>
              <button className="rounded-full border border-slate-400 px-7 py-3 transition hover:bg-slate-100 hover:text-slate-900 hover:cursor-pointer">
                Leadership
              </button>
              <button className="rounded-full border border-slate-400 px-7 py-3 transition hover:bg-slate-100 hover:text-slate-900 hover:cursor-pointer">
                Ectomere
              </button>
              <button className="rounded-full border border-sky-400 px-8 py-3 text-sky-300 transition hover:bg-sky-50 hover:text-sky-700 hover:cursor-pointer">
                Show all
              </button>
            </div>
          </div>
        </article>

        <article className="login-outer-container bg-[#ffffff] px-6 py-14 sm:px-10 md:px-16">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-start">
            <div>
              <h2 className="text-4xl font-normal leading-tight text-gray-900 sm:text-5xl">
                Find the right job or internship for you
              </h2>
            </div>

            <div className="flex flex-wrap gap-3 text-xl font-semibold text-gray-700 sm:text-[28px]">
              <button className="rounded-full border border-gray-500 px-7 py-3 transition hover:bg-gray-100 hover:cursor-pointer">
                Engineering
              </button>
              <button className="rounded-full border border-gray-500 px-7 py-3 transition hover:bg-gray-100 hover:cursor-pointer">
                Business Development
              </button>
              <button className="rounded-full border border-gray-500 px-7 py-3 transition hover:bg-gray-100 hover:cursor-pointer">
                Finance
              </button>
              <button className="rounded-full border border-gray-500 px-7 py-3 transition hover:bg-gray-100 hover:cursor-pointer">
                Administrative Assistant
              </button>
              <button className="rounded-full border border-gray-500 px-7 py-3 transition hover:bg-gray-100 hover:cursor-pointer">
                Retail Associate
              </button>
              <button className="rounded-full border border-gray-500 px-7 py-3 transition hover:bg-gray-100 hover:cursor-pointer">
                Customer Service
              </button>
              <button className="rounded-full border border-gray-500 px-7 py-3 transition hover:bg-gray-100 hover:cursor-pointer">
                Operations
              </button>
              <button className="rounded-full border border-gray-500 px-7 py-3 transition hover:bg-gray-100 hover:cursor-pointer">
                Information Technology
              </button>
              <button className="rounded-full border border-blue-600 px-8 py-3 text-blue-700 transition hover:bg-blue-50 hover:cursor-pointer">
                Show all
              </button>
            </div>
          </div>
        </article>

        <article className="login-outer-container bg-[#e9e5de] px-6 py-20 text-center sm:px-10 md:py-24">
          <h2 className="text-4xl font-normal text-[#b24020] sm:text-5xl">
            Post your job for millions of people to see
          </h2>
          <button className="mt-10 rounded-full border border-blue-600 px-8 py-3 text-2xl font-semibold text-blue-700 transition hover:bg-blue-50 hover:cursor-pointer">
            Post a job
          </button>
        </article>

        <article className="login-outer-container bg-[#f3f2f0] px-6 py-14 sm:px-10 md:px-16">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-start">
            <div>
              <h2 className="text-5xl font-normal text-gray-900 leading-tight">
                Discover the best software tools
              </h2>
              <p className="mt-5 max-w-2xl text-4xl leading-relaxed text-gray-800">
                Connect with buyers who have first-hand experience to find the
                best products for you.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 text-[24px] font-semibold text-gray-700">
              <button className="rounded-full border border-gray-500 px-7 py-3 transition hover:bg-white hover:cursor-pointer">
                E-Commerce Platforms
              </button>
              <button className="rounded-full border border-gray-500 px-7 py-3 transition hover:bg-white hover:cursor-pointer">
                CRM Software
              </button>
              <button className="rounded-full border border-gray-500 px-7 py-3 transition hover:bg-white hover:cursor-pointer">
                Human Resources Management Systems
              </button>
              <button className="rounded-full border border-gray-500 px-7 py-3 transition hover:bg-white hover:cursor-pointer">
                Recruiting Software
              </button>
              <button className="rounded-full border border-gray-500 px-7 py-3 transition hover:bg-white hover:cursor-pointer">
                Sales Intelligence Software
              </button>
              <button className="rounded-full border border-gray-500 px-7 py-3 transition hover:bg-white hover:cursor-pointer">
                Project Management Software
              </button>
              <button className="rounded-full border border-gray-500 px-7 py-3 transition hover:bg-white hover:cursor-pointer">
                Help Desk Software
              </button>
              <button className="rounded-full border border-gray-500 px-7 py-3 transition hover:bg-white hover:cursor-pointer">
                Social Networking Software
              </button>
              <button className="rounded-full border border-gray-500 px-7 py-3 transition hover:bg-white hover:cursor-pointer">
                Desktop Publishing Software
              </button>
              <button className="rounded-full border border-blue-600 px-8 py-3 text-blue-700 transition hover:bg-blue-50 hover:cursor-pointer">
                Show all
              </button>
            </div>
          </div>
        </article>
        <article className="login-outer-container bg-[#f3f2f0] px-6 py-12 sm:px-10 md:px-16 md:py-16">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-start">
            <div>
              <h2 className="text-4xl font-normal leading-tight text-gray-900 sm:text-5xl">
                Keep your mind sharp with games
              </h2>
              <p className="mt-5 max-w-2xl text-2xl leading-relaxed text-gray-800 sm:text-3xl">
                Take a break and reconnect with your network through quick daily
                games.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 text-xl font-semibold text-gray-700 sm:text-[30px]">
              <button className="rounded-full border border-gray-500 px-7 py-3 transition hover:bg-white hover:cursor-pointer">
                Patches
              </button>
              <button className="rounded-full border border-gray-500 px-7 py-3 transition hover:bg-white hover:cursor-pointer">
                Zip
              </button>
              <button className="rounded-full border border-gray-500 px-7 py-3 transition hover:bg-white hover:cursor-pointer">
                Mini Sudoku
              </button>
              <button className="rounded-full border border-gray-500 px-7 py-3 transition hover:bg-white hover:cursor-pointer">
                Queens
              </button>
              <button className="rounded-full border border-gray-500 px-7 py-3 transition hover:bg-white hover:cursor-pointer">
                Tango
              </button>
              <button className="rounded-full border border-gray-500 px-7 py-3 transition hover:bg-white hover:cursor-pointer">
                Pinpoint
              </button>
              <button className="rounded-full border border-gray-500 px-7 py-3 transition hover:bg-white hover:cursor-pointer">
                Crossclimb
              </button>
            </div>
          </div>
        </article>
        <article className="login-outer-container">7</article>
        <article className="login-outer-container">8</article>
        <article className="login-outer-container px-16">
          <h2 className="header font-semibold text-5xl ">
            Join your colleagues, classmates, and friends on LinkedIn
          </h2>
          <button className="p-4 bg-blue-800 text-2xl border rounded-full mt-8 hover:bg-blue-200 hover:text-blue-800 hover:cursor-pointer hover:scale-105">
            Get Started
          </button>
        </article>
        <article className="login-outer-container">10</article>
      </section>
    </section>
  );
}

const LoginNav = () => {
  return (
    <nav className=" nav-bar p-1 sticky top-0 backdrop-blur-sm bg-white-700/50">
      <div className="logo m-6 ">
        <svg
          viewBox="0 0 800 24"
          preserveAspectRatio="xMinYMin meet"
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
          className="lazy-loaded "
          aria-busy="false">
          <g
            className="hover:text-black text-blue-800"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd">
            <path
              d="M19.479,0 L1.583,0 C0.727,0 0,0.677 0,1.511 L0,19.488 C0,20.323 0.477,21 1.333,21 L19.229,21 C20.086,21 21,20.323 21,19.488 L21,1.511 C21,0.677 20.336,0 19.479,0"
              className="bug-text-color"
              transform="translate(63.000000, 0.000000)"></path>
            <path
              d="M82.479,0 L64.583,0 C63.727,0 63,0.677 63,1.511 L63,19.488 C63,20.323 63.477,21 64.333,21 L82.229,21 C83.086,21 84,20.323 84,19.488 L84,1.511 C84,0.677 83.336,0 82.479,0 Z M71,8 L73.827,8 L73.827,9.441 L73.858,9.441 C74.289,8.664 75.562,7.875 77.136,7.875 C80.157,7.875 81,9.479 81,12.45 L81,18 L78,18 L78,12.997 C78,11.667 77.469,10.5 76.227,10.5 C74.719,10.5 74,11.521 74,13.197 L74,18 L71,18 L71,8 Z M66,18 L69,18 L69,8 L66,8 L66,18 Z M69.375,4.5 C69.375,5.536 68.536,6.375 67.5,6.375 C66.464,6.375 65.625,5.536 65.625,4.5 C65.625,3.464 66.464,2.625 67.5,2.625 C68.536,2.625 69.375,3.464 69.375,4.5 Z"
              className="background"
              fill="currentColor"></path>
          </g>
          <g className="linkedin-text hover:text-black text-blue-800">
            <path
              d="M60,18 L57.2,18 L57.2,16.809 L57.17,16.809 C56.547,17.531 55.465,18.125 53.631,18.125 C51.131,18.125 48.978,16.244 48.978,13.011 C48.978,9.931 51.1,7.875 53.725,7.875 C55.35,7.875 56.359,8.453 56.97,9.191 L57,9.191 L57,3 L60,3 L60,18 Z M54.479,10.125 C52.764,10.125 51.8,11.348 51.8,12.974 C51.8,14.601 52.764,15.875 54.479,15.875 C56.196,15.875 57.2,14.634 57.2,12.974 C57.2,11.268 56.196,10.125 54.479,10.125 L54.479,10.125 Z"
              fill="currentColor"></path>
            <path
              d="M47.6611,16.3889 C46.9531,17.3059 45.4951,18.1249 43.1411,18.1249 C40.0001,18.1249 38.0001,16.0459 38.0001,12.7779 C38.0001,9.8749 39.8121,7.8749 43.2291,7.8749 C46.1801,7.8749 48.0001,9.8129 48.0001,13.2219 C48.0001,13.5629 47.9451,13.8999 47.9451,13.8999 L40.8311,13.8999 L40.8481,14.2089 C41.0451,15.0709 41.6961,16.1249 43.1901,16.1249 C44.4941,16.1249 45.3881,15.4239 45.7921,14.8749 L47.6611,16.3889 Z M45.1131,11.9999 C45.1331,10.9449 44.3591,9.8749 43.1391,9.8749 C41.6871,9.8749 40.9121,11.0089 40.8311,11.9999 L45.1131,11.9999 Z"
              fill="currentColor"></path>
            <polygon
              fill="currentColor"
              points="38 8 34.5 8 31 12 31 3 28 3 28 18 31 18 31 13 34.699 18 38.241 18 34 12.533"></polygon>
            <path
              d="M16,8 L18.827,8 L18.827,9.441 L18.858,9.441 C19.289,8.664 20.562,7.875 22.136,7.875 C25.157,7.875 26,9.792 26,12.45 L26,18 L23,18 L23,12.997 C23,11.525 22.469,10.5 21.227,10.5 C19.719,10.5 19,11.694 19,13.197 L19,18 L16,18 L16,8 Z"
              fill="currentColor"></path>
            <path
              d="M11,18 L14,18 L14,8 L11,8 L11,18 Z M12.501,6.3 C13.495,6.3 14.3,5.494 14.3,4.5 C14.3,3.506 13.495,2.7 12.501,2.7 C11.508,2.7 10.7,3.506 10.7,4.5 C10.7,5.494 11.508,6.3 12.501,6.3 Z"
              fill="currentColor"></path>
            <polygon
              fill="currentColor"
              points="3 3 0 3 0 18 9 18 9 15 3 15"></polygon>
          </g>
        </svg>
      </div>
    </nav>
  );
};
