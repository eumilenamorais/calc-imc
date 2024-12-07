import { FaWeightHanging } from "react-icons/fa6"
import { FaRuler } from "react-icons/fa";
import image from "./assets/fitness-tracker-animate.svg"
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0) 
  const [loading, setLoading] = useState(false);
  const [resultado, setResultado] = useState("")
  const [mensagem, setMensagem] = useState("") 


  function clickCalcular(){
    if (!peso || !altura){
      toast.error("Preencha todos os campos")
      return
    }
    setLoading(true)
    const valorImc = peso / (altura * altura)

    if(valorImc < 18.5){
      setMensagem("Você está destrunido")
    } else if (valorImc >= 18.5 && valorImc <= 24.9){
      setMensagem("Você está no peso ideal")
    } else if (valorImc >=25 && valorImc <= 29.9){
      setMensagem("Voce está com sobrepeso")
    } else if(valorImc >= 30 && valorImc <= 34.9 ) {
      setMensagem("Voce está com obesidade grau 1")
    } else if(valorImc >= 35 && valorImc <= 39.9){
      setMensagem("Voce está com obesidade grau 2")
    } else {
      setMensagem("Voce está com obesidade grau 3")
    }


    setTimeout(
      () => {
        setLoading(false)
        setResultado(valorImc.toFixed(2))
      }, 1500
    )
    
  }

  return (
    <div className="w-full h-screen flex bg-black">
      <ToastContainer />
      <div className="w-[50%] h-full flex items-center justify-center">
        <img src={image} alt="" width={700} />
      </div>
      <div className="w-[50%] h-full flex items-center justify-center">
        <div className="w-[60%] h-auto p-[20px] rounded-lg flex flex-col bg-[#1f1f1f]">
          <div className="w-full flex flex-col">
             <h1 className="text-white text-[40px] font-bold">
              Calculadora - IMC
             </h1>
             <div className="w-[200px] h-[4px] rounded-lg bg-[#20a54c]"></div>
          </div>
          <div className="w-full flex flex-col">
              <div className="mt-4">
                <label htmlFor="" className="text-white text-[18px]">Peso</label>
                <div className="w-full flex bg-[#555555] rounded-md h-[50px]">
                  <div className="w-[10%] h-full flex items-center justify-center">
                    <FaWeightHanging size={24} color="#B0B0B0FF" /> 
                  </div>
                  <div className="w-[80%] h-full">
                    <input
                      className="w-full h-full bg-transparent border-none outline-none text-white"
                      type="number"
                      onChange={
                        (event) => setPeso(event.target.value)
                      }
                      />
                  </div>
                  <div className="w-[10%] h-full flex items-center justify-center">
                    <p className="text-white">Kg</p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="" className="text-white text-[18px]">Altura</label>
                <div className="w-full flex bg-[#555555] rounded-md h-[50px]">
                  <div className="w-[10%] h-full flex items-center justify-center">
                    <FaRuler size={24} color="#B0B0B0FF" /> 
                  </div>
                  <div className="w-[80%] h-full">
                    <input
                      className="w-full h-full bg-transparent border-none outline-none text-white"
                      type="number"
                      onChange={
                        (event) => setAltura(event.target.value)
                       }
                      />
                  </div>
                  <div className="w-[10%] h-full flex items-center justify-center">
                    <p className="text-white">m</p>
                  </div>
                </div>
              </div>
          </div>
          <div className="w-full flex flex-col items-center justify-center">
              <button
                className="mt-[20px] w-full h-[50px] bg-[#20a54c] rounded-lg text-white font-bold"
                onClick={clickCalcular}
                >
                {
                  loading ? (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-[24px] h-[24px] border-2 border-t-[4px] border-white rounded-full animate-spin"></div>
                    </div>
                  ) : "Calcular"
                }
              </button>
          </div>
          {
            resultado && (
              <div className="w-full flex justify-center flex-col">
                  <div className="w-full bg-gray-500 h-[1px] mt-4"></div>
                  <div className="w-full py-4 flex">
                    <div className="w-[20%] flex flex-col items-center justify-center">
                      <p className="text-[40px] text-[#20a54c]">{resultado}</p>
                      <p className="text-[18 px] text-[#e2e1e1]">Seu IMC</p>
                    </div>
                    <div className="w-[80%] flex items-center justify-center">
                      <p className="text-[20px] text-[#e2e1e1]">{mensagem}</p>
                    </div>
                  </div>
                  <div className="w-full bg-gray-500 h-[1px] mt-4"></div>
                  <div className="w-full flex items-center justify-center">
                    <a className="decoration-[0] text-[20px] text-[#20a54c] mt-4" href="">Mais informações sobre o IMC</a>
                  </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default App
