import React, { FC } from 'react';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { useField } from 'formik';
import { Theme } from './layout';

type CheckboxProps = {
  name: string;
  label: string;
};

const Checkbox: FC<CheckboxProps> = ({ label, ...props }) => {
  const theme = useTheme<Theme>();
  const [field, meta] = useField({
    name: props.name,
    type: 'checkbox'
  });
  return (
    <div
      css={css`
        position: relative;
      `}
    >
      <div
        css={css`
          display: flex;
          margin-bottom: 1rem;
          & label {
            margin-left: 0.5rem;
            font-size: ${theme.fontSizes.sm};
          }
          & svg {
            flex: 0 0 1.3rem;
            height: 1.3rem;
            ${!field.checked &&
              `border: 2px solid
              ${
                meta.error && meta.touched
                  ? theme.colors.red300
                  : theme.colors.gray100
              };`}
            border-radius: 3px;
            transition: all 300ms ease;
            background: ${field.checked
              ? theme.colors.green200
              : theme.colors.white};
          }
          & path {
            transition: opacity 300ms ease;
            fill: #fff;
            stroke: #fff;
            stroke-width: 1;
            opacity: 0;
            ${field.checked && 'opacity: 1;'}
          }
        `}
      >
        <input
          id={props.name}
          value={props.name}
          type="checkbox"
          {...field}
          {...props}
          css={css`
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            height: 1.3rem;
            width: 1.3rem;
            opacity: 0;
            margin: 0;
            padding: 0;
            cursor: pointer;
            &:focus + svg {
              border: 2px solid ${theme.colors.black};
            }
          `}
        />
        <svg viewBox="0 0 20 20">
          <path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z" />
        </svg>
        <label htmlFor={props.name}>{label}</label>
      </div>
      {meta.error && meta.touched && (
        <p
          css={css`
            color: ${theme.colors.red300};
            margin-bottom: 1rem;
          `}
        >
          <span
            css={css`
              font-size: ${theme.fontSizes.sm};
              border-radius: 0.3rem;
              padding: 0.3rem;
              background: ${theme.colors.red100};
            `}
          >
            {meta.error}
          </span>
        </p>
      )}
    </div>
  );
};

export default Checkbox;
