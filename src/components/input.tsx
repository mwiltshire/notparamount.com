import React, { FC } from 'react';
import { css } from '@emotion/core';
import { useField } from 'formik';
import { useTheme } from 'emotion-theming';
import { Theme } from './layout';

type InputProps = {
  label: string;
  placeholder: string;
  name: string;
  type?: string;
  textarea?: boolean;
};

const Input: FC<InputProps> = ({
  type = 'text',
  label,
  textarea = false,
  ...props
}) => {
  const theme = useTheme<Theme>();
  const [field, meta] = useField<string>(props.name);
  return (
    <>
      <label
        css={css`
          display: inline-block;
          margin-bottom: 0.5rem;
          font-weight: ${theme.fontWeights.bold};
        `}
        htmlFor={props.name}
      >
        {label}
      </label>
      {textarea ? (
        <textarea
          css={css`
            display: block;
            width: 100%;
            padding: 1rem;
            border-radius: 0.3rem;
            border: none;
            background: #fff;
            resize: vertical;
            min-height: 15rem;
            margin-bottom: 1rem;
            &::placeholder {
              color: #bfbfbf;
            }
            &:focus {
              outline: none;
              box-shadow: 0 0 0 2px inset
                ${meta.error && meta.touched
                  ? theme.colors.error
                  : theme.colors.backgroundDark};
            }
            ${meta.error &&
              meta.touched &&
              `box-shadow: 0 0 0 2px inset ${theme.colors.error};`}
            &::placeholder {
              color: #bfbfbf;
            }
          `}
          id={props.name}
          {...field}
          {...props}
        />
      ) : (
        <input
          css={css`
            display: block;
            width: 100%;
            padding: 1rem;
            border-radius: 0.3rem;
            border: none;
            background: #fff;
            margin-bottom: 1rem;
            transition: box-shadow 300ms ease;
            ${meta.error &&
              meta.touched &&
              `box-shadow: 0 0 0 2px inset ${theme.colors.error};`}
            &::placeholder {
              color: #bfbfbf;
            }
            &:focus {
              outline: none;
              box-shadow: 0 0 0 2px inset
                ${meta.error && meta.touched
                  ? theme.colors.error
                  : theme.colors.backgroundDark};
            }
          `}
          id={props.name}
          type={type}
          {...field}
          {...props}
        />
      )}
      {meta.error && meta.touched && (
        <p
          css={css`
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            color: ${theme.colors.error};
            margin: 0;
          `}
        >
          <span
            css={css`
              font-size: ${theme.fontSizes.sm};
              border-radius: 0.3rem;
              padding: 0.3rem;
              background: #ffdcdc;
            `}
          >
            {meta.error}
          </span>
        </p>
      )}
    </>
  );
};

export default Input;
