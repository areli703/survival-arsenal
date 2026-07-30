import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="card group block">
      <div className="aspect-square bg-army-100 flex items-center justify-center text-8xl">
        {product.category === 'first-aid' && '🩹'}
        {product.category === 'lighting' && '🔦'}
        {product.category === 'fire-water' && '🔥'}
        {product.category === 'kits' && '🎒'}
      </div>
      <div className="p-4">
        {product.badge && (
          <span className="inline-block bg-accent-500 text-white text-xs font-bold uppercase tracking-wider px-2 py-1 mb-2">
            {product.badge}
          </span>
        )}
        <h3 className="font-display text-xl tracking-wide text-army-900 group-hover:text-accent-600">
          {product.name}
        </h3>
        <p className="text-sm text-army-500 mt-1">{product.subtitle}</p>
        <div className="flex items-center justify-between mt-4">
          <div className="font-display text-3xl text-army-900">${product.price}</div>
          <div className="text-xs text-army-500 text-right">
            <div>⭐ {product.rating}</div>
            <div>{product.orders.toLocaleString()}+ sold</div>
          </div>
        </div>
      </div>
    </Link>
  )
}
