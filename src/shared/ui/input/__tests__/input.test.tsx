import { render } from '@testing-library/react';

import { Input } from 'shared/ui/input';

const TEST_ID = 'input';

describe('shared.ui.input', () => {
  test('should render input by default', () => {
    const { getByTestId } = render(<Input testId={TEST_ID} />);

    const $input = getByTestId(TEST_ID);

    expect($input).toBeInTheDocument();
  });

  test('should render input with different types', () => {
    const { getByTestId } = render(<Input testId={TEST_ID} type='password' />);

    const $input = getByTestId(TEST_ID);

    expect($input).toBeInTheDocument();
    expect($input).toHaveAttribute('type', 'password');
  });
});
