import * as React from 'react';
import {OtherContext} from '../../../appContext/other.context';
import {SearchResultsComponent} from './SearchResults.component';

export function SearchResultsPage() {
    return (
        <OtherContext.Consumer>
            {context =>
                <React.Fragment>
                    <div>
                        <h1>Search results</h1>
                    </div>
                    <SearchResultsComponent setGoToSearchPage={context.actions.setGoToSearchPage}/>
                </React.Fragment>
            }
        </OtherContext.Consumer>);
}

