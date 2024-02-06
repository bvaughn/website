export type Urls = {
  appleMusic?: string;
  bandCamp?: string;
  googleMusic?: string;
  soundcloud?: string;
  spotify?: string;
};

export type Song = {
  date: Date;
  image?: string;
  name: string;
  urls?: Urls;
};

export type Album = {
  date: Date;
  image: string;
  name: string;
  tracks: string[];
  urls: Urls;
};

export type BandMember = {
  image: string;
  name: string;
  role: string;
};

export type Band = {
  albums: { [id: string]: Album };
  description: string[];
  genre: string;
  image: string;
  members: BandMember[];
  name: string;
  tracks: Song[];
};
