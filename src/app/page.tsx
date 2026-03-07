export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 to-black text-white">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-10 py-6">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Applesapit
        </h1>

        <div className="hidden md:flex gap-8 text-gray-300">
          <a className="hover:text-white transition">Home</a>
          <a className="hover:text-white transition">Product</a>
          <a className="hover:text-white transition">Features</a>
          <a className="hover:text-white transition">Contact</a>
        </div>

        <button className="px-5 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:scale-105 transition shadow-lg shadow-indigo-500/30">
          Get Started
        </button>
      </nav>


      {/* HERO */}
      <section className="text-center py-32 px-6">

        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          The Future of
          <span className="block bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            Applesapit Technology
          </span>
        </h1>

        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          Applesapit menghadirkan solusi teknologi futuristik untuk bisnis modern.
          Menggabungkan AI, automation, dan performa ultra cepat.
        </p>

        <div className="mt-10 flex justify-center gap-6 flex-wrap">
          <button className="px-8 py-3 rounded-full bg-indigo-600 hover:scale-105 transition shadow-lg shadow-indigo-500/30">
            Start Now
          </button>

          <button className="px-8 py-3 rounded-full border border-white/10 backdrop-blur-md bg-white/5 hover:bg-white/10 transition">
            Learn More
          </button>
        </div>

      </section>


      {/* FEATURES */}
      <section className="py-24 px-10">

        <h2 className="text-4xl font-bold text-center mb-16">
          Why Applesapit
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-4">AI Automation</h3>
            <p className="text-gray-400">
              Otomatisasi bisnis menggunakan teknologi AI generasi terbaru.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-4">Ultra Fast System</h3>
            <p className="text-gray-400">
              Infrastruktur modern dengan performa super cepat.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-4">Secure Platform</h3>
            <p className="text-gray-400">
              Keamanan tingkat enterprise untuk melindungi data Anda.
            </p>
          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="text-center py-28">

        <h2 className="text-4xl font-bold mb-6">
          Ready For The Future?
        </h2>

        <p className="text-gray-400 mb-10">
          Mulai transformasi digital bersama Applesapit hari ini.
        </p>

        <button className="px-10 py-4 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:scale-105 transition shadow-lg shadow-purple-500/30">
          Join Applesapit
        </button>

      </section>


      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 text-center text-gray-500">
        © 2026 Applesapit. All rights reserved.
      </footer>


    </main>
  );
}