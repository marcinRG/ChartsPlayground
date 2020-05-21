import * as React from 'react';
import {Component} from 'react';
import './PageHeader.component.scss';
// @ts-ignore
import * as img1 from '../../../images/header-bckg.jpg';
// @ts-ignore
import * as img2 from '../../../images/woman_title.png';
import {Link} from 'react-router-dom';
import {SearchFormComponent} from '../../SearchForm/SearchForm.component';
import {getElementClass} from '../../../utils/other.utils';
import {PageTitles} from '../../../enums/PageTitles';

interface IPageHeaderProps {
    showMenu?: boolean;
    isSmallScreen?: boolean;
    showSplashScreen: boolean;
    changeMenuVisibility?: () => void;
}

export function PageHeaderComponent(props: IPageHeaderProps) {

    const func = ()=> {
        props.changeMenuVisibility();
    }

    return (
        <React.Fragment>
            <header className={getHeaderClass(props.showSplashScreen)}>
                <svg xmlns="http://www.w3.org/2000/svg" className={getSplashScreenClass(props.showSplashScreen)}
                     viewBox="0 0 2622 926"
                     preserveAspectRatio="xMidYMid slice">
                    <defs>
                        <clipPath id="small-square-path">
                            <path d="M227,60 L394,227 L227,394 L60,227 Z" fill="black"/>
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
                            <text x="0" y="0" className="svg-text first">Think</text>
                            <text x="0" y="0" className="svg-text second">outside</text>
                            <text x="0" y="0" className="svg-text third">of the box</text>
                            {/*<text className="svg-text" x="600" y="420" textLength="750px" lengthAdjust="spacing"*/}
                            {/*      fontSize="140px">outside</text>*/}
                            {/*<text className="svg-text" x="660" y="500" textLength="630px" lengthAdjust="spacing"*/}
                            {/*      fontSize="80px">of the box</text>*/}
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
                    <text x="0" y="0" className="svg-text first txt-shadow">Think</text>
                    <text x="0" y="0" className="svg-text second txt-shadow">outside</text>
                    <text x="0" y="0" className="svg-text third txt-shadow">of the box</text>
                </svg>
                <div className="header-content">
                    <nav className="app-navbar">
                        <h1 className="app-title">Charts playground</h1>
                        <button className="menu-button" onClick={func}></button>
                        <ul className={getMenuClass(props.showMenu)}>
                            <li className="menu-item" onClick={func}><Link to={'/' +PageTitles.HOME_PAGE }>home</Link></li>
                            <li className="menu-item" onClick={func}><Link to={'/' + PageTitles.CHARTS_PAGE}>charts</Link></li>
                            <li className="menu-item" onClick={func}><Link to={'/' + PageTitles.INFO_PAGE}>info</Link></li>
                            <li className="menu-item"><SearchFormComponent/></li>
                        </ul>
                    </nav>
                </div>
                <img className={getImgOverlayClass(props.showSplashScreen)} src={img2} alt="smiling blond woman"/>
            </header>
        </React.Fragment>
    );
}

function getMenuClass(showMenu: boolean): string {
    return getElementClass(showMenu, 'app-menu', 'visible');
}

function getHeaderClass(show: boolean): string {
    return getElementClass(show, 'page-title', 'full-size');
}

function getSplashScreenClass(show: boolean): string {
    return getElementClass(show, 'img-background', 'visible');
}

function getImgOverlayClass(show: boolean): string {
    return getElementClass(show, 'image-overlay', 'visible');
}
