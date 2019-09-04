import React from 'react';
import PropTypes from 'prop-types';

const links = {
    tomo: 'https://github.com/jhwohlgemuth/tomo-cli',
    ninalimpi: 'https://twitter.com/ninalimpi',
    undraw: 'https://undraw.co/'
};

const Footer = () => <footer>
    <p>Created with <span className="heart">❤</span> using <a href={links.tomo}>tomo</a></p>
    <p>Inspired by <a href={'https://redstapler.co/how-to-create-pixelated-image-with-javascript/'}> this article</a> from The Red Stapler</p>
    <p>Illustration created by <a href={links.ninalimpi}>Katerina Limpitsouni</a>, available at <a href={links.undraw}>unDraw</a></p>
</footer>;

Footer.propTypes = {
    name: PropTypes.string
};

export default Footer;