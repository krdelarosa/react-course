import React, { Component } from 'react';

import Layout from './hoc/layout/Layout';
import SandwichBuilder from './containers/SandwichBuilder/SandwichBuilder';

class App extends Component {
  state = {
    show: true
  }

  render() {
    return (
      <div>
        <Layout>
          {this.state.show ? <SandwichBuilder /> : null}
        </Layout>
      </div>
    );
  }
}

export default App;
