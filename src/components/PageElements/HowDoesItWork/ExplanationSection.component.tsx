import * as React from 'react';
import './ExplanationSection.component.scss';
import {OtherContext} from '../../../appContext/other.context';
import {HomePageSections} from '../../../enums/HomePageSections';

export function ExplanationSectionComponent() {
    return (
        <OtherContext.Consumer>
            {context =>
                <section className="how-does-it-work-section">
                    <div className="selected-wrapper">
                        <div className="selected-description">
                            <h2 className="section-title">{context.state.homePageContent[HomePageSections.DESCRIPTION_SECTION].title}</h2>
                            <p className="selected-text">{context.state.homePageContent[HomePageSections.DESCRIPTION_SECTION].description}</p>
                            <button className="app-button">Read more</button>
                        </div>
                        <div className="selected-slider">
                            {context.state.homePageContent[HomePageSections.DESCRIPTION_SECTION].collection.map((elem, i) =>
                                <div className="container-wrapper" key={i}>
                                    <div className="container-box">
                                        <div className="container-text">
                                            <h4>{elem.title}</h4>
                                            <p>{elem.description}</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            }
        </OtherContext.Consumer>
    );
}
