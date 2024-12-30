/* eslint-disable no-unused-vars */


import React, { useState } from "react";
import Checkbox from "./components/forms/Checkbox";
import Input from "./components/forms/Input";
import ProductCategoryRow from "./components/Products/ProductCategoryRow";
import ProductRow from "./components/Products/ProductRow";

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];

function App() {
   const [showStockedOnly, setShowStockedOnly] = useState(false)
   const [search,setSearch]=useState("")

   const visibleProducts = PRODUCTS.filter(product=>{
    if(showStockedOnly && !product.stocked){
      return false
    }
    if(search && !product.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
      return false
    }
    return true
  })

   
   
  
  
  return<><div className="container-fluid p-5  bg-primary text-white text-center">
  <h1>My First TodoListe</h1>
  <p>Liste des produits</p>
</div>
<div className="container-fluid p-6 my-3">
    <SearchBar
      showStockedOnly={showStockedOnly}
      onStockedOnlyChange={setShowStockedOnly}
      search={search}
      onSearchChange={setSearch}
    />
    
    <ProductTable products={visibleProducts}></ProductTable>


</div>

  </>
}

function SearchBar({showStockedOnly, onStockedOnlyChange,search,onSearchChange}){
  return<div>
    <div className="mb-3">
      <Input value={search} onChange={onSearchChange} placeholder="Rechercher ..." />
      <Checkbox id="stocked" checked={showStockedOnly} onChange={onStockedOnlyChange} label="  N' afficher les produits en stock" />
    </div>
  </div>
}

function ProductTable({products}){
  const rows =[]
  let lastCategory = null

  for (let product of products){
    if (product.category !==lastCategory){
      rows.push(<ProductCategoryRow key={product.category} name={product.category} />)
    }
    lastCategory=product.category
    rows.push(<ProductRow product={product} key={product.name} />)


  }
  return <table className="table">
    <thead>
      <tr>
        <th>Nom</th> <th>Prix</th>
      </tr>
    </thead>
    <tbody>
      {rows}
    </tbody>
  </table>
}

export default App
