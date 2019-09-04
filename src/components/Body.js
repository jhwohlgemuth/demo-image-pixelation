import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';

const pixelate = (canvas, size = 1) => {
    const context = canvas.getContext('2d');
    const {height, width} = canvas;
    if (size > 1) {
        const {data} = context.getImageData(0, 0, width, height);
        for (let y = 0; y < height; y += size) {
            for (let x = 0; x < width; x += size) {
                const p = (x + (y * width)) * 4; // eslint-disable-line no-magic-numbers
                context.fillStyle = `rgba(${data[p]},${data[p + 1]},${data[p + 2]},${data[p + 3]})`;
                context.fillRect(x, y, size, size);
            }
        }
    }
};
const Img = props => {
    const {id, size, src} = props;
    const original = useRef(null);
    const [source, setSource] = useState(src);
    const getSource = size => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        const image = new Image();
        image.src = (original.current === null) ? src : original.current;
        image.onload = () => {
            const {height, width} = image;
            Object.assign(canvas, {width, height});
            context.drawImage(image, 0, 0);
            original.current = (original.current === null) ? canvas.toDataURL('image/jpeg') : original.current;
            pixelate(canvas, size);
            setSource(canvas.toDataURL('image/jpeg'));
        };
    };
    useEffect(() => {
        getSource(size);
    }, [size]);
    return <img id={id} src={source} alt={'Woman sitting on react logo'}/>;
};
Img.propTypes = {
    id: PropTypes.string,
    size: PropTypes.number,
    src: PropTypes.string
};
const Body = () => {
    const [sampleSize, setSampleSize] = useState(1);
    const SAMPLE_SIZES = [1, 10, 20, 30, 40]; // eslint-disable-line no-magic-numbers
    return <section id={'container'}>
        <div>
            {SAMPLE_SIZES.map(value => <button key={value} onClick={() => setSampleSize(value)}>{value}</button>)}
        </div>
        <Img id={'image1'} size={sampleSize} src={'assets/images/react.png'} />
    </section>;
};

export default Body;