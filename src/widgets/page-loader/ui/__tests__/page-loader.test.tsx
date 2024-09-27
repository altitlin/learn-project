import { render } from '@testing-library/react'

import { buildTestId } from 'shared/utils/testing';
import { PageLoader } from 'widgets/page-loader';

const TEST_ID = 'page-loader';

describe('widgets.page-loader.uipage-loader.', () => {
  test('should render correctly', () => {
    const { getByTestId } = render(<PageLoader testId={TEST_ID} />);

    expect(getByTestId(buildTestId(TEST_ID, 'spinner-page')!)).toBeInTheDocument();
  });
});
