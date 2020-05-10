import *  as React from 'react';
import './Info.page.scss';

export function InfoPage() {
    return (
        <React.Fragment>
            <div className="info-page">
                <div className="selected-wrapper">
                    <h2 className="section-title">Info</h2>
                    <div className="content">
                        <h3 className="sub-title">About</h3>
                        <p>Simple react page.</p>

                        <h3 className="sub-title">This site is using following technologies:</h3>
                        <ul className="item-list">
                            <li>Typescript</li>
                            <li>Webpack</li>
                            <li>d3.js</li>
                            <li>svg</li>
                            <li>React + context api</li>
                        </ul>

                        <h3 className="sub-title">Images</h3>

                        <ul className="item-list">
                            <li><a href="https://www.pexels.com/pl-pl/zdjecie/blond-dziewczyna-folder-kobieta-1587009/">Photo by Moose Photos from Pexels</a></li>
                            <li><a href="https://www.pexels.com/pl-pl/zdjecie/osoba-rece-ludzie-kobieta-3787818/">Photo by bongkarn thanyakij from Pexels</a></li>
                            <li><a href="https://www.pexels.com/photo/view-of-high-rise-buildings-during-day-time-302769/">Photo by Pixbay</a></li>
                            <li><a href="https://www.pexels.com/pl-pl/zdjecie/biurka-biuro-coworking-firma-7070/">Photo by Startup Stock Photos from Pexels</a></li>
                        </ul>

                        <h3 className="sub-title">Page template</h3>

                        <ul className="item-list">
                            <li><a href="https://psdfreebies.com/psd/agency-creative-website-template-free-psd/">Agency Creative Website Template</a></li>
                            <li><a href="https://drive.google.com/drive/folders/0Bw2hu70L5Ye_RVNaYU5nclNjeUk?fbclid=IwAR0u35DNuAcPsO9LMIcLa10r8QSgoAchdLNN3_aG0vGe1JFu2A_z-FRU3Z0">backup</a></li>
                        </ul>

                        <h3 className="sub-title">Other resources</h3>

                        <ul className="item-list">
                            <li><a href="https://www.toptal.com/react/react-context-api">React context api</a></li>
                            <li><a href="https://github.com/typescript-cheatsheets/react-typescript-cheatsheet">React typescript cheet sheet</a></li>
                            <li><a href="https://www.d3-graph-gallery.com/index.html">D3 chart gallery</a></li>
                        </ul>

                    </div>
                </div>
            </div>
        </React.Fragment>);
}
