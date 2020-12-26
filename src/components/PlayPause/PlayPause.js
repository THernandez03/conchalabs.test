import { useSelector, useDispatch } from 'react-redux';
import { BsPlayFill, BsPauseFill } from 'react-icons/bs';

import { ToolbarItem } from '../Toolbar';
import { PLAYING } from '../../constants';
import { toggle } from '../../actions';

export const PlayPause = ({ size }) => {
  const musicStatus = useSelector((state) => state.controls.status);
  const dispatch = useDispatch();

  const isPlaying = musicStatus === PLAYING || false;
  const icon = isPlaying ? (
    <BsPauseFill size={size} />
  ) : (
    <BsPlayFill size={size} />
  );

  return (
    <ToolbarItem icon={icon} onClick={() => dispatch(toggle)} size={size} />
  );
};
