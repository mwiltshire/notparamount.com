import { Input as ThemeInput } from 'theme-ui';
import { useField } from 'formik';
import { Label } from '../Label/Label';
import { Stack } from '../Stack/Stack';
import { Badge } from '../Badge/Badge';
import { Flex } from '../Flex/Flex';
import { Box } from '../Box/Box';

interface InputProps extends React.ComponentProps<typeof ThemeInput> {
  label: string;
  name: string;
}

function applyErrorStyles() {
  return {
    outline: '2px solid #ae4335',
    '&:focus': {
      outline: '2px solid #ae4335'
    }
  };
}

export function Input({ label, type, name }: InputProps) {
  const [field, meta] = useField<string>(name);
  const hasError = meta.touched && meta.error;
  return (
    <Stack>
      <Label htmlFor={name}>{label}</Label>
      <Box sx={{ position: 'relative' }}>
        <ThemeInput
          id={name}
          type={type}
          {...field}
          sx={hasError ? applyErrorStyles() : undefined}
          autofillBackgroundColor="white"
        />
        {hasError && (
          <Flex
            flexDirection="row"
            justifyContent="flex-end"
            sx={{
              position: 'absolute',
              bottom: 0,
              right: 0,
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
