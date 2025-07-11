import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { FaIndianRupeeSign } from "react-icons/fa6";

function Cart({ isOpen, cartItems, onClose, onRemoveItem, onUpdateQuantity }) {
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  if (!isOpen) return null

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div className="cart-content" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>Shopping Cart</h2>
          <button className="close-btn" onClick={onClose}><IoIosCloseCircle /></button>
        </div>
        
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <p className="empty-cart">Your cart is empty</p>
          ) : (
            cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="item-info">
                  <h4>{item.name}</h4>
                  <p><FaIndianRupeeSign />{item.price}</p>
                </div>
                <div className="quantity-controls">
                  <button 
                    onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                    className="quantity-btn"
                  >
                   <FaMinus />
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <button 
                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                    className="quantity-btn"
                  >
                 <FaPlus />
                  </button>
                </div>
                <button 
                  onClick={() => onRemoveItem(item.id)}
                  className="remove-btn"
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>
        
        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <strong>Total: <FaIndianRupeeSign />{total.toFixed(2)}</strong>
            </div>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart