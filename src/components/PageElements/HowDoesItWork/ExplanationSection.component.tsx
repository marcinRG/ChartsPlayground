import * as React from 'react';
import './ExplanationSection.component.scss';

export function ExplanationSectionComponent(props: any) {
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
                <div className="selected-slider"></div>
            </div>
        </section>
    );
}
