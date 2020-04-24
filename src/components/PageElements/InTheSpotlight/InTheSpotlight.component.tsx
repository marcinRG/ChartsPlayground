import * as React from 'react';
import './InTheSpotlight.component.scss';
// @ts-ignore
import * as img1 from './../../../images/woman.jpg';
import {FramedImageComponent} from '../../FramedImage/FamedImage.component';

export function InTheSpotlightComponent(props: any) {
    return (
        <section className="in-the-spotlight">
            <div className="content-wrapper">
                    <h2 className="section-title">In the spotlight</h2>
                    <div className="element-description">
                        <div className="image-box">
                            <FramedImageComponent imagePath={img1} />
                        </div>
                        <p className="description">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cupiditate, ea earum esse,
                            excepturi exercitationem explicabo incidunt iusto, nemo non quasi rem sapiente sit soluta
                            tempore voluptas voluptates voluptatum. Quod!
                        </p>
                        <p className="name-link">
                            <span className="name">Element name</span>
                            <a href="#" className="link">see more</a>
                        </p>
                    </div>
            </div>
        </section>
    );
}
