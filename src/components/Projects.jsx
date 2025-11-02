'use client'
import { ExternalLink, Github, ChevronLeft, ChevronRight, Figma, MessageCircle, Pause } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Projects() {
  const projects = [
    {
      title: 'Back-end Borobudur Capture Project',
      description: 'Backend service for the Borobudur relief image acquisition project. This system handles image and metadata uploads from STM32 devices, manages photo capture sessions, and provides endpoints for data validation and retrieval.',
      client: 'Client : Requirements for the capstone project of the Department of Electrical Engineering and Information Technology of Gadjah Mada Univeristy',
      images: [
        '/images/projects/f2.png',
        '/images/projects/f1.png'
      ],
      tags: ['Javascript', 'Express.js', 'Next.js', 'MongoDB', 'Azure Blob Storage'],
      githubUrl: 'https://github.com/tsabitahinayah/borobudur-capture-backend.git',
      status: 'ongoing'
    },
    {
      title: 'Growmate',
      description: 'GrowMate is a web-based platform that provides sales trend analysis features across various social media platforms, provides sales data analysis for merchants, and offers a stock management system that evaluates stock levels to help merchants optimize their product sales. A website that can analyze historical sales data and market trends to provide stock management recommendations will be a relevant solution for MSME owners in the retail, reseller, and FMCG industries.',
      images: [
        '/images/projects/a1.png',
        '/images/projects/a2.png',
        '/images/projects/a3.png',
        '/images/projects/a4.png',
        '/images/projects/a5.png'
      ],
      tags: ['Javasript', 'Python', 'PostgreSQL', 'CSS', 'Tailwind CSS'],
      projectType: 'contact',
    },
    {
      title: 'Lost it Find it',
      description: 'Lost It Find It is a web application designed to help students search for or report lost or found items on campus. This application allows users to upload information about found items and search for their lost items. This project was developed as part of a final assignment for the Web Application Development course.',
      images: [
        '/images/projects/b1.png',
        '/images/projects/b2.png',
        '/images/projects/b3.png',
        '/images/projects/b4.png',
        '/images/projects/b5.png',
        '/images/projects/b6.png'
      ],
      tags: ['Typescript', 'Javascript', 'MongoDB', 'Next.js', 'Express.js', 'CSS'],
      projectType: 'contact',
    },
    {
      title: 'Portfolio Website',
      description: 'Modern portfolio website with animations and responsive design',
      images: [
        '/images/projects/f1.png' //Ganti lagi gambarnya kalau udah deploy porto
      ],
      tags: ['React', 'Tailwind CSS', 'Framer Motion'],
      projectType: 'portfolio' // Changed from 'contact' to 'portfolio'
    },
    {
      title: 'EcoTrack',
      description: 'The EcoTrack application is based on environmental issues, particularly the problem of waste, which is often difficult to deal with effectively. Promoting the concept of a circular economy, this application provides a solution for easily reporting waste in the surrounding environment through technology.',
      images: [
        '/images/projects/c1.png',
        '/images/projects/c2.png',
        '/images/projects/c3.png',
        '/images/projects/c4.png'
      ],
      tags: ['UI/UX', 'Figma', 'Data Visualization'],
      figmaUrl: 'https://www.figma.com/design/FQNPxh6he3cDEsL9eLGWgY/IMK?node-id=0-1&t=zJc3FDhLWEqV9rLd-1',
      projectType: 'figma'
    },
    {
      title: 'Modeling Ebola Virus Cases in West Africa (2014)',
      description: 'Modeling the Ebola Virus Case in West Africa (2014) using Insight Maker tools as the output of the final assignment for the Modeling and Simulation Engineering course.',
      images: [
        '/images/projects/d1.png'
      ],
      tags: ['Insight Maker', 'Modelling and Simulation'],
      projectType: 'contact'
    },
    {
      title: 'Shayou Shop',
      description: 'Shayou Shop was created as a final project for the Object-Oriented Programming course. The application is a food ordering system for the Shayou shop.',
      images: [
        '/images/projects/e1.jpg',
        '/images/projects/e2.png',
        '/images/projects/e3.png',
        '/images/projects/e4.png',
        '/images/projects/e5.png'
      ],
      tags: ['Javascript', 'PosgreSQL'],
      projectType: 'contact'
    }
  ]

  // ... ImageCarousel component remains the same ...
  const ImageCarousel = ({ images, title }) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [touchStart, setTouchStart] = useState(0)
    const [touchEnd, setTouchEnd] = useState(0)

    useEffect(() => {
      if (images.length > 1) {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
        }, 5000)
        return () => clearInterval(interval)
      }
    }, [images.length])

    const handlePrevious = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
    }

    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }

    const handleTouchStart = (e) => {
      setTouchStart(e.targetTouches[0].clientX)
    }

    const handleTouchMove = (e) => {
      setTouchEnd(e.targetTouches[0].clientX)
    }

    const handleTouchEnd = () => {
      if (touchStart - touchEnd > 75) {
        handleNext()
      }
      if (touchStart - touchEnd < -75) {
        handlePrevious()
      }
    }

    return (
      <div className="relative overflow-hidden rounded-lg bg-gradient-to-b from-charcoal-200 to-charcoal-300 aspect-video">
        <div
          className="flex transition-transform duration-300 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {images.map((image, index) => (
            <div key={index} className="min-w-full h-full flex-shrink-0">
              <img
                src={image}
                alt={`${title} - image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {images.length > 1 && (
          <>
            <button
              onClick={handlePrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1 shadow hover:bg-white transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5 text-charcoal-700" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1 shadow hover:bg-white transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5 text-charcoal-700" />
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full ${
                    index === currentIndex ? 'bg-emerald-600' : 'bg-white/70'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    )
  }

  const ProjectCard = ({ project, index }) => {
    const handleContactClick = () => {
      const contactSection = document.getElementById('contact')
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' })
      }
    }

    return (
      <div className="bg-white rounded-xl overflow-hidden shadow-md border border-charcoal-100 hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
        <div className="relative">
          <ImageCarousel images={project.images} title={project.title} />
          {project.status === 'ongoing' && (
            <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg z-30">
              🚧 Coming Soon
            </div>
          )}
        </div>
        <div className="p-6">
          <h3 className="text-xl font-serif font-semibold text-charcoal-900 mb-2">
            {project.title}
          </h3>
          {project.client && (
            <p className="text-emerald-900 mb-4 text-sm leading-relaxed font-medium">
              {project.client}
            </p>
          )}
          <p className="text-charcoal-600 mb-4 text-sm leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, tagIndex) => (
              <span key={tagIndex} className="bg-charcoal-100 text-charcoal-700 px-3 py-1 rounded-full text-xs font-medium">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            {/* Back-end Borobudur Capture Project - ongoing project with Github only */}
            {project.title === 'Back-end Borobudur Capture Project' ? (
              <a 
                href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-charcoal-600 hover:text-charcoal-800 transition-colors"
                >
                  <Github size={16} />
                  <span className="text-sm">Code</span>
              </a>
            ) : 
            /* Demo projects - show demo button with pause icon */
            project.projectType === 'demo' ? (
              <a 
                href={project.demoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-orange-600 hover:text-orange-800 transition-colors hover:bg-orange-50 px-3 py-1 rounded-lg"
              >
                <Pause size={16} />
                <span className="text-sm">Demo</span>
              </a>
            ) : 
            /* Figma projects - only show Figma link */
            project.projectType === 'figma' ? (
              <a 
                href={project.figmaUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-purple-600 hover:text-purple-800 transition-colors"
              >
                <Figma size={16} />
                <span className="text-sm">View Design</span>
              </a>
            ) : 
            /* Portfolio project - no button (as requested) */
            project.projectType === 'portfolio' ? (
              <div className="text-charcoal-500 text-sm italic">
                Current website you're viewing
              </div>
            ) :
            /* Contact projects - show contact button */
            project.projectType === 'contact' ? (
              <button 
                onClick={handleContactClick}
                className="flex items-center gap-2 text-emerald-600 hover:text-emerald-800 transition-colors hover:bg-emerald-50 px-3 py-1 rounded-lg"
              >
                <MessageCircle size={16} />
                <span className="text-sm">Contact Me</span>
              </button>
            ) : 
            /* Default - show Live Demo and GitHub (fallback) */
            (
              <>
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-emerald-600 hover:text-emerald-800 transition-colors"
                >
                  <ExternalLink size={16} />
                  <span className="text-sm">Live Demo</span>
                </a>
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-charcoal-600 hover:text-charcoal-800 transition-colors"
                >
                  <Github size={16} />
                  <span className="text-sm">View Code</span>
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <section id="projects" className="py-20 bg-charcoal-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 bg-gradient-to-r from-charcoal-700 to-emerald-500 bg-clip-text text-transparent">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mb-8"></div>
          <p className="text-charcoal-700 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and creativity
          </p>
        </div>



        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}