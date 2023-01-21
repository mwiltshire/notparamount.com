import { Box } from '../Box/Box';

function ChevronRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      style={{ height: '100%' }}
    >
      <path
        d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"
        fill="currentColor"
      />
    </svg>
  );
}

function ChevronLeft() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      style={{ height: '100%' }}
    >
      <path
        d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"
        fill="currentColor"
      />
    </svg>
  );
}

interface ButtonProps {
  onClick: () => void;
  position: 'right' | 'left';
  disabled: boolean;
}

export function Button({ onClick, position, disabled }: ButtonProps) {
  return (
    <Box
      aria-disabled={disabled}
      role="button"
      onClick={() => {
        if (disabled) {
          return;
        }
        onClick();
      }}
      sx={{
        position: 'absolute',
        top: '50%',
        zIndex: 1,
        height: '2rem',
        transform: 'translateY(-50%)',
        [position]: '1.5rem',
        opacity: disabled ? 0.5 : 1,
        color: 'white',
        cursor: 'pointer',
        padding: '0.25rem'
      }}
    >
      {position === 'right' ? <ChevronRight /> : <ChevronLeft />}
    </Box>
  );
}
