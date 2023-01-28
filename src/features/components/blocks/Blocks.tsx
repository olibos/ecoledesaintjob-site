import { usePageContentContext } from '@/contexts/PageContentContext';
import type { BlocksComposition } from '@/services/GraphQL';

import { Banner } from '../banner';
import { Rassurants } from '../rassurants';
import { Teachers } from '../teachers';

function factory(item: BlocksComposition['components'][0], key: number)
{
    switch (item.__typename)
    {
        case "BannerComponentBlockListItem":
            return <Banner {...item.Content} key={key} />;
        case "RassurantsComponentBlockListItem":
            return <Rassurants {...item.Content} key={key} />;
        case "TeachersComponentBlockListItem":
            return <Teachers {...item.Content} key={key} />
        default:
            return <div key={key}>Missing component at {key}</div>;
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