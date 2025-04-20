export type Anime = {
  mal_id: string;
	id: string;
	images: {jpg: {image_url:string}};
  title:  string;
  image: string;
	//
	popularity: string;
	score: string;
	year: number | string;
	rating: number | string;
	name: string;
	episodes: number | string;
	synopsis: string;
	url: string;
};
 