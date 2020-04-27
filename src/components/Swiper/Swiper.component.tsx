import * as React from 'react';
import './Swipe.component.scss';
import {OtherContext} from '../../appContext/other.context';
import {IChartDescription} from '../../appContext/Other.provider';
import {SwiperPanelComponent} from './SwiperPanel.component';


export function SwiperComponent(props: any) {
    return (
        <OtherContext.Consumer>
            {context =>
                <div className="swiper">
                    <button className="swiper-button left" onClick={() => {
                        context.actions.changeSelectedChart(-1);
                    }}></button>
                    <div className="swiper-content">
                        {(getSelectedCharts(context.state.chartList, context.state.selectedCharts)).map((document: IChartDescription, i: number) =>
                            <SwiperPanelComponent key={i} imgPath={document.imageBig} id={i}
                                                  headerText={document.name} current={context.state.currentSelectedChart} />
                        )}
                    </div>
                    <button className="swiper-button right" onClick={() => {
                        context.actions.changeSelectedChart(1);
                    }}></button>
                </div>
            }
        </OtherContext.Consumer>
    );
}

function getSelectedCharts(chartsList: IChartDescription[], selectedCharts: number[]): IChartDescription[] {
    return chartsList.filter((element: IChartDescription) => {
        return selectedCharts.includes(element.iD);
    });
}
