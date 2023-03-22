const API = {
  fetch_comments: (topic_id: string): Promise<CommentsResponse> => {
    return fetch('http://127.0.0.1:3000/api/comments/' + topic_id).then(res => {
      if (res.status !== 200) {
        throw new Error();
      }

      return res.json();
    });
  },
};

export default API;
