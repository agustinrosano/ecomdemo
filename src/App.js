import react from "react"
import {Header} from "./Componentes/Header"
import {ProductosLista} from "./Componentes/Productos/productos"
import '../src/index.css';
import 'boxicons'

function App() {
  return (
   <div className="App">
      <Header/> 
      
      <ProductosLista/>
    
   </div>
  );
}

export default App;
