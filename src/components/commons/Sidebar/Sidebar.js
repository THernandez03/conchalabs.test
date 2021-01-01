import { createPortal } from 'react-dom';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { Overlay } from '../Overlay';

export const Sidebar = styled(({ className, children, isOpened }) => {
  if (!isOpened) return <div className={className} />;

  return (
    <div className={className}>
      {children}

      {createPortal(<Overlay />, document.querySelector('#modal-wrapper'))}
    </div>
  );
})`
  position: absolute;
  display: block;
  height: 100vh;
  background: #e8e8e8;
  width: 450px;
  z-index: 2;
  transition: left 0.5s;

  ${({ isOpened }) => `
    left: ${isOpened ? 0 : -450}px;
  `}

  @media (max-width: 550px) {
    width: 85%;
  }
`;

Sidebar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
  isOpened: PropTypes.bool,
};

Sidebar.defaultProps = {
  isOpened: false,
};
