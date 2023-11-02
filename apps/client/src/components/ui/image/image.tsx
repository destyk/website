import React from 'react';
import PropTypes from 'prop-types';
import { Loader } from '../loader';
import { JSX } from 'react/jsx-runtime';

const Image = (
    props: JSX.IntrinsicAttributes &
        React.ClassAttributes<HTMLImageElement> &
        React.ImgHTMLAttributes<HTMLImageElement>
) => {
    const [loaded, setLoaded] = React.useState(false);

    return (
        <React.Fragment>
            {loaded ? null : <Loader />}
            <img
                {...props}
                style={loaded ? {} : { display: 'none' }}
                onLoad={() => setLoaded(true)}
            />
        </React.Fragment>
    );
};

Image.propTypes = {
    src: PropTypes.string
};

Image.defaultProps = {
    src: 'Alan'
};

export { Image };
