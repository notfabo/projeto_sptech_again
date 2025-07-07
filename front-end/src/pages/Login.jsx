import React from "react";
import { useEffect, useState, useRef } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";
import ModalAviso from "../components/ModalAviso";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function Login() {
  const [theme, setTheme] = useState(null);

  const navigate = useNavigate();
  const email_input = useRef(null);
  const senha_input = useRef(null);
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const [openModalAviso, setOpenModalAviso] = useState(false);
  const [modalAvisoTitulo, setModalAvisoTitulo] = useState("");
  const [modalAvisoDescricao, setModalAvisoDescricao] = useState("");
  const [modalAvisoTempo, setModalAvisoTempo] = useState(0);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const login = () => {
    console.log(email_input.current.value);
    console.log(senha_input.current.value);

    if (!email_input.current.value || !senha_input.current.value) {
      setModalAvisoTitulo("Campos vazios!");
      setModalAvisoDescricao("Por favor, preencha todos os campos.");
      setModalAvisoTempo(5000);
      setOpenModalAviso(true);
      return;
    } else if (!emailRegex.test(email_input.current.value)) {
      setModalAvisoTitulo("Email invalido!");
      setModalAvisoDescricao("Por favor, insira um email valido.");
      setModalAvisoTempo(5000);
      setOpenModalAviso(true);
    } else {
      api
        .post("/vendedores/login/vendedor", {
          email: email_input.current.value,
          senha: senha_input.current.value,
        })
        .then((response) => {
          console.log(response.data);
          if (response.data.aprovado) {
            localStorage.setItem("NOME", response.data.nome);
            localStorage.setItem("IDVENDEDOR", response.data.idVendedor);
            localStorage.setItem("ROLE", "vendedor");
  
            // localStorage.NOME = response.data.nome;
            // localStorage.IDVENDEDOR = response.data.idVendedor;

            navigate("/carteira");
          } else {
            setModalAvisoTitulo("Acesso negado!");
            setModalAvisoDescricao("Por favor, entre em contato com seu gerente.");
            setModalAvisoTempo(5000);
            setOpenModalAviso(true);
          }
        })
        .catch((error) => {
          console.log(error);
          console.log("vemos tentar gerente");
          api
            .post("/gerentes/login/gerente", {
              email: email_input.current.value,
              senha: senha_input.current.value,
            })
            .then((response) => {
              console.log(response.data);
              localStorage.setItem("NOME", response.data.nome);
              localStorage.setItem("IDGERENTE", response.data.idGerente);
              localStorage.setItem("ROLE", "gerente");

              // localStorage.NOME = response.data.nome;
              // localStorage.IDGERENTE = response.data.idGerente;

              navigate("/home");
            })
            .catch((error) => {
              console.log(error);
              setModalAvisoTitulo("Email ou senha incorretos!");
              setModalAvisoDescricao("Por favor, tente novamente mais tarde.");
              setModalAvisoTempo(5000);
              setOpenModalAviso(true);
            });
        });
    }
  };

  return (
    <div className="bg-branco-medio dark:bg-preto-claro h-screen flex text-preto dark:text-branco-claro 2xl:px-60 2xl:py-44 xl:px-40 xl:py-24">
      <div className="z-10">
        {openModalAviso && (
          <ModalAviso
            closeModal={setOpenModalAviso}
            tempo={modalAvisoTempo}
            titulo={modalAvisoTitulo}
            descricao={modalAvisoDescricao}
          />
        )}
      </div>
      <div className="relative flex w-full h-full 2xl:p-14 xl:p-8 2xl:rounded-3xl xl:rounded-2xl bg-cover bg-center" style={{ backgroundImage: "url('/bg-login.png')" }}>
        <div
          /*esquerda*/ className="w-[50%] flex flex-col items-start 2xl:gap-y-6 xl:gap-y-5"
        >
          <div className="2xl:h-28 2xl:w-[151px] xl:h-20 xl:w-28 bg-Pic dark:bg-Pic-dark"></div>
          <div className="font-normal 2xl:text-7xl xl:text-4xl">
            Login
          </div>
          <div className="font-light 2xl:text-4xl xl:text-2xl">
            <p>Automatizando oportunidades</p>
          </div>
        </div>
        <div
          /*direita*/ className="w-[50%] flex justify-end 2xl:pt-36 xl:pt-24"
        >
          <div className="flex flex-col w-full">
            <div className="flex flex-col w-full 2xl:pl-40 xl:pl-20 2xl:gap-y-10 xl:gap-y-6">
              <input
                className=" dark:text-preto text-branco-claro 2xl:h-12 xl:h-10 rounded-lg 2xl:text-xl xl:text-lg px-4"
                placeholder="Email"
                ref={email_input}
                type="email"
              />
              <div className="flex flex-col">
                <div className="relative w-full">
                <input
                    className=" dark:text-preto text-branco-claro 2xl:h-12 xl:h-10 rounded-lg 2xl:text-xl xl:text-lg px-4 w-full"
                    placeholder="Senha"
                    ref={senha_input}
                    // type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type={visible ? "text" : "password"}
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={() => setVisible(!visible)}>
                    {
                      visible ? <FaEye color="#2f81f7" /> : <FaEyeSlash color="#2f81f7" />
                    }
                  </div>
                </div>
                <div className="cursor-pointer flex pt-1 underline text-azul">
                  Esqueceu a senha?
                </div>
              </div>
            </div>
            <div className="flex justify-end items-end h-full">
              <div className="flex justify-end items-center 2xl:gap-x-10 xl:gap-x-6">
                {/* <div className="2xl:text-xl xl:text-lg font-semibold ">
                  Cadastro
                </div>
                <button className="bg-azul text-branco-claro flex items-center justify-center 2xl:px-8 xl:px-5 2xl:py-2 xl:py-1 2xl:text-xl xl:text-lg font-semibold rounded-3xl">
                  SSO
                </button> */}
                <button
                  onClick={login}
                  className="bg-azul text-branco-claro flex items-center justify-center 2xl:px-10 xl:px-6 2xl:py-2 xl:py-1 2xl:text-xl xl:text-lg font-semibold rounded-3xl"
                >
                  Entrar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
