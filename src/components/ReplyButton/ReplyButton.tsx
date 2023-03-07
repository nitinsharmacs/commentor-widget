import { IconButton } from '@mui/material';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply } from '@fortawesome/free-solid-svg-icons';

const ReplyButton = () => {
  return (
    <div className='reply-btn'>
      <IconButton title='reply'>
        <FontAwesomeIcon icon={faReply} />
      </IconButton>
    </div>
  );
};

export default ReplyButton;
