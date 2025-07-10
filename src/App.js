import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './Components/Header'
import Hero from './Components/Hero'
import ProductGrid from './Components/ProductGrid'
import ProductModal from './Components/ProductModal'
import Cart from './Components/Cart'
import Footer from './Components/Footer'



// images
 import vx90Pro from './Assets/VivoX90Pro.jpeg'
import vivov27Pro from './Assets/vivo-v27-pro-2.jpg'
import vivoy35 from './Assets/vivo-y35.jpg'
import vivox80 from './Assets/vivox80.jpg'
import vivov25Pro from './Assets/vivov25.jpg'
import vivot1 from './Assets/Vivo-T1-Pro.jpeg'
// ...existing code...'
function App() {
  const [products] = useState([
    {
      id: 1,
      name: 'Vivo X90 Pro',
      price: 53599,
      image: vx90Pro,
      description: 'Flagship smartphone with advanced camera system',
      specs: ['6.78" AMOLED Display', '12GB RAM', '256GB Storage', '50MP Triple Camera', '4870mAh Battery'],
      category: 'Vivo X90 Pro'
    },
    {
      id: 2,
      name: 'Vivo V27 Pro',
      price: 33584,
      image: vivov27Pro,
      description: 'Professional photography smartphone',
      specs: ['6.78" AMOLED Display', '8GB RAM', '128GB Storage', '50MP OIS Camera', '4600mAh Battery'],
      category: 'Vivo V27 Pro'
    },
    {
      id: 3,
      name: 'Vivo Y35',
      price: 13999,
      image:  vivoy35,
      description: 'Affordable smartphone with great performance',
      specs: ['6.58" IPS Display', '4GB RAM', '128GB Storage', '50MP Dual Camera', '5000mAh Battery'],
      category: 'Vivo Y35'
    },
    {
      id: 4,
      name: 'Vivo X80',
      price: 55649,
      image: vivox80,
      description: 'Premium smartphone with ZEISS optics',
      specs: ['6.78" AMOLED Display', '8GB RAM', '256GB Storage', '50MP ZEISS Camera', '4500mAh Battery'],
      category: 'Vivo X80'
    },
    {
      id: 5,
      name: 'Vivo V25 Pro',
      price: 22449,
      image: vivov25Pro,
      description: 'Color-changing design smartphone',
      specs: ['6.56" AMOLED Display', '8GB RAM', '128GB Storage', '64MP OIS Camera', '4830mAh Battery'],
      category: 'Vivo V25 Pro'
    },
    {
      id: 6,
      name: 'Vivo T1 Pro',
      price: 54349,
      image: vivot1,
      description: 'Gaming-focused smartphone',
      specs: ['6.44" AMOLED Display', '6GB RAM', '128GB Storage', '64MP Triple Camera', '4700mAh Battery'],
      category: 'Vivo T1 Pro'
    }
  ])

  const [filteredProducts, setFilteredProducts] = useState(products)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [cartItems, setCartItems] = useState([])
  const [wishlist, setWishlist] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Load data from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('vivoCart')
    const savedWishlist = localStorage.getItem('vivoWishlist')
    
    if (savedCart) {
      setCartItems(JSON.parse(savedCart))
    }
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist))
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('vivoCart', JSON.stringify(cartItems))
  }, [cartItems])

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('vivoWishlist', JSON.stringify(wishlist))
  }, [wishlist])

  // Filter products based on search and category
  useEffect(() => {
    let filtered = products

    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory)
    }

    setFilteredProducts(filtered)
  }, [searchTerm, selectedCategory, products])

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id)
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else {
        return [...prevItems, { ...product, quantity: 1 }]
      }
    })
  }

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId))
  }

  const updateQuantity = (productId, quantity) => {
    if (quantity === 0) {
      removeFromCart(productId)
    } else {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === productId
            ? { ...item, quantity }
            : item
        )
      )
    }
  }

  const toggleWishlist = (product) => {
    setWishlist(prevWishlist => {
      const isInWishlist = prevWishlist.some(item => item.id === product.id)
      if (isInWishlist) {
        return prevWishlist.filter(item => item.id !== product.id)
      } else {
        return [...prevWishlist, product]
      }
    })
  }

  const isInWishlist = (productId) => {
    return wishlist.some(item => item.id === productId)
  }

  return (
    <div className="App">
      <Header 
        cartItems={cartItems}
        onCartToggle={() => setIsCartOpen(!isCartOpen)}
        onSearch={setSearchTerm}
        onCategoryChange={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <Hero />
      <ProductGrid
        products={filteredProducts}
        onProductClick={setSelectedProduct}
        onAddToCart={addToCart}
        onToggleWishlist={toggleWishlist}
        isInWishlist={isInWishlist}
      />
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={addToCart}
          onToggleWishlist={toggleWishlist}
          isInWishlist={isInWishlist}
        />
      )}
      <Cart
        isOpen={isCartOpen}
        cartItems={cartItems}
        onClose={() => setIsCartOpen(false)}
        onRemoveItem={removeFromCart}
        onUpdateQuantity={updateQuantity}
      />
      <Footer />
    </div>
  )
}

export default App
