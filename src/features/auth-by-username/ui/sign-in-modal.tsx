import React from 'react';

import { BaseUIProps } from 'shared/types/component';
import { buildTestId } from 'shared/utils/testing';
import { Modal } from 'shared/ui/modal';
import { Spinner } from 'shared/ui/spinner';

const SignInForm = React.lazy(
  () => import('./sign-in-form').then(({ SignInForm }) => ({ default: SignInForm }))
);

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
      <React.Suspense
        fallback={<Spinner testId={buildTestId(testId, 'sign-in-form')} />}
      >
        <SignInForm testId={buildTestId(testId, 'sign-in-form')} />
      </React.Suspense>
    </Modal>
  );
};

export const SignInModal = React.memo(Impl);
