import { useState } from "react"
import Card from "./file/Card"
import hoodie from "./hoodie.jpg"
import bag from "./bag.jpg"
import kurta from "./kurta.jpg"
import jeans from "./jeans.jpg"
import shorts from "./shorts.jpg"
import tshirt from "./tshirt.jpg"
import kurtis from "./kurtis.jpg"
import skirts from "./skirts.jpg"
import "./App.css"
function App(){
  const items = [
    {image:bag , name:"GFG Bag", Price:"Price: $499", btn:"Add to Shopping Cart"},
    {name:"GFG Hoodie" ,image:hoodie, Price:"Price: $699", btn:"Add to Shopping Cart"},
    {name:"GFG Jeans", image:jeans, Price:"Price: $899", btn:"Add to Shopping Cart"},
    {name:"GFG Kurta", image:kurta, Price:"Price: $999", btn:"Add to Shopping Cart"},
    {name:"GFG Skirts",image:skirts, Price:"Price: $199", btn:"Add to Shopping Cart"},
    {name:"GFG T-Shirt",image:tshirt, Price:"Price: $299", btn:"Add to Shopping Cart"},
     {name:"GFG kutris",image:kurtis, Price:"Price: $499", btn:"Add to Shopping Cart"},
     {name:"GFG Shorts",image:shorts, Price:"Price: $199", btn:"Add to Shopping Cart"},
  ]
  const [search, setSearch]=useState("")
  const filterItems = items.filter((item)=>
    item.name.toLowerCase().includes(search.toLocaleLowerCase())
  )
  
  return(
    <div>
    <div className="header">
       <h1>GreeksforGreeks Shopping Cart</h1>
       <input type="text"
      placeholder="Search for GFG Products..."
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      />
    </div>
      <div className="box">
      
        {filterItems.length>0?(
          filterItems.map((item, index)=>(
            <Card
              key={index}
              image={item.image}
              name={item.name}
              price={item.Price}
              btn={item.btn}
            />
          ))
        ):
        (
          <p>no fount</p>
        )}      

     </div>
      </div>
    
  )
}
export default App