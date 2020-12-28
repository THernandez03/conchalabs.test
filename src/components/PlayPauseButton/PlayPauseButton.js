import { useSelector, useDispatch } from 'react-redux';
import { BsPlayFill, BsPauseFill } from 'react-icons/bs';
import PropTypes from 'prop-types';

import { ToolbarItem } from '../Toolbar';
import { PLAYING } from '../../constants/controlStatus';
import { toggle } from '../../actions';

export const PlayPauseButton = ({ size }) => {
  const musicStatus = useSelector((state) => state.musicStatus);
  const dispatch = useDispatch();

  const isPlaying = musicStatus === PLAYING || false;
  const icon = isPlaying ? (
    <BsPauseFill size={size} />
  ) : (
    <BsPlayFill size={size} />
  );

  return (
    <ToolbarItem icon={icon} onClick={() => dispatch(toggle())} size={size} />
  );
};

PlayPauseButton.propTypes = {
  size: PropTypes.string,
};

PlayPauseButton.defaultProps = {
  size: '1.5rem',
};
