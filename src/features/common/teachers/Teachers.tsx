export function Teachers()
{
    return (
        <div className="container-fluid pt-5">
            <div className="container">
                <div className="text-center pb-2">
                    <p className="section-title px-5"><span className="px-2">Nos professeurs</span></p>
                    <h1 className="mb-4">Découvrez nos professeurs</h1>
                </div>
                <div className="row">
                    <div className="col-md-6 col-lg-3 text-center team mb-5">
                        <div className="position-relative overflow-hidden mb-4" style={{ borderRadius: "100%" }}>
                            <img className="img-fluid w-100" src="img/team-1.jpg" alt="" />
                        </div>
                        <h4>Julia Smith</h4>
                        <i>Music Teacher</i>
                    </div>
                    <div className="col-md-6 col-lg-3 text-center team mb-5">
                        <div className="position-relative overflow-hidden mb-4" style={{ borderRadius: "100%" }}>
                            <img className="img-fluid w-100" src="img/team-2.jpg" alt="" />
                        </div>
                        <h4>Jhon Doe</h4>
                        <i>Language Teacher</i>
                    </div>
                    <div className="col-md-6 col-lg-3 text-center team mb-5">
                        <div className="position-relative overflow-hidden mb-4" style={{ borderRadius: "100%" }}>
                            <img className="img-fluid w-100" src="img/team-3.jpg" alt="" />
                        </div>
                        <h4>Mollie Ross</h4>
                        <i>Dance Teacher</i>
                    </div>
                    <div className="col-md-6 col-lg-3 text-center team mb-5">
                        <div className="position-relative overflow-hidden mb-4" style={{ borderRadius: "100%" }}>
                            <img className="img-fluid w-100" src="img/team-4.jpg" alt="" />
                        </div>
                        <h4>Donald John</h4>
                        <i>Art Teacher</i>
                    </div>
                </div>
            </div>
        </div>
    );
}
