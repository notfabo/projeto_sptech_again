import "./App.css";
import Login from "./pages/Login";
import Carteira from "./pages/Carteira";
import Dashboard from "./pages/Dashboard";
import Funcionarios from "./pages/Funcionarios";
import ListaVendas from "./pages/ListaVendas";
import Home from "./pages/Home";
import EmContrucao from "./pages/EmContrucao";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Produtos from "./pages/Produtos";
import Contatos from "./pages/Contatos";
import Compras from "./pages/Compras";
import Oportunidades from "./pages/Oportunidades";
import Perfil from "./pages/Perfil";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Login />} />
        <Route path="/carteira" element={<Carteira />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/contatos" element={<Contatos />} />
        <Route path="/compras" element={<Compras />} />
        <Route path="/oportunidades" element={<Oportunidades />} />
        <Route path="/perfil/*" element={<Perfil />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/funcionarios" element={<Funcionarios />} />
        <Route path="/vendas" element={<ListaVendas />} />
        <Route path="/emcostrucao" element={<EmContrucao />} />
      </Route>
    )
  );

  return (
    <div className="App font-sans text-preto dark:text-branco-claro">
      <RouterProvider router={router} />
    </div>
  );
}

const Root = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>

      <div>
        <Outlet />
      </div>
    </>
  );
};

export default App;
