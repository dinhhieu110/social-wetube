interface Video {
  _id: number;
  title: string;
  description: string;
  url: string;
  thumbnail: string;
  views: number;
  categories: string[];
  tags: string[];
}
export default Video;
