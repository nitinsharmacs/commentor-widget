import './LikeButton.scss';

import { IconButton } from '@mui/material';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const LikeButton = () => {
  return (
    <div className='like-btn'>
      <span className='likes-count'>0</span>
      <IconButton title='like'>
        <FontAwesomeIcon icon={faThumbsUp} />
      </IconButton>
    </div>
  );
};

export default LikeButton;
