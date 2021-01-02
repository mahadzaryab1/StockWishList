import React, { useState, useEffect } from 'react';
import StockCardComponent from './StockCardComponent';
import { EmptyState, Spinner } from '@shopify/polaris';
import EmptyStateIllustration from '../illustrations/404.svg'
import axios from 'axios';


/**
 * Renders the grid containing the stock wish list
 * of the user
 * 
 * @param {*} props 
 */
const StockGridComponent = ({ loadingGrid, setLoadingGrid }) => {
    // state containing the items in the grid
    const [grid, setGrid] = useState([]);

    useEffect(() => {
        // make API call to obtain entries in wish list
        if (loadingGrid) {
            axios.get('/api/wishlist').then((res) => {
                setGrid(res.data.wishlistEntries);
                setLoadingGrid(false);
            })
        }
    }, [loadingGrid, setLoadingGrid])

    return (
        <div>
            {!loadingGrid && grid.length > 0 && <div className="card-grid">
                {grid.map(gridItem => (
                    <div key={gridItem.id}>
                        <StockCardComponent stockInformation={gridItem} setLoadingGrid={setLoadingGrid} />
                    </div>
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