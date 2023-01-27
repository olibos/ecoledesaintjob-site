import classNames from 'classnames';
import Link from 'next/link';

import { BannerComponentBlockListItem } from '@/services/GraphQL';

import Styles from './Banner.module.scss';

export function Banner({headline, title, description, backgroundImage, buttonText, buttonTarget}: BannerComponentBlockListItem["Content"])
{
    return (
        <div className={classNames("container-fluid -bg-primary px-md-5 mb-5", Styles.banner)} >
            <div className="row align-items-center px-3">
                <div className="col-lg-6 text-center text-lg-left">
                    <h4 className="text-white mb-4 mt-5 mt-lg-0">{headline}</h4>
                    <h1 className="display-3 font-weight-bold text-white">{title}</h1>
                    <p className="text-white mb-4 text-justify">
                        {description}
                    </p>
                    {!!buttonTarget && !!buttonText && <Link href={buttonTarget.url} className="btn btn-secondary mt-1 py-3 px-5">{buttonText}</Link>}
                </div>
                {/* <div className="col-lg-6 text-center text-lg-right">
                    <img className="img-fluid mt-5" src="img/header.png" alt="" />
                </div> */}
            </div>
            {/* <div className={Styles.overlay}></div> */}
        </div>

    )
}