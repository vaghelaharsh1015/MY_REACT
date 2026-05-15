import React from 'react'

const wishlist = () => {

  const wishlistData = useSelector((state) => state.cart.cartItem)

  console.log("wishlistData", wishlistData)

  return (
    <>
      <div>wishlist</div>
      <ProductCard productData={wishlistData} />
    </>
  )
}
export default wishlist