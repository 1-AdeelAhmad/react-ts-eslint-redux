import * as React from 'react';

export interface AppProps {
     name: string;
     location: string;
}

const App = (props: AppProps) => {
    const { name, location } = props;
    return (
        <div>
            `Hello ${name} from ${location}`
        </div>
    );
};

export default App;
