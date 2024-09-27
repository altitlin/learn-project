import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from 'app/providers/store';
import { BaseUIProps } from 'shared/types/component';
import { buildTestId, getTestStuff } from 'shared/lib/testing';
import { classNames } from 'shared/lib/class-names';
import { Button } from 'shared/ui/button';
import { Input } from 'shared/ui/input';

import { setUserName, setPassword } from '../model/slice';
import { getPassword, getUsername, getIsLoading, getError } from '../model/selectors';
import { signInByUsername } from '../model/services';

import classes from './sign-in-form.module.scss';

interface Props extends BaseUIProps {}

const Impl: React.FC<Props> = ({ testId, className }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const username = useSelector(getUsername);
  const password = useSelector(getPassword);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  const onUsernameChange = React.useCallback(
    ({ target: { value: currentUsername } }: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setUserName(currentUsername));
    }, [dispatch]
  );

  const onPasswordChange = React.useCallback(
    ({ target: { value: currentPassword } }: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setPassword(currentPassword));
    }, [dispatch]
  );

  const onSignIn = React.useCallback(() => {
    dispatch(signInByUsername({ username, password }));
  }, [username, password, dispatch]);

  return (
    <div
      {...getTestStuff(testId)}
      className={classNames(classes.signInForm, {}, [className])}
    >
      <h2 className={classes.title}>{t('Форма авторизации')}</h2>
      <Input
        autoFocus
        value={username}
        placeholder={t('Введите логин')}
        testId={buildTestId(testId, 'input-username')}
        onChange={onUsernameChange}
      />
      <Input
        type='password'
        value={password}
        placeholder={t('Введите пароль')}
        testId={buildTestId(testId, 'input-password')}
        onChange={onPasswordChange}
      />
      {error && (
        <div>{error}</div>
      )}
      <Button
        loading={isLoading}
        className={classes.signInBtn}
        testId={buildTestId(testId, 'btn-login')}
        onClick={onSignIn}
      >
        {t('Войти')}
      </Button>
    </div>
  );
};

export const SignInForm = React.memo(Impl);
