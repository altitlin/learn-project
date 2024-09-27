import React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';

import { BaseUIProps } from 'shared/types/component';
import { classNames } from 'shared/utils/class-names';
import { getTestStuff } from 'shared/utils/testing';

import classes from './app-nav-link.module.scss';

type AppNavLinkVariant = 'primary' | 'secondary';

interface Props extends NavLinkProps {
  variant?: AppNavLinkVariant;
  activeClassName?: string;
}

const Impl: React.FC<React.PropsWithChildren<Props & BaseUIProps>> = ({
  testId,
  className,
  to,
  variant = 'primary',
  activeClassName = '',
  children,
  ...props
}) => (
  <NavLink
    to={to}
    className={
      ({ isActive }) => classNames(
        classes.appNavLink,
        { [activeClassName]: isActive },
        [className, classes[variant]],
      )
    }
    {...getTestStuff(testId)}
    {...props}
  >
    {children}
  </NavLink>
);

export const AppNavLink = React.memo(Impl);
