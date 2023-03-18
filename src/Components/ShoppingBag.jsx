import React, { useContext, useEffect } from 'react'
import { MyContext } from './Context'

export default function ShoppingBag() {
  const shopBag = useContext(MyContext)

  function remove(item) {
    const elementToRemove = item;

    const filteredBag = shopBag.bag.filter((element) => element !== elementToRemove);
    shopBag.setBag(filteredBag)
  }

  const total = shopBag.bag.reduce((value, item) => {
    return value + item.price;
  }, 0);

  function checkout() {
    if (localStorage.getItem('User')) {
      alert('Thank you for shopping')
      const newBag = []
      shopBag.setBag(newBag)
    } else {
      alert('Please log in or register')
    }
  }

  return (
    <div className='shopBag'>
      <div className='countProdd'>{shopBag.bagLength}</div>
      {shopBag.bag.length > 0 ? (
        <>
          {shopBag.bag.map(item => (
            <div className='product' key={item.id}>
              <h3>{item.title}</h3>
              <img src={item.image} alt="" />
              <p>price - {item.price} $</p>
              <button onClick={() => remove(item)}>remove</button>
            </div>
          ))}
          <div className='totalPrice'>
            <h2 >Total price: <span>{Math.round(total)} $</span></h2>
            <button className='checkout' onClick={checkout}>proceed to checkout</button>
          </div>
        </>
      ) : <h1>Your bag is empty</h1>}
    </div>

  )
}
