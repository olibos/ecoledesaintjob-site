import classNames from 'classnames';
import Link from 'next/link';

import Styles from './About.module.scss';

export function About()
{
    return (
        <div className={classNames("container-fluid py-5", Styles.about)}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5" data-aos="fade-right">
                        <img className="img-fluid rounded mb-5 mb-lg-0" src="img/about-1.jpg" alt="" />
                    </div>
                    <div className="col-lg-7" data-aos="fade-left">
                        <p className="section-title pr-5"><span className="pr-2">En savoir plus</span></p>
                        <h1 className="mb-4">Une école qui fait la différence pour vos enfants</h1>
                        <p>Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos,
                            ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est
                            dolor</p>
                        <div className="row pt-2 pb-4">
                            <div className="col-6 col-md-4">
                                <img className="img-fluid rounded" src="img/about-2.jpg" alt="" />
                            </div>
                            <div className="col-6 col-md-8">
                                <ul className="list-inline m-0">
                                    <li className="py-2 border-top border-bottom"><i className="fa fa-check text-primary mr-3"></i>Labore eos amet dolor amet diam</li>
                                    <li className="py-2 border-bottom"><i className="fa fa-check text-primary mr-3"></i>Etsea et sit dolor amet ipsum</li>
                                    <li className="py-2 border-bottom"><i className="fa fa-check text-primary mr-3"></i>Diam dolor diam elitripsum vero.</li>
                                </ul>
                            </div>
                        </div>
                        <Link href="/" className="btn btn-primary mt-2 py-2 px-4">En savoir plus</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}