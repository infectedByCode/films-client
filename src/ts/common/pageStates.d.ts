// Registration page states
export type RegistationForm = {
  username: string;
  email: string;
  password: string;
  confirmedPassword: string;
};

// Films List
type Film = {
  uid: string;
  title: string;
  description: string;
  year: number;
  keywords: string;
};

export type FilmList = {
  data: Film[] | null;
};
