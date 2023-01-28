import classNames from 'classnames';

import { Picture } from '@/features/common';
import type { TeachersComponentFragment } from '@/services/GraphQL';

import Styles from './Teachers.module.scss';

export function Teachers({ surtitle, title, teachers }: TeachersComponentFragment["Content"])
{
    return (
        <div className="container-fluid pt-5">
            <div className="container">
                <div className="text-center pb-2">
                    <p className="section-title px-5"><span className="px-2">{surtitle}</span></p>
                    <h1 className="mb-4">{title}</h1>
                </div>
                <div className="row">
                    {teachers.map(({ Content: {photo, teacherFunction, teacherName} }, key) =>
                        <div className="col-md-6 col-lg-3 text-center team mb-5" key={key}>
                            {photo && <div className="position-relative overflow-hidden mb-4">
                                <Picture src={photo.crops} alt={`Photo ${teacherName}`} className={classNames("img-fluid w-100", Styles.round)} data-aos="zoom-in"/>
                            </div>}
                            <h4>{teacherName}</h4>
                            <i>{teacherFunction}</i>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
