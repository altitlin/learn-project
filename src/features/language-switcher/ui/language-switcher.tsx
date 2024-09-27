import React from 'react';
import { useTranslation } from 'react-i18next';

import { BaseUIProps } from 'shared/types/component';
import { buildTestId } from 'shared/utils/testing';
import { classNames } from 'shared/utils/class-names';
import { Button } from 'shared/ui/button';

const Impl: React.FC<BaseUIProps> = ({ testId, className }) => {
  const { t, i18n } = useTranslation();

  const onToggle = React.useCallback(async () => {
    await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }, [i18n]);

  return (
    <Button
      variant='ghost'
      className={classNames('', {}, [className])}
      testId={buildTestId(testId, 'button-lang-switcher')}
      onClick={onToggle}
    >
      {t('Язык')}
    </Button>
  );
};

export const LanguageSwitcher = React.memo(Impl);
