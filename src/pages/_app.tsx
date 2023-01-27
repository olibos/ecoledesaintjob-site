import '@/styles/style.scss';

import { useEffect } from 'react';

import AOS from 'aos';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import AppleTouchIcon from '@/assets/favicon/apple-touch-icon.png';
import FavIcon16 from '@/assets/favicon/favicon-16x16.png';
import FavIcon32 from '@/assets/favicon/favicon-32x32.png';
import SafariPinnedTab from '@/assets/favicon/safari-pinned-tab.svg';
import WebManifest from '@/assets/favicon/site.webmanifest';

export default function SaintJobApp({ Component, pageProps }: AppProps) 
{
  useEffect(() => { AOS.init(); }, []);
  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes={`${AppleTouchIcon.width}x${AppleTouchIcon.height}`} href={AppleTouchIcon.src} />
        <link rel="icon" type="image/png" sizes={`${FavIcon32.width}x${FavIcon32.height}`} href={FavIcon32.src} />
        <link rel="icon" type="image/png" sizes={`${FavIcon16.width}x${FavIcon16.height}`} href={FavIcon16.src} />
        <link rel="manifest" href={WebManifest} />
        <link rel="mask-icon" href={SafariPinnedTab.src} color="#2b5797" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

