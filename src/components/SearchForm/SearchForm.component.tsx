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
}

export class SearchFormComponent extends Component<any,ISearchFormState> implements IRender {
    public state: ISearchFormState;
    constructor(props: any) {
        super(props);
        this.state = {
            showTextInput: false
        };
        this.toggleTextInput = this.toggleTextInput.bind(this);
    }

    toggleTextInput() {
        this.setState({
            showTextInput: !this.state.showTextInput
        });
    }

    render() {
        return (
            <React.Fragment>
                <input className="search-input" type="text" />
                <span className="search-title">search</span>
            </React.Fragment>
        );
    }
}
