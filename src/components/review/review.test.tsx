import {render, screen} from '@testing-library/react';
import Review from './review';
import {makeFakeReview} from '../../utils/mocks';

const fakeReview = makeFakeReview();

describe('Component: Review', () => {
  it('should render correctly', () => {
    render(<Review review={fakeReview} />)
    expect(screen.getByAltText('Reviews avatar')).toBeInTheDocument();
  });
});
