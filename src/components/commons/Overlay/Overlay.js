import { useDispatch } from 'react-redux';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { hideSidebar } from '../../../actions';

export const Overlay = styled(({ className }) => {
  const dispatch = useDispatch();

  const handleOverlaySelected = () => {
    dispatch(hideSidebar());
  };

  return (
    <div
      className={className}
      onClick={handleOverlaySelected}
      onKeyDown={handleOverlaySelected}
    />
  );
})`
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

Overlay.defaultProps = {
  className: PropTypes.string,
};

Overlay.defaultProps = {};
