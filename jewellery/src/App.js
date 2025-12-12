import { useEffect, useMemo, useState } from 'react'
import './App.css'

const defaultCategories = {
  Necklaces: ['Bridal', 'Temple', 'Minimal Daily', 'Statement Layered'],
  Bangles: ['Traditional', 'Party Wear', 'Kids', 'Daily Elegant'],
  Rings: ['Engagement', 'Couple Bands', 'Fingerprints', 'Men Style'],
  Anklets: ['Classic', 'Oxidised', 'Minimal Silver', 'Ghungroo'],
  Earrings: ['Jhumkas', 'Studs', 'Drops', 'Hoops'],
  'Personalised Silver Art': ['Engraved Pens', 'Photo Coins', 'Signature Pendants', 'Custom Charms'],
}

const defaultProducts = [
  {
    id: 'necklace-temple',
    title: 'Temple Heritage Necklace',
    category: 'Necklaces',
    subcategory: 'Temple',
    description: 'Hand-carved motifs inspired by Madurai temples with antique gold finish.',
    image:
      'https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'necklace-bridal',
    title: 'Regal Bridal Haram',
    category: 'Necklaces',
    subcategory: 'Bridal',
    description: 'Layered kundan setting with emerald droplets for wedding grandeur.',
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'ring-fingerprint',
    title: 'Fingerprint Silver Ring',
    category: 'Rings',
    subcategory: 'Fingerprints',
    description: 'Capture a loved one’s fingerprint carved into sterling silver.',
    image:
      'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'coin-photo',
    title: 'Photo Engraved Coin',
    category: 'Personalised Silver Art',
    subcategory: 'Photo Coins',
    description: 'Your portrait etched precisely on a shining silver medallion.',
    image:
      'https://images.unsplash.com/photo-1600180758890-6b94519a8ba0?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'bangle-traditional',
    title: 'Nakshi Heritage Bangles',
    category: 'Bangles',
    subcategory: 'Traditional',
    description: 'Antique nakshi detailing with ruby highlights for festive dressing.',
    image:
      'https://images.unsplash.com/photo-1585944629625-98c4aca1e581?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'earring-jhumka',
    title: 'Kemp Stone Jhumkas',
    category: 'Earrings',
    subcategory: 'Jhumkas',
    description: 'Temple-inspired jhumkas with pearls that sway with every step.',
    image:
      'https://images.unsplash.com/photo-1585944629624-618e64d4f6f7?auto=format&fit=crop&w=1600&q=80',
  },
]

const heroSlides = [
  {
    heading: 'Shree Raam Jewellery',
    subheading: 'Personalised silver artistry and heirloom gold brilliance crafted in Tamil Nadu.',
    image:
      'https://images.unsplash.com/photo-1602715578963-1c52e3f3de15?auto=format&fit=crop&w=1600&q=80',
    badge: 'Since 1998',
  },
  {
    heading: 'Bespoke Gifting',
    subheading: 'Engraved pens, portrait coins, fingerprint rings and signatures shaped for you.',
    image:
      'https://images.unsplash.com/photo-1516637090014-cb1ab0d08fc7?auto=format&fit=crop&w=1600&q=80',
    badge: 'Made-to-order',
  },
  {
    heading: 'Celebrate Every Occasion',
    subheading: 'From bridal harams to minimalist daily wear, discover jewels for every story.',
    image:
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1600&q=80',
    badge: 'Curation',
  },
]

const defaultCollectionImage =
  'https://images.unsplash.com/photo-1583605830708-d49ef2f4d05b?auto=format&fit=crop&w=1400&q=80'

const categoryImages = {
  Necklaces:
    'https://images.unsplash.com/photo-1617034463532-6c8cf0dadc92?auto=format&fit=crop&w=1400&q=80',
  Bangles:
    'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1400&q=80',
  Rings:
    'https://images.unsplash.com/photo-1606294664450-5b5e76ba7cf8?auto=format&fit=crop&w=1400&q=80',
  Anklets:
    'https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?auto=format&fit=crop&w=1400&q=80',
  Earrings:
    'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1400&q=80',
  'Personalised Silver Art':
    'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=1400&q=80',
}

const whatsappNumber = '9443379960'
const adminPassword = 'shreeraam123'

