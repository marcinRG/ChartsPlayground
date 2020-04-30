import './SearchResults.page.scss';

import * as React from 'react';
import {OtherContext} from '../../../appContext/other.context';
import {SearchResultsComponent} from './SearchResults.component';


export function SearchResultsPage() {
    return (
        <OtherContext.Consumer>
            {context =>
                <React.Fragment>
                    <div className="search-results">
                        <div className="selected-wrapper">
                            <h2 className="section-title">Search results</h2>
                            <SearchResultsComponent setGoToSearchPage={context.actions.setGoToSearchPage}/>
                        </div>
                    </div>
                </React.Fragment>
            }
        </OtherContext.Consumer>);
}

