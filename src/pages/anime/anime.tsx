import axios from "axios"
import { useEffect, useState } from "react"
import ReactPlayer from "react-player"
import { useParams } from "react-router-dom"

type Anime = {
  id: string;
  title: { romaji: string };
  image: string;
};

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
          {" "}
          <div className="flex">
            <div className="img w-[228px] h-[340px]  flex rounded-2xl ">
              <img
                src={animeData.images.jpg.image_url}
                alt="ERROR"
                className="rounded-2xl
						"
              />
            </div>

            <div className=" h-[100%]  mx-[20px] info">
              <h4 className=" text-[28px]">title: {animeData.title}</h4>

              <h4>popularity: {animeData.popularity}</h4>
              <h4>score: {animeData.score}</h4>
              <h4>year: {animeData.year}</h4>
              <h4>rating: {animeData.rating}</h4>
              <h4>genres: {animeData.name}</h4>
              <h4>episodes: {animeData.episodes}</h4>
            </div>
          </div>
          <div className="synopsis mt-[20px] w-[90%]">
            <h2 className="text-[20px]">synopsis: {animeData.synopsis}</h2>
          </div>
          <div className="mt-[50px] w-[60%] h-[400px]  mx-auto rounded-2xl">
            <ReactPlayer
              url={animeData.url}
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
