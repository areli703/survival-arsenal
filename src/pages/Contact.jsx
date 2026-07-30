export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="font-display text-6xl tracking-wider text-center mb-8">CONTACT</h1>
      <p className="text-center text-army-500 mb-12">Real humans. Real answers. Usually within 24 hours.</p>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="card p-6 text-center">
          <div className="text-4xl mb-3">📧</div>
          <h3 className="font-display text-2xl tracking-wider mb-2">EMAIL</h3>
          <p className="text-army-700">support@survivalarsenal.com</p>
          <p className="text-xs text-army-500 mt-2">Reply within 24 hours</p>
        </div>
        <div className="card p-6 text-center">
          <div className="text-4xl mb-3">📞</div>
          <h3 className="font-display text-2xl tracking-wider mb-2">PHONE</h3>
          <p className="text-army-700">1-800-EMERGENCY</p>
          <p className="text-xs text-army-500 mt-2">Mon-Fri 9am-6pm EST</p>
        </div>
      </div>

      <form className="card p-8 space-y-6">
        <h2 className="font-display text-3xl tracking-wider">SEND A MESSAGE</h2>
        <div>
          <label className="block text-sm font-bold uppercase tracking-wider mb-2">Name</label>
          <input type="text" className="w-full border-2 border-army-900/20 p-3 focus:border-accent-500 outline-none" />
        </div>
        <div>
          <label className="block text-sm font-bold uppercase tracking-wider mb-2">Email</label>
          <input type="email" className="w-full border-2 border-army-900/20 p-3 focus:border-accent-500 outline-none" />
        </div>
        <div>
          <label className="block text-sm font-bold uppercase tracking-wider mb-2">Message</label>
          <textarea rows="6" className="w-full border-2 border-army-900/20 p-3 focus:border-accent-500 outline-none"></textarea>
        </div>
        <button type="button" className="btn-primary w-full">Send Message</button>
      </form>
    </div>
  )
}
