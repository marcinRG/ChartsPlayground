import * as React from 'react';
import {Component} from 'react';

interface  ISearchResultsProps {
    setGoToSearchPage?: (b:boolean) => void;
    results?: any[];
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
                <div className="search-results-component">
                    <form className="search-form">
                        <input type="text" className="search-text"/>
                        <button className="search-btn"><span>find</span></button>
                    </form>
                    {(this.props.results) && (this.props.results.length>0) &&
                    <div className="search-results">

                    </div>}
                    <div className="search-results">
                       <span className="found-count-label">Elements found:</span>
                       <span className="found-count-number">5</span>
                        <hr/>
                        <div className="found-element">
                            <p className="found-text">Lorem ipsum dolor sit amet, <span>consectetur</span> adipisicing elit.
                                Animi eum id obcaecati optio voluptatibus.
                                Animi consequuntur <span>corporis</span> eius iure, laborum maxime nam,
                                odit quasi recusandae repudiandae rerum ut <span>veritatis</span> vitae?
                            </p>
                            <a href="#" className="found-link">see more</a>
                        </div>
                        <div className="found-element">
                            <p className="found-text">Lorem ipsum dolor sit amet, <span>consectetur</span> adipisicing elit.
                                Animi eum id obcaecati optio voluptatibus.
                                Animi consequuntur <span>corporis</span> eius iure, laborum maxime nam,
                                odit quasi recusandae repudiandae rerum ut <span>veritatis</span> vitae?
                            </p>
                            <a href="#" className="found-link">see more</a>
                        </div>
                        <div className="found-element">
                            <p className="found-text">Lorem ipsum dolor sit amet, <span>consectetur</span> adipisicing elit.
                                Animi eum id obcaecati optio voluptatibus.
                                Animi consequuntur <span>corporis</span> eius iure, laborum maxime nam,
                                odit quasi recusandae repudiandae rerum ut <span>veritatis</span> vitae?
                            </p>
                            <a href="#" className="found-link">see more</a>
                        </div>
                        <div className="found-element">
                            <p className="found-text">Lorem ipsum dolor sit amet, <span>consectetur</span> adipisicing elit.
                                Animi eum id obcaecati optio voluptatibus.
                                Animi consequuntur <span>corporis</span> eius iure, laborum maxime nam,
                                odit quasi recusandae repudiandae rerum ut <span>veritatis</span> vitae?
                            </p>
                            <a href="#" className="found-link">see more</a>
                        </div>
                        <div className="found-element">
                            <p className="found-text">Lorem ipsum dolor sit amet, <span>consectetur</span> adipisicing elit.
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
