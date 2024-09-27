import { render } from '@testing-library/react';

import { buildTestId } from 'shared/utils/testing';
import { Spinner } from 'shared/ui/spinner';

const TEST_ID = 'spinner';

describe('shared.ui.spinner', () => {
  test('should render spinner', () => {
    const { getByTestId } = render(<Spinner testId={TEST_ID} />);

    expect(getByTestId(TEST_ID)).toBeInTheDocument();
    expect(getByTestId(buildTestId(TEST_ID, 'spinner')!)).toBeInTheDocument();
  });
});
