import React from 'react';
import { CalloutCard } from '@shopify/polaris';

const StockCardComponent = ({stockInformation}) => {
    console.log(stockInformation)
    return (
        <div>
            <CalloutCard
                title={stockInformation.companyName + ' ($' + stockInformation.stockExchange + ': ' + stockInformation.stockTicker + ')'}
                illustration={stockInformation.imageUrl}
                primaryAction={{
                    content: 'View Details',
                    url: 'https://www.shopify.com',
                }}
            >
                <p>Upload your store’s logo, change colors and fonts, and more.</p>
            </CalloutCard>
        </div>
    );
}

export default StockCardComponent; 