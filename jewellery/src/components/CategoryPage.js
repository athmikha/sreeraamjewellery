import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import './CategoryPage.css'

const whatsappNumber = '9443379960'
const createWhatsappLink = (title) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`I want to know more about ${title}`)}`

// Default products (same as in Home.jsx)
const defaultProducts = [
  // ... copy the defaultProducts array from Home.jsx
]

export default function CategoryPage() {
  const { category } = useParams()
  const decodedCategory = decodeURIComponent(category)

  // Read products from localStorage
  const products = useMemo(() => {
    const saved = localStorage.getItem('srj-products')
    return saved ? JSON.parse(saved) : defaultProducts
  }, [])

  const items = useMemo(
    () => products.filter((p) => p.category === decodedCategory),
    [products, decodedCategory],
  )

  return (
    <div className="cat-page">
      <header className="cat-top">
        <div>
          <p className="muted small">
            <Link to="/" className="back-link">← Back</Link>
          </p>
          <h1>{decodedCategory}</h1>
          <p className="muted">Explore pieces and enquire instantly via WhatsApp.</p>
        </div>
        <a className="btn primary" href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer">
          WhatsApp {whatsappNumber}
        </a>
      </header>

      {items.length === 0 ? (
        <div className="cat-empty card">
          <h3>No items yet</h3>
          <p className="muted">Add products under this category from Admin.</p>
          <Link to="/#admin" className="btn ghost">Go to Admin</Link>
        </div>
      ) : (
        <div className="cat-grid">
          {items.map((item) => (
            <article key={item.id} className="product-card">
              <div className="product-img" style={{ backgroundImage: `url(${item.image})` }} />
              <div className="product-body">
                <div>
                  <p className="pill muted">
                    {item.category} · {item.subcategory}
                  </p>
                  <h3>{item.title}</h3>
                  <p className="muted">{item.description}</p>
                </div>
                <div className="product-actions">
                  <a className="btn ghost" href={createWhatsappLink(item.title)} target="_blank" rel="noreferrer">
                    WhatsApp to know more
                  </a>
                  <a className="btn text" href={`tel:${whatsappNumber}`}>
                    Call the studio
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}