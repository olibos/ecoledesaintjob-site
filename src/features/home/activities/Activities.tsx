import Link from 'next/link';

export function Activities()
{
    return (
        <div className="container-fluid pt-5">
            <div className="container">
                <div className="text-center pb-2">
                    <p className="section-title px-5"><span className="px-2">Activités</span></p>
                    <h1 className="mb-4">Ils en redemandent!</h1>
                </div>
                <div className="row">
                    <div className="col-lg-4 mb-5">
                        <div className="card border-0 bg-light shadow-sm pb-2">
                            <img className="card-img-top mb-2" src="img/class-1.jpg" alt="" />
                            <div className="card-body text-center">
                                <h4 className="card-title">Drawing Class</h4>
                                <p className="card-text">Justo ea diam stet diam ipsum no sit, ipsum vero et et diam ipsum duo et no et, ipsum ipsum erat duo amet clita duo</p>
                            </div>
                            <Link href="/" className="btn btn-primary px-4 mx-auto mb-4">En savoir plus</Link>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-5">
                        <div className="card border-0 bg-light shadow-sm pb-2">
                            <img className="card-img-top mb-2" src="img/class-2.jpg" alt="" />
                            <div className="card-body text-center">
                                <h4 className="card-title">Language Learning</h4>
                                <p className="card-text">Justo ea diam stet diam ipsum no sit, ipsum vero et et diam ipsum duo et no et, ipsum ipsum erat duo amet clita duo</p>
                            </div>
                            <Link href="/" className="btn btn-primary px-4 mx-auto mb-4">En savoir plus</Link>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-5">
                        <div className="card border-0 bg-light shadow-sm pb-2">
                            <img className="card-img-top mb-2" src="img/class-3.jpg" alt="" />
                            <div className="card-body text-center">
                                <h4 className="card-title">Basic Science</h4>
                                <p className="card-text">Justo ea diam stet diam ipsum no sit, ipsum vero et et diam ipsum duo et no et, ipsum ipsum erat duo amet clita duo</p>
                            </div>
                            <Link href="/" className="btn btn-primary px-4 mx-auto mb-4">En savoir plus</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}