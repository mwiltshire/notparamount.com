import { Button } from '../Button/Button';
import { HashLink } from '../Link/Link';

export function HashLinkButton({
  children,
  ...rest
}: React.ComponentProps<typeof HashLink>) {
  return (
    <Button as={HashLink} {...rest} variant="inverted">
      {children}
    </Button>
  );
}
