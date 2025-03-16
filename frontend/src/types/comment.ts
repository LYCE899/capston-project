export interface Comment {
  id: string;
  remedyId: string;
  userId: string;
  userName: string;
  content: string;
  createdAt: Date;
  likes: number;
  likedBy: string[];
}