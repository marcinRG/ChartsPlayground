import * as React from 'react';
import './SwiperPanel.component.scss';
import {FramedImageComponent} from '../FramedImage/FamedImage.component';
import {Link} from 'react-router-dom';

interface ISwiperPanelProps  {
    imgPath: string;
    headerText: string;
    id: number;
    current: number;
    elemID: number;
}

export function SwiperPanelComponent(props: ISwiperPanelProps) {
    return (
        <div className={getClassName(props.id,props.current)}>
            <div className="swiper-panel-wrapper">
                <FramedImageComponent imagePath={props.imgPath}/>
                <div className="text-wrapper">
                    <h3 className="small-title header-text">{props.headerText}
                        <Link className="additional-text" to={'/chartsDetails/' + props.elemID}>see more ...</Link>
                    </h3>
                </div>
            </div>
        </div>
    );
}

function getClassName(id: number, current: number): string {
    let txt: string= '';
    if (id-current === 1 || id-current === -2) {txt = 'right';}
    if (id-current === -1 || id-current === 2) {txt = 'left';}
    if (id-current === 0) {txt = 'center';}
    return 'swiper-panel ' + txt;
}
