import { usePageContentContext } from '@/contexts/PageContentContext';
import type { BlocksComposition } from '@/services/GraphQL';

import { Banner } from '../banner';
import { Rassurants } from '../rassurants';

function factory(item: BlocksComposition['components'][0], key: number)
{
    switch (item.__typename)
    {
        case "BannerComponentBlockListItem":
            return <Banner {...item.Content} key={key} />;
        case "RassurantComponentBlockListItem":
            return <Rassurants {...item.Content} key={key} />;
        default:
            return <div key={key}>Missing {item["__typename"]}</div>;
    }
}
export function Blocks()
{
    const { page: { components } } = usePageContentContext<BlocksComposition>();
    if (!components)
    {
        return null;
    }

    return <>{components.map(factory)}</>
}