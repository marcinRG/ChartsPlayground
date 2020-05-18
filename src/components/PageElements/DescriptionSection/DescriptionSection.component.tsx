import * as React from 'react';
import './DescriptionSection.component.scss';
import {OtherContext} from '../../../appContext/other.context';
import {HomePageSections} from '../../../enums/HomePageSections';

export function DescriptionSectionComponent() {
    return (
        <OtherContext.Consumer>
            {context =>
                <section className="short-description">
                    <div className="content-wrapper">
                        <div className="text-wrapper">
                            <h2 className="section-title">{context.state.homePageContent[HomePageSections.EXPLANATION_SECTION].title}</h2>
                            <p className="section-text">{context.state.homePageContent[HomePageSections.EXPLANATION_SECTION].description}</p>
                        </div>
                        <img className="section-img" src={context.state.homePageContent[HomePageSections.EXPLANATION_SECTION].image.imagePath}
                             alt={context.state.homePageContent[HomePageSections.EXPLANATION_SECTION].image.title}/>
                    </div>
                </section>
            }
        </OtherContext.Consumer>
    );
}
