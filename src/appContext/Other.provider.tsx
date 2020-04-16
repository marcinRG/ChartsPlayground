import {Component} from 'react';
import {OtherContext} from './other.context';
import * as React from 'react';

export class OtherProvider extends Component<any, any> {
    public state: any;
    constructor(props: any) {
        super(props);
        this.state = {
            splashScreenVisible: true,
            chartList: [
                {
                    iD: '1',
                    name: 'chart name',
                    image: 'img',
                    description: 'lorem ipsum costam costam facere illum mollitia nemo odit perspiciatis porro, quos repudiandae',
                },
                {
                    iD: '2',
                    name: 'chart name',
                    image: 'img',
                    description: 'lorem ipsum costam costam facere illum mollitia nemo odit perspiciatis porro, quos repudiandae',
                },
                {
                    iD: '3',
                    name: 'chart name',
                    image: 'img',
                    description: 'lorem ipsum costam costam facere illum mollitia nemo odit perspiciatis porro, quos repudiandae',
                },
                {
                    iD: '4',
                    name: 'chart name',
                    image: 'img',
                    description: 'lorem ipsum costam costam facere illum mollitia nemo odit perspiciatis porro, quos repudiandae',
                },
                {
                    iD: '5',
                    name: 'chart name',
                    image: 'img',
                    description: 'lorem ipsum costam costam facere illum mollitia nemo odit perspiciatis porro, quos repudiandae',
                },
                {
                    iD: '6',
                    name: 'chart name',
                    image: 'img',
                    description: 'lorem ipsum costam costam facere illum mollitia nemo odit perspiciatis porro, quos repudiandae',
                }
            ]
        }
    }
    render() {
        return (
            <OtherContext.Provider value={
                {
                    state : this.state,
                }}>
                {this.props.children}
            </OtherContext.Provider>);
    }
}
