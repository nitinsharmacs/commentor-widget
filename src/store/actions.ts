export enum ACTION {
  ADD_NEW,
  STORE,
}

export type ACTIONTYPE = {type: ACTION; payload: CommentInfo[]};
