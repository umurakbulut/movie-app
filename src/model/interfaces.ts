export interface IFormInputs {
  email: string;
  password: string;
  text: string;
}

export interface IMovie {
  id: string;
  name: string;
  year: string;
  imdbRating: number;
  category: string;
  country: string;
  cover: string;
  isFavorite: boolean;
  isTvSeries: boolean;
  summary: string;
  addedDate: string;
  bigCover: string;
}
