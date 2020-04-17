import React, { FC } from 'react';
import { css } from '@emotion/core';
import { useField } from 'formik';
import { useTheme } from 'emotion-theming';
import { Theme } from './layout';
import Tag from './tag';

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
              box-shadow: inset 0 0 0 2px
                ${meta.error && meta.touched
                  ? theme.colors.red300
                  : theme.colors.black};
            }
            ${meta.error &&
              meta.touched &&
              `box-shadow: inset 0 0 0 2px ${theme.colors.red300};`}
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
              `box-shadow: inset 0 0 0 2px ${theme.colors.red300};`}
            &::placeholder {
              color: ${theme.colors.gray100};
            }
            &:focus {
              outline: none;
              box-shadow: inset 0 0 0 2px
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
        <div
          css={css`
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            margin-bottom: 1rem;
          `}
        >
          <Tag background="red300" color="white">
            {meta.error}
          </Tag>
        </div>
      )}
    </>
  );
};

export default Input;
