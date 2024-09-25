import { useState } from 'react'
import './App.css'
import FirstComponent from './components/FirstComponent'
import Color from './components/Color'

function App() {
  const [cardColor, setCardColor] = useState('#d4d4d4')
  const productArr = [
    {
      product : "Bomber Jacket",
      price : 1200,
      stock : true
    },
    {
      product : "Puffed Jacket",
      price : 1500,
      stock : true
    },
    {
      product : "Wind Jacket",
      price : 1000,
      stock : false
    },
    {
      product : "Rain Jacket",
      price : 2000,
      stock : true
    }
  ]
  function getCardColor(color){
    setCardColor(color)
  }


  return (
    <>
    <div className='flex flex-wrap gap-3'>
      {productArr.map((item,index)=>{        
        let instock = 'In Stock';
        if(!item.stock){
          instock = 'Out of Stock'
        }        
        return(
          
            <FirstComponent 
          key = {index}
          jacketName = {item.product} 
          price = {item.price} 
          stock = {instock}
          setCardColor = {cardColor}
        />
          
        )
      })}
      </div>
      <Color handelCardColor = {getCardColor}/>
    </>
  )
}

export default App
