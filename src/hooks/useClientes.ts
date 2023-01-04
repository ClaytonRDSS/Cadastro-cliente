import { useEffect, useState } from "react"
import ColecaoCliente from "../backEnd/db/ColecaoCliente"
import Cliente from "../core/Cliente"
import ClienteRepositorio from "../core/ClienteRepositorio"
import useTabelaouForm from "./useTabelaouForm"

export default function useClientes() {
    const repo: ClienteRepositorio = new ColecaoCliente()

    const { tabelaVisivel, exibirForm, exibirTabela} = useTabelaouForm()

    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const [clientes, setClientes] = useState<Cliente[]>([])
  
    useEffect(obterTodos, [])
      function obterTodos() {
        repo.obterTodos()
        .then(clientes => {
          setClientes(clientes)
          exibirTabela()
        })
      }
  
    function clienteSelecionado(cliente: Cliente) {
      setCliente(cliente)
      exibirForm()
    }
  
    async function clienteDeletado(cliente: Cliente) {
      await repo.excluir(cliente)
      obterTodos()
    }
  
    async function SalvarCliente(cliente: Cliente) {
      await repo.salvar(cliente)
      obterTodos()
    }
  
    function novoCliente() {
      setCliente(Cliente.vazio())
      exibirForm()
    }

    return {
        novoCliente,
        SalvarCliente,
        clienteDeletado,
        clienteSelecionado,
        obterTodos,
        clientes,
        cliente,
        tabelaVisivel,
        exibirTabela
    }
}