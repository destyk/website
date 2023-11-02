import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';

let root: ReactDOM.Root;
const rootElement = document.getElementById('root') as HTMLElement;

if (rootElement.hasChildNodes()) {
    root = ReactDOM.hydrateRoot(rootElement, <App />);
} else {
    root = ReactDOM.createRoot(rootElement);
}

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
