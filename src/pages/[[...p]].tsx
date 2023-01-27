import {
  GetStaticPaths,
  GetStaticProps,
} from 'next';
import Head from 'next/head';

import { PageContentContextProvider } from '@/contexts/PageContentContext';
import {
  BackToTop,
  Footer,
  Header,
  Teachers,
} from '@/features/common';
import {
  Blocks,
  NewsList,
  Testimonials,
} from '@/features/components';
import {
  About,
  Activities,
} from '@/features/home';
import type { PageContent } from '@/services/Umbraco';

export default function CmsPage(props: PageContent)
{
  return (
    <PageContentContextProvider value={props}>
      <Head>
        <title>{props.page.seo?.title}</title>
      </Head>
      <Header />
      <Blocks />
      <About />
      <Activities />
      <Teachers />
      <Testimonials />
      <NewsList />
      <Footer />
      <BackToTop />
    </PageContentContextProvider>
  );
}

export const getStaticPaths: GetStaticPaths = async () =>
{
  const { getUmbracoClient } = await import('@/services/Umbraco');
  const client = getUmbracoClient();
  const { content: { pages: { items: pages } } } = await client.getPages();
  return {
    paths: pages.map(({ url }) => url),
    fallback: false,
  }
}

// `getStaticPaths` requires using `getStaticProps`
export const getStaticProps: GetStaticProps = async (context) =>
{
  const urlSegments = context.params.p as string[];
  const { getUmbracoClient } = await import('@/services/Umbraco');
  const client = getUmbracoClient();
  const props = await client.getPage({ url: urlSegments ? `/${urlSegments.join('/')}/` : '/' });
  return {
    props
  }
}