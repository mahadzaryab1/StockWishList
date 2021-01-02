import React from 'react';
import { CalloutCard } from '@shopify/polaris';
import axios from 'axios';

/**
 * Renders a card which contains information 
 * about a single stock entry
 * 
 * @param {*} props 
 */
const StockCardComponent = ({ stockInformation, setLoadingGrid }) => {
    return (
        <div>
            <CalloutCard
                title={stockInformation.companyName + ' ($' + stockInformation.stockExchange + ': ' + stockInformation.stockTicker + ')'}
                illustration={stockInformation.imageUrl}
                primaryAction={{
                    content: 'Remove',
                    onAction: () => {
                        axios.delete('/api/wishlist/' + stockInformation.id).then(() => {
                            setLoadingGrid(true);
                        })
                    }
                }}
            >
                <div className="card-content">
                    <p>{stockInformation.reason}</p>
                </div>
            </CalloutCard>
        </div>
    );
}

export default StockCardComponent; 