import React from 'react';
import { KBarAnimator, KBarPortal, KBarPositioner, KBarSearch } from 'kbar';
import { Results } from './results';

import './command-bar.scss';

const CommandBar = () => {
    return (
        <KBarPortal>
            <div className="command-bar">
                <KBarPositioner className="positioner">
                    <KBarAnimator className="animator">
                        <KBarSearch className="search" />
                        <Results />
                    </KBarAnimator>
                </KBarPositioner>
            </div>
        </KBarPortal>
    );
};

export { CommandBar };
