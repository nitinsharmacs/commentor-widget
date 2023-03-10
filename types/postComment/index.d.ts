declare function onComment(comment: string): void;

interface PostCommentProps {
  onComment: typeof onComment;
}
