import Tarjeta from "./components/Tarjeta";
import ContenedorTarjetas from "./components/ContenedorTarjetas";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Tarjetas de Presentación</h1>
        <p>Ejercicio React - Props y Componentes</p>
      </header>

      <ContenedorTarjetas>
        <Tarjeta
          nombre="Lina Maria Fuentes"
          profesion="Diseñadora UX"
          imagen="https://randomuser.me/api/portraits/women/65.jpg"
          descripcion="Diseña experiencias digitales intuitivas y centradas en el usuario."
        />

        <Tarjeta
          nombre="David Gómez Paz"
          profesion="Desarrollador Frontend"
          imagen="https://randomuser.me/api/portraits/men/81.jpg"
          descripcion="Especialista en React y interfaces modernas."
        />

        <Tarjeta
          nombre="Lucía Martínez"
          profesion="QA Analyst"
          imagen="https://randomuser.me/api/portraits/women/43.jpg"
          descripcion="Asegura calidad del software mediante pruebas y análisis."
        />
      </ContenedorTarjetas>
    </div>
  );
}

export default App;
