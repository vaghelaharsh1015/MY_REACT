import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ProductCard from '../components/ProductCard'

const WishlistData = () => {

    const wishlistItems = useSelector((state) => state.wishlist.wishlist)  
  
    console.log("wishlistItems" , wishlistItems)
  
    return (
      <>
      <div>WishlistData</div>
      <ProductCard productData={wishlistItems}/>
      </>
    )
  }

export default WishlistData