import { useState } from 'react'
import { useRef } from 'react'
import { v4 } from 'uuid'
import { AddButton, Container, Product, TrashButton } from './styles'
function Home() {
  const [produtos, setProdutos] = useState([])
  const inputRef = useRef()
  function cliqueiNoBotão() {
    if (inputRef.current.value !== '') {
      setProdutos([{
        id: v4(),
        nome: inputRef.current.value
      }, ...produtos])
      inputRef.current.value = ''
    } else {
      alert(`digite um produto!`)
    }
  }


  function deletarProduto(id) {
    setProdutos(produtos.filter(produto => produto.id !== id))
  }
  return (
    <>
      <Container>
        <h1>Lista de Compras</h1>
        <input type="text" placeholder='produto...' ref={inputRef} />
        <AddButton onClick={cliqueiNoBotão}>Adicionar</AddButton>
        {
          produtos.map((produto) => {
            return (
              <Product key={produto.id}>
                <p >{produto.nome}</p>
                <TrashButton onClick={() => deletarProduto(produto.id)}>🗑️</TrashButton>
              </Product>)
          })
        }
      </Container>
    </>
  )
}

export default Home
