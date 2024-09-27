import { render } from '@testing-library/react';

import { Button } from 'shared/ui/button';

const TEST_ID = 'button';

describe('shared.ui.button', () => {
  test('should render button by default', () => {
    const { getByTestId } = render(<Button className='qwerty' testId={TEST_ID} />);

    const $button = getByTestId(TEST_ID);

    expect($button).toBeInTheDocument();
    expect($button).toHaveClass('qwerty', 'contained');
  });

  test('should render outlined button', () => {
    const { getByTestId } = render(
      <Button
        className='qwerty'
        variant='outlined'
        testId={TEST_ID}
      />
    );

    const $button = getByTestId(TEST_ID);

    expect($button).toHaveClass('qwerty', 'outlined');
  });

  test('should render ghost button', () => {
    const { getByTestId } = render(
      <Button
        className='qwerty'
        variant='ghost'
        testId={TEST_ID}
      />
    );

    const $button = getByTestId(TEST_ID);

    expect($button).toHaveClass('qwerty', 'ghost');
  });

  test('should render loading button', () => {
    const testChildren = 'qwerty';

    const { queryByText } = render(
      <Button
        loading
        className='qwerty'
        variant='ghost'
        testId={TEST_ID}
      >
        {testChildren}
      </Button>
    );

    expect(queryByText(testChildren)).toBeNull();
    expect(queryByText('Loading...')).toBeInTheDocument();
  });
});
