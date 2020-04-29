import * as React from 'react';
import './SearchForm.component.scss';
import {Component} from 'react';

interface IRender {
    render: React.ReactElement<any, string | React.JSXElementConstructor<any>> |
        string | number | {} | React.ReactNodeArray | React.ReactPortal
        | boolean | null | undefined;
}

interface ISearchFormState {
    showTextInput: boolean;
    searchText: string;
}

export class SearchFormComponent extends Component<any,ISearchFormState> implements IRender {
    public state: ISearchFormState;
    constructor(props: any) {
        super(props);
        this.state = {
            showTextInput: false,
            searchText: ''
        };
        this.toggleTextInput = this.toggleTextInput.bind(this);
        this.search = this.search.bind(this);
    }

    toggleTextInput() {
        this.setState({
            showTextInput: !this.state.showTextInput
        });
    }

    search() {
        console.log('search ...');

    }

    render() {
        return (
            <React.Fragment>
                <input className={getInputClass(this.state.showTextInput)} onKeyUp={this.search} type="text" />
                <span className="search-title" onClick={this.toggleTextInput}>search</span>
            </React.Fragment>
        );
    }
}

function getInputClass(isVisble: boolean): string {
    const className = 'search-input';
    if (isVisble) {
        return className + ' visible';
    }
    return className;
}
