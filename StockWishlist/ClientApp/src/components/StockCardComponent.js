import React from 'react';
import { CalloutCard } from '@shopify/polaris';

const StockCardComponent = ({ stockInformation }) => {
    return (
        <div>
            <CalloutCard
                title={stockInformation.companyName + ' ($' + stockInformation.stockExchange + ': ' + stockInformation.stockTicker + ')'}
                illustration={stockInformation.imageUrl}
                primaryAction={{
                    content: 'Remove',
                    url: 'https://www.shopify.com',
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