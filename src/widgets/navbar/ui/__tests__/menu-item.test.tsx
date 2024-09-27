import { getTestStuff, buildTestId, renderWithProviders } from 'shared/utils/testing';
import { MenuItem } from 'widgets/navbar/ui/menu-item';

const TEST_ID = 'menu-item'

// @ts-ignore
const MockAppNavLink = (props) => (
  <div {...getTestStuff(props.testId)}>
    <div {...getTestStuff(props.testId, 'to')}>{props.to}</div>
    <div {...getTestStuff(props.testId, 'children')}>{props.children}</div>
  </div>
);
jest.mock('shared/ui/app-nav-link', () => ({
  ...jest.requireActual('shared/ui/app-nav-link'),
  // @ts-ignore
  AppNavLink: (props) => <MockAppNavLink {...props} />,
}))

describe('widgets.navbar.ui.menu-item', () => {
  test('should render correctly', () => {
    const testTo = 'qwerty/asdf';
    const testTitle = 'qwerty';

    const { getByTestId } = renderWithProviders(
      <MenuItem
        to={testTo}
        title={testTitle}
        testId={TEST_ID}
      />,
      {}
    );

    expect(getByTestId(buildTestId(TEST_ID, 'menu-item-link')!)).toBeInTheDocument();
    expect(getByTestId(buildTestId(TEST_ID, 'menu-item-link.to')!)).toHaveTextContent(testTo);
    expect(getByTestId(buildTestId(TEST_ID, 'menu-item-link.children')!)).toHaveTextContent(testTitle);
  });
});
