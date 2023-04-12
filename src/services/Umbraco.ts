import { GraphQLClient } from 'graphql-request';

import type { GetPageQuery } from '@/services/GraphQL';

import { getSdk } from './GraphQL';

// const {
//     umbracoCmsBaseUrl,
//     jwt: {
//         secret,
//         backendIssuer: audience,
//         frontendIssuer: issuer
//     }
// } = getConfiguration();
const umbracoCmsBaseUrl = 'http://localhost:40824/graphql/';
export type PageContent<PageType extends any = GetPageQuery['page']> = Omit<GetPageQuery, 'page'> &
{
    preview?: boolean;
//    navigation: NavigationFragment;
    page: PageType //& CrumbtrailFragment;
};

export const getUmbracoClient = () =>
{
    const client = new GraphQLClient(
        new URL("/graphql", umbracoCmsBaseUrl).toString(),
        {
            //headers: { Authorization: `Bearer ${sign({}, secret, { algorithm: 'HS256', expiresIn: "5m", audience, issuer })}` }
        });
    return getSdk(client);
};