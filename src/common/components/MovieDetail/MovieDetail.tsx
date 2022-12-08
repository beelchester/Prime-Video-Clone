import React, { useEffect, useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { GrPlayFill } from "react-icons/gr";
import Youtube from "react-youtube";
import axios from "axios";
import instance from "../../../API/axios";
import requests, { API_KEY } from "../../../API/request";
import { NavLink } from "react-router-dom";
import {
  addwatchlist,
  removewatchlist,
} from "../../../features/watchlistSlice";

const MovieDetail = () => {
  const [dependancy, setDependancy] = useState(false);
  const movie = useSelector((state: RootState) => state.movie.value);
  // console.log(movie);
  const [youtube, setYoutube] = useState(false);
  const dispatch = useDispatch();
  const watchlist = useSelector((state: RootState) => state.watchlist.value);
  const current = useSelector((state: RootState) => state.currentUser.value);
  const [watchlisted, setWatchlisted] = useState(false);

  let userWatchlist;
  const currentid = useSelector(
    (state: RootState) => state.currentUser.value.id
  );
  const signedInDisp = useSelector((state: RootState) => state.signedIn.value);
  useEffect(() => {
    watchlist.map(
      (i: {
        currentid: string | undefined;
        movie: {
          backdrop_path?: string | undefined;
          original_title?: string | undefined;
          original_name?: string | undefined;
          overview?: string | undefined;
          original_language?: string | undefined;
          release_date?: string | undefined;
          first_air_date?: string | undefined;
        }[];
      }) => {
        i.currentid === current.id &&
          i.movie.includes(movie) &&
          setWatchlisted(true);
      }
    );
  }, []);
  console.log(watchlisted);

  function watchlistHandler() {
    setDependancy(true);
    userWatchlist = { currentid, movie: [movie] };
    if (!watchlisted) {
      dispatch(addwatchlist(userWatchlist));
      setWatchlisted(true);
    } else {
      setWatchlisted(false);
      dispatch(removewatchlist(userWatchlist));
    }
    setDependancy(false);
  }
  const opts = {
    width: "1366px",
    height: "500px",
    playerVars: {
      autoplay: 1,
    },
  };

  const [trailer, setTrailer] = useState<any>("");
  async function fetchData(movie: any) {
    const request = await instance.get(
      `/${movie.media_type ? movie.media_type : "movie"}/${
        movie.id
      }?api_key=${API_KEY}&append_to_response=videos`
    );
    if (
      request.data.videos.results.find(
        (vid: { type: any }) => vid.type === "Trailer"
      ).length === 0
    ) {
      console.log("error");
    } else
      setTrailer(
        request.data.videos.results.find(
          (vid: { type: any }) => vid.type === "Trailer"
        )
      );
    // console.log(request,trailer)
    return request;
  }
  useEffect(() => {
    fetchData(movie);
  }, []);
  return (
    <>
      {youtube && (
        <div
          onClick={() => setYoutube(false)}
          className="flex items-center justify-center fixed z-[100] h-[99.9vh] top-0 right-0 w-full bg-[#00000096] backdrop-blur-lg"
        >
          <Youtube opts={opts} videoId={trailer.key} />
        </div>
      )}

      <style>
        {`
                svg path {
                  stroke: white
                }
                `}
      </style>
      <Navbar />
      <div className="pt-[4.5rem] bg-[#0F171E] h-[100vh] relative cursor-default">
        <div className="flex justify-end">
          <div
            style={{
              backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            }}
            className="h-[538px]  bg-cover bg-no-repeat bg-center w-[59.7em] mb-[1.48rem]"
          ></div>
        </div>
        <div className="font-sans w-[8px] h-[538px] flex flex-col text-white absolute z-30 top-[4.5rem] left-[23rem]   backdrop-blur-[4px]   pl-[48px]"></div>
        <div className="font-sans w-[59.8rem] h-[538px] flex flex-col text-white absolute z-10 top-[4.5rem] left-[25.6rem] bg-[#0000006b]   pl-[48px]"></div>

        <div className="font-sans w-[59.8rem] h-[8px] flex flex-col text-white absolute z-30 top-[38.05rem] left-[25.5rem]   backdrop-blur-[4px]   pl-[48px]"></div>
        <div className="font-sans w-[59.8rem] h-[3px] flex flex-col text-white absolute z-10 top-[38.1rem] left-[25.5rem] bg-[#00000042]   pl-[48px]"></div>

        <div className="font-sans w-full h-[538px] flex flex-col text-white absolute z-40 top-[4.5rem]     pl-[48px]">
          <h1 className="text-[36px] mt-[40px] mb-[7px]">
            {movie?.original_title || movie?.original_name}
          </h1>
          <h1 className="text-[#8197A4] mb-[15px]">
            {movie?.release_date?.slice(0, 4) ||
              movie?.first_air_date?.slice(0, 4)}
          </h1>
          <h1 className="text-[17.5px] leading-[1.38] w-[59%]">
            {movie?.overview}
          </h1>
          <div className="flex items-center mt-[15px]">
            <button
              onClick={() => setYoutube(true)}
              className={`flex items-center justify-center text-white font-[500] text-lg w-[13rem] h-[4.25rem] rounded-[0.15rem] bg-[#0F79AF] hover:bg-[#159ee2] `}
            >
              <GrPlayFill size={"28px"} className="mr-4" />
              <h1>Watch Trailer</h1>
            </button>
            <NavLink to={`${!signedInDisp ? "/signin" : "/detail"}`}>
              <button
                onClick={watchlistHandler}
                className="h-11 w-11 bg-[#425265] ml-8 rounded-full flex items-center justify-center transition hover:ease-in-out hover:bg-[#536377]"
              >
                <h1
                  className={`text-[#ced3da] text-[2.7rem] font-[300] ${
                    !watchlisted ? "mb-[0.4rem]" : "mb-[0.75rem]"
                  } `}
                >
                  {!watchlisted ? "+" : "x"}
                </h1>
              </button>
            </NavLink>
          </div>
          <div className="h-[5rem] w-[20rem] mt-[0.8rem] text-[#91a7b4] font-ptSans text-[18px]">
            <div className="w-[15.23rem]   flex justify-between">
              <h1 className="font-[600]">Subtitles</h1>
              <h1>English [CC]</h1>
            </div>
            <div className="w-[13rem]  mt-[-5px] flex justify-between">
              <h1 className="font-[600]">Audio Languages</h1>
              {movie?.original_language === "hi" ? (
                <h1 className="mr-[15px]">Hindi</h1>
              ) : (
                <h1>English</h1>
              )}
            </div>
          </div>
          <div className="font-ptSans mt-[4.05rem] text-[15.8px] flex justify-between ">
            <div>
              <p className="  inline text-[#8197A4]">
                By clicking play, you agree to our{" "}
              </p>
              <p className="inline text-[#63acd6] hover:text-[#84d0fc] transition hover:ease-in-out hover:cursor-pointer">
                Terms of Use.
              </p>
            </div>
            <div className="h-[2.5rem] w-[20rem] text-[17px] mr-[1.8rem] flex ">
              <div className="flex w-[6rem] ">
                <svg
                  className="hover:cursor-pointer"
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm12-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-3-4l-7-3m7-7l-7 3"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                  ></path>
                </svg>
                <h1 className="ml-2 hover:cursor-pointer"> Share</h1>
              </div>
              <div className="flex w-[7rem]">
                <svg
                  className="hover:cursor-pointer"
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    fill="none"
                    fill-rule="evenodd"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.87 3L3 17v4h4L22 7.09z"
                    ></path>
                    <path d="M15 7l3 3"></path>
                  </g>
                </svg>
                <h1 className="ml-2 mr-3 hover:cursor-pointer">Feedback</h1>
              </div>
              <div className="flex w-[7rem]">
                <svg
                  className="hover:cursor-pointer"
                  viewBox="0 0 24 24"
                  height="24"
                  width="24"
                  role="img"
                  aria-hidden="true"
                >
                  <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <path
                        d="M11 18v-2h2v2h-2zm1-12c3.401 0 4 1.757 4 2.925 0 1.47-.627 1.88-1.4 2.38-.774.485-1.438 1.061-1.6 1.954l-.072.741H11v-.846c.108-1.32.681-1.716 1.4-2.186.703-.469 1.6-1.013 1.6-1.83 0-.925-1.046-1.454-2-1.454-1.296 0-1.982 1.03-2 2.105H8C8.054 7.623 9.372 6 12 6z"
                        fill="currentColor"
                      ></path>
                      <circle
                        stroke="currentColor"
                        stroke-width="2"
                        cx="12"
                        cy="12"
                        r="9"
                      ></circle>
                    </g>
                  </svg>
                </svg>
                <h1 className="ml-2 hover:cursor-pointer">Get Help</h1>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MovieDetail;
