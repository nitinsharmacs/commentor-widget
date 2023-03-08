interface CommentInfo {
  id: string;
  message: string;
  timestamp: Date;
  likes: number;
  username: string;
  avatar?: string;
}

interface CommentsProps {
  comments: CommentInfo[];
}
