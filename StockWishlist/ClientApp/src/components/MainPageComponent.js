import React, { useState } from 'react';
import StockGridComponent from './StockGridComponent';
import AddFormComponent from './AddFormComponent';

const MainPageComponent = () => {
    const [loadingGrid, setLoadingGrid] = useState(true);
    return (
        <div>
            <div style={{ textAlign: 'center' }}>
                <AddFormComponent setLoadingGrid={setLoadingGrid} />
            </div>
            <StockGridComponent loadingGrid={loadingGrid} setLoadingGrid={setLoadingGrid} />
        </div>
    )
}

export default MainPageComponent; 