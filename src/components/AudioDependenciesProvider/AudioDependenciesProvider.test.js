import { describe, expect } from '@jest/globals';
import { createRef } from 'react';
import { render } from '@testing-library/react';

import {
  AudioDependenciesProvider,
  AudioDependenciesContext,
} from './AudioDependenciesProvider';

window.AudioContext = jest.fn(() => ({
  createMediaElementSource: () => 'mediaSource',
}));

const createComponent = ({ element }) => {
  const wrapper = ({ children }) => (
    <AudioDependenciesProvider audioElement={{ current: element }}>
      {children}
    </AudioDependenciesProvider>
  );
  const renderValues = jest.fn();

  render(
    <AudioDependenciesContext.Consumer>
      {(...args) => renderValues(...args)}
    </AudioDependenciesContext.Consumer>,
    { wrapper },
  );

  return renderValues;
};

describe('<AudioDependenciesProvider/>', () => {
  it('Should render the children', () => {
    const { container } = render(
      <AudioDependenciesProvider audioElement={createRef()}>
        Example
      </AudioDependenciesProvider>,
    );
    expect(container).toMatchSnapshot();
  });

  it('Should return empty values when no audioElement is passed as props', () => {
    const [firstRender] = createComponent({ element: null }).mock.calls;
    const [consumerValue] = firstRender;

    expect(consumerValue).toEqual({});
  });

  it('Should return valid value when audioElement is passed as props', () => {
    const [, secondRender] = createComponent({ element: <div /> }).mock.calls;
    const [consumerValue] = secondRender;

    expect(consumerValue).toMatchSnapshot();
  });
});
