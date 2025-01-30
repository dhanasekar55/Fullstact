
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Edit from './components/edit'
import Home from './components/home'
import Delete from './components/delete'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="edit" element={<Edit/>} />
          <Route path="/" element={<Home/>} />
          <Route path="Delete" element={<Delete/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
