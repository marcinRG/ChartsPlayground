import * as React from 'react';
import {IChartDescription} from '../../../appContext/Other.provider';
import {FramedImageComponent} from '../../FramedImage/FamedImage.component';
import {Link} from 'react-router-dom';

interface IRandomChartProps {
    charts: IChartDescription[];
    index: number;
}

export function RandomChartComponent(props: IRandomChartProps) {
    const randomChart: IChartDescription = props.charts[props.index];
    return (
        <div className="element-description">
            <div className="image-box">
                <FramedImageComponent imagePath={randomChart.imageBig}/>
            </div>
            <p className="description">
                {randomChart.description}
            </p>
            <p className="name-link">
                <span className="name">{randomChart.name}</span>
                <Link className="link" to={'/chartsDetails/' + randomChart.iD}>see more</Link>
            </p>
        </div>
    )
}
