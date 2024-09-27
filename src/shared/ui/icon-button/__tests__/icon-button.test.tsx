import { render } from '@testing-library/react';

import { getTestStuff } from 'shared/utils/testing';
import { IconButton } from 'shared/ui/icon-button';

const TEST_ID = 'icon-button';

describe('shared.ui.icon-button', () => {
  test('should render button with icon', () => {
    const testIconId = 'test-icon';
    const TestIcon = <div {...getTestStuff(testIconId)} />

    const { getByTestId } = render(<IconButton icon={TestIcon} testId={TEST_ID} />);

    expect(getByTestId(TEST_ID)).toBeInTheDocument();
    expect(getByTestId(testIconId)).toBeInTheDocument();
  });
});
