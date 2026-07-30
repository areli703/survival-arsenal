import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { products, bundles } from '../data/products'

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-army-900 text-army-50 py-20 border-b-4 border-accent-500">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="text-accent-500 font-bold tracking-widest uppercase mb-4">★ Battle-Tested Survival Gear ★</div>
          <h1 className="font-display text-6xl md:text-8xl tracking-wider leading-none">
            BE READY
            <br />
            FOR ANYTHING
          </h1>
          <p className="mt-6 text-xl text-army-100 max-w-2xl mx-auto">
            Curated, vetted, real-world survival gear. Built for hurricanes, blackouts, and weekend camping trips.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <a href="#shop" className="btn-primary text-lg">Shop All Gear</a>
            <Link to="/bundles" className="btn-secondary text-lg bg-transparent text-army-50 border-army-50 hover:bg-army-50 hover:text-army-900">
              View Bundles
            </Link>
          </div>
          <div className="mt-12 flex flex-wrap gap-8 justify-center text-army-100">
            <div className="text-center">
              <div className="font-display text-4xl text-accent-500">$0</div>
              <div className="text-xs uppercase tracking-wider">Free Shipping $75+</div>
            </div>
            <div className="text-center">
              <div className="font-display text-4xl text-accent-500">30d</div>
              <div className="text-xs uppercase tracking-wider">Money-Back</div>
            </div>
            <div className="text-center">
              <div className="font-display text-4xl text-accent-500">4.9★</div>
              <div className="text-xs uppercase tracking-wider">Avg Rating</div>
            </div>
            <div className="text-center">
              <div className="font-display text-4xl text-accent-500">5K+</div>
              <div className="text-xs uppercase tracking-wider">Happy Customers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Bundles featured */}
      <section className="bg-army-50 py-16 border-b-4 border-army-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-accent-500 font-bold tracking-widest uppercase mb-2">🎁 Save Up To 30%</div>
            <h2 className="font-display text-5xl tracking-wider">SCENARIO BUNDLES</h2>
            <p className="mt-3 text-army-500">Curated kits for the emergencies you actually face.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {bundles.map((bundle) => (
              <Link to={`/bundle/${bundle.id}`} key={bundle.id} className="card p-6 group hover:bg-army-900 hover:text-army-50 transition-colors">
                <div className="text-6xl text-center mb-4">📦</div>
                <h3 className="font-display text-3xl text-center tracking-wide group-hover:text-accent-500">
                  {bundle.name}
                </h3>
                <p className="text-center text-sm mt-2 opacity-80">{bundle.subtitle}</p>
                <div className="font-display text-4xl text-center mt-6 text-accent-500">${bundle.price}</div>
                <div className="text-center mt-4 text-sm font-bold uppercase tracking-wider">View Bundle →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="shop" className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-accent-500 font-bold tracking-widest uppercase mb-2">★ Curated By Real Preppers</div>
            <h2 className="font-display text-5xl tracking-wider">ALL GEAR</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust / Why */}
      <section className="bg-army-900 text-army-50 py-16 border-t-4 border-accent-500">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12 text-center">
          <div>
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="font-display text-2xl tracking-wider text-accent-500">CURATED, NOT RANDOM</h3>
            <p className="mt-3 text-army-100">Every product vetted. We tested competitors' gear so you don't have to.</p>
          </div>
          <div>
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="font-display text-2xl tracking-wider text-accent-500">READY WHEN IT COUNTS</h3>
            <p className="mt-3 text-army-100">Real-world tools. No gimmicks. The same gear we'd grab in a real emergency.</p>
          </div>
          <div>
            <div className="text-5xl mb-4">🛡️</div>
            <h3 className="font-display text-2xl tracking-wider text-accent-500">30-DAY FIELD TEST</h3>
            <p className="mt-3 text-army-100">Use it. Test it. If it fails, full refund. We pay the return shipping.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
