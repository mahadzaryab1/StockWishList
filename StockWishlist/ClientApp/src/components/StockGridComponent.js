import React, { useState, useEffect } from 'react';
import StockCardComponent from './StockCardComponent';
import { EmptyState, Spinner } from '@shopify/polaris';
import EmptyStateIllustration from '../illustrations/404.svg'
import '../App.css';
import axios from 'axios';

const StockGridComponent = ({loadingGrid, setLoadingGrid}) => {
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
            reason: 'Shopify has benefitted from the shift to e-commerce and is continuously expanding its ecosystem'

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

    const [grid, setGrid] = useState([]);

    useEffect(() => {
        if (loadingGrid) {
            axios.get('/api/wishlist').then((res) => {
                console.log(res);
                setGrid(res.data.wishlistEntries);
                setLoadingGrid(false);
            })
        }
    }, [loadingGrid])

    return (
        <div>
            {!loadingGrid && grid.length > 0 && <div className="card-grid">
                {grid.map(gridItem => (
                    <StockCardComponent stockInformation={gridItem} />
                ))}
            </div>}
            {!loadingGrid && grid.length === 0 && <div className="empty-state"><EmptyState
                heading="Your Wish List is Empty!"
                image={EmptyStateIllustration}
                imageContained={true}
            >
                <p>Click on <i>Add a Stock</i> to begin adding stocks to your wishlist.</p>
            </EmptyState></div>}
            {loadingGrid && <div className="center-spinner"><Spinner accessibilityLabel="Spinner example" size="large" color="teal" /></div>}
        </div>
    )
}

export default StockGridComponent;