import * as React from 'react';
import './SelectedCharts.component.scss';

export function SelectedChartsComponent(props: any) {
    return (
        <section className="selected-charts">
            <div className="content-wrapper">
                <div className="text-wrapper">
                    <h2 className="section-title">Selected charts</h2>
                    <button className="slider-button left"></button>

                    <button className="slider-button right"></button>
                </div>
            </div>
        </section>
    );
}
