import React, { PropsWithChildren } from 'react';
import { KBarProvider, createAction } from 'kbar';
import { CommandBar } from './components/command-bar';

const initialActions = [
    {
        id: 'contactAction',
        name: 'Contact',
        shortcut: ['c'],
        keywords: 'email hello',
        section: 'Navigation',
        perform: () => window.open('mailto:timchang@hey.com', '_blank')
    },
    {
        id: 'twitterAction',
        name: 'Twitter',
        shortcut: ['g', 't'],
        keywords: 'social contact dm',
        section: 'Navigation',
        perform: () => window.open('https://twitter.com/timcchang', '_blank')
    },
    createAction({
        name: 'Github',
        shortcut: ['g', 'h'],
        keywords: 'sourcecode',
        section: 'Navigation',
        perform: () => window.open('https://github.com/timc1/kbar', '_blank')
    })
];

const KBar = (props: PropsWithChildren) => {
    return (
        <KBarProvider options={{ enableHistory: true }} actions={initialActions}>
            <CommandBar />
            {props.children}
        </KBarProvider>
    );
};

export { KBar };
