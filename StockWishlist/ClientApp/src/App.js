import './App.css';
import { Page } from '@shopify/polaris';
import StockGridComponent from './components/StockGridComponent';
import AddFormComponent from './components/AddFormComponent';

function App() {
  return (
    <Page
      title="Stock Wishlist"
      subtitle="A personal repository to hold the stocks that you wish to buy!">
      <div style={{ textAlign: 'center' }}>
        <AddFormComponent />
      </div>
      <StockGridComponent />
    </Page>
  );
}

export default App;
