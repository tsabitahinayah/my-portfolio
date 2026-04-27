"use client"

import { useState, useEffect } from 'react'

export default function OrganisationalExperience() {
  const experiences = [
    {
      id: 1,
      title: "Medical Division Staff - PORSENIGAMA",
      company: "FORKOM UKM Gadjah Mada University",
      duration: "August 2024 - December 2024",
      logo: "/images/organisasi/porsenigama.png",
      position: "left",
      jobDescriptions: [
        "Served as a key member of the Medical Division for PORSENIGAMA 2024, the premier cultural and sports event at Gadjah Mada University (UGM). This multi-sport competition featured participation from 18 Faculties and one Vocational School, fostering spirit and sportivity among UGM students.",
        "Administrative Support & Documentation: Managing the administrative process for athlete BPJS (Social Security/Health Insurance) documentation to ensure coverage and compliance.",
        "Inventory and Logistics Management: Accurately recapitulating and monitoring all medications and medical supplies used throughout the event.",
        "On-Site Emergency Response: Providing immediate first aid and emergency care for all participants and staff during competitions, ensuring prompt and professional medical attention."
      ],
      certificates: [
        "/images/organisasi/psg1.png",
        "/images/organisasi/psg2.png"
      ]
    },
    {
      id: 2,
      title: "Equipment, Logistic, adn Consumption Division Staff - Pionir Kesatria FT 2024",
      company: "Faculty of Engineering Gadjah Mada University",
      duration: "May 2024 - August 2024",
      logo: "/images/organisasi/kesatria.png",
      position: "right",
      jobDescriptions: [
        "Contributed significantly to the successful execution of Pionir Kesatria FT 2024, the official orientation program for 1804 new students of the Faculty of Engineering, Gadjah Mada University (UGM).",
        "High-Volume Consumption Management: Managed the end-to-end process of consumption data collection and coordination for all 1804 participants and staff throughout the two-day orientation event.",
        "VIP Event Production: Responsible for the complete stage layout and property arrangement for the opening ceremony, an event of high institutional profile, attended by Mr. Ganjar Pranowo and the Minister of Transportation of Indonesia, Ir. Budi Karya Sumadi."
      ],
      certificates: [
        "/images/organisasi/k1.png",
        "/images/organisasi/k2.png",
        "/images/organisasi/k3.png"
      ]
    },
    {
      id: 3,
      title: "Head of Production Division",
      company: "FORKOMMI Gadjah Mada University",
      duration: "August 2023 - June 2024",
      logo: "/images/organisasi/forkommi.jpeg",
      position: "left",
      jobDescriptions: [
        "Became the head of productuon division in the daily management of Gadjah Mada University Student Association from West Sumatera, FORKOMMI UGM, who initiated a business idea to raise funds for organizational activities."
      ],
      certificates: [
        "/images/organisasi/frk1.png"
      ]
    },
    {
      id: 4,
      title: "Treasurer - MINANGFEST",
      company: "FORKOMMI Gadjah Mada University",
      duration: "September 2023 - November 2023",
      logo: "/images/organisasi/forkommi.jpeg",
      position: "right",
      jobDescriptions: [
        "Became a treasurer to mananged finance during the cultural event by FORKOMMI UGM until it is held successfully.",
        "Managed a ticketing process to audients who attended the minangfest event and selling 298 tickets from online platform and on the spot in the location of Minangfest event, Serangan Umum 1 Maret Monument, Yogyakarta."
      ],
      certificates: [
        "/images/organisasi/m1.png",
        "/images/organisasi/m2.png",
        "/images/organisasi/m3.png"
      ]
    }

  ]

  const [visibleItems, setVisibleItems] = useState(new Set())

  useEffect(() => {
    // IMPROVED INTERSECTION OBSERVER for better 100% zoom visibility
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set([...prev, entry.target.dataset.id]))
          }
        })
      },
      { 
        threshold: 0.2, // INCREASED from 0.1 to 0.2 (20% visible)
        rootMargin: '150px 0px -100px 0px' // TRIGGER 150px sebelum masuk viewport!
      }
    )

    const elements = document.querySelectorAll('[data-id]')
    elements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  function CertificateCarousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [imageErrors, setImageErrors] = useState({})

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
      }, 5000)
      return () => clearInterval(interval)
    }, [images.length])

    const prevSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      )
    }

    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }

    const handleImageError = (index) => {
      setImageErrors(prev => ({ ...prev, [index]: true }))
    }

    return (
      <div className="mt-4">
        <div className="relative w-full h-48 md:h-64 rounded-lg overflow-hidden border border-charcoal-700 shadow-lg">
          {imageErrors[currentIndex] ? (
            <div className="w-full h-full bg-charcoal-700 flex items-center justify-center">
              <div className="text-center">
                <div className="text-charcoal-400 text-sm mb-2">image {currentIndex + 1}</div>
                <div className="text-charcoal-500 text-xs">Image not found</div>
                <div className="text-charcoal-500 text-xs mt-1">{images[currentIndex]}</div>
              </div>
            </div>
          ) : (
            <img
              src={images[currentIndex]}
              alt={`Certificate ${currentIndex + 1}`}
              className="w-full h-full object-cover"
              onError={() => handleImageError(currentIndex)}
            />
          )}
        </div>
        <div className="flex justify-center mt-2 space-x-4">
          <button
            onClick={prevSlide}
            aria-label="Previous certificate"
            className="bg-emerald-400 hover:bg-emerald-500 text-white font-bold py-1 px-3 rounded transition"
          >
            &#8249;
          </button>
          <span className="text-charcoal-400 text-sm flex items-center">
            {currentIndex + 1} / {images.length}
          </span>
          <button
            onClick={nextSlide}
            aria-label="Next certificate"
            className="bg-emerald-400 hover:bg-emerald-500 text-white font-bold py-1 px-3 rounded transition"
          >
            &#8250;
          </button>
        </div>
      </div>
    )
  }

  return (
    <section id="OrganisationalExperience" className="py-20 bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900 text-white relative overflow-hidden">
      <style jsx>{`
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0.8) rotate(0deg); }
          50% { opacity: 1; transform: scale(1.2) rotate(180deg); }
        }
        
        @keyframes glow-move {
          0% { transform: translateY(-50px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(200vh); opacity: 0; }
        }
        
        @keyframes card-emerge {
          0% { 
            opacity: 0; 
            transform: translateY(80px) scale(0.8); /* MORE dramatic start position */
          }
          100% { 
            opacity: 1; 
            transform: translateY(0) scale(1);
          }
        }
        
        .sparkle {
          animation: sparkle 2s ease-in-out infinite;
        }
        
        .card-emerge {
          animation: card-emerge 1.2s ease-out forwards; /* LONGER duration for visibility */
        }
        
        .timeline-dot {
          background: radial-gradient(circle, #34d399 0%, #10b981 50%, #047857 100%);
          box-shadow: 
            0 0 20px rgba(16, 185, 129, 0.6),
            0 0 40px rgba(16, 185, 129, 0.4);
          border: 3px solid rgba(30, 41, 59, 0.8);
          position: relative;
          z-index: 30;
        }
        
        .timeline-dot::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 6px;
          height: 6px;
          background: white;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          animation: sparkle 3s ease-in-out infinite;
        }

        .timeline-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 3px;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            #10b981 10%,
            #34d399 50%,
            #10b981 90%,
            transparent 100%
          );
          transform: translateX(-50%);
          z-index: 10;
        }

        .timeline-line::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          width: 1px;
          height: 100%;
          background: rgba(255, 255, 255, 0.6);
          transform: translateX(-50%);
          animation: glow-move 6s linear infinite;
        }
        
        @media (max-width: 768px) {
          .timeline-line-mobile {
            position: absolute;
            left: 24px;
            top: 0;
            bottom: 0;
            width: 2px;
            background: linear-gradient(
              to bottom,
              transparent 0%,
              #10b981 10%,
              #34d399 50%,
              #10b981 90%,
              transparent 100%
            );
            z-index: 10;
          }
        }
      `}</style>
      
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Some of <span className="text-emerald-400">Organizational Experience</span>
          </h2>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block">
          <div className="relative max-w-6xl mx-auto">
            {/* Center Timeline Line */}
            <div className="timeline-line">
              {/* Decorative sparkles */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-emerald-300 rounded-full sparkle" style={{animationDelay: '0s'}}></div>
              <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full sparkle" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-emerald-200 rounded-full sparkle" style={{animationDelay: '2s'}}></div>
              <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full sparkle" style={{animationDelay: '3s'}}></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-emerald-300 rounded-full sparkle" style={{animationDelay: '4s'}}></div>
            </div>

            {/* Timeline Items */}
            <div className="space-y-24">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  data-id={exp.id}
                  className="relative flex items-center"
                >
                  {/* Timeline Dot */}
                  <div className="timeline-dot absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full"
                       style={{animationDelay: `${index * 0.2}s`}}></div>

                  {/* Content Card */}
                  <div className={`w-full flex ${exp.position === 'left' ? 'justify-start' : 'justify-end'}`}>
                    <div className="w-5/12 mr-8 ml-8">
                      <div className={`bg-charcoal-800/90 backdrop-blur-sm rounded-xl p-6 shadow-2xl border border-charcoal-700 hover:border-emerald-400 transition-all duration-300 hover:transform hover:scale-105 opacity-0 ${
                        visibleItems.has(exp.id.toString()) ? 'card-emerge' : ''
                      }`} style={{animationDelay: `${index * 0.5}s`}}> {/* INCREASED delay interval */}
                        
                        {/* Header with logo and info */}
                        <div className="flex items-start space-x-4 mb-4">
                          <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                            <img
                              src={exp.logo}
                              alt={`${exp.company} logo`}
                              className="w-12 h-12 object-contain rounded"
                              onError={(e) => {
                                e.target.style.display = 'none'
                                e.target.nextSibling.style.display = 'flex'
                              }}
                            />
                            <div className="w-10 h-10 bg-emerald-500 rounded flex items-center justify-center" style={{display: 'none'}}>
                              <span className="text-white font-bold text-sm">
                                {exp.company.charAt(0)}
                              </span>
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-serif font-bold text-xl text-white mb-2 leading-tight">
                              {exp.title}
                            </h3>
                            <p className="text-charcoal-300 text-base mb-2 leading-tight">
                              {exp.company}
                            </p>
                            <p className="text-emerald-400 text-sm font-medium">
                              {exp.duration}
                            </p>
                          </div>
                        </div>

                        {/* Job descriptions */}
                        {exp.jobDescriptions && (
                          <div className="mb-4">
                            <ul className="list-disc list-inside text-charcoal-300 text-sm space-y-1">
                              {exp.jobDescriptions.map((desc, idx) => (
                                <li key={idx}>{desc}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Certificate carousel */}
                        {exp.certificates && exp.certificates.length > 0 && (
                          <CertificateCarousel images={exp.certificates} />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden">
          <div className="relative">
            {/* Mobile Timeline Line */}
            <div className="timeline-line-mobile">
              <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-emerald-300 rounded-full sparkle" style={{animationDelay: '0s'}}></div>
              <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full sparkle" style={{animationDelay: '1.5s'}}></div>
            </div>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={exp.id} className="relative flex items-start space-x-6" data-id={exp.id}>
                  {/* Mobile Timeline Dot */}
                  <div className="timeline-dot w-4 h-4 rounded-full flex-shrink-0 mt-8"
                       style={{animationDelay: `${index * 0.2}s`}}></div>
                  
                  {/* Mobile Content Card */}
                  <div className="flex-1 min-w-0">
                    <div className={`bg-charcoal-800/90 backdrop-blur-sm rounded-xl p-6 shadow-2xl border border-charcoal-700 opacity-0 ${
                      visibleItems.has(exp.id.toString()) ? 'card-emerge' : ''
                    }`} style={{animationDelay: `${index * 0.5}s`}}> {/* INCREASED delay interval */}
                      
                      {/* Header with logo and info */}
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                          <img
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            className="w-12 h-12 object-contain rounded"
                            onError={(e) => {
                              e.target.style.display = 'none'
                              e.target.nextSibling.style.display = 'flex'
                            }}
                          />
                          <div className="w-10 h-10 bg-emerald-500 rounded flex items-center justify-center" style={{display: 'none'}}>
                            <span className="text-white font-bold text-sm">
                              {exp.company.charAt(0)}
                            </span>
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-serif font-bold text-xl text-white mb-2 leading-tight">
                            {exp.title}
                          </h3>
                          <p className="text-charcoal-300 text-base mb-2 leading-tight">
                            {exp.company}
                          </p>
                          <p className="text-emerald-400 text-sm font-medium">
                            {exp.duration}
                          </p>
                        </div>
                      </div>

                      {/* Job descriptions */}
                      {exp.jobDescriptions && (
                        <div className="mb-4">
                          <ul className="list-disc list-inside text-charcoal-300 text-sm space-y-1">
                            {exp.jobDescriptions.map((desc, idx) => (
                              <li key={idx}>{desc}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Certificate carousel */}
                      {exp.certificates && exp.certificates.length > 0 && (
                        <CertificateCarousel images={exp.certificates} />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
