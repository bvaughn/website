export type Urls = {
  appleMusic?: string;
  bandCamp?: string;
  googleMusic?: string;
  soundcloud?: string;
  spotify?: string;
};

export type Song = {
  // Other credited artists, in credit order (excluding the band itself)
  // For a feature, the first artist is the one who released the song
  artists?: string[];
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
  // Songs released by other artists that feature this band
  features?: Song[];
  genre: string;
  image: string;
  members: BandMember[];
  name: string;
  tracks: Song[];
};
