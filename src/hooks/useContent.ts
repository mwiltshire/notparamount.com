import { useContext } from 'react';
import { ContentContext } from '../providers/ContentProvider';
import { SiteContent } from '../services/contentful';

export function useContent() {
  const content = useContext(ContentContext);

  // This shoukd never happen, but just to satisfy TS.
  if (!content) {
    throw new Error('No content provided to context.');
  }

  const get = <T extends keyof SiteContent>(id: T): SiteContent[T] =>
    content[id];

  return { get };
}
