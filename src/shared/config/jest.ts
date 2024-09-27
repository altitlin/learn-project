import '@testing-library/jest-dom';
import { configure } from '@testing-library/dom';

import { TEST_ATTRIBUTE_NAME } from 'shared/constants/testing';

configure({
  testIdAttribute: TEST_ATTRIBUTE_NAME
});
