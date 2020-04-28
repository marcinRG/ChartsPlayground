import * as React from 'react';
import './DescriptionSection.component.scss';
// @ts-ignore
import * as img1 from '../../../images/computer.png';

export function DescriptionSectionComponent() {
    return (
        <section className="short-description">
            <div className="content-wrapper">
                <div className="text-wrapper">
                    <h2 className="section-title">What&apos;s this?</h2>
                    <p className="section-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, aut
                        commodi
                        cum
                        cupiditate dolor
                        eius error eum expedita facere illum mollitia nemo odit perspiciatis porro, quos repudiandae
                        velit veritatis vero?
                    </p>
                </div>
                <img className="section-img" src={img1} alt="someone browsing web on a tablet"/>
            </div>
        </section>
    );
}
