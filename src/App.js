import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import CartWidget from './components/NavBar/CartWidget';



function App() {

  let miEstilo = {backgroundColor : "lightblue"};
  
  return (
    <div ClassName="main" style={miEstilo}>
      <NavBar/>
      <ItemListContainer greeting= "E-Commerce"/>
      
    </div>
  );
}



export default App;

