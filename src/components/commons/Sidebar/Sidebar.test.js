import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';

import { Sidebar } from './Sidebar';

window.document.querySelector = jest.fn();

describe('<Sidebar/>', () => {
  it('Should render the component', () => {
    const createPortal = jest.spyOn(ReactDOM, 'createPortal');
    createPortal.mockImplementation(() => null);

    const { container } = render(<Sidebar isOpened />);

    expect(container).toMatchSnapshot();
    expect(createPortal).toHaveBeenCalled();
  });

  it('Should have different css when "isOpened" is true', () => {
    const { container, rerender } = render(<Sidebar isOpened />);
    expect(container.firstChild.className).toMatchSnapshot();
    rerender(<Sidebar />);
    expect(container.firstChild.className).toMatchSnapshot();
    rerender(<Sidebar isOpened />);
    expect(container.firstChild.className).toMatchSnapshot();
  });
});
