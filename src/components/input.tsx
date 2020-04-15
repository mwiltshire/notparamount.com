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
            background: ${theme.colors.white};
            resize: vertical;
            min-height: 15rem;
            margin-bottom: 1rem;
            &::placeholder {
              color: ${theme.colors.gray100};
            }
            &:focus {
              outline: none;
              box-shadow: 0 0 0 2px inset
                ${meta.error && meta.touched
                  ? theme.colors.red300
                  : theme.colors.black};
            }
            ${meta.error &&
              meta.touched &&
              `box-shadow: 0 0 0 2px inset ${theme.colors.red300};`}
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
            background: ${theme.colors.white};
            margin-bottom: 1rem;
            transition: box-shadow 300ms ease;
            ${meta.error &&
              meta.touched &&
              `box-shadow: 0 0 0 2px inset ${theme.colors.red300};`}
            &::placeholder {
              color: ${theme.colors.gray100};
            }
            &:focus {
              outline: none;
              box-shadow: 0 0 0 2px inset
                ${meta.error && meta.touched
                  ? theme.colors.red300
                  : theme.colors.black};
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
    </>
  );
};

export default Input;
