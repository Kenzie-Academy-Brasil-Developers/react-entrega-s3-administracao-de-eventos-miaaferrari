import { Routes } from './routes';
import { GlobalStyle } from './style/globalStyles';
import { Header } from './components/Header';
import { Footer } from './components/Footer';


function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
