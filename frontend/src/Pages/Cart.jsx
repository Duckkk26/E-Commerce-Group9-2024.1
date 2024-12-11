import React from 'react'
import CartItems from '../Component/CartItems/CartItems'
import MenuBottomTabs from '../Component/MenuBottomTabs/MenuBottomTabs'

import './CSS/Cart.css'

function Cart() {
  return (
    <>
      <div className='cart'>
        <CartItems />
      </div>
      <MenuBottomTabs active={'Home'} />
    </>
  )
}

export default Cart