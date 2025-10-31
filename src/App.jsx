import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import PageContainer from "./components/PageContainter/PageContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Error from "./components/Error/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';





function App() {

  const title = "Historia";
  const subtitle = "Inicios";
  const text = "A comienzos de la década de 1980, con una sólida experiencia de más de diez años en la fabricación de textiles, identificamos una oportunidad clave en el mercado: la escasez de insumos para la confección. Gracias a nuestro conocimiento, visión estratégica y análisis del sector, decidimos expandir nuestras operaciones e incursionar en el rubro del confeccionado.";

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<PageContainer title={title} subtitle={subtitle} text={text} />} />
        <Route path="/products" element={<ItemListContainer />} />
        <Route path="/products/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<Error />} />
      </Routes>




    </BrowserRouter>
  )
}

export default App
