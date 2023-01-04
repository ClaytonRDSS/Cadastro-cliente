import Botao from '../components/Botao'
import Formulario from '../components/Formulario'
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import useClientes from '../hooks/useClientes'

export default function Home() {

  const { clienteSelecionado, 
    clienteDeletado, 
    novoCliente, 
    SalvarCliente,
    cliente,
    clientes,
    tabelaVisivel,
    exibirTabela
  } = useClientes()

  return (
    <div className={` 
      flex h-screen
      justify-center
      items-center
      bg-gradient-to-r from-gray-500 to-gray-900
      text-white
    `}>

      <Layout titulo='Cadastro Simples'>
        {tabelaVisivel ? (
            <>
            <div className='flex justify-end'>
              <Botao
                onClick={novoCliente} 
                className='mb-4'>
                Novo Cliente
              </Botao>
            </div>
            <Tabela 
              clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteDeletado={clienteDeletado}
              /> 
          </>
        ) : (
          <Formulario 
          clienteMudou={SalvarCliente}
          cliente={cliente}
          cancelado={exibirTabela}/>
        )}
      </Layout>
    </div>
  )
}
