import classNames from 'classnames';
import Link from 'next/link';

import Logo from '@/assets/images/logo2.svg';
import {
  getNavigation,
  getUrl,
} from '@/contexts/server';

import { Image } from '../image';

export function Header()
{
    const url = getUrl(); 
    const { topMenu } = getNavigation();
    return (
        <div className="container-fluid bg-light position-relative shadow">
            <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0 px-lg-5">
                <Link href="/" className="navbar-brand font-weight-bold text-secondary" style={{ fontSize: 50 }}>
                    <i className="flaticon-043-teddy-bear"></i>
                    <Image src={Logo} alt="École de Saint-Job" width={75} priority />
                    <span className="text-primary">Saint-Job</span>
                </Link>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div className="navbar-nav font-weight-bold mx-auto py-0">
                        {topMenu.map(({content, title}, key)=>
                            <Link href={content.url} key={key} className={classNames("nav-item nav-link", url === content.url && "active")}>{title || content.name}</Link>
                        )}
                        {/* <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu rounded-0 m-0">
                                <a href="blog.html" className="dropdown-item">Blog Grid</a>
                                <a href="single.html" className="dropdown-item">Blog Detail</a>
                            </div>
                        </div> */}
                    </div>
                    {/* <a href="" className="btn btn-primary px-4">Join Class</a> */}
                </div>
            </nav>
        </div>
    );
}