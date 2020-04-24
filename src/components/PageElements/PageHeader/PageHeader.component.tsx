import * as React from 'react';
import {Component} from 'react';
import './PageHeader.component.scss';
// @ts-ignore
import * as img1 from '../../../images/header-bckg.jpg';
// @ts-ignore
import * as img2 from '../../../images/woman_title.png';
import {Link} from 'react-router-dom';

export class PageHeaderComponent extends Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            showMenu: false
        };
        this.changeMenuVisibility = this.changeMenuVisibility.bind(this);
    }

    private changeMenuVisibility() {
        this.setState((previousState: any) => {
            return {
                showMenu: !previousState.showMenu
            }
        });
    }

    private getMenuClass(): string {
        if (this.state.showMenu) {
            return 'app-menu visible';
        }
        return 'app-menu';
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
            return (
                <React.Fragment>
                    <header className="page-title">
                        <svg xmlns="http://www.w3.org/2000/svg" className="img-background" viewBox="0 0 2622 926"
                             preserveAspectRatio="xMidYMid slice">
                            <defs>
                                <clipPath id="small-square-path">
                                    <path d="M227,60 L394,227 L227,394 L60,227 Z" fill="black" />
                                </clipPath>
                                <filter id="square-shadow">
                                    <feMorphology operator="dilate" radius="4" in="SourceAlpha" result="DILATE"/>
                                    <feGaussianBlur in="DILATE" result="BLURRED" stdDeviation="10"/>
                                    <feFlood floodOpacity=".5" floodColor="grey" result="COLOR"></feFlood>
                                    <feComposite in="COLOR" in2="BLURRED" operator="in"
                                                 result="SHADOW_COLORED"></feComposite>
                                    <feComposite in="SourceGraphic" in2="SHADOW_COLORED" operator="over"
                                                 result="out"></feComposite>
                                </filter>

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
                                    <feComposite in2="SourceAlpha" in="BLURRED" operator="out"
                                                 result="SHADOW"></feComposite>
                                    <feFlood floodOpacity=".9" floodColor="black" result="COLOR"></feFlood>
                                    <feComposite in="COLOR" in2="SHADOW" operator="in"
                                                 result="SHADOW_COLORED"></feComposite>
                                </filter>

                                <filter id="red-overlay">
                                    <feColorMatrix
                                        type="matrix"
                                        values="
                             1   0   0   .15   0
                             0   .2   0   0   0
                             0   0   .2   0  0
                             0   0   0   1   0"/>
                                </filter>
                            </defs>
                            <image xlinkHref={img1} x="0" y="0" width="100%" height="100%"
                                   filter="url(#red-overlay)"/>
                            <image xlinkHref={img1} x="0" y="0" width="100%" height="100%"
                                   clipPath="url(#svgTextPath)"/>
                            <text className="svg-text" x="715" y="300" textLength="520px" lengthAdjust="spacing"
                                  fontSize="120px"
                                  filter="url(#txt-shadow)">Think</text>
                            <text className="svg-text" x="600" y="420" textLength="750px" lengthAdjust="spacing"
                                  fontSize="140px" filter="url(#txt-shadow)">outside</text>
                            <text className="svg-text" x="660" y="500" textLength="630px" lengthAdjust="spacing"
                                  fontSize="80px" filter="url(#txt-shadow)">of the box</text>
                        </svg>
                        <div className="header-content">
                            <nav className="app-navbar">
                                <h1 className="app-title">Charts playground</h1>
                                <button className="menu-button"></button>
                                <ul className="app-menu">
                                    <li className="menu-item"><Link to="/">home</Link></li>
                                    <li className="menu-item"><Link to="/charts">charts</Link></li>
                                    <li className="menu-item"><Link to="/about">about</Link></li>
                                    <li className="menu-item"><Link to="/info">info</Link></li>
                                    <li className="menu-item search"><span>search</span></li>
                                </ul>
                            </nav>

                        </div>
                        {/*<img className="title-image" src={img2} alt="smiling blond woman"/>*/}
                    </header>
                </React.Fragment>
            );
        }
}
