import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import AddContact from "./AddContact";
import EditContact from "./EditContact";
import Header from "./Header";
import List from "./List";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/list" element={<List />} />
        <Route path="/add" element={<AddContact />} />
        <Route path="/edit" element={<EditContact />} />
      </Routes>
    </div>
  );
}

export default App;
