import './SearchResults.page.scss';

import * as React from 'react';
import {OtherContext} from '../../../appContext/other.context';
import {SearchResultsComponent} from './SearchResults.component';
import {RouteComponentProps} from 'react-router-dom';

interface MatchParams {
    searchText?: string;
}

interface IMatchProps extends RouteComponentProps<MatchParams> {
}

export function SearchResultsPage(props: IMatchProps ) {
    let txt = '';
    if (props.match && props.match.params && props.match.params.searchText) {
        txt = props.match.params.searchText;
    }

    return (
        <OtherContext.Consumer>
            {context =>
                <React.Fragment>
                    <div className="search-results">
                        <div className="selected-wrapper">
                            <h2 className="section-title">Search results</h2>
                            <SearchResultsComponent setGoToSearchPage={context.actions.setGoToSearchPage} searchText={txt} getSearchResults={context.actions.getSearchResults}
                            queryChangeAction={context.actions.changeSearchQuery} searchQuery={context.state.searchQuery}/>
                        </div>
                    </div>
                </React.Fragment>
            }
        </OtherContext.Consumer>);
}

