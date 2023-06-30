import React, { FC } from "react";
import classNames from "classnames";

import {
  CardProps,
  CardHeaderProps,
  CardTitleProps,
  CardBodyProps,
  CardFooterProps,
} from "./Card.types";

export const Card: FC<CardProps> = ({ id, children, className, ...props }) => {
  const classes = ["card", className];
  return (
    <div id={id} className={classNames(classes)} {...props}>
      {children}
    </div>
  );
};

export const CardHeader: FC<CardHeaderProps> = ({
  id,
  children,
  className,
  ...props
}) => {
  const classes = ["card-header", className];
  return (
    <div id={id} className={classNames(classes)} {...props}>
      {children}
    </div>
  );
};

export const CardTitle: FC<CardTitleProps> = ({
  id,
  children,
  className,
  ...props
}) => {
  const classes = ["card-title", className];
  return (
    <div id={id} className={classNames(classes)} {...props}>
      {children}
    </div>
  );
};

export const CardBody: FC<CardBodyProps> = ({
  id,
  children,
  className,
  ...props
}) => {
  const classes = ["card-body", className];
  return (
    <div id={id} className={classNames(classes)} {...props}>
      {children}
    </div>
  );
};

export const CardFooter: FC<CardFooterProps> = ({
  id,
  children,
  className,
  ...props
}) => {
  const classes = ["card-footer", className];
  return (
    <div id={id} className={classNames(classes)} {...props}>
      {children}
    </div>
  );
};
