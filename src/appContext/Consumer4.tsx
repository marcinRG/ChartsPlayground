import * as React from 'react';
import {AppContext} from './app.context';

export function Consumer4() {
    return (
        <AppContext.Consumer>
            {context => <div>
                <input type="text" />
                <p>{context.getWidestRow()}</p>
                <button onClick={()=>{
                    console.log(context.getTableSize());
                }}>Push button</button>
            </div>}
        </AppContext.Consumer>
    );
}

// https://www.nafrontendzie.pl/context-api-react
// https://flaviocopes.com/react-context-api/
// https://levelup.gitconnected.com/sharing-state-with-the-react-context-api-f24fcb9c7ce2
// https://www.toptal.com/react/react-context-api
// https://reactjs.org/docs/context.html#reactcreatecontext
// https://medium.com/@chathuranga94/introduction-to-react-context-api-90f5e4d7a7a9
