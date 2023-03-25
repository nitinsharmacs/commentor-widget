import IconButton from '@mui/material/IconButton';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faReply} from '@fortawesome/free-solid-svg-icons/faReply';

const ReplyButton = (): JSX.Element => {
  return (
    <div className="reply-btn">
      <IconButton title="reply">
        <FontAwesomeIcon icon={faReply} />
      </IconButton>
    </div>
  );
};

export default ReplyButton;
