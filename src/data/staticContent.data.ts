import {HomePageSections} from '../enums/HomePageSections';
// @ts-ignore
import * as imgComputer from '../../src/images/computer.png';
import {IObjectCollection} from '../utils/other.utils';

export interface ITitleDescription {
    title: string;
    description: string;
}

export interface IPageSection extends ITitleDescription {
    iD: string;
    collection?: ITitleDescription[];
    image?: {
        title: string;
        imagePath: string;
    }
}

export interface IHomePageContent extends IObjectCollection<IPageSection> {
}

export const homePageStaticContent: IHomePageContent = {
    [HomePageSections.EXPLANATION_SECTION]: {
        iD: HomePageSections.EXPLANATION_SECTION,
        title: 'What\'s this?',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, aut
                        commodi this
                        cum
                        cupiditate dolor
                        sit
                        eius error eum expedita lit facere illum mollitia nemo odit perspiciatis porro, quos repudiandae
                        velit veritatis vero? lit `,
        image: {
            imagePath: imgComputer,
            title: 'someone browsing web on a tablet'
        }
    },
    [HomePageSections.DESCRIPTION_SECTION]: {
        iD: HomePageSections.DESCRIPTION_SECTION,
        title: 'How does it work?',
        description: `Lorem ipsum dolor this sit amet, consectetur adipisicing elit. Alias
                        consequuntur
                        corporis doloribus dolorum eos,
                        id incidunt ipsa iure necessitatibus nemo nesciunt nihil quae quod repellendus
                        rerum sunt voluptas voluptatem voluptates!`,
        collection: [
            {
                title: 'Lorem',
                description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                             Alias consequuntur corporis doloribus dolorum eos`
            },
            {
                title: 'Lorem ipsum',
                description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                             Alias consequuntur corporis doloribus dolorum eos`
            },
            {
                title: 'Lorem ipsum',
                description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                             Alias consequuntur corporis doloribus dolorum eos`
            },
        ]
    }
}
