import React from 'react';

const PortfolioItemPage = (props) => {
    return (
        <div>
            <h2>A thing I've Done</h2>
            <p>Awesome work #{props.match.params.id}</p>
        </div>
    )
};

export default PortfolioItemPage;