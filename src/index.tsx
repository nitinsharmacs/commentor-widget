import ReactDOM from 'react-dom/client';
import Widget from './Widget';

const widgetContainer = document.getElementById('commentor');

if (!widgetContainer) {
  throw new Error(
    'HTMLElement of id `commentor` is not present! Please add div#commentor in your HTML document.'
  );
}

const root = ReactDOM.createRoot(widgetContainer);

export const Commentor = {
  init: (topicId: string) => {
    root.render(<Widget />);
  },
};
