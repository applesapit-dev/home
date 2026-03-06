import React from 'react';

// 1. Tipe Data Sertifikat
interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  imageUrl: string;
  link: string;
}

// 2. Data Sertifikat (Edit sesuai data Anda)
const certificates: Certificate[] = [
  {
    id: 1,
    title: "Full Stack Web Development Bootcamp",
    issuer: "Dicoding Indonesia",
    date: "Oktober 2023",
    imageUrl: "https://placehold.co/600x400/2563eb/white?text=Sertifikat+Dicoding",
    link: "#",
  },
  {
    id: 2,
    title: "Google Data Analytics Professional Certificate",
    issuer: "Coursera",
    date: "Agustus 2023",
    imageUrl: "https://placehold.co/600x400/16a34a/white?text=Sertifikat+Google",
    link: "#",
  },
  {
    id: 3,
    title: "Frontend Developer Certification",
    issuer: "Meta (Facebook)",
    date: "Juni 2023",
    imageUrl: "https://placehold.co/600x400/0f172a/white?text=Sertifikat+Meta",
    link: "#",
  },
  {
    id: 4,
    title: "Hackathon Winner - Tech Summit 2024",
    issuer: "Tech Summit Indonesia",
    date: "Januari 2024",
    imageUrl: "https://placehold.co/600x400/ea580c/white?text=Hackathon+Winner",
    link: "#",
  },
];

export default function CertificatesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-4">
            {/* Icon Trophy SVG Inline */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-blue-600">
              <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
              <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
              <path d="M4 22h16" />
              <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
              <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
              <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Sertifikat & Penghargaan
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Berikut adalah daftar sertifikasi profesional dan penghargaan yang telah saya raih untuk meningkatkan kompetensi di bidang teknologi.
          </p>
        </div>

        {/* Grid Sertifikat */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {certificates.map((cert) => (
            <div 
              key={cert.id} 
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col"
            >
              {/* Gambar Sertifikat */}
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <img 
                  src={cert.imageUrl} 
                  alt={cert.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-700 shadow-sm">
                  {cert.date}
                </div>
              </div>

              {/* Konten Kartu */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                    {cert.title}
                  </h3>
                  <div className="flex items-center text-gray-500 mb-4">
                    {/* Icon File SVG Inline */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2">
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                    <span className="text-sm font-medium">{cert.issuer}</span>
                  </div>
                </div>

                {/* Tombol Aksi */}
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 w-full inline-flex items-center justify-center px-4 py-2.5 border border-transparent text-sm font-medium rounded-lg text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                  Lihat Sertifikat
                  {/* Icon External Link SVG Inline */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 w-4 h-4">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Section (Opsional) */}
        <div className="mt-16 text-center">
          <p className="text-gray-500">
            Masih banyak lagi pengalaman belajar lainnya. <br />
            <a href="/" className="text-blue-600 hover:underline">Kembali ke Beranda</a>
          </p>
        </div>

      </div>
    </div>
  );
}