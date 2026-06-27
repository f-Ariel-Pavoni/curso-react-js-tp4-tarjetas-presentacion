import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Tarjeta from "./components/Tarjeta/Tarjeta";
import ContenedorTarjetas from "./components/ContenedorTarjetas/ContenedorTarjetas";
import tarjetas from "./data/tarjetas";

function App() {
  return (
    <div className="app">
      <Header />
      <ContenedorTarjetas tarjetas={tarjetas} />
      <Footer />
    </div>
  );
}

export default App;
