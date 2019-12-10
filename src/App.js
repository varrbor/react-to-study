import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { lightTheme, darkTheme } from '../src/themes/Theme';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';

class App extends Component {
  render () {
    return (
        <ThemeProvider theme={lightTheme}>
          <div>
            <Layout>
              <Switch>
                <Route path="/checkout" component={Checkout} />
                <Route path="/orders" component={Orders} />
                <Route path="/" exact component={BurgerBuilder} />
              </Switch>
            </Layout>
          </div>
        </ThemeProvider>
    );
  }
}

export default App;
