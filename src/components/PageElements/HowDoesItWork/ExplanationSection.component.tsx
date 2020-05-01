import * as React from 'react';
import './ExplanationSection.component.scss';

export function ExplanationSectionComponent() {
    return (
        <section className="how-does-it-work-section">
            <div className="selected-wrapper">
                <div className="selected-description">
                    <h2 className="section-title">How does it work?</h2>
                    <p className="selected-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                        consequuntur
                        corporis doloribus dolorum eos,
                        id incidunt ipsa iure necessitatibus nemo nesciunt nihil quae quod repellendus
                        rerum sunt voluptas voluptatem voluptates!</p>
                    <button className="app-button">Read more</button>
                </div>
                <div className="selected-slider">
                    <div className="container-wrapper first">
                        <div className="container-box first">
                            <div className="container-text">
                                <h4>Lorem ipsum</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Alias consequuntur corporis doloribus dolorum eos
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="container-wrapper second">
                        <div className="container-box second">
                            <div className="container-text">
                                <h4>Lorem ipsum</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Alias consequuntur corporis doloribus dolorum eos
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="container-wrapper third">
                        <div className="container-box third">
                            <div className="container-text">
                                <h4>Lorem ipsum</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Alias consequuntur corporis doloribus dolorum eos
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
