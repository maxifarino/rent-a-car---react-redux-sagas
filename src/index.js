/**React */
import React from 'react';
import ReactDOM from 'react-dom';

/**Component */
import App from './App';

/**Services */
import registerServiceWorker from './registerServiceWorker';
import './i18n';

/**Redux */
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from "redux";

/**CSS */
import './index.css';
import './css/custom.css';
import "slick-carousel/slick/slick.css";
import './css/component-slidebars.min.css';
import './vendor/fontawesome/css/all.min.css';
import "slick-carousel/slick/slick-theme.css";
import './vendor/bootstrap/4.0.0/css/bootstrap.min.css';

/**Store */
import search from './store/reducers/search';
import spinner from './store/reducers/spinner';
import { car, configurations } from './store/saga/index';
import configuration from './store/reducers/configurations';

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const rootReducer = combineReducers({
  searchCars: search,
  spinner: spinner,
  configuration: configuration
});


const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, sagaMiddleware)));
sagaMiddleware.run(car);
sagaMiddleware.run(configurations);

const config =
{
  header: {
    showWhatsApp: true,
    whatsApp: {
      label: "+54 (9) 11 3141 2819",
      phone: "5491131412899"
    },
    showCancelBooking: true,
    showLogin: true,
    phone: {
      label: "0800 220 8733",
      title: "Confianza en alquiler de autos",
      phone: "08002208733"
    }
  },
  footer: {
    showLogo: true,
    subTitle: "MÁS DE 8 AÑOS VIAJANDO JUNTOS",
    showSocialNetworks: false,
    showSitemap: false,
    showAfipService: true,
    afipService: null,
    otherPhones: [
      {
        label: "+54 (9) 11 3141 2819",
        phone: "5491131412899"
      },
      {
        label: "+54 (9) 11 3141 2819",
        phone: "5491131412899"
      }
    ],
    email: 'reservas@streetrentacar.com'
  },
  socialNetwors: [
    { url: 'https://www.facebook.com/FansStreetRentACar/', class: 'fab fa-facebook-f' },
    { url: 'https://twitter.com/StreetRentaCar', class: 'fab fa-twitter' },
    { url: 'https://www.instagram.com/StreetRentaCar/', class: 'fab fa-instagram' }
  ],
  pages: ["promotions", "services", "search", "fleet", "contact", "companies", "conditions"],
  access: {
    showAccess: true,
    pages: ['signIn', 'buyOurCars', 'putYourCarToWork', 'franchise']
  }
}

ReactDOM.render(<Provider store={store}><App data={config} /></Provider>, document.getElementById('root'));

registerServiceWorker();
