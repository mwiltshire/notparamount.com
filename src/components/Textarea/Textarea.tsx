import { Textarea as ThemeTextarea } from 'theme-ui';
import { useField } from 'formik';
import { Label } from '../Label/Label';
import { Stack } from '../Stack/Stack';
import { Badge } from '../Badge/Badge';
import { Flex } from '../Flex/Flex';
import { Box } from '../Box/Box';

interface TextareaProps extends React.ComponentProps<typeof ThemeTextarea> {
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

export function Textarea({ label, name }: TextareaProps) {
  const [field, meta] = useField<string>(name);
  const hasError = meta.touched && meta.error;
  return (
    <Stack>
      <Label htmlFor={name}>{label}</Label>
      <Box sx={{ position: 'relative' }}>
        <ThemeTextarea
          id={name}
          {...field}
          sx={hasError ? applyErrorStyles() : undefined}
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
