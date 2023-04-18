import type {
  IconDescriptor,
} from 'next/dist/lib/metadata/types/metadata-types';
import type { StaticImageData } from 'next/image';

export function getIcon(image: StaticImageData): IconDescriptor
{
    return {
        url: image.src,
        sizes:`${image.width}x${image.height}`
    };
}