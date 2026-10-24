interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  emoji: string;
}

const categories: string[] = ["Guitars", "Keyboards", "Drums", "Accessories", "Toys"];

const products: Product[] = [
  { id: 1, name: "Acoustic Guitar", category: "Guitars", price: 250, emoji: "🎸" },
  { id: 2, name: "Electric Guitar", category: "Guitars", price: 450, emoji: "🎸" },
  { id: 3, name: "Grand Piano", category: "Keyboards", price: 1500, emoji: "🎹" },
  { id: 4, name: "MIDI Controller", category: "Keyboards", price: 120, emoji: "🎛️" },
  { id: 5, name: "Drum Kit", category: "Drums", price: 600, emoji: "🥁" },
  { id: 6, name: "Bongos", category: "Drums", price: 80, emoji: "🪘" },
  { id: 7, name: "Guitar Picks", category: "Accessories", price: 5, emoji: "🎸" },
  { id: 8, name: "Microphone", category: "Accessories", price: 90, emoji: "🎤" },
  { id: 9, name: "Synthesizer", category: "Keyboards", price: 850, emoji: "🎹" },
  { id: 10, name: "Music Box Toy", category: "Toys", price: 15, emoji: "🎵" }
];

export default function HomePage() {
  return (
    <>
      <header className="shop-header">
        <div className="brand">🎵 MusicBox</div>
        <nav aria-label="Main navigation">
          <ul className="header-nav">
            <li><a href="#catalog">Catalog</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </nav>
      </header>

      <div className="stats-row">
        <span>120+ products</span>
        <span>5 categories</span>
        <span>Citywide delivery</span>
      </div>

      <section className="featured-banner">
        <div style={{ fontSize: "60px" }}>🎸</div>
        <div>
          <h2>Deal of the Week</h2>
          <p>Get 20% off on all Electric Guitars this week only!</p>
        </div>
      </section>

      <div className="shop-layout">
        <aside className="filters" aria-label="Catalog filters">
          <h2 className="filters-title">Categories</h2>
          <ul className="filters-list">
            {categories.map((category) => (
              <li key={category}>
                <a href="#catalog">{category}</a>
              </li>
            ))}
          </ul>
        </aside>

        <main className="catalog" id="catalog">
          <h1 className="catalog-title">Product Catalog</h1>
          <div className="product-grid">
            {products.slice(0, 6).map((product) => (
              <article className="product-card" key={product.id}>
                <div className="product-image" aria-hidden="true">
                  {product.emoji}
                </div>
                <p className="product-category">{product.category}</p>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">
                  ${product.price.toLocaleString("en-US")}
                </p>
              </article>
            ))}
          </div>

          <h2 className="catalog-title">Accessories (Compact Grid)</h2>
          <div className="product-grid--compact">
            {products.slice(6).map((product) => (
              <article className="product-card" key={product.id}>
                <div className="product-image" aria-hidden="true">
                  {product.emoji}
                </div>
                <p className="product-category">{product.category}</p>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">
                  ${product.price.toLocaleString("en-US")}
                </p>
              </article>
            ))}
          </div>
        </main>
      </div>

      <section id="about" className="info-block">
        <h2>About the Store</h2>
        <p>
          &ldquo;MusicBox&rdquo; is a learning online store with no real payment or delivery. 
          Every product in this catalog was added purely to demonstrate page layout with Flexbox and CSS Grid.
        </p>
      </section>

      <footer className="site-footer">
        <p>&copy; 2026 MusicBox Online Store. Learning project.</p>
      </footer>
    </>
  );
}