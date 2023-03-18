import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { MyContext } from './Context';

export default function MainInfo() {
  const mainInf = useContext(MyContext);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then(res => {
      console.log(res.data);
      mainInf.setProducts(res.data)
    })
  }, [])




  return (
    <div>
      <div className='allProducts'>
        <div className='countProd'>{mainInf.bagLength}</div>
        {mainInf.products.map(prod => (
          <div className='product' key={prod.id}>
            <h3>{prod.title}</h3>
            <img src={prod.image} alt="" />
            <p>price - {prod.price} $</p>
            <button onClick={() => { mainInf.setBag([...mainInf.bag, prod]) }}>add</button>
          </div>
        ))}
      </div>
    </div>
  )
}
