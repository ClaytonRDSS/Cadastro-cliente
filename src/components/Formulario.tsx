import { useState } from "react";
import Cliente from "../core/Cliente";
import Botao from "./Botao";
import Entrada from "./Entrada";

interface FormularioProps {
    cliente: Cliente
    clienteMudou?: (cliente: Cliente) => void
    cancelado?: () => void
}

export default function Formulario(props: FormularioProps) {

    const id = props.cliente?.id

    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)

    return (
        <div>
            {id ? (
                <Entrada
                    somenteLeitura
                    texto='Código' 
                    valor={id}
                    className='mb-4'
                /> 
            ) : false }
                <Entrada 
                    texto="Nome" 
                    valor={nome}
                    valorMudou={setNome}
                    className='mb-4'
                />
                <Entrada 
                    texto="Idade" 
                    valor={idade}
                    valorMudou={setIdade} 
                    tipo="number"
                />

                <div className="flex justify-end mt-7 ">
                    <Botao 
                        onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}
                        className={`mr-6`}>
                        {id ? 'Alterar' : 'Salvar'}
                    </Botao>

                    <Botao  
                        onClick={props.cancelado}
                    >
                        Cancelar
                    </Botao>
                </div>
        </div>
    )
}