import './App.css';
import { Page, Button, CalloutCard } from '@shopify/polaris';
import StockGridComponent from './components/StockGridComponent';

function App() {
  return (
    <Page
      title="Stock Wishlist"
      subtitle="A personal repository to hold the stocks that you wish to buy!">
      <div style={{ textAlign: 'center' }}>
        <Button monochrome outline>
          Add a Stock
          </Button>
      </div>
      <StockGridComponent />
    </Page>
  );
}

export default App;
