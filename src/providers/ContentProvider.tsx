import React from 'react';
import { SiteContent } from '../services/contentful';

export const ContentContext = React.createContext<SiteContent | null>(null);

interface ContentProviderProps {
  children: React.ReactNode;
  content: SiteContent;
}

export function ContentProvider({ children, content }: ContentProviderProps) {
  return (
    <ContentContext.Provider value={content}>
      {children}
    </ContentContext.Provider>
  );
}
