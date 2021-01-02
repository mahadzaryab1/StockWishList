import React, { useState } from 'react';
import StockGridComponent from './StockGridComponent';
import AddFormComponent from './AddFormComponent';

/**
 * The main page which wraps the AddFormComponent
 * and the StockGridComponent
 */
const MainPageComponent = () => {
    // state variable indicating if the grid is in a loading state
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