import '@/styles/style.scss';

import classNames from 'classnames';
import {
  Handlee,
  Nunito,
} from 'next/font/google';

import AppleTouchIcon from '@/assets/favicon/apple-touch-icon.png';
import FavIcon16 from '@/assets/favicon/favicon-16x16.png';
import FavIcon32 from '@/assets/favicon/favicon-32x32.png';
import WebManifest from '@/assets/favicon/site.webmanifest';
import { getIcon } from '@/helpers';

export const metadata = {
    title: { default: 'Saint-Job', template: '%s | Saint-Job' },
    icons: {
        apple: getIcon(AppleTouchIcon),
        icon: [
            getIcon(FavIcon32),
            getIcon(FavIcon16),
        ]
    },
    themeColor: '#17a2b8',
    manifest: WebManifest
}

const nunito = Nunito({ subsets: ['latin'] });
const handlee = Handlee({ weight: "400", subsets: ['latin'] });

export default function CmsLayout({
    children
}: {
    children: React.ReactNode,
})
{
    return (
        <html lang="fr">
            <head>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />
            </head>
            <body className={classNames(nunito.className, handlee.className)}>{children}</body>
        </html>
    );
}
