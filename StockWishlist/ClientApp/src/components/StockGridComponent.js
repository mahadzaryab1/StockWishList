import React, { useState } from 'react';
import StockCardComponent from './StockCardComponent';

const StockGridComponent = () => {
    const initGridState = [
        {
            companyName: 'Square',
            stockExchange: 'NYSE',
            stockTicker: 'SQ',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Square%2C_Inc_-_Square_Logo.jpg',
            reason: 'Square has strong balance sheet and is poised for success with the growth of Cash App'
        },
        {
            companyName: 'Shopify',
            stockExchange: 'TSE',
            stockTicker: 'SHOP',
            imageUrl: 'https://pbs.twimg.com/profile_images/1316144069643513856/oNmHnrBG.jpg',
            reason: 'Shopify is benefitting from the shift to e-commerce and is continously expanding its ecosystem'

        },
        {
            companyName: 'Apple',
            stockExchange: 'NASDAQ',
            stockTicker: 'AAPL',
            imageUrl: 'https://i.pinimg.com/originals/ff/02/54/ff0254764c9e980bb71d36a2ba58ae37.jpg',
            reason: 'Apple is seeing an increase in revenue in its subscription services and will benefit from the sales of their new M1 Macs'
        },
        {
            companyName: 'Microsoft',
            stockExchange: 'NASDAQ',
            stockTicker: 'MSFT',
            imageUrl: 'https://1.bp.blogspot.com/-IgiXS3YMT-4/UDZzIAwWhlI/AAAAAAAAL7I/klX_JQtLNws/s1600/Microsoft+symbol+2012.png',
            reason: 'Microsoft is experiencing tremendous growth in their cloud business as well as their work from home services'
        }
    ]

    const [grid, setGrid] = useState(initGridState);
    return (
        <div className="card-grid">
            {grid.map(gridItem => (
                <StockCardComponent stockInformation={gridItem} />
            ))}
        </div>
    )
}

export default StockGridComponent;