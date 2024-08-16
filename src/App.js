import logo from './logo.svg';
import './App.css';

function Header(props){
  return <h1>{props.title}</h1>
}
function App() {
  return <Header />;
}

export default App;
