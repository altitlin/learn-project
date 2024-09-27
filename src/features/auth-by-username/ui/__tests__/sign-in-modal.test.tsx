import { render } from '@testing-library/react';

import { buildTestId, getTestStuff } from 'shared/lib/testing';
import { SignInModal } from 'features/auth-by-username/ui/sign-in-modal';

const TEST_ID = 'qwery';

jest.mock('shared/ui/modal', () => ({
  ...jest.requireActual('shared/ui/modal'),
  Modal: (props: any) => {
    if (!props.open) return null

    return (
      <div {...getTestStuff(props.testId)}>
        {props.children}
      </div>
    );
  },
}));

jest.mock('features/auth-by-username/ui/sign-in-form', () => ({
  ...jest.requireActual('features/auth-by-username/ui/sign-in-form'),
  SignInForm: (props: any) => {
    return <div {...getTestStuff(props.testId)} />;
  },
}));

describe('features.auth-by-username.ui.sign-in-modal', () => {
  test('should correctly render', () => {
    const mockOnClose = jest.fn();
    const { getByTestId, queryByTestId, rerender } = render(
      <SignInModal open={true} testId={TEST_ID} onClose={mockOnClose} />
    );

    expect(getByTestId(buildTestId(TEST_ID, 'sign-in-modal')!)).toBeInTheDocument();
    expect(getByTestId(buildTestId(TEST_ID, 'sign-in-form')!)).toBeInTheDocument();

    rerender(<SignInModal open={false} testId={TEST_ID} onClose={mockOnClose} />);

    expect(queryByTestId(buildTestId(TEST_ID, 'sign-in-modal')!)).toBeNull();
    expect(queryByTestId(buildTestId(TEST_ID, 'sign-in-form')!)).toBeNull();
  });
});
