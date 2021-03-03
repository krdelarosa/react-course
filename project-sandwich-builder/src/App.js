import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/layout/Layout';
import SandwichBuilder from './containers/SandwichBuilder/SandwichBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';

class App extends Component {
  state = {
    show: true
  }

  render() {
    return (
      <div>
        <Layout>
          {/* {this.state.show ? <SandwichBuilder /> : null}
          <Checkout /> */}
          <Switch>
            <Route path="/" exact component={SandwichBuilder} />
            <Route path="/orders" component={Orders} />
            <Route path="/checkout" component={Checkout} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
