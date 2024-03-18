import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer/Footer'
import Products from './components/Products/Products'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import { useSelector } from 'react-redux'
import Cart from './components/Cart/Cart'

function App() {
  const toShow=useSelector(state=>state?.cart)

  return (
    <>
    <Header/>
    <Banner/>
    <Products/>
     <Footer/>
     { toShow?.length> 0 && <Cart/>}
    </>
  )
}

export default App
