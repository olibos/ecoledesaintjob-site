import { ImgHTMLAttributes } from 'react';

interface Image
{
    url: string;
    width: number;
    height: number;
}
interface PictureProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'>
{
    src: {
        desktop?: Partial<Image>;
        mobile?: Partial<Image>;
    }
}

export function Picture({ src: { desktop, mobile }, alt, ...props }: PictureProps)
{
    const defaultImage = mobile ?? desktop;
    if (!defaultImage)
    {
        return null;
    }

    return (
        <picture>
            {!!desktop && <source media="(min-width: 993px)" srcSet={desktop.url} width={desktop.width} height={desktop.height} />}
            <img src={defaultImage.url} width={defaultImage.width} height={defaultImage.height} alt={alt} {...props} />
        </picture>
    )
}