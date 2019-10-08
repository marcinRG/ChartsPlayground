import * as React from 'react';

export function PageHeaderComponent(props: any) {
    return (
        <React.Fragment>
            <header>
                <nav>
                    <h2>Charts Playground</h2>
                    <ul>
                        <li>Home</li>
                        <li>Charts</li>
                        <li>Info</li>
                    </ul>
                    <button>search</button>
                    <button>facebook</button>
                </nav>
                <h1>Think outside the box</h1>
                <button>Read more</button>
            </header>
        </React.Fragment>
    );
}
