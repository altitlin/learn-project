import { fireEvent, act } from '@testing-library/react';

import { renderWithProviders, buildTestId } from 'shared/utils/testing';
import { PageError } from 'widgets/page-error';

const TEST_ID = 'page-error';

describe('widgets.page-error', () => {
  test('should correctly render', () => {
    const { getByTestId } = renderWithProviders(<PageError testId={TEST_ID} />, {});

    expect(getByTestId(TEST_ID)).toBeInTheDocument();
    expect(getByTestId(buildTestId(TEST_ID, 'description')!)).toBeInTheDocument();

    const $btnReloadPage = getByTestId(buildTestId(TEST_ID, 'btn-reload-page')!)

    expect($btnReloadPage).toBeInTheDocument();

    act(() => fireEvent.click($btnReloadPage));
  });
});
