import styled from '@emotion/styled';
import { useSelector, useDispatch } from 'react-redux';
import { GiMusicalNotes } from 'react-icons/gi';
import PropTypes from 'prop-types';

import { selectItem, deselectItem } from '../../../actions';

export const MusicItem = styled(({ className, children }) => {
  const selectedMusic = useSelector((state) => state.selectedItem);
  const dispatch = useDispatch();
  const isSelected = selectedMusic === children;

  const handleMusicSelected = () => {
    if (isSelected) {
      dispatch(deselectItem());
    } else {
      dispatch(selectItem({ item: children }));
    }
  };

  return (
    <div
      className={className}
      onClick={handleMusicSelected}
      onKeyDown={handleMusicSelected}
    >
      {isSelected ? <GiMusicalNotes /> : null}
      {children}
    </div>
  );
})`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 10px;
  ${({ isSelected }) => (isSelected ? 'font-weight: bold;' : '')}

  &:hover {
    font-weight: bold;
  }

  > svg {
    margin-right: 10px;
  }
`;

MusicItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
};

MusicItem.defaultProps = {};
