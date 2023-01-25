export interface IUser {
  name: string;
  avatar?: string;
}
export interface IComment {
  id: number;
  date: number; // unix timestamp in milliseconds.
  user: IUser;
  text: string;
  likes: number;
  iLikedIt: boolean;
}
export interface IData {
  id: number;
  date: number; // unix timestamp in milliseconds.
  user: IUser;
  text: string;
  likes: number;
  iLikedIt: boolean;
  replies: IComment[];
}

export interface IProps {
  comments: IComment[];
}
