'use client'
import { useEffect, useRef, useState } from 'react'
import { Award, Calendar, Building2, ExternalLink } from 'lucide-react'

export default function CertificationsTraining() {
  const [isVisible, setIsVisible] = useState(true)
  // Menghapus state showPowerBIDoc yang tidak lagi diperlukan

  const sectionRef = useRef(null)

  const certifications = [
    {
      title: 'Web Development Training',
      organization: 'KMTETI Engineering Faculty UGM',
      date: 'May 2023',
      type: 'Certification',
      description: 'Comprehensive training program covering fundamental web development technologies, modern programming practices, and practical application in building dynamic and responsive web-based solutions.',
      skills: ['Javascript', 'React', 'Next JS', 'Express JS', 'HTML', 'CSS', 'Tailwind', 'Back-end development ', 'Front-end Development'],
      icon: '/images/certificate/kmteti.png',
      // Menggunakan 'image' sebagai kunci standar untuk gambar
      image: '/images/certificate/Training Certification Web Dev.jpg' 
    },
    {
      title: 'User Interface Training',
      organization: 'KMTETI Engineering Faculty UGM',
      date: 'May 2023',
      type: 'Certification',
      description: 'Successfully completed the "Pelatihan User Interface 2" (User Interface Training 2) course, an extensive online training program organized by the Workshop Division of the Electrical and Information Technology Engineering Student Family (KMTETI) at the Faculty of Engineering, Gadjah Mada University, spanning from March 3 to May 5, 2023, demonstrating a dedicated commitment to advanced UI/UX principles and digital design proficiency.',
      skills: ['UI Design', 'UX Principles', 'Digital Prototyping', 'CSS', 'Tailwind', 'Front-end Development'],
      icon: '/images/certificate/kmteti.png',
      // Menggunakan 'image' sebagai kunci standar untuk gambar
      image: '/images/certificate/Training Certification User Interface.jpg' 
    },
    {
      title: 'Introduction to Deep Learning',
      organization: 'Datacamp',
      date: 'June 2024',
      type: 'Training',
      description: 'Comprehensive training program covering the fundamentals of deep learning using the Keras library, and focused on the practical application of building, compiling, and training neural network models for data science tasks.',
      skills: ['Python', 'Deep Learning Fundamentals', 'Model Building & Training', 'Data Handling', 'Model Evaluation', 'Python Programming'],
      icon: '/images/certificate/datacamp.png',
      image: '/images/certificate/Introduction Keras Course.jpg',
    },
    {
      title: 'Advanced Deep Learning',
      organization: 'Datacamp',
      date: 'June 2024',
      type: 'Training',
      description: 'Comprehensive training program covering the fundamentals of deep learning using the Keras library, and focused on the practical application of building, compiling, and training neural network models for data science tasks.',
      skills: ['Python', 'Deep Learning Fundamentals', 'Model Building & Training', 'Data Handling', 'Model Evaluation', 'Python Programming'],
      icon: '/images/certificate/datacamp.png',
      image: '/images/certificate/Advanced Keras Course.jpg',
    },
    {
      title: 'Accomplishment Cleaning Data in Python',
      organization: 'Datacamp',
      date: 'September 2024',
      type: 'Training',
      description: 'Completing a focused training program that provided expertise in applying Python programming and specialized libraries to effectively handle real-world data issues, including missing values, inconsistencies, and data formatting for robust analysis.',
      skills: ['Python', 'Data Cleaning Techniques', 'Data Transformation'],
      icon: '/images/certificate/datacamp.png',
      image: '/images/certificate/Cleaning Data in Python.jpg'
    },
    {
      title: 'Accomplishment Exploratory Data Analysis in Python',
      organization: 'Datacamp',
      date: 'September 2024',
      type: 'Training',
      description: 'Completion is awarded for the successful execution of an intensive training course demonstrating mastery in utilizing Python programming and its analytical ecosystem to conduct preliminary data investigations, visualize trends, and derive initial statistical insights essential for subsequent modeling.',
      skills: ['Python', 'Data Inspection & Summarization', 'Data Visualization', 'Statistical Analysis'],
      icon: '/images/certificate/datacamp.png',
      image: '/images/certificate/Exploring Data Analysis in Python.jpg'
    },
    {
      title: 'Accomplishment ETL and ELT in Python',
      organization: 'Datacamp',
      date: 'November 2024',
      type: 'Training',
      description: 'intensive training course demonstrating advanced capability in designing and implementing data pipeline architectures using Python and specialized libraries to effectively perform Extract, Transform, and Load (ETL) as well as the modern Extract, Load, and Transform (ELT) processes.',
      skills: ['Python', 'PosgreSQL', 'Data Pipeline Design', 'Data Extraction', 'Data Loading', 'Data Transformation'],
      icon: '/images/certificate/datacamp.png',
      image: '/images/certificate/ETL and ELT in Python.jpg'
    },
    {
      title: 'Completion Programming Essentials in Python (Part 1)',
      organization: 'Cisco Networking Academy',
      date: 'April 2025',
      type: 'Certification',
      description: 'A Certificate of Course Completion is awarded for the rigorous acquisition of foundational programming knowledge, establishing a solid understanding of core Python syntax, fundamental data structures, basic flow control mechanisms, and the object-oriented approach necessary for entry-level software development tasks.',
      skills: ['Python', 'Foundational Python Syntax', 'Problem Solving'],
      icon: '/images/certificate/cisco.jpeg',
      image: '/images/certificate/Completion Python 1 by Cisco.jpg' // Menggunakan 'image'
    }
  ]

  useEffect(() => {
    setIsVisible(true)
    console.log('Component mounted, isVisible:', true)
  }, [])

  // Menghapus useEffect timer untuk Power BI / showPowerBIDoc
  /*
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPowerBIDoc(true)
    }, 10000) // 10 seconds

    return () => clearTimeout(timer)
  }, [])
  */

  // Menyederhanakan fungsi getImageSrc
  const getImageSrc = (cert) => {
    // Akan mencari 'image' atau 'certificateImage' (jika masih ada)
    return cert.image || cert.certificateImage
  }

  return (
    <section ref={sectionRef} id="certifications" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Certifications & Training
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Professional development and continuous learning achievements
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="bg-slate-800 border border-slate-700 rounded-xl p-8 hover:border-slate-600 hover:bg-slate-800 transition-all duration-300 transform hover:scale-105"
            >
              {/* Header with Icon and Type Badge */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="bg-slate-700 p-3 rounded-lg">
                    {cert.icon ? (
                      <div className="w-6 h-6 relative">
                        <img 
                          src={cert.icon} 
                          alt={`${cert.organization} logo`}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            e.target.style.display = 'none'
                            e.target.nextSibling.style.display = 'block'
                          }}
                        />
                        <Award size={16} className="text-blue-400 hidden" />
                      </div>
                    ) : (
                      <Award size={24} className="text-blue-400" />
                    )}
                  </div>
                  <div>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      cert.type === 'Certification' 
                        ? 'bg-blue-900 text-blue-300 border border-blue-700' 
                        : 'bg-green-900 text-green-300 border border-green-700'
                    }`}>
                      {cert.type}
                    </span>
                  </div>
                </div>
                <ExternalLink size={16} className="text-slate-400 hover:text-white cursor-pointer transition-colors" />
              </div>

              {/* Certificate Image - Disederhanakan untuk hanya menggunakan cert.image atau cert.certificateImage */}
              {(cert.image || cert.certificateImage) && (
                <div className="mb-6">
                  <div className="relative w-full h-64 bg-slate-700 rounded-lg overflow-hidden p-4">
                    <img
                      // Menggunakan getImageSrc yang telah disederhanakan
                      src={getImageSrc(cert)}
                      alt={`${cert.title} certificate`}
                      className="w-full h-full object-contain transition-opacity duration-500"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.nextSibling.style.display = 'flex'
                      }}
                    />
                    <div className="hidden w-full h-full items-center justify-center">
                      <div className="text-center">
                        <Award size={48} className="text-slate-500 mx-auto mb-2" />
                        <p className="text-slate-400 text-sm">
                          Certificate Image
                        </p> 
                      </div>
                    </div>
                    {/* Menghapus conditional rendering untuk Power BI Workshop */}
                  </div>
                </div>
              )}

              {/* Title and Organization */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white mb-2">
                  {cert.title}
                </h3>
                <div className="flex items-center gap-2 text-slate-300 mb-2">
                  <Building2 size={16} />
                  <span className="font-medium">{cert.organization}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <Calendar size={16} />
                  <span>{cert.date}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-300 mb-6 leading-relaxed text-sm">
                {cert.description}
              </p>

              {/* Skills Tags */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-3">Key Skills Acquired:</h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="bg-slate-700 text-slate-300 px-3 py-1 rounded-full text-xs border border-slate-600 hover:border-slate-500 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Border Accent */}
              <div className="w-full h-1 bg-gradient-to-r from-blue-600 to-slate-600 rounded-full mt-6"></div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-white mb-3">
              Continuous Learning Journey
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              I'm committed to staying current with industry trends and continuously expanding my skill set. 
              These certifications represent my dedication to professional growth in data science, analytics, 
              machine learning, and business intelligence.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}