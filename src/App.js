import { Routes } from './routes';
import { GlobalStyle } from './style/globalStyles';
import { Header } from './components/Header';


function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Routes />
    </div>
  );
}

export default App;
