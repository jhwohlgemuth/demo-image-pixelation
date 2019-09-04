import React, {Fragment} from 'react';
import {hot} from 'react-hot-loader';
import PropTypes from 'prop-types';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

const App = () => <Fragment>
    <Header></Header>
    <Body></Body>
    <Footer></Footer>
</Fragment>;

App.propTypes = {
    name: PropTypes.string
};

export default hot(module)(App);