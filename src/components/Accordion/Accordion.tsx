/** @jsxImportSource theme-ui */
import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { Heading } from '../Heading/Heading';
import { Box } from '../Box/Box';
import { Stack } from '../Stack/Stack';

interface AccordionProps {
  children: React.ReactNode;
}

interface AccordionItemProps {
  children: React.ReactNode;
  id: string;
  title: string;
  isOpen?: boolean;
  handleClick?: (id: string) => void;
}

interface AccordionContext {
  activeSection: string | null;
  toggleSection: (id: string | null) => void;
}

const Context = React.createContext<AccordionContext>({
  activeSection: '',
  toggleSection: () => {}
});

export function Accordion({ children }: AccordionProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  return (
    <Context.Provider
      value={{ activeSection, toggleSection: setActiveSection }}
    >
      <Stack>{children}</Stack>
    </Context.Provider>
  );
}

interface AccordionItemButtonProps {
  id: string;
  isExpanded: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

function AccordionItemButton({
  id,
  isExpanded,
  onClick,
  children
}: AccordionItemButtonProps) {
  return (
    <Box
      as="button"
      id={`accordion-${id}`}
      aria-expanded={isExpanded}
      aria-controls={`accordion-section-${id}`}
      p="1rem"
      sx={{
        display: 'flex',
        alignItems: 'center',
        background: 'none',
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        width: '100%',
        font: 'inherit',
        color: 'inherit'
      }}
      onClick={onClick}
    >
      {children}
    </Box>
  );
}

interface AccordionItemButtonIconProps {
  isAccordionItemExpanded: boolean;
}

function AccordionItemButtonIcon({
  isAccordionItemExpanded
}: AccordionItemButtonIconProps) {
  return (
    <svg role="img" viewBox="0 0 21 21" sx={{ height: '100%' }}>
      <motion.path
        variants={{
          close: { opacity: 0 },
          open: { opacity: 1 }
        }}
        initial="visible"
        animate={isAccordionItemExpanded ? 'close' : 'open'}
        d="M0 10.5L21 10.5"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={4}
      />
      <motion.path
        variants={{
          open: { rotate: 0 },
          close: { rotate: 90 }
        }}
        initial="default"
        animate={isAccordionItemExpanded ? 'close' : 'open'}
        d="M10.5 0L10.5 21"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={4}
      />
    </svg>
  );
}

const MotionBox = motion(Box);

export function AccordionItem({ id, title, children }: AccordionItemProps) {
  const { activeSection, toggleSection } = useContext(Context);
  const isExpanded = activeSection === id;
  return (
    <Box bg="darkGray" sx={{ borderRadius: '0.5rem' }}>
      <Heading as="h3" sx={{ m: 0, color: 'white', fontSize: 'medium' }}>
        <AccordionItemButton
          id={id}
          isExpanded={isExpanded}
          onClick={() => toggleSection(isExpanded ? null : id)}
        >
          <Box
            as="span"
            sx={{
              display: 'inline-flex',
              height: '0.8rem',
              marginRight: '0.5rem'
            }}
          >
            <AccordionItemButtonIcon isAccordionItemExpanded={isExpanded} />
          </Box>
          {title}
        </AccordionItemButton>
      </Heading>
      <MotionBox
        id={`accordion-section-${id}`}
        role="region"
        aria-labelledby={`accordion-${id}`}
        variants={{
          open: { height: 'auto' },
          collapsed: { height: 0, overflow: 'hidden' }
        }}
        initial="collapsed"
        animate={isExpanded ? 'open' : 'collapsed'}
      >
        <Box p="1rem">{children}</Box>
      </MotionBox>
    </Box>
  );
}
