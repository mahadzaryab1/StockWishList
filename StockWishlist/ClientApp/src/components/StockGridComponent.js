import React, { useState } from 'react';
import StockCardComponent from './StockCardComponent';

const StockGridComponent = () => {
    const initGridState = [
        {
            companyName: 'Square',
            stockExchange: 'NYSE',
            stockTicker: 'SQ',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Square%2C_Inc_-_Square_Logo.jpg'
        },
        {
            companyName: 'Shopify',
            stockExchange: 'TSE',
            stockTicker: 'SHOP',
            imageUrl: 'https://pbs.twimg.com/profile_images/1316144069643513856/oNmHnrBG.jpg'
        },
        {
            companyName: 'Apple',
            stockExchange: 'NASDAQ',
            stockTicker: 'AAPL',
            imageUrl: 'https://i.pinimg.com/originals/ff/02/54/ff0254764c9e980bb71d36a2ba58ae37.jpg'
        },
        {
            companyName: 'Microsoft',
            stockExchange: 'NASDAQ',
            stockTicker: 'MSFT',
            imageUrl: 'https://1.bp.blogspot.com/-IgiXS3YMT-4/UDZzIAwWhlI/AAAAAAAAL7I/klX_JQtLNws/s1600/Microsoft+symbol+2012.png'
        }
    ]

    const [grid, setGrid] = useState(initGridState);
    console.log(grid);
    return (
        <div className="card-grid">
            {grid.map(gridItem => (
                <StockCardComponent stockInformation={gridItem} />
            ))}
        </div>
    )
}

export default StockGridComponent;