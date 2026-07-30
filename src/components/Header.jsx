import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const location = useLocation()
  const isActive = (path) => location.pathname === path

  return (
    <header className="bg-army-900 text-army-50 sticky top-0 z-50 border-b-4 border-accent-500">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-accent-500 flex items-center justify-center text-2xl">★</div>
          <div>
            <div className="font-display text-2xl tracking-wider leading-none">SURVIVAL ARSENAL</div>
            <div className="text-xs text-army-100 tracking-widest leading-none">BE READY FOR ANYTHING</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6 font-bold text-sm uppercase tracking-wider">
          <Link to="/" className={isActive('/') ? 'text-accent-500' : 'hover:text-accent-500'}>Shop</Link>
          <Link to="/bundles" className={isActive('/bundles') ? 'text-accent-500' : 'hover:text-accent-500'}>Bundles</Link>
          <Link to="/about" className={isActive('/about') ? 'text-accent-500' : 'hover:text-accent-500'}>About</Link>
          <Link to="/contact" className={isActive('/contact') ? 'text-accent-500' : 'hover:text-accent-500'}>Contact</Link>
        </nav>
        <a href="#shop" className="btn-primary text-sm">Shop Now</a>
      </div>
    </header>
  )
}
