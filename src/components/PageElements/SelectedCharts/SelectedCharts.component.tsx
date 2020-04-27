import * as React from 'react';
import './SelectedCharts.component.scss';
// @ts-ignore
import * as img1 from '../../../images/woman.jpg';
import {SwiperComponent} from '../../Swiper/Swiper.component';

export function SelectedChartsComponent(props: any) {
    return (
        <section className="selected-charts">
            <h2 className="section-title">Selected charts</h2>
            <SwiperComponent></SwiperComponent>
        </section>
    );
}
