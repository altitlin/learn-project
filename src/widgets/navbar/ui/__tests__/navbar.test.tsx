import { fireEvent, act } from '@testing-library/react';

import { RootState } from 'app/providers/store';
import { getTestStuff, buildTestId, renderWithProviders } from 'shared/utils/testing';
import { Navbar } from 'widgets/navbar';
import { MENU_ELEMENTS } from 'widgets/navbar/config/menu-elements';

const TEST_ID = 'navbar';
const mockOnClose = jest.fn();

// @ts-ignore
const MockMenuItem = (props) => (
  <div {...getTestStuff(props.testId)}>
    <div {...getTestStuff(props.testId, 'title')}>{props.title}</div>
  </div>
);
jest.mock('widgets/navbar/ui/menu-item', () => ({
  ...jest.requireActual('widgets/navbar/ui/menu-item'),
  // @ts-ignore
  MenuItem: (props) => <MockMenuItem {...props} />,
}));

jest.mock('features/language-switcher', () => ({
  ...jest.requireActual('features/language-switcher'),
  // @ts-ignore
  LanguageSwitcher: (props) => <div {...getTestStuff(props.testId)} />,
}));

jest.mock('features/theme-switcher', () => ({
  ...jest.requireActual('features/theme-switcher'),
  // @ts-ignore
  ThemeSwitcher: (props) => <div {...getTestStuff(props.testId)} />,
}));

// @ts-ignore
const MockSignInModal = (props) => {
  if (!props.open) return null;

  const onClose = () => {
    mockOnClose();
    props.onClose();
  };

  return (
    <div {...getTestStuff(props.testId)}>
      <div {...getTestStuff(props.testId, 'onClose')} onClick={onClose} />
    </div>
  );
};
jest.mock('features/auth-by-username', () => ({
  ...jest.requireActual('features/auth-by-username'),
  // @ts-ignore
  SignInModal: (props) => <MockSignInModal {...props} />,
}));

describe('widgets.navbar.ui.navbar', () => {
  test('should render correctly', () => {
    const testInitialState = {
      user: { authData: undefined },
    } as RootState;

    const { getByTestId, queryByTestId } = renderWithProviders(
      <Navbar testId={TEST_ID} />,
      { initialState: testInitialState }
    );

    expect(getByTestId(TEST_ID)).toBeInTheDocument();
    expect(getByTestId(buildTestId(TEST_ID, 'links')!)).toBeInTheDocument();
    MENU_ELEMENTS.forEach(({ title }, idx) => {
      expect(getByTestId(buildTestId(TEST_ID, `menu-item-${idx}`)!)).toBeInTheDocument();
      expect(getByTestId(buildTestId(TEST_ID, `menu-item-${idx}.title`)!)).toHaveTextContent(title);
    });
    expect(getByTestId(buildTestId(TEST_ID, 'lang-switcher')!)).toBeInTheDocument();
    expect(getByTestId(buildTestId(TEST_ID, 'theme-switcher')!)).toBeInTheDocument();

    const nodeBtnOpenModalAuth = getByTestId(buildTestId(TEST_ID, 'btn-open-auth-modal')!);
    expect(nodeBtnOpenModalAuth).toBeInTheDocument();
    expect(queryByTestId(buildTestId(TEST_ID, 'sign-in-modal-by-username')!)).toBeNull();

    act(() => fireEvent.click(nodeBtnOpenModalAuth));

    expect(getByTestId(buildTestId(TEST_ID, 'sign-in-modal-by-username')!)).toBeInTheDocument();
  });

  test('should properly handle sign out', () => {
    const testInitialState = {
      user: { authData: {} },
    } as RootState;

    const { getByTestId, queryByTestId } = renderWithProviders(
      <Navbar testId={TEST_ID} />,
      { initialState: testInitialState }
    );

    expect(queryByTestId(buildTestId(TEST_ID, 'sign-in-modal-by-username')!)).toBeNull();
    expect(queryByTestId(buildTestId(TEST_ID, 'btn-open-auth-modal')!)).toBeNull();

    const $btnSignOut = getByTestId(buildTestId(TEST_ID, 'btn-sign-out')!);

    expect($btnSignOut).toBeInTheDocument();

    act(() => fireEvent.click($btnSignOut));
  });

  test('should properly close auth modal', () => {
    const testInitialState = {
      user: { authData: undefined },
    } as RootState;

    const { getByTestId, queryByTestId } = renderWithProviders(
      <Navbar testId={TEST_ID} />,
      { initialState: testInitialState }
    );

    const $btnOpenModalAuth = getByTestId(buildTestId(TEST_ID, 'btn-open-auth-modal')!);

    expect(queryByTestId(buildTestId(TEST_ID, 'sign-in-modal-by-username')!)).toBeNull();

    act(() => fireEvent.click($btnOpenModalAuth));

    expect(queryByTestId(buildTestId(TEST_ID, 'sign-in-modal-by-username')!)).toBeInTheDocument();

    const $onClose = getByTestId(buildTestId(TEST_ID, 'sign-in-modal-by-username.onClose')!);

    act(() => fireEvent.click($onClose));

    expect(queryByTestId(buildTestId(TEST_ID, 'sign-in-modal-by-username')!)).toBeNull();
    expect(mockOnClose).toHaveBeenCalled();
  });
});
