import React, { FC, useState, useContext } from 'react';
import { css } from '@emotion/core';
import { motion, AnimatePresence } from 'framer-motion';

type AccordionProps = {
  children:
    | React.ReactElement<AccordionSectionProps>
    | React.ReactElement<AccordionSectionProps>[];
};

type AccordionSectionProps = {
  id: string;
  title: string;
  isOpen?: boolean;
  handleClick?: (id: string) => void;
};

type AccordionContext = {
  activeSection: string | null;
  toggleSection: (id: string | null) => void;
};

const Context = React.createContext<AccordionContext | null>(null);

export const Accordion: FC<AccordionProps> = ({ children }) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  return (
    <div
      css={css`
        & > * + * {
          margin-top: 0.5rem;
        }
      `}
    >
      <Context.Provider
        value={{
          activeSection,
          toggleSection: setActiveSection
        }}
      >
        {children}
      </Context.Provider>
    </div>
  );
};

export const AccordionSection: FC<AccordionSectionProps> = ({
  id,
  title,
  children
}) => {
  const { activeSection, toggleSection } = useContext(
    Context
  ) as AccordionContext;
  const isOpen = activeSection === id;
  return (
    <div
      css={css`
        background: #343232;
        border-radius: 0.5rem;
      `}
    >
      <h3
        css={css`
          margin: 0;
        `}
      >
        <button
          css={css`
            display: block;
            width: 100%;
            cursor: pointer;
            color: #fff;
            background: none;
            border: none;
            outline: none;
            padding: 1rem;
            text-align: left;
          `}
          id={`accordion-${id}`}
          aria-expanded={isOpen}
          aria-controls={`accordion-section-${id}`}
          onClick={() => toggleSection(isOpen ? null : id)}
        >
          {title}
        </button>
      </h3>
      <motion.div
        id={`accordion-section-${id}`}
        role="region"
        aria-labelledby={`accordion-${id}`}
        variants={{
          open: { height: 'auto' },
          collapsed: { height: 0, overflow: 'hidden' }
        }}
        initial="collapsed"
        animate={isOpen ? 'open' : 'collapsed'}
      >
        <div
          css={css`
            padding: 1rem;
          `}
        >
          {children}
        </div>
      </motion.div>
    </div>
  );
};
