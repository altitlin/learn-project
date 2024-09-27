import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from 'app/providers/store';
import { LanguageSwitcher } from 'features/language-switcher';
import { ThemeSwitcher } from 'features/theme-switcher';
import { SignInModal } from 'features/auth-by-username';
import { getAuthData, signOut } from 'entities/user';
import { BaseUIProps } from 'shared/types/component';
import { classNames } from 'shared/utils/class-names';
import { getTestStuff, buildTestId } from 'shared/utils/testing';
import { Button } from 'shared/ui/button';

import { MENU_ELEMENTS } from '../config/menu-elements';

import { MenuItem } from './menu-item';
import classes from './navbar.module.scss';

const Impl: React.FC<BaseUIProps> = ({ testId, className }) => {
  const [isOpenAuthModal, setIsOpenAuthModal] = React.useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const authData = useSelector(getAuthData);

  const { t } = useTranslation();

  const onShowAuthModal = React.useCallback(() => {
    setIsOpenAuthModal(true);
  }, []);

  const oCloseAuthModal = React.useCallback(() => {
    setIsOpenAuthModal(false);
  }, []);

  const onSignOut = React.useCallback(() => {
    dispatch(signOut());
  }, [dispatch]);

  React.useEffect(() => {
    if (authData) {
      oCloseAuthModal();
    }
  }, [authData, oCloseAuthModal]);

  return (
    <>
      <div {...getTestStuff(testId)} className={classNames(classes.navbar, {}, [className])}>
        <div {...getTestStuff(testId, 'links')} className={classes.links}>
          {MENU_ELEMENTS.map(({ to, title }, idx) => (
            <MenuItem
              key={to}
              to={to}
              title={title}
              testId={buildTestId(testId, `menu-item-${idx}`)}
            />
          ))}
        </div>
        <div {...getTestStuff(testId, 'switchers')} className={classes.switchers}>
          <LanguageSwitcher testId={buildTestId(testId, 'lang-switcher')} />
          <ThemeSwitcher testId={buildTestId(testId, 'theme-switcher')} />
          {!authData && (
            <Button
              variant='ghost'
              testId={buildTestId(testId, 'btn-open-auth-modal')}
              onClick={onShowAuthModal}
            >
              {t('Войти')}
            </Button>
          )}
          {authData && (
            <Button
              variant='ghost'
              testId={buildTestId(testId, 'btn-sign-out')}
              onClick={onSignOut}
            >
              {t('Выйти')}
            </Button>
          )}
        </div>
      </div>
      {isOpenAuthModal && (
        <SignInModal
          open={isOpenAuthModal}
          testId={buildTestId(testId, 'sign-in-modal-by-username')}
          onClose={oCloseAuthModal}
        />
      )}
    </>
  );
};

export const Navbar = React.memo(Impl);
