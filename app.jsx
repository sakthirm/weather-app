import React from 'react';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Header {1+1}</h1>
                <h2>Content</h2>
                <p data-myattribute = "somevalue">This is the content!!!</p>
            </div>
        );
    }
}

export default App;