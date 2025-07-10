import { CiCircleRemove } from "react-icons/ci";



function ProductModal({ product, onClose, onAddToCart, onToggleWishlist, isInWishlist }) {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}><CiCircleRemove /></button>
        <div className="modal-body">
          <div className="modal-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="modal-info">
            <h2>{product.name}</h2>
            <p className="modal-description">{product.description}</p>
            <div className="specifications">
              <h3>Specifications</h3>
              <ul>
                {product.specs.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ul>
            </div>
            <div className="modal-footer">
              <span className="modal-price">${product.price}</span>
              <div className="modal-actions">
                <button 
                  className={`wishlist-btn-large ${isInWishlist(product.id) ? 'active' : ''}`}
                  onClick={() => onToggleWishlist(product)}
                >
                  {isInWishlist(product.id) ? '♥ Remove from Wishlist' : '♡ Add to Wishlist'}
                </button>
                <button 
                  className="add-to-cart-btn-large"
                  onClick={() => onAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductModal