import * as React from 'react';
import './SwiperPanel.component.scss';
import {FramedImageComponent} from '../FramedImage/FamedImage.component';

interface ISwiperPanelProps  {
    imgPath: string;
    headerText: string;
    id: number;
    current: number;
}

export function SwiperPanelComponent(props: ISwiperPanelProps) {
    return (
        <div className={getClassName(props.id,props.current)}>
            <div className="swiper-panel-wrapper">
                <FramedImageComponent imagePath={props.imgPath}/>
                <div className="text-wrapper">
                    <h3 className="small-title header-text">{props.headerText}
                        <a className="additional-text" href="#">see more ...</a>
                    </h3>
                </div>
            </div>
        </div>
    );
}

function getClassName(id: number, current: number): string {
    let txt: string= '';
    if (Math.abs(id-current) === 2) {txt = 'left';}
    if (Math.abs(id-current) === 1) {txt = 'right';}
    if (Math.abs(id-current) === 0) {txt = 'center';}
    return 'swiper-panel ' + txt;
}
