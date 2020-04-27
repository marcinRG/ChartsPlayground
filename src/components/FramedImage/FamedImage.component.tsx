import * as React from 'react';

interface IFramedImageProps {
    imagePath: string;
}

export function FramedImageComponent(props: IFramedImageProps) {
    return (
        <svg width="454" height="454" viewBox="0 0 454 454" xmlns="http://www.w3.org/2000/svg">
            <path d="M227,20 L434,227 L227,434 L20,227 Z" fill="white" filter="url(#square-shadow)"
                  stroke="whitesmoke" strokeWidth="1"/>
            <image xlinkHref={props.imagePath} x="25" y="25" height="400" width="400"
                   clipPath="url(#small-square-path)"/>
        </svg>);
}
