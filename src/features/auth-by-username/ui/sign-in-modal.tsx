import React from 'react';

import { BaseUIProps } from 'shared/types/component';
import { buildTestId } from 'shared/lib/testing';
import { Modal } from 'shared/ui/modal';

import { SignInForm } from './sign-in-form';

interface Props extends BaseUIProps {
  open: boolean;
  onClose: () => void;
}

const Impl: React.FC<Props> = ({
  open,
  testId,
  onClose,
 }) => {
  return (
    <Modal
      open={open}
      testId={buildTestId(testId, 'sign-in-modal')}
      onClose={onClose}
    >
      <SignInForm testId={buildTestId(testId, 'sign-in-form')} />
    </Modal>
  );
};

export const SignInModal = React.memo(Impl);
