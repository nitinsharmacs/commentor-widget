import ReactDOM from 'react-dom/client';
import API from './api';
import Widget from './Widget';

const widgetContainer = document.getElementById('commentor');

if (!widgetContainer) {
  throw new Error(
    'HTMLElement of id `commentor` is not present! Please add div#commentor in your HTML document.'
  );
}

const root = ReactDOM.createRoot(widgetContainer);

const Commentor = {
  init: (heading: string, topicId: string) => {
    API.health().then(res => {
      if (res.status === 200) {
        return root.render(<Widget heading={heading} topicId={topicId} />);
      }

      throw new Error('Commentor Service is not healthy');
    });
  },
};

export default Commentor;
