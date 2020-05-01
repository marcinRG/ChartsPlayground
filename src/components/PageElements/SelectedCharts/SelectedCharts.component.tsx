import * as React from 'react';
import './SelectedCharts.component.scss';
import {SwiperComponent} from '../../Swiper/Swiper.component';

export function SelectedChartsComponent() {
    return (
        <section className="selected-charts">
            <h2 className="section-title">Selected charts</h2>
            <SwiperComponent></SwiperComponent>
        </section>
    );
}
