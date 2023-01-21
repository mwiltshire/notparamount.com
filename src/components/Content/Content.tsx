import {
  documentToReactComponents,
  Options
} from '@contentful/rich-text-react-renderer';
import { useContent } from '../../hooks/useContent';
import { SiteContent } from '../../services/contentful';

interface ContentProps {
  id: keyof SiteContent;
  options?: Options;
  listItemComponent?: 'li' | React.ComponentType<any>;
}

export function Content({
  id,
  options,
  listItemComponent: ListIem = 'li'
}: ContentProps) {
  const { get } = useContent();

  const content = get(id);

  if (typeof content === 'string') {
    return <>{content}</>;
  }

  if (Array.isArray(content)) {
    return (
      <>
        {content.map((i) => (
          <ListIem key={i}>{i}</ListIem>
        ))}
      </>
    );
  }

  return <>{documentToReactComponents(content, options)}</>;
}
