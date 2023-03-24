declare const API: {
    fetch_comments: (topic_id: string) => Promise<CommentsResponse>;
    add_comment: (topicId: string, comment: string) => Promise<any>;
};
export default API;
