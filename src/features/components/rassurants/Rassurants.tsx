import { RassurantsComponentBlockListItem } from '@/services/GraphQL';

export function Rassurants({ list }: RassurantsComponentBlockListItem["Content"])
{
    return (
        <div className="container-fluid pt-1">
            <div className="container pb-3">
                <div className="row">
                    {list.map(({ Content: { title, description } }, key) =>
                        <div className="col-lg-4 col-md-6 pb-1" data-aos="zoom-in" key={key}>
                            <div className="d-flex bg-light shadow-sm border-top rounded mb-4" style={{ padding: 30 }}>
                                <i className="flaticon-050-fence h1 font-weight-normal text-primary mb-3"></i>
                                <div className="pl-4">
                                    <h4>{title}</h4>
                                    <p className="m-0">{description}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}