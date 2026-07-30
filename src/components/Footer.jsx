export default function Footer() {
  return (
    <footer className="bg-army-900 text-army-100 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <div className="font-display text-2xl text-army-50 tracking-wider">SURVIVAL ARSENAL</div>
          <p className="mt-3 text-sm">Built for real emergencies, not zombie fantasies. Curated survival gear, vetted, tested, ready.</p>
        </div>
        <div>
          <h4 className="font-display text-lg text-accent-500 tracking-wider mb-3">SHOP</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-accent-500">All Gear</a></li>
            <li><a href="/bundles" className="hover:text-accent-500">Bundles</a></li>
            <li><a href="#first-aid" className="hover:text-accent-500">First Aid</a></li>
            <li><a href="#lighting" className="hover:text-accent-500">Lighting</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg text-accent-500 tracking-wider mb-3">COMPANY</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:text-accent-500">About</a></li>
            <li><a href="/contact" className="hover:text-accent-500">Contact</a></li>
            <li><a href="#" className="hover:text-accent-500">Shipping</a></li>
            <li><a href="#" className="hover:text-accent-500">Returns</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg text-accent-500 tracking-wider mb-3">CONNECT</h4>
          <ul className="space-y-2 text-sm">
            <li>📧 support@survivalarsenal.com</li>
            <li>📞 1-800-EMERGENCY</li>
            <li>🐦 @survivalarsenal</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-army-700 py-6 text-center text-xs text-army-500">
        © 2026 Survival Arsenal. Built for real emergencies. | Privacy | Terms
      </div>
    </footer>
  )
}
