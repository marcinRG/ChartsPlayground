import * as React from 'react';
import {Component, FormEvent, RefObject} from 'react';
import {getUnsafeString} from '../../../utils/other.utils';
import {ISearchResult} from '../../../appContext/Other.provider';
import {Link} from 'react-router-dom';

interface ISearchResultsProps {
    setGoToSearchPage?: (b: boolean) => void;
    searchText: string;
    searchQuery: string;
    getSearchResults: () => ISearchResult[];
    queryChangeAction?: (text: string) => void;
}

export class SearchResultsComponent extends Component<ISearchResultsProps, any> {
    inputRef: RefObject<HTMLInputElement>;

    constructor(props: ISearchResultsProps) {
        super(props);
        this.inputRef = React.createRef<HTMLInputElement>();
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        this.props.setGoToSearchPage(false);
        this.props.queryChangeAction(this.props.searchText);
        this.inputRef.current.value = getUnsafeString(this.props.searchText);
    }

    componentDidUpdate(prevProps: Readonly<ISearchResultsProps>) {
        if (this.props.searchText !== prevProps.searchText) {
            this.props.queryChangeAction(getUnsafeString(this.props.searchText));
            this.inputRef.current.value = getUnsafeString(this.props.searchText);
        }
    }

    onSubmit(event: FormEvent) {
        event.preventDefault();
    }

    render() {
        return (
            <React.Fragment>
                <div className="search-results-component">
                    <form className="search-form" onSubmit={this.onSubmit}>
                        <input type="text" className="search-text" ref={this.inputRef}
                               defaultValue={this.props.searchText}/>
                        <button className="search-btn" onClick={() => {
                            this.props.queryChangeAction(this.inputRef.current.value);
                        }}><span>find</span></button>
                    </form>
                    {(this.props.getSearchResults().length > 0) &&
                    <div className="search-results">
                        <span className="found-count-label">Elements found:</span>
                        <span className="found-count-number">{this.props.getSearchResults().length}</span>
                        <hr/>
                        {this.props.getSearchResults().map((elem: ISearchResult, index: number) =>
                            <div className="found-element" key={index}>
                                {createFoundTextElement(elem.fullText, this.props.searchQuery)}
                                {createLinks(elem.page, elem.iD)}
                            </div>
                        )}
                    </div>}
                </div>
            </React.Fragment>
        );
    }
}

function createFoundTextElement(txt: string, found: string) {
    return (
        <p className="found-text">
            {wrapText(txt, found)}
        </p>
    );
}

function createLinks(links: string[], iD: any) {
    return (
        <div className="found-link">
            {createLinksTable(links, iD)}
        </div>
    );
}

function createLinksTable(links: string[], iD: any): any[] {
    let tableOfLinks: any[] = [];
    links.forEach((link, index) => {
        let linkTag: any;
        if (Number.isInteger(iD) && (link !=='')) {
            linkTag = <Link to={'/' + link + '/' + iD} key={index}>go to {'/' + link + '/' + iD}</Link>
        } else {
            linkTag = <Link to={'/' + link} key={index}>go to {'/' + link}</Link>
        }
        tableOfLinks.push(linkTag);
    });
    return tableOfLinks;
}

function wrapText(fullText: string, str: string) {
    if (fullText.length > 0 && str.length > 0) {
        const txtArray: string[] = fullText.split(str);
        let splitResults: any[] = [];
        if (txtArray.length > 1) {
            let j = 0;
            for (let i = 0; i < txtArray.length - 1; i++) {
                splitResults.push(txtArray[i]);
                j++;
                splitResults.push(<span key={j}>{str}</span>);
            }
            splitResults.push(txtArray[txtArray.length - 1]);
            return splitResults;
        } else {
            splitResults = [fullText];
        }
        return splitResults;
    }
}

