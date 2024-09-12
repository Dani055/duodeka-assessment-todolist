import "./App.css";
import { Route, Routes } from "react-router-dom";
import TodoList from "./pages/TodoList/TodoList";
import NotFound from "./pages/404/404";
import { Grid2} from "@mui/material";
import Header from "./components/Header/Header";
import ViteReact from "./pages/ViteReact/ViteReact";
import Groceries from "./pages/Groceries/Groceries";

function App() {

  return (
    <>
      <Grid2 spacing={1} container alignItems="stretch">
        <Grid2 size={{xs: 12, sm: 2}}>
          <Header/>
        </Grid2>
        <Grid2 size={{xs: 12, sm: 10}}>
          <div className="container-sm mt-4 pb-5">
            <Routes>
              <Route path="/" element={<TodoList />} />
              <Route path="/vitereact" element={<ViteReact />} />
              <Route path="/groceries" element={<Groceries />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Grid2>
      </Grid2>
    </>
  );
}

export default App;
