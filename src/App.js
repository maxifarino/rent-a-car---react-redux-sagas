/**React */
import React, { Component } from 'react';

/**Router */
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';

/**Components */
import Layout from './components/Layout';
import Home from './components/Home';
import PromotionsPage from './components/pages/PromotionsPage';
import ContactPage from './components/pages/ContactPage';
import ConditionsPage from './components/pages/ConditionsPage';
import CompaniesPage from './components/pages/Companies';
import ServicesPage from './components/pages/Services';
import FleetPage from './components/pages/FleetPage';
import PaymentPage from './components/pages/PaymentPage';
import SearchContainer from './pages/search/searchContainer';
import CheckoutPage from './components/pages/checkout/CheckoutPage';

/** Constants*/
import * as pages from './core/constants';

class App extends Component {
  displayName = App.name

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <BrowserRouter basename={document.getElementsByTagName('base')[0].getAttribute('href')}>
        <Layout configurations={this.props.data}>

          <Route exact path='/' component={Home} />

          {this.props.data.pages.includes(pages.PROMOTIONS) > 0 &&
            <Route path='/promotions' component={PromotionsPage} />
          }
          {this.props.data.pages.includes(pages.CONTACT) > 0 &&
            <Route path='/contact' component={ContactPage} />
          }

          {this.props.data.pages.includes(pages.CONDITIONS) > 0 &&
            <Route path='/conditions' component={ConditionsPage} />
          }

          {this.props.data.pages.includes(pages.COMPANIES) > 0 &&
            <Route path='/companies' component={CompaniesPage} />
          }

          {this.props.data.pages.includes(pages.SERVICES) > 0 &&
            <Route path='/services' component={ServicesPage} />
          }

          {this.props.data.pages.includes(pages.FLEET) > 0 &&
            <Route path='/fleet' component={FleetPage} />
          }

          {this.props.data.pages.includes(pages.PAYMENT) > 0 &&
            <Route path='/payment' component={PaymentPage} />
          }

          {this.props.data.pages.includes(pages.SEARCH) > 0 &&
            <Route path='/search' component={SearchContainer} />
          }

          {this.props.data.pages.includes(pages.CHECKOUT) > 0 &&
            <Route path='/checkout' component={CheckoutPage} />
          }

        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;