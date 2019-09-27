import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

@observer
class App extends Component {
  render() {
    return (
      <div style={{ display: 'flex', flex: 1, height: '100%' }}>
        <h2 style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%'
        }}>
          Hello Minimeet ( {this.props.appState.timer} )
        </h2>
        <DevTools />
      </div>
    );
  }
};

export default App;
