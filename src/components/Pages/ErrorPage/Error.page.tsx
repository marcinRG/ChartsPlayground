import * as React from 'react';
import './Error.page.scss';
import {Link} from 'react-router-dom';
import {PageTitles} from '../../../enums/PageTitles';

export function ErrorPage() {
    return (
        <React.Fragment>
            <div className="error-page">
                <div className="selected-wrapper">
                    <h2 className="section-title">Error</h2>
                    <p className="message">Selected route not found <Link to={'/' +PageTitles.HOME_PAGE }>return to main page</Link></p>
                </div>
            </div>
        </React.Fragment>);
}
