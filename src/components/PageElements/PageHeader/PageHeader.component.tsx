import * as React from 'react';
import './PageHeader.component.scss';
// @ts-ignore
import * as img1 from '../../../images/header-bckg.jpg';
// @ts-ignore
import * as img2 from '../../../images/woman_title.png';

export function PageHeaderComponent(props: any) {
    return (
        <React.Fragment>
            <header className="header-component">
                <svg className="img-background" viewBox="0 0 2622 926" preserveAspectRatio="xMidYMid slice">
                    <defs>
                        <clipPath id="svgTextPath">
                            <text className="svg-text" x="715" y="300" textLength="520px" lengthAdjust="spacing"
                                  fontSize="120px">Think</text>
                            <text className="svg-text" x="600" y="420" textLength="750px" lengthAdjust="spacing"
                                  fontSize="140px">outside</text>
                            <text className="svg-text" x="660" y="500" textLength="630px" lengthAdjust="spacing"
                                  fontSize="80px">of the box</text>
                        </clipPath>
                        <filter id="txt-shadow">
                            <feMorphology operator="dilate" radius="5" in="SourceAlpha" result="DILATE"/>
                            <feGaussianBlur in="DILATED" result="BLURRED" stdDeviation="8"/>
                            <feComposite in2="SourceAlpha" in="BLURRED" operator="out" result="SHADOW"></feComposite>
                            <feFlood floodOpacity=".9" floodColor="black" result="COLOR"></feFlood>
                            <feComposite in="COLOR" in2="SHADOW" operator="in" result="SHADOW_COLORED"></feComposite>
                        </filter>
                        <filter id="red-overlay">
                            <feColorMatrix
                                type="matrix"
                                values="
                             1   0   0   .1   0
                             0   .2   0   0   0
                             0   0   .2   0  0
                             0   0   0   1   0 "/>
                        </filter>
                    </defs>
                    <image xlinkHref={img1} x="0" y="0" width="100%" height="100%"
                           filter="url(#red-overlay)"/>
                    <image xlinkHref={img1} x="0" y="0" width="100%" height="100%"
                           clipPath="url(#svgTextPath)"/>
                    <g>
                        <text className="svg-text" x="715" y="300" textLength="520px" lengthAdjust="spacing"
                              fontSize="120px" filter="url(#txt-shadow)">Think</text>
                        <text className="svg-text" x="600" y="420" textLength="750px" lengthAdjust="spacing"
                              fontSize="140px" filter="url(#txt-shadow)">outside</text>
                        <text className="svg-text" x="660" y="500" textLength="630px" lengthAdjust="spacing"
                              fontSize="80px"
                              filter="url(#txt-shadow)">of the box</text>
                    </g>
                </svg>
                <div className="header-content">
                    <nav className="app-navbar">
                        <h1 className="app-title">Charts playground</h1>
                        <ul className="app-menu">
                            <li className="menu-item">home</li>
                            <li className="menu-item">charts</li>
                            <li className="menu-item">about</li>
                            <li className="menu-item search"><span>search</span></li>
                        </ul>
                    </nav>
                    <img className="title-image" src={img2} alt="smiling blond woman"/>
                </div>
            </header>
        </React.Fragment>
    );
}
