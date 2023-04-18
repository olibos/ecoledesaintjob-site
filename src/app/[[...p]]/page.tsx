import {
  cache,
  use,
} from 'react';

import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import {
  setNavigation,
  setPage,
} from '@/contexts/server';
import {
  BackToTop,
  Footer,
  Header,
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
import { getUmbracoClient } from '@/services/Umbraco';

import { AosBridge } from './AosBridge';

type CmsPageProps = {
    params: {
        p?: string[];
    }
};

const getPage = cache(async function getPage(url: string, preview = false)
{
    const client = await getUmbracoClient();
    return await client.getPage({ url, preview });
});

const getUrl = (p?: string[]) => p ? `/${p.join('/')}/` : '/';

export default function CmsPage({ params: { p } }: CmsPageProps)
{
    const url = getUrl(p);
    const { navigation, page } = use(getPage(url));
    if (!page) notFound();

    setPage(page);
    setNavigation(navigation);
    return (
        <>
            <Header />
            <Blocks />
            <About />
            <Activities />
            <Testimonials />
            <NewsList />
            <Footer />
            <BackToTop />
            <AosBridge />
        </>);
}

export async function generateStaticParams()
{
    const client = await getUmbracoClient();
    const { content: { pages: { items: pages } } } = await client.getPages();
    return pages.map(({ url }) => ({ p: url.split('/').filter(Boolean) }));
}

export async function generateMetadata({ params: { p } }: CmsPageProps): Promise<Metadata>
{
    const url = getUrl(p);
    const { page } = await getPage(url);
    if (!page) return {};

    return {
        title: page.__typename !== 'Home' ? page.seo?.title : { absolute: page.seo?.title },
        description: page.seo?.description,
    };
}
