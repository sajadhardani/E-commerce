import React, { useState } from 'react'
import productData from "../products.json"
import { Link } from 'react-router-dom';
import SelectedCategory from '../components/SelectedCategory';


const title = (
    <h2>Search Your One From <span>Thousand</span> of Products</h2>
)
const desc = "we have the largest collection of products "
const bannerList = [
    {
        iconName: "icofont-users-alt-4",
        text: "1.5 Million customers",
    },
     {
        iconName: "icofont-notification",
        text: "More then 2000 Marchent",
    },
     {
        iconName: "icofont-globe",
        text: "Buy anything Online",
    },
];



function Banner() {
    const [searchInput, setSearchInput ] = useState("");
    const [filteredProducts, setFilteredProducts ] = useState(productData);

    // console.log(productData)

    // search funtionality
    const handleSearch = e => {
        console.log(e.target.value)
        const searchTerm = e.target.value
        setSearchInput(searchTerm);

        //filtering products based on search
        const filtered = productData.filter((products) => product.name.toLowerCase().includes(searchTerm.toLowerCase()));

        setFilteredProducts(filtered)
    }

  return (
    <div className='banner-section style-4'>
       <div className='container'>
        <div className='banner-content'>
                {title}
                <form >
                    <SelectedCategory select={"all"}/>
                    <input type="text" name='search' id='search' placeholder='search your products ' value={searchInput} onChange={handleSearch}/>
                    <button type="submit">
                        <i className="icofont-search"></i>
                    </button>
                </form>
                <p>{desc} </p>
                <ul className='lab-ul'>
                    {
                        searchInput && filteredProducts.map((product, i) => <li key={i}>
                            <Link to={`/shop/${product.id}`}>{product.name} </Link>
                        </li> )
                    }
                </ul>
        </div>

       </div>

    </div>
  )
}

export default Banner