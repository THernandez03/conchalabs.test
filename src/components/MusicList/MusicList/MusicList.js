import styled from '@emotion/styled';
import { useSelector, useDispatch } from 'react-redux';
import { GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi';
import PropTypes from 'prop-types';

import { Sidebar } from '../../commons';
import { MusicItem } from '../MusicItem';
import { OPENED } from '../../../constants/sidebarStatus';
import { selectItem } from '../../../actions';

export const MusicList = styled(({ className, list }) => {
  const sidebarStatus = useSelector((state) => state.sidebarStatus);
  const dispatch = useDispatch();

  const isOpened = sidebarStatus === OPENED;
  const randomItem = () =>
    list[Math.floor(Math.random() * Math.floor(list.length))];

  const handleRandomSelect = () => {
    dispatch(selectItem({ item: randomItem() }));
  };

  return (
    <Sidebar className={className} isOpened={isOpened}>
      <div>
        {list.map((music) => (
          <MusicItem key={music}>{music}</MusicItem>
        ))}
      </div>
      <div onClick={handleRandomSelect} onKeyDown={handleRandomSelect}>
        <GiPerspectiveDiceSixFacesRandom />
        Random
      </div>
    </Sidebar>
  );
})`
  display: flex;
  flex-direction: column;

  > div:first-of-type {
    flex-grow: 1;
  }

  > div:last-of-type {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 15px 10px;
    cursor: pointer;
    border-top: 1px solid #0051ec;
    background: #0057ff;
    color: #ffffff;
    height: 51px;

    &:hover {
      font-weight: bold;
    }

    > svg {
      margin-right: 10px;
    }
  }
`;

MusicList.propTypes = {
  className: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.string),
};

MusicList.defaultProps = {
  list: [],
};
