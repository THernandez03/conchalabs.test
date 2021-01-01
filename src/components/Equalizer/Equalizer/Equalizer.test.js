import { render } from '@testing-library/react';

import { Equalizer } from './Equalizer';
import { useAudioDependencies } from '../../../hooks';

jest.mock('../../../hooks', () => ({
  useAudioDependencies: () => ({}),
}));

describe('<Equalizer/>', () => {
  it('Should render the component', () => {
    const { container } = render(<Equalizer />);
    expect(container).toMatchSnapshot();
  });
});
