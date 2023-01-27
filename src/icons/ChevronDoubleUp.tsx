import { IconProps } from './IconProps';

export function ChevronDoubleUp({ width, height, color, title = "Haut de page" }: IconProps)
{
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width} height={height} fill={color}>
            <title>{title}</title>
            <path d="M7.41,18.41L6,17L12,11L18,17L16.59,18.41L12,13.83L7.41,18.41M7.41,12.41L6,11L12,5L18,11L16.59,12.41L12,7.83L7.41,12.41Z" />
        </svg>
    )
}