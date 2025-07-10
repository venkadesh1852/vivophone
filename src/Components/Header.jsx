import { useState } from 'react'

import { IoIosCart } from "react-icons/io";


import Logo from '../Assets/vivo.png'


function Header({ cartItems, onCartToggle, onSearch, onCategoryChange, selectedCategory }) {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearchChange = (e) => {
    const value = e.target.value
    setSearchTerm(value)
    onSearch(value)
  }

  const categories = [
    { value: 'all', label: 'All Products' },
    { value: 'Vivo X90 Pro', label: 'Vivo X90 Pro' },
    { value: 'Vivo V27 Pro', label: 'Vivo V27 Pro' },
    { value: 'Vivo Y35', label: 'Vivo Y35' },
    { value: 'Vivo X80', label: 'Vivo X80' },
    { value: 'Vivo V25 Pro', label: 'Vivo V25 Pro' },
    { value: 'Vivo T1 Pro', label: 'Vivo T1 Pro' }
  ]

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0)

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <img src={Logo} alt="Vivo Logo" className="logo-image" />
          </div>
          
          <div className="search-section">
            <input
              type="text"
              placeholder="Search phones..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="search-input"
            />
          </div>

          <div className="category-filter">
            <select 
              value={selectedCategory}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="category-select"
            >
              {categories.map(category => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>

          <div className="cart-section">
            <button className="cart-button" onClick={onCartToggle}>
              <span className="cart-icon"><IoIosCart /></span>
              {cartItemCount > 0 && (
                <span className="cart-count">{cartItemCount}</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header