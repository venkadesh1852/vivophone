import ProductCard from './ProductCard'

function ProductGrid({ products, onProductClick, onAddToCart, onToggleWishlist, isInWishlist }) {
  return (
    <section className="products-section">
      <div className="container">
        <h2>Our Products</h2>
        <div className="products-grid">
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onProductClick={onProductClick}
              onAddToCart={onAddToCart}
              onToggleWishlist={onToggleWishlist}
              isInWishlist={isInWishlist}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductGrid