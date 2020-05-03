import * as React from 'react';
import {Component, RefObject} from 'react';
import {getUnsafeString} from '../../../utils/other.utils';

interface ISearchResultsProps {
    setGoToSearchPage?: (b: boolean) => void;
    searchText: string;
    results?: any[];
}


export class SearchResultsComponent extends Component<ISearchResultsProps, any> {
    inputRef: RefObject<HTMLInputElement>;

    constructor(props: any) {
        super(props);
        this.inputRef = React.createRef<HTMLInputElement>();
    }

    componentDidMount() {
        this.props.setGoToSearchPage(false);
        this.inputRef.current.value = getUnsafeString(this.props.searchText);
    }

    componentDidUpdate(prevProps: Readonly<ISearchResultsProps>) {
        if (this.props.searchText!==prevProps.searchText) {
            this.inputRef.current.value = getUnsafeString(this.props.searchText);
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="search-results-component">
                    <form className="search-form">
                        <input type="text" className="search-text" ref={this.inputRef} defaultValue={this.props.searchText}/>
                        <button className="search-btn"><span>find</span></button>
                    </form>
                    {(this.props.results) && (this.props.results.length > 0) &&
                    <div className="search-results"></div>}
                    <div className="search-results">
                        <span className="found-count-label">Elements found:</span>
                        <span className="found-count-number">5</span>
                        <hr/>
                        <div className="found-element">
                            <p className="found-text">Lorem ipsum dolor sit amet, <span>consectetur</span> adipisicing
                                elit.
                                Animi eum id obcaecati optio voluptatibus.
                                Animi consequuntur <span>corporis</span> eius iure, laborum maxime nam,
                                odit quasi recusandae repudiandae rerum ut <span>veritatis</span> vitae?
                            </p>
                            <a href="#" className="found-link">see more</a>
                        </div>
                        <div className="found-element">
                            <p className="found-text">Lorem ipsum dolor sit amet, <span>consectetur</span> adipisicing
                                elit.
                                Animi eum id obcaecati optio voluptatibus.
                                Animi consequuntur <span>corporis</span> eius iure, laborum maxime nam,
                                odit quasi recusandae repudiandae rerum ut <span>veritatis</span> vitae?
                            </p>
                            <a href="#" className="found-link">see more</a>
                        </div>
                        <div className="found-element">
                            <p className="found-text">Lorem ipsum dolor sit amet, <span>consectetur</span> adipisicing
                                elit.
                                Animi eum id obcaecati optio voluptatibus.
                                Animi consequuntur <span>corporis</span> eius iure, laborum maxime nam,
                                odit quasi recusandae repudiandae rerum ut <span>veritatis</span> vitae?
                            </p>
                            <a href="#" className="found-link">see more</a>
                        </div>
                        <div className="found-element">
                            <p className="found-text">Lorem ipsum dolor sit amet, <span>consectetur</span> adipisicing
                                elit.
                                Animi eum id obcaecati optio voluptatibus.
                                Animi consequuntur <span>corporis</span> eius iure, laborum maxime nam,
                                odit quasi recusandae repudiandae rerum ut <span>veritatis</span> vitae?
                            </p>
                            <a href="#" className="found-link">see more</a>
                        </div>
                        <div className="found-element">
                            <p className="found-text">Lorem ipsum dolor sit amet, <span>consectetur</span> adipisicing
                                elit.
                                Animi eum id obcaecati optio voluptatibus.
                                Animi consequuntur <span>corporis</span> eius iure, laborum maxime nam,
                                odit quasi recusandae repudiandae rerum ut <span>veritatis</span> vitae?
                            </p>
                            <a href="#" className="found-link">see more</a>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
