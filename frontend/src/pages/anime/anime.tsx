import axios from "axios"
import { useEffect, useState } from "react"
import ReactPlayer from "react-player"
import { useParams } from "react-router-dom"
import type { Anime } from '../../types/types'

export function Anime() {
  const { id } = useParams<{ id: string }>();
  const [anime, setAnime] = useState<Anime[]>([]);
  
  const [animeData, setAnimeData] = useState<Anime | null>(null);
 
  useEffect(() => {
    axios
      .get("https://api.jikan.moe/v4/top/anime")
      .then((d) => setAnime(d.data.data))
      .catch((err) => console.error(`ERROR: ${err}`));
  }, []);

  useEffect(() => {
    const i = anime.find((u) => u.mal_id == id);
    console.info(i);

    if (i) {
      setAnimeData(i);
    }
  }, [anime]);

  return (
    <div className='bg'>
      <div className="blur_bg"></div>
  
    <div className="content w-[80%] h-[340px] mx-auto pt-[100px] flex">
      {animeData && (
        <div className=" w-[90vw] mx-auto">
          {" ... "} 
          <div className="block  md:flex">
            <div className="img mx-auto mb-10 md:mb-0 md:mx-0 w-[228px] h-[340px]  flex rounded-2xl ">
              <img
                src={animeData.images.jpg.image_url}
                alt="ERROR"
                className="rounded-2xl
                
						"
              />
            </div>

            <div className=" h-[100%]  mx-[20px] inf
            text-[10px] 
            ">
              <h4 className=" text-[28px]
             py-1 ">title: {animeData.title}</h4>
  
              <h4 className=" text-[28px]
              py-3 ">popularity: {animeData.popularity}</h4>
              <h4 className=" text-[28px]
             py-3 ">score: {animeData.score}</h4>
              <h4 className=" text-[28px]
             py-3 ">year: {animeData.year}</h4>
              <h4 className=" text-[28px]
             py-3 ">rating: {animeData.rating}</h4>
              <h4 className=" text-[28px]
             py-3 ">genres: {animeData.name}</h4>
              <h4 className=" text-[28px]
             py-3 ">episodes: {animeData.episodes}</h4>
            </div>
          </div>
          
          <div className="mt-[50px] w-[100%] h-[400px]  mx-auto rounded-2xl border
          border-[#444]">
            <ReactPlayer
              url=''
              controls
              width="100%" 
              height="100%"
            />
          </div>
        </div>
      )}
    </div>

    </div>
  );
}
