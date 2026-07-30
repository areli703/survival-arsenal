import { Link } from 'react-router-dom'
import { bundles } from '../data/products'

export default function Bundles() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <div className="text-accent-500 font-bold tracking-widest uppercase mb-2">🎁 Save Up To 30%</div>
        <h1 className="font-display text-6xl tracking-wider">SCENARIO BUNDLES</h1>
        <p className="mt-3 text-army-500">Curated kits for the emergencies you actually face.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {bundles.map((bundle) => (
          <Link to={`/bundle/${bundle.id}`} key={bundle.id} className="card p-8 group hover:bg-army-900 hover:text-army-50 transition-colors">
            <div className="text-7xl text-center mb-4">📦</div>
            <h2 className="font-display text-3xl text-center tracking-wide group-hover:text-accent-500">
              {bundle.name}
            </h2>
            <p className="text-center text-sm mt-3 opacity-80">{bundle.subtitle}</p>
            <div className="font-display text-5xl text-center mt-6 text-accent-500">${bundle.price}</div>
            <div className="text-center mt-6 font-bold uppercase tracking-wider">View Bundle →</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
