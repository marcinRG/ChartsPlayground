import * as React from 'react';
import './SearchForm.component.scss';
import {ChangeEvent, KeyboardEvent} from 'react';
import {Key} from 'ts-key-enum';
import {Redirect} from 'react-router';
import {OtherContext} from '../../appContext/other.context';
import {getSafeString} from '../../utils/oter.utils';

export function SearchFormComponent() {
        return (
            <OtherContext.Consumer>
                {context =>
                    <React.Fragment>
                        {(context.state.searchFormProperties.goToSearchPage) &&
                        <Redirect to={'/search/' + getSafeString(context.state.searchFormProperties.searchText)} push={true}/>}
                        <input className={getInputClass(context.state.searchFormProperties.showTextInput)}
                               onKeyUp={(event: KeyboardEvent<HTMLInputElement>)=>{
                                   if (event.key === Key.Enter) {
                                       context.actions.setGoToSearchPage(true);
                                   }
                               }}
                               onChange={(event: ChangeEvent<HTMLInputElement>)=>{
                                   context.actions.changeSearchFormText(event.target.value);
                               }}
                               value={context.state.searchFormProperties.searchText} type="text"/>
                        <span className="search-title"
                              onClick={() => {
                                  context.actions.toggleSearchFormTextInput();
                              }}>
                            search</span>
                    </React.Fragment>
                }
            </OtherContext.Consumer>
        );
}

function getInputClass(isVisible: boolean): string {
    const className = 'search-input';
    if (isVisible) {
        return className + ' visible';
    }
    return className;
}

