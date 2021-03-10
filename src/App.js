import './App.css';

// material ui
import {
  Container,
} from "@material-ui/core";

// Table component
import { TableComponent } from "./components/table-component";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Sample Table</h1>
      </header>
      <Container maxWidth="md">
        <TableComponent></TableComponent>
      </Container>
    </div>
  );
}

export default App;
