import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from 'app/providers/store';
import { BaseUIProps } from 'shared/types/component';
import { buildTestId, getTestStuff } from 'shared/utils/testing';
import { classNames } from 'shared/utils/class-names';
import {
  useDynamicReducersLoad,
  DynamicReducersLoadOptions,
} from 'shared/hooks/use-dynamic-reducers-loader';
import { Button } from 'shared/ui/button';
import { Input } from 'shared/ui/input';

import { setUserName, setPassword, signInReducer } from '../model/slice';
import { getPassword, getUsername, getIsLoading, getError } from '../model/selectors';
import { signInByUsername } from '../model/services';

import classes from './sign-in-form.module.scss';

interface Props extends BaseUIProps {}

const reducers: DynamicReducersLoadOptions['reducers'] = {
  signIn: signInReducer,
};

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
    if (username && password) {
      dispatch(signInByUsername({ username, password }));
    }
  }, [username, password, dispatch]);

  useDynamicReducersLoad({ reducers });

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
