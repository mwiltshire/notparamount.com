/** @jsxImportSource theme-ui */
import { Input as ThemeInput } from 'theme-ui';
import { useField } from 'formik';
import { Badge } from '../Badge/Badge';
import { Flex } from '../Flex/Flex';
import { Label } from '../Label/Label';
import { Stack } from '../Stack/Stack';
import { Box } from '../Box/Box';

interface CheckboxProps {
  name: string;
  label: string;
}

interface WrapperProps {
  children: React.ReactNode;
  hasError: boolean;
}

function Wrapper({ children, hasError }: WrapperProps) {
  return (
    <Flex
      sx={{
        position: 'relative',
        borderRadius: '3px',
        height: '1.3rem',
        width: '1.3rem',
        bg: 'white',
        color: 'text',
        outline: hasError ? '2px solid #ae4335' : null,
        '&:focus-within': {
          outline: hasError ? '2px solid #ae4335' : '2px solid #171717'
        }
      }}
    >
      {children}
    </Flex>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" sx={{ height: '100%', width: '100%' }}>
      <path
        sx={{ fill: 'black', stroke: 'black', strokeWidth: 1 }}
        d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
      />
    </svg>
  );
}

function Input(props: React.ComponentProps<typeof ThemeInput>) {
  return (
    <ThemeInput
      {...props}
      type="checkbox"
      sx={{
        position: 'absolute',
        left: 0,
        top: 0,
        height: '100%',
        width: '100%',
        opacity: 0,
        margin: 0,
        padding: 0,
        outline: 'none'
      }}
    />
  );
}

export function Checkbox({ name, label }: CheckboxProps) {
  const [field, meta] = useField({ name, type: 'checkbox' });
  const hasError = Boolean(meta.error && meta.touched);
  return (
    <Stack>
      <Box sx={{ position: 'relative' }}>
        <Stack direction="row">
          <Wrapper hasError={hasError}>
            <Input id={name} {...field} value={name} />
            {field.checked && <CheckIcon />}
          </Wrapper>
          <Label htmlFor={name}>{label}</Label>
        </Stack>
        {hasError && (
          <Flex
            flexDirection="row"
            justifyContent="flex-start"
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              transform: 'translateY(125%)'
            }}
          >
            <Badge variant="error">{meta.error}</Badge>
          </Flex>
        )}
      </Box>
    </Stack>
  );
}
