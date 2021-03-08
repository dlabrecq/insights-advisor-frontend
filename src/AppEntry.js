import App from './App';
import { IntlProvider } from '@redhat-cloud-services/frontend-components-translations';
import { NotificationsPortal } from '@redhat-cloud-services/frontend-components-notifications';
import AsyncComponent from '@redhat-cloud-services/frontend-components/AsyncComponent';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
/* eslint-disable no-console */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { getBaseName } from '@redhat-cloud-services/frontend-components-utilities/helpers';
import { init } from './Store';
import logger from 'redux-logger';
import messages from '../locales/data.json';

const Widget = ({ useLogger }) => (
    <IntlProvider locale={navigator.language.slice(0, 2)} messages={messages} onError={console.log}>
        <Provider store={(useLogger ? init(logger) : init()).getStore()}>
            <Router basename={getBaseName(window.location.pathname)}>
                <React.Fragment>
                    <AsyncComponent appName="inventory" module="./SampleSharedComponent" someProp="I am a prop send from advisor" />
                    <AsyncComponent appName="cost-management" module="./OcpOverviewWidget" title="Custom title prop" />
                    <NotificationsPortal />
                    <App />
                </React.Fragment>
            </Router>
        </Provider>
    </IntlProvider>
);

Widget.propTypes = {
    useLogger: PropTypes.bool
};

Widget.defaultProps = {
    useLogger: false
};

export default Widget;
