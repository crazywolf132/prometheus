import { LoadApp } from '@prometheus/runtime';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

const App = () => {
    return (
        <div>
            <h1>Application:</h1>
            <LoadApp
                appName="nanoapp"
            />
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);