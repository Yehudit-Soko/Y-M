import React from 'react';

const ImgComponent = ({ path, className }) => {
    return (
        <div className={className}>
            <img src={path} alt="" />
        </div>
    );
};

export default ImgComponent;

