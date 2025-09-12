import Banner from './Banner'
import Cards from './Cards'
import Footer from './Footer'
import ShoppingList from './ShoppingList'
import logo from '../assets/logo.png'
import '../styles/App.css'
import { useState } from 'react'
import Formulaires from './Formulaire'

function App() {

  const [cart, updateCart] = useState([])

  return (
    <>
      <Banner>
        <img src={logo} alt='logo maison jungle' className='nav-logo' />
        <h1 className='nav-name'>La Maison jungle</h1>
      </Banner>

      <div className ='lmj-layout-inner'>
        <Cards cart = {cart} updateCart = {updateCart} />
        <ShoppingList cart = {cart} updateCart = {updateCart} />
      </div>
      <Formulaires />
      <Footer />
    </>
  )
}

export default App
