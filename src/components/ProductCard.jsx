import { Link } from 'react-router-dom'
import { ProductIcon } from './ProductIcon'

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="card group block">
      <div className="aspect-square bg-army-100 flex items-center justify-center overflow-hidden relative">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <ProductIcon category={product.category} productId={product.id} />
        )}
        {product.badge && (
          <span className="absolute top-2 left-2 bg-accent-500 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1">
            {product.badge}
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-display text-xl tracking-wide text-army-900 group-hover:text-accent-600">
          {product.name}
        </h3>
        <p className="text-sm text-army-500 mt-1 line-clamp-2">{product.subtitle}</p>
        <div className="flex items-center justify-between mt-4">
          <div className="font-display text-3xl text-army-900">${product.price}</div>
          <div className="text-xs text-army-500 text-right">
            <div className="text-amber-500">⭐ {product.rating}</div>
            <div>{product.orders.toLocaleString()}+ sold</div>
          </div>
        </div>
      </div>
    </Link>
  )
}
