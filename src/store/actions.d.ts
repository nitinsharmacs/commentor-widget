/// <reference types="comments" />
export declare enum ACTION {
    ADD_NEW = 0,
    STORE = 1
}
export type ACTIONTYPE = {
    type: ACTION;
    payload: CommentInfo[];
};
