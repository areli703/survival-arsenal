import { useParams, Link } from 'react-router-dom'
import { bundles, products } from '../data/products'

export default function Bundle() {
  const { id } = useParams()
  const bundle = bundles.find((b) => b.id === id)
  const items = bundle ? bundle.items.map((pid) => products.find((p) => p.id === pid)).filter(Boolean) : []

  if (!bundle) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="font-display text-4xl">Bundle Not Found</h1>
        <Link to="/bundles" className="btn-primary mt-6">View Bundles</Link>
      </div>
    )
  }

  const totalIndividual = items.reduce((sum, p) => sum + p.price, 0)
  const savings = totalIndividual - bundle.price

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <Link to="/bundles" className="text-sm text-army-500 hover:text-accent-500 mb-6 inline-block">← Back to Bundles</Link>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="aspect-square bg-army-100 flex items-center justify-center text-9xl">📦</div>
        <div>
          <span className="inline-block bg-accent-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 mb-3">
            🎁 SAVE ${savings.toFixed(2)}
          </span>
          <h1 className="font-display text-5xl tracking-wider">{bundle.name}</h1>
          <p className="text-xl text-army-500 mt-2">{bundle.subtitle}</p>
          <div className="font-display text-6xl text-army-900 mt-6">${bundle.price}</div>
          <p className="text-army-500 line-through mt-1">${totalIndividual.toFixed(2)} if bought separately</p>
          <p className="mt-6 text-army-700 leading-relaxed">{bundle.description}</p>

          <h3 className="font-display text-2xl mt-8 mb-4">INCLUDED:</h3>
          <ul className="space-y-3">
            {items.map((item) => (
              <li key={item.id} className="flex items-center gap-3 border-2 border-army-900/10 p-3">
                <span className="text-3xl">
                  {item.category === 'first-aid' && '🩹'}
                  {item.category === 'lighting' && '🔦'}
                  {item.category === 'fire-water' && '🔥'}
                  {item.category === 'kits' && '🎒'}
                </span>
                <div className="flex-1">
                  <div className="font-bold">{item.name}</div>
                  <div className="text-xs text-army-500">${item.price} individually</div>
                </div>
              </li>
            ))}
          </ul>
          <a
            href={`mailto:orders@survivalarsenal.com?subject=Order: ${bundle.name}`}
            className="btn-primary text-lg w-full mt-8"
          >
            Order Bundle — ${bundle.price}
          </a>
          <p className="text-xs text-army-500 mt-4 text-center">
            🔒 Secure checkout. Ships in 5-7 days.
          </p>
        </div>
      </div>
    </div>
  )
}
