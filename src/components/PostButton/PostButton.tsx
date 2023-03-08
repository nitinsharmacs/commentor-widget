import PaperPlan from '../../assets/icons/paper-plan';
import './PostButton.scss';

import IconButton from '@mui/material/IconButton';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';

const PostButton = (): JSX.Element => {
  return (
    <div className="post-button">
      <IconButton aria-label="post" title="Post">
        <FontAwesomeIcon icon={faPaperPlane} />
      </IconButton>
    </div>
  );
};

export default PostButton;