const createWhatsappLink = (title) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `I want to know more about ${title}`,
  )}`

function App() {
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem('srj-products')
    return saved ? JSON.parse(saved) : defaultProducts
  })

  const [categories, setCategories] = useState(() => {
    const saved = localStorage.getItem('srj-categories')
    return saved ? JSON.parse(saved) : defaultCategories
  })

  const [carouselIndex, setCarouselIndex] = useState(0)
  const [collectionIndex, setCollectionIndex] = useState(0)
  const [isAdmin, setIsAdmin] = useState(false)
  const [loginError, setLoginError] = useState('')
  const [form, setForm] = useState({
    id: '',
    title: '',
    category: '',
    subcategory: '',
    description: '',
    image: '',
  })
  const [editingId, setEditingId] = useState('')

  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    localStorage.setItem('srj-products', JSON.stringify(products))
  }, [products])

  useEffect(() => {
    localStorage.setItem('srj-categories', JSON.stringify(categories))
  }, [categories])

  const sortedCategories = useMemo(
    () => Object.entries(categories).sort(([a], [b]) => a.localeCompare(b)),
    [categories],
  )

  const curatedCollections = useMemo(
    () =>
      sortedCategories.map(([category, subs]) => {
        const matchingProduct = products.find((item) => item.category === category)
        return {
          category,
          subs,
          image: categoryImages[category] || matchingProduct?.image || defaultCollectionImage,
        }
      }),
    [products, sortedCategories],
  )

  useEffect(() => {
    if (collectionIndex > curatedCollections.length - 1) {
      setCollectionIndex(0)
    }
  }, [collectionIndex, curatedCollections.length])

  const resetForm = () => {
    setForm({ id: '', title: '', category: '', subcategory: '', description: '', image: '' })
    setEditingId('')
  }

  const handleLogin = (event) => {
    event.preventDefault()
    if (form.adminPassword === adminPassword) {
      setIsAdmin(true)
      setLoginError('')
    } else {
      setLoginError('Incorrect passcode. Please try again.')
    }
  }

  const handleSave = (event) => {
    event.preventDefault()
    if (!form.title || !form.category || !form.subcategory || !form.image) return

    const newId = form.id || `${form.category}-${Date.now()}`
    const updatedProduct = { ...form, id: newId }

    if (!categories[form.category]) {
      setCategories((prev) => ({ ...prev, [form.category]: [form.subcategory] }))
    } else if (!categories[form.category].includes(form.subcategory)) {
      setCategories((prev) => ({
        ...prev,
        [form.category]: [...prev[form.category], form.subcategory],
      }))
    }

    if (editingId) {
      setProducts((prev) => prev.map((item) => (item.id === editingId ? updatedProduct : item)))
    } else {
      setProducts((prev) => [...prev, updatedProduct])
    }

    resetForm()
  }

  const startEdit = (product) => {
    setEditingId(product.id)
    setForm(product)
  }

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((item) => item.id !== id))
    if (editingId === id) resetForm()
  }

  const filteredProducts = useMemo(
    () =>
      [...products].sort((a, b) => a.category.localeCompare(b.category) || a.title.localeCompare(b.title)),
    [products],
  )

  return (
    <div className="page">
      <header className="nav">
        <div className="logo-mark">SRJ</div>
        <nav>
          <a href="#collections">Collections</a>
          <a href="#personalised">Personalised</a>
          <a href="#gallery">Gallery</a>
          <a href="#admin">Admin</a>
        </nav>
        <a className="phone" href={`tel:${whatsappNumber}`}>
          {whatsappNumber}
        </a>
      </header>

      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">Fine Jewellery Studio · Tamil Nadu</p>
          <h1>Shree Raam Jewellery</h1>
          <p className="lead">
            Bespoke silver gifting, engraved keepsakes, and a curated line of gold and diamond
            adornments for every occasion.
          </p>
          <div className="hero-actions">
            <a className="btn primary" href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer">
              Chat on WhatsApp
            </a>
            <a className="btn ghost" href="#gallery">
              View Signature Pieces
            </a>
          </div>
          <div className="stats">
            <div>
              <h3>20+</h3>
              <p>Years crafting heirlooms</p>
            </div>
            <div>
              <h3>40+</h3>
              <p>Occasion-ready categories</p>
            </div>
            <div>
              <h3>1000+</h3>
              <p>Personalised orders delivered</p>
            </div>
          </div>
        </div>
        <div className="hero-carousel">
          {heroSlides.map((slide, index) => (
            <article
              key={slide.heading}
              className={`slide ${index === carouselIndex ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="slide-overlay" />
              <div className="slide-content">
                <span className="pill">{slide.badge}</span>
                <h3>{slide.heading}</h3>
                <p>{slide.subheading}</p>
              </div>
            </article>
          ))}
          <div className="slide-dots">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                aria-label={`Go to slide ${index + 1}`}
                className={index === carouselIndex ? 'dot active' : 'dot'}
                onClick={() => setCarouselIndex(index)}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="collections" className="section">
        <div className="section-head">
          <h2>Curated Collections</h2>
          <p>Explore jewels by category and occasion-specific subcategories.</p>
        </div>
        <div className="collection-carousel">
          <button
            className="carousel-btn"
            type="button"
            onClick={() => setCollectionIndex((prev) => Math.max(prev - 1, 0))}
            disabled={collectionIndex === 0}
            aria-label="Previous collection"
          >
            ‹
          </button>
          <div className="collection-window">
            <div
              className="collection-track"
              style={{ transform: `translateX(-${collectionIndex * 100}%)` }}
            >
              {curatedCollections.map(({ category, subs, image }) => (
                <article key={category} className="category-card with-image">
                  <div className="category-img" style={{ backgroundImage: `url(${image})` }} />
                  <div className="category-body">
                    <div className="category-header">
                      <h3>{category}</h3>
                      <p>{subs.length} subcategories</p>
                    </div>
                    <div className="chip-row">
                      {subs.map((sub) => (
                        <span key={sub} className="chip">
                          {sub}
                        </span>
                      ))}
                    </div>
                    <a className="link" href="#gallery">
                      View pieces
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <button
            className="carousel-btn"
            type="button"
            onClick={() =>
              setCollectionIndex((prev) =>
                Math.min(prev + 1, Math.max(curatedCollections.length - 1, 0)),
              )
            }
            disabled={collectionIndex === curatedCollections.length - 1}
            aria-label="Next collection"
          >
            ›
          </button>
        </div>
      </section>

      <section id="personalised" className="section highlight">
        <div className="section-head">
          <h2>Personalised Silver Art</h2>
          <p>Gifts that carry your stories — engraving, portraits, fingerprints, and more.</p>
        </div>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>Engraved Pens & Signature Charms</h3>
            <p>
              Corporate-worthy pens, charms, and plaques etched with names, logos, or handwritten
              signatures.
            </p>
          </div>
          <div className="feature-card">
            <h3>Portrait Coins</h3>
            <p>High-contrast silver coins with laser-etched photographs preserved for generations.</p>
          </div>
          <div className="feature-card">
            <h3>Fingerprint Rings</h3>
            <p>Carry loved ones close with fingerprint carved bands in sterling silver or gold.</p>
          </div>
        </div>
      </section>

      <section id="gallery" className="section">
        <div className="section-head">
          <h2>Signature Gallery</h2>
          <p>Tap a piece to enquire instantly via WhatsApp.</p>
        </div>
        <div className="gallery-grid">
          {filteredProducts.map((item) => (
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
                  <a className="btn text" href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer">
                    Call the studio
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="admin" className="section admin">
        <div className="section-head">
          <h2>Admin (store use)</h2>
          <p>Login to add, edit, or delete photos and descriptions. No coding required.</p>
        </div>
        {!isAdmin && (
          <form className="card login" onSubmit={handleLogin}>
            <label>
              Admin passcode
              <input
                type="password"
                value={form.adminPassword || ''}
                onChange={(e) => setForm({ ...form, adminPassword: e.target.value })}
                placeholder="Enter passcode"
                required
              />
            </label>
            {loginError && <p className="error">{loginError}</p>}
            <button type="submit" className="btn primary">
              Login
            </button>
          </form>
        )}

        {isAdmin && (
          <div className="admin-grid">
            <form className="card editor" onSubmit={handleSave}>
              <div className="row">
                <label>
                  Title
                  <input
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                    placeholder="Eg: Emerald bridal choker"
                    required
                  />
                </label>
                <label>
                  Image URL
                  <input
                    value={form.image}
                    onChange={(e) => setForm({ ...form, image: e.target.value })}
                    placeholder="Paste photo link"
                    required
                  />
                </label>
              </div>
              <div className="row">
                <label>
                  Category
                  <input
                    list="category-list"
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                    placeholder="Necklaces, Bangles, ..."
                    required
                  />
                  <datalist id="category-list">
                    {sortedCategories.map(([category]) => (
                      <option key={category} value={category} />
                    ))}
                  </datalist>
                </label>
                <label>
                  Subcategory
                  <input
                    list="subcategory-list"
                    value={form.subcategory}
                    onChange={(e) => setForm({ ...form, subcategory: e.target.value })}
                    placeholder="Occasion or style"
                    required
                  />
                  <datalist id="subcategory-list">
                    {(categories[form.category] || []).map((sub) => (
                      <option key={sub} value={sub} />
                    ))}
                  </datalist>
                </label>
              </div>
              <label>
                Description
                <textarea
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  rows={3}
                  placeholder="Short, inviting description"
                />
              </label>
              <div className="editor-actions">
                <button type="submit" className="btn primary">
                  {editingId ? 'Save changes' : 'Add new piece'}
                </button>
                {editingId && (
                  <button type="button" className="btn ghost" onClick={resetForm}>
                    Cancel edit
                  </button>
                )}
              </div>
            </form>

            <div className="card list">
              <div className="list-head">
                <h3>Current pieces</h3>
                <p>Tap edit to update or delete to remove.</p>
              </div>
              <div className="list-items">
                {filteredProducts.map((item) => (
                  <div key={item.id} className="list-item">
                    <div>
                      <p className="pill muted">
                        {item.category} · {item.subcategory}
                      </p>
                      <strong>{item.title}</strong>
                      <p className="muted small">{item.description}</p>
                    </div>
                    <div className="list-actions">
                      <button className="btn text" onClick={() => startEdit(item)}>
                        Edit
                      </button>
                      <button className="btn text danger" onClick={() => deleteProduct(item.id)}>
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>

      <footer className="footer">
        <div>
          <h3>Shree Raam Jewellery</h3>
          <p>Personalised silver artistry, wedding jewels, and daily essentials.</p>
        </div>
        <div className="footer-actions">
          <a className="btn primary" href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer">
            WhatsApp {whatsappNumber}
          </a>
          <a className="btn ghost" href="mailto:hello@shreeraamjewellery.com">
            Email the studio
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
