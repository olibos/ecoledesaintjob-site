import {
  createContext,
  useContext,
} from 'react';

import type { PageContent } from '@/services/Umbraco';

const context = createContext(null);
context.displayName = "PageContentContext";

export const PageContentContextProvider = context.Provider;

export const usePageContentContext = <TPage extends {}>() => useContext<PageContent<TPage>>(context);