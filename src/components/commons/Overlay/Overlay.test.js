import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Overlay } from './Overlay';
import { hideSidebar } from '../../../actions';

jest.mock('react-redux', () => ({ useDispatch: () => jest.fn() }));
jest.mock('../../../actions', () => ({ hideSidebar: jest.fn() }));

describe('<Overlay/>', () => {
  it('Should render the componente', () => {
    const { container } = render(<Overlay />);
    expect(container).toMatchSnapshot();
  });

  it('Should dispatch hideSidebar when clicked over the component', () => {
    const { container } = render(<Overlay />);
    userEvent.click(container.firstChild);
    expect(hideSidebar).toHaveBeenCalled();
  });
});
