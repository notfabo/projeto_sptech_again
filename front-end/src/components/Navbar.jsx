import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button, Dropdown, Switch, Popover } from "antd";
import { Cog8ToothIcon, ChevronDownIcon } from "@heroicons/react/16/solid";

function Navbar() {
  const [theme, setTheme] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const text = <span className="text-xl">Olá, {localStorage.NOME}</span>;

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const clearStorage = () => {
    localStorage.clear();
    navigate("/");
  };

  const content = (
    <div className="flex justify-between mt-6">
      <div>
        <Switch
          defaultChecked
          className="custom-switch"
          onChange={handleThemeSwitch}
        />
      </div>
      <div>
        <Button onClick={(() => clearStorage())} className="bg-azul text-white border-0 text-lg w-16 h-8 rounded-full">
          Sair
        </Button>
      </div>
    </div>
  );

  const items = [
    {
      key: "1",
      label: (
        <Link className="text-xl" to="/produtos">
          Produtos
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link className="text-xl" to="/contatos">
          Contatos
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link className="text-xl" to="/compras">
          Compras
        </Link>
      ),
    },
    {
      key: "4",
      label: (
        <Link className="text-xl" to="/oportunidades">
          Oportunidades
        </Link>
      ),
    },
  ];

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="fixed top-0 left-0 right-0 bg-branco-claro dark:bg-preto flex justify-between 2xl:py-4 2xl:px-20 xl:py-2 xl:px-10 z-50">
      <div /*esquerda*/ className="w-[50%]">
        {localStorage.IDGERENTE && (
          <Link to="/home" className="flex items-center">
            <div className="2xl:h-12 w-36 xl:h-10 bg-Pic-longa dark:bg-Pic-dark-longa"></div>
          </Link>
        )}
        {/* Se não for gerente, apenas exibe a logo sem link */}
        {!localStorage.IDGERENTE && (
          <div className="2xl:h-12 w-36 xl:h-10 bg-Pic-longa dark:bg-Pic-dark-longa"></div>
        )}
      </div>

      {location.pathname !== "/" ? (
        <div
          /*direita*/ className="text-preto dark:text-branco-claro flex flex-row-reverse w-[50%] items-center gap-x-8"
        >
          <Popover
            placement="bottomRight"
            title={text}
            content={content}
            trigger="click"
            arrow={false}
            className=""
          >
            <Button className="bg-azul text-white border-0 py-6 rounded-full">
              <Cog8ToothIcon className="w-8 h-8 " />
            </Button>
          </Popover>
          <Dropdown
            className="2xl:text-2xl xl:text-lg py-6 px-10 rounded-md font-semibold bg-azul text-branco-claro border-none "
            overlayClassName="bg-branco-claro dark:bg-preto"
            menu={{
              items,
            }}
            placement="bottomRight"
          >
            <Button>
              <Link to="Carteira">Carteira</Link>
              <ChevronDownIcon className="w-10 h-10" />
            </Button>
          </Dropdown>
          {localStorage.IDGERENTE && (
            <>
              <Link
                to="/dashboard"
                className="2xl:text-xl xl:text-lg font-semibold"
              >
                Dashboard
              </Link>
              <Link
                to="/funcionarios"
                className="2xl:text-xl xl:text-lg font-semibold"
              >
                Funcionários
              </Link>
            </>
          )}
        </div>
      ) : null}
    </div>
  );
}

export default Navbar;
