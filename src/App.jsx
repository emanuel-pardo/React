import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import PageContainer from "./components/PageContainer/PageContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Error from "./components/Error/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';





function App() {

  const title = "trayectoria";
  const imgsrc = "https://static.wixstatic.com/media/baed1c_b0589b7d066a4d0f861f13559236e129~mv2.jpg/v1/fill/w_1024,h_376,al_c,q_85,enc_avif,quality_auto/baed1c_b0589b7d066a4d0f861f13559236e129~mv2.jpg";
  const text = `contamos con 40 años de experiencia en el mercado, especializándonos en la fabricación e importación de hilos de coser de alta calidad. trabajamos a partir de fibras sintéticas puras de alta resistencia, lo que nos permite ofrecer una amplia gama de productos, incluyendo hilos de poliamida nylon y poliéster (alta tenacidad-resistencia, multifilamento, fibra cortada, texturizados, tangleados).

atendemos con compromiso y excelencia a industrias como calzado, matelaseado, marroquinería, tapicería, indumentaria de cuero, indumentaria general, jeanería, lonería, minería, agro, entre muchas otras.

nuestro know-how técnico y práctico, respaldado por décadas de trayectoria, nos permite adaptar tanto nuestros equipos como nuestro personal para desarrollar hilados especiales a medida, respondiendo a las necesidades específicas de cada cliente.

la mejora continua, tanto en nuestros productos como en los procesos de fabricación, es uno de los pilares que nos distingue. en conotex, la calidad es una garantía.`;


  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<PageContainer title={title} text={text} imageSrc={imgsrc} />} />
        <Route path="/products" element={<ItemListContainer />} />
        <Route path="/products/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/products/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<Error />} />
      </Routes>




    </BrowserRouter>
  )
}

export default App
