import './App.css';
import { Page } from '@shopify/polaris';
import StockGridComponent from './components/StockGridComponent';
import AddFormComponent from './components/AddFormComponent';
import MainPageComponent from './components/MainPageComponent';

function App() {
  return (
    <Page
      title="Stock Wish List"
      subtitle="A personal repository to hold the stocks that you wish to buy!">
      {/* <div style={{ textAlign: 'center' }}>
        <AddFormComponent />
      </div>
      <StockGridComponent /> */}
      <MainPageComponent />
    </Page>
  );
}

export default App;
