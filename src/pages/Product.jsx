import { useParams, Link } from 'react-router-dom'
import { products } from '../data/products'

export default function Product() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="font-display text-4xl">Product Not Found</h1>
        <Link to="/" className="btn-primary mt-6">Back to Shop</Link>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <Link to="/" className="text-sm text-army-500 hover:text-accent-500 mb-6 inline-block">← Back to Shop</Link>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="aspect-square bg-army-100 flex items-center justify-center text-9xl">
          {product.category === 'first-aid' && '🩹'}
          {product.category === 'lighting' && '🔦'}
          {product.category === 'fire-water' && '🔥'}
          {product.category === 'kits' && '🎒'}
        </div>
        <div>
          {product.badge && (
            <span className="inline-block bg-accent-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 mb-3">
              {product.badge}
            </span>
          )}
          <h1 className="font-display text-5xl tracking-wider">{product.name}</h1>
          <p className="text-xl text-army-500 mt-2">{product.subtitle}</p>
          <div className="flex items-center gap-4 mt-4 text-sm text-army-600">
            <span>⭐ {product.rating}</span>
            <span>•</span>
            <span>{product.orders.toLocaleString()}+ sold</span>
          </div>
          <div className="font-display text-6xl text-army-900 mt-6">${product.price}</div>
          <p className="mt-6 text-army-700 leading-relaxed">{product.description}</p>
          <ul className="mt-6 space-y-3">
            {product.features.map((f, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-accent-500 font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={product.stripe_link}
            className="btn-primary text-lg w-full mt-8"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy Now — ${product.price}
          </a>
          <p className="text-xs text-army-500 mt-4 text-center">
            🔒 Secure checkout via Stripe. Ships in 5-7 days.
          </p>
        </div>
      </div>
    </div>
  )
}
