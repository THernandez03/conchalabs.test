import { createRef } from 'react';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import { Audio } from './Audio';
import { PLAYING, PAUSED, NOT_STARTED } from '../../constants/controlStatus';

jest.mock('react-redux');
jest.mock('../../hooks', () => ({
  useAudioDependencies: () => ({
    audioContext: { resume: jest.fn() },
  }),
}));

describe('<Audio/>', () => {
  it('Should render an <audio> element', () => {
    useSelector
      .mockImplementationOnce(() => NOT_STARTED)
      .mockImplementationOnce(() => 'example.wav');

    const { container } = render(<Audio />);
    expect(container).toMatchSnapshot();
  });

  it('Should accept an empty "src"', () => {
    useSelector.mockImplementationOnce(() => NOT_STARTED);
    const { container } = render(<Audio />);
    expect(container.querySelector('audio').src).toBe('');
  });

  it('Should play the "src" when the musicStatus is PLAYING', () => {
    useSelector
      .mockImplementationOnce(() => PLAYING)
      .mockImplementationOnce(() => 'example.wav');

    const playFn = jest.fn();
    const pauseFn = jest.fn();

    window.HTMLMediaElement.prototype.play = playFn;
    window.HTMLMediaElement.prototype.pause = pauseFn;

    render(<Audio ref={createRef()} />);
    expect(playFn).toHaveBeenCalled();
    expect(pauseFn).toHaveBeenCalledTimes(1);
  });

  it('Should pause the "src" when the musicStatus is PAUSED', () => {
    useSelector
      .mockImplementationOnce(() => PAUSED)
      .mockImplementationOnce(() => 'example.wav');

    const playFn = jest.fn();
    const pauseFn = jest.fn();

    window.HTMLMediaElement.prototype.play = playFn;
    window.HTMLMediaElement.prototype.pause = pauseFn;

    render(<Audio ref={createRef()} />);
    expect(playFn).not.toHaveBeenCalled();
    expect(pauseFn).toHaveBeenCalled();
  });
});
