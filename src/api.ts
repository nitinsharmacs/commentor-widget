import config from '../configs/api.json';

const DEFAULT_BACKEND = 'http://127.0.0.1:5000';

const COMMENTOR_SERVICE_URL = (config.backend || DEFAULT_BACKEND) + '/api';

const API = {
  fetch_comments: (topic_id: string): Promise<CommentsResponse> => {
    return fetch(COMMENTOR_SERVICE_URL + '/comments/' + topic_id).then(res => {
      if (res.status !== 200) {
        throw new Error();
      }

      return res.json();
    });
  },
  add_comment: (topicId: string, comment: string) =>
    fetch(COMMENTOR_SERVICE_URL + '/add-comment', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        'topic-id': topicId,
        comment,
      }),
    }).then(res => {
      if (res.status !== 201) {
        throw new Error('Comment not added');
      }

      return res.json();
    }),
};

export default API;
