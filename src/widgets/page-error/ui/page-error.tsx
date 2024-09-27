import React from 'react';
import { useTranslation } from 'react-i18next';

import { BaseUIProps } from 'shared/types/component';
import { getTestStuff, buildTestId } from 'shared/utils/testing';
import { classNames } from 'shared/utils/class-names';
import { Button } from 'shared/ui/button';

import classes from './page-error.module.scss';

const Impl: React.FC<BaseUIProps> = ({ className, testId }) => {
  const { t } = useTranslation();

  const onReloadPage = React.useCallback(() => {
    location.reload();
  }, []);

  return (
    <div
      {...getTestStuff(testId)}
      className={classNames(classes.pageError, {}, [className])}
    >
      <p {...getTestStuff(testId, 'description')}>
        {t('Произошла непредвиденная ошибка')}
      </p>
      <Button
        testId={buildTestId(testId, 'btn-reload-page')}
        onClick={onReloadPage}
      >
        {t('Обновить страницу')}
      </Button>
    </div>
  );
};

export const PageError = React.memo(Impl);
