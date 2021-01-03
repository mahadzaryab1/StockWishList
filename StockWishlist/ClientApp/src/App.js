import './App.css';
import { Page } from '@shopify/polaris';
import MainPageComponent from './components/MainPageComponent';

function App() {
  return (
    <Page
      title="Stock Wish List"
      subtitle="A personal repository to hold the stocks that you wish to buy!">
      <MainPageComponent />
    </Page>
  );
}

export default App;
