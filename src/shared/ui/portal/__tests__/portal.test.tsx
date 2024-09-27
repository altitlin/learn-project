import { render } from '@testing-library/react';

import { TEST_ATTRIBUTE_NAME } from 'shared/constants/testing';
import { getTestStuff } from 'shared/utils/testing';
import { Portal } from 'shared/ui/portal';

describe('shared.ui.portal', () => {
  test('should correctly render', () => {
    const testRootId = 'root';
    const testChild1Id = 'child1';
    const testChild2Id = 'child2';

    const { getByTestId } = render(
      <div {...getTestStuff(testRootId)}>
        <div {...getTestStuff(testChild1Id)} />
        <Portal>
          <div {...getTestStuff(testChild2Id)} />
        </Portal>
      </div>
    );

    const $rootNode = getByTestId(testRootId);

    expect($rootNode.contains(getByTestId(testChild1Id))).toBeTruthy();
    expect($rootNode.contains(getByTestId(testChild2Id))).toBeFalsy();
  });

  test('should correctly render childen in passed container', () => {
    const testChildId = 'child2';
    const selector = `[${TEST_ATTRIBUTE_NAME}=${testChildId}]`;
    const $nodeContainer = document.createElement('div');

    render(
      <Portal container={$nodeContainer}>
        <div {...getTestStuff(testChildId)} />
      </Portal>
    );

    expect($nodeContainer.querySelectorAll(selector).length).toBe(1);
  });
});
