import { FaIndianRupeeSign } from "react-icons/fa6";

import { FaHeart } from "react-icons/fa";

function ProductCard({ product, onProductClick, onAddToCart, onToggleWishlist, isInWishlist }) {
  const handleWishlistClick = (e) => {
    e.stopPropagation()
    onToggleWishlist(product)
  }

  const handleAddToCart = (e) => {
    e.stopPropagation()
    onAddToCart(product)
  }

  return (
    <div className="product-card" onClick={() => onProductClick(product)}>
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        <button 
          className={`wishlist-btn ${isInWishlist(product.id) ? 'active' : ''}`}
          onClick={handleWishlistClick}
        >
        <FaHeart />
        </button>
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-specs">
          <span>{product.specs[0]}</span>
          <span>{product.specs[1]}</span>
        </div>
        <div className="product-footer">
          <span className="price"><FaIndianRupeeSign />{product.price}</span>
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard