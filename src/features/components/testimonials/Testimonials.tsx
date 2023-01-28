import classNames from 'classnames';
import Slider, { Settings } from 'react-slick';

import Styles from './Testimonials.module.scss';

const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    responsive:
        [
            { breakpoint: 480, settings: { slidesToShow: 1 } },
            { breakpoint: 992, settings: { slidesToShow: 2 } },
        ]
};
export function Testimonials()
{
    return (
        <div className={classNames("container-fluid py-5", Styles.testimonials)}>
            <div className="container p-0">
                <div className="text-center pb-2">
                    <p className="section-title px-5"><span className="px-2">Témoignages</span></p>
                    <h1 className="mb-4">Ce que les parents disent de nous</h1>
                </div>
                <Slider {...settings}>
                    <div className="testimonial-item px-3">
                        <div className="bg-light shadow-sm rounded mb-4 p-4">
                            <section>
                                <h3 className="fas fa-quote-left text-primary mr-3"></h3>
                                Superbe cadre en pleine ville ! De beaux projets et une équipe motivée !
                            </section>
                        </div>
                        <div className="d-flex align-items-center">
                            <img className="rounded-circle" src="img/testimonial-1.jpg" style={{ width: 70, height: 70 }} alt="Image" />
                            <div className="pl-3">
                                <h5>Raph Mac</h5>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item px-3">
                        <div className="bg-light shadow-sm rounded mb-4 p-4">
                            <section>
                                <h3 className="fas fa-quote-left text-primary mr-3"></h3>
                                Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum clita
                            </section>
                        </div>
                        <div className="d-flex align-items-center">
                            <img className="rounded-circle" src="img/testimonial-2.jpg" style={{ width: 70, height: 70 }} alt="Image" />
                            <div className="pl-3">
                                <h5>Parent Name</h5>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item px-3">
                        <div className="bg-light shadow-sm rounded mb-4 p-4">
                            <section>
                                <h3 className="fas fa-quote-left text-primary mr-3"></h3>
                                Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum clita
                            </section>
                        </div>
                        <div className="d-flex align-items-center">
                            <img className="rounded-circle" src="img/testimonial-3.jpg" style={{ width: 70, height: 70 }} alt="Image" />
                            <div className="pl-3">
                                <h5>Parent Name</h5>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item px-3">
                        <div className="bg-light shadow-sm rounded mb-4 p-4">
                            <section>
                                <h3 className="fas fa-quote-left text-primary mr-3"></h3>
                                Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum clita
                            </section>
                        </div>
                        <div className="d-flex align-items-center">
                            <img className="rounded-circle" src="img/testimonial-4.jpg" style={{ width: 70, height: 70 }} alt="Image" />
                            <div className="pl-3">
                                <h5>Parent Name</h5>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
}