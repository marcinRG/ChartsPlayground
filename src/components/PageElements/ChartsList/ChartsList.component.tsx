import * as React from 'react';
import './ChartsList.component.scss';
import {OtherContext} from '../../../appContext/other.context';
import {Link} from 'react-router-dom';

export function ChartsListComponent() {
    return (
        <OtherContext.Consumer>
            {context =>
                <section className="types-of-charts-list">
                    <h2 className="section-title charts-title">Types of charts</h2>
                    <div className="charts-display">
                        {context.state.chartList.map((document: any, i: number) =>
                            <div key={i} className="chart-description">
                                <img src={document.image} alt={document.name} className="chart-img"/>
                                <h4 className="chart-title">{document.name}</h4>
                                <p className="chart-text">{document.description}
                                   <Link to={'/chartsDetails/' + document.iD}>See more</Link>
                                </p>
                            </div>
                        )}
                    </div>
                </section>
            }
        </OtherContext.Consumer>
    );
}
