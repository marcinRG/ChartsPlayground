import * as React from 'react';
import {Component} from 'react';

interface  ISearchResultsProps {
    setGoToSearchPage?: (b:boolean) => void;
}

export class SearchResultsComponent extends Component<ISearchResultsProps, any> {
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        this.props.setGoToSearchPage(false);
    }

    render() {
        return (
            <React.Fragment>
            </React.Fragment>
        );
    }

}
