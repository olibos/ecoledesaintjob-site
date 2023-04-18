import classNames from 'classnames';
import Link from 'next/link';

import Logo from '@/assets/images/logo.svg';
import { getNavigation } from '@/contexts/server';
import {
  Email,
  MapMarker,
  Phone,
} from '@/icons';

import { Image } from '../image';
import Styles from './Footer.module.scss';

export function Footer()
{
    const { footerMenu } = getNavigation();
    return (
        <div className={classNames("container-fluid bg-secondary mt-5 py-5 px-sm-3 px-md-5", Styles.footer)}>
            <div className="row pt-5">
                <div className="col-lg-3 col-md-6 mb-5">
                    <Link href="/" className="navbar-brand font-weight-bold text-primary m-0 mb-4 p-0" style={{ fontSize: 40, lineHeight: "40px" }}>
                        <Image src={Logo} className="mr-2" alt="" width={110} />
                        <span className="text-white">Saint-Job</span>
                    </Link>
                    <p>Labore dolor amet ipsum ea, erat sit ipsum duo eos. Volup amet ea dolor et magna dolor, elitr rebum duo est sed diam elitr. Stet elitr stet diam duo eos rebum ipsum diam ipsum elitr.</p>
                </div>
                <div className={classNames("col-lg-4 col-md-6 mb-5", Styles.contact)}>
                    <h3 className="text-primary mb-4">Nous contacter</h3>
                    <div className="d-flex">
                        <MapMarker width={32} color="#17a2b8" />
                        <div className="pl-3">
                            <h5 className="text-white">Adresse</h5>
                            <p><a href="https://www.google.com/maps/dir//Rue Jean Benaets, 74, 1180 Uccle/" target="_blank" rel="noopener">Rue Jean Benaets, 74<br />1180 Uccle</a></p>
                        </div>
                    </div>
                    <div className="d-flex">
                        <Email width={32} color="#17a2b8" />
                        <div className="pl-3">
                            <h5 className="text-white">Email</h5>
                            <ul>
                                <li><a href="mailto:saintjob.secretariat@uccle.edu.brussels">Secrétariat</a></li>
                                <li><a href="mailto:saintjob.direction@uccle.edu.brussels">Direction</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="d-flex">
                        <Phone width={32} color="#17a2b8" />
                        <div className="pl-3">
                            <h5 className="text-white">Téléphone</h5>
                            <p><a href="tel:+3226052140">02 / 605 21 40</a></p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-5">
                    <h3 className="text-primary mb-4">Liens rapides</h3>
                    <ul>
                        {footerMenu.map(({ title, content }, key) =>
                            <li key={key}><Link href={content?.url}>{title || content?.name}</Link></li>
                        )}
                    </ul>
                </div>
            </div>
            <div className="container-fluid pt-5" style={{ borderTop: "1px solid rgba(23, 162, 184, .2)" }}>
                <p className="m-0 text-center text-white">
                    &copy; <Link className="text-primary font-weight-bold" href="/">École de Saint-Job</Link>. Tous droits réservé. <br />
                    Designed by <a className="text-primary font-weight-bold" href="https://htmlcodex.com" target="_blank" rel="noopener">HTML Codex</a>
                </p>
            </div>
        </div>
    );
}