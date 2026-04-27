'use client'
import { useEffect, useRef, useState } from 'react'
import { Code2, Database, Palette, BarChart3, Brain, Globe, Zap, BookOpen, Target } from 'lucide-react'

export default function TechnicalSkills() {
  const [isVisible, setIsVisible] = useState(true) // Set to true initially for debugging
  const [hoveredSkill, setHoveredSkill] = useState(null)
  const sectionRef = useRef(null)

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code2,
      gradient: 'from-slate-600 via-blue-600 to-slate-800',
      bgGradient: 'from-slate-50 to-blue-50',
      skills: [
        { 
          name: 'Python', 
          projects: 'Growmate',
          subjects: 'Fundamental Basic Science, Data Engineering, Machine Learning, Basic Programming',
          specialty: 'Data Science & ML',
          iconColor: 'bg-yellow-500'
        },
        { 
          name: 'TypeScript', 
          projects: 'My Portfolio, Lost it Find it',
          subjects: 'Web Application Development, Application and Information Integration',
          specialty: 'Type Safety & Web Dev',
          iconColor: 'bg-blue-500'
        },
        { 
          name: 'JavaScript', 
          projects: 'All Web Projects',
          subjects: 'Web Application Development, Object Oriented Programming, Basic Programming',
          specialty: 'Frontend Development',
          iconColor: 'bg-yellow-400'
        },
        { 
          name: 'HTML/CSS', 
          projects: 'My Portfolio, Lost it Find it, Growmate',
          subjects: 'Object Oriented Programming, Web Application Development',
          specialty: 'Web Fundamentals',
          iconColor: 'bg-orange-500'
        }
      ]
    },
    {
      title: 'Machine Learning & Data Science',
      icon: Brain,
      gradient: 'from-blue-500 via-slate-600 to-blue-800',
      bgGradient: 'from-blue-50 to-slate-50',
      skills: [
        { 
          name: 'Predictive Analytics', 
          projects: 'Growmate',
          subjects: 'Data Engineering, Machine Learning',
          specialty: 'Forecasting Models',
          iconColor: 'bg-green-500'
        },
        { 
          name: 'Data Analysis', 
          projects: 'All Data Projects',
          subjects: 'Data Engineering, Data Visualization',
          specialty: 'Insights & Patterns',
          iconColor: 'bg-indigo-500'
        },
        { 
          name: 'Statistical Analysis', 
          projects: 'Growmate',
          subjects: 'Probability and Statistics, Statistic',
          specialty: 'Statistical Methods',
          iconColor: 'bg-red-500'
        }
      ]
    },
    {
      title: 'Web Development',
      icon: Globe,
      gradient: 'from-slate-700 via-blue-500 to-slate-900',
      bgGradient: 'from-slate-50 to-blue-50',
      skills: [
        { 
          name: 'React.js', 
          projects: 'Lost it Find it',
          subjects: 'Web Application Development, Basic Programming, Application and Information Integration',
          specialty: 'Component Architecture',
          iconColor: 'bg-cyan-500'
        },
        { 
          name: 'Next.js', 
          projects: 'Back-end Borobudur Project, Lost it Find it',
          subjects: 'Web Application Development, Application and Information Integration',
          specialty: 'Full-Stack Framework',
          iconColor: 'bg-black'
        },
        { 
          name: 'Express.js', 
          projects: 'Back-end Borobudur Project, Lost it Find it',
          subjects: 'Application and Information Integration, Web Application Development',
          specialty: 'Python Web Framework',
          iconColor: 'bg-green-600'
        }
      ]
    },
    {
      title: 'Database Management',
      icon: Database,
      gradient: 'from-blue-600 via-slate-700 to-blue-900',
      bgGradient: 'from-blue-50 to-slate-50',
      skills: [
        { 
          name: 'PostgreSQL', 
          projects: 'Growmate, Shayou Shop',
          subjects: 'Data Structure Algorithm, Data Engineering',
          specialty: 'Relational Database',
          iconColor: 'bg-blue-600'
        },
        { 
          name: 'Database Design', 
          projects: 'All Database Projects',
          subjects: 'Data Structure Algorithm, Data Engineering',
          specialty: 'Schema Architecture',
          iconColor: 'bg-purple-600'
        }
      ]
    },
    {
      title: 'UI/UX Design',
      icon: Palette,
      gradient: 'from-slate-600 via-blue-700 to-slate-800',
      bgGradient: 'from-slate-50 to-blue-50',
      skills: [
        { 
          name: 'Figma', 
          projects: 'All Web Projects',
          subjects: 'Web Application Development',
          specialty: 'Design Systems',
          iconColor: 'bg-pink-500'
        },
        { 
          name: 'UI/UX Design', 
          projects: 'Lost it FInd it, Growmate',
          subjects: 'Web Application Development, Human Computer Interaction',
          specialty: 'User Experience',
          iconColor: 'bg-indigo-600'
        },
        { 
          name: 'CSS', 
          projects: 'All Web Projects',
          subjects: 'Object Oriented Programming, Web Application Development',
          specialty: 'Styling & Animation',
          iconColor: 'bg-blue-400'
        }
      ]
    },
    {
      title: 'Data Analytics & Visualization',
      icon: BarChart3,
      gradient: 'from-blue-500 via-slate-600 to-blue-800',
      bgGradient: 'from-blue-50 to-slate-50',
      skills: [
        {
          name: 'Excel Advanced', 
          projects: 'Data Analysis Tasks',
          subjects: 'Probability and Statistics, Stastics',
          specialty: 'Data Processing',
          iconColor: 'bg-green-500'
        }
      ]
    }
  ]

  useEffect(() => {
    // Set visible immediately for debugging
    setIsVisible(true)
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log('Intersection observed:', entry.isIntersecting) // Debug log
        if (entry.isIntersecting) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }
      },
      { threshold: 0.1 } // Lowered threshold
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="technical-skills" className="py-20 bg-gray-50 relative overflow-hidden min-h-screen">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-slate-600 to-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-gradient-to-r from-blue-600 to-slate-800 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-36 h-36 bg-gradient-to-r from-slate-700 to-blue-700 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-2 bg-gradient-to-r from-slate-600 to-blue-600 rounded-full">
              <Code2 className="text-white" size={24} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-600 to-blue-600 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <div className="p-2 bg-gradient-to-r from-blue-600 to-slate-800 rounded-full">
              <Brain className="text-white" size={24} />
            </div>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-slate-600 to-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Skills developed through academic coursework and applied in real-world projects
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon
            return (
              <div 
                key={categoryIndex} 
                className={`bg-gradient-to-br ${category.bgGradient} rounded-2xl p-6 shadow-lg hover:shadow-xl transform transition-all duration-1000 border border-slate-200 hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${categoryIndex * 150}ms` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.gradient} shadow-lg`}>
                    <CategoryIcon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-800">
                      {category.title}
                    </h3>
                    <div className="flex items-center gap-1 mt-1">
                      <BookOpen size={12} className="text-slate-500" />
                      <span className="text-xs text-slate-500">Academic & Applied</span>
                    </div>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="group bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 hover:border-blue-200 cursor-pointer"
                      onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className="flex items-start gap-3">
                        {/* Skill Icon */}
                        <div className="relative">
                          <div className={`w-10 h-10 ${skill.iconColor} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                            <span className="text-white text-xs font-bold">
                              {skill.name.substring(0, 2).toUpperCase()}
                            </span>
                          </div>
                          {hoveredSkill === `${categoryIndex}-${skillIndex}` && (
                            <div className="absolute -top-1 -right-1">
                              <Zap size={12} className="text-blue-500 animate-pulse" />
                            </div>
                          )}
                        </div>

                        {/* Skill Info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-slate-800 text-sm group-hover:text-blue-600 transition-colors">
                              {skill.name}
                            </h4>
                            <span className="text-xs text-slate-500 font-medium bg-slate-100 px-2 py-1 rounded-full">
                              {skill.specialty}
                            </span>
                          </div>

                          {/* Academic Source */}
                          <div className="mb-2">
                            <div className="flex items-center gap-1 mb-1">
                              <BookOpen size={12} className="text-blue-500" />
                              <span className="text-xs font-medium text-blue-600">Learned from:</span>
                            </div>
                            <p className="text-xs text-slate-600 leading-relaxed">
                              {skill.subjects}
                            </p>
                          </div>

                          {/* Project Applications */}
                          <div className="mb-3">
                            <div className="flex items-center gap-1 mb-1">
                              <Target size={12} className="text-slate-500" />
                              <span className="text-xs font-medium text-slate-700">Applied in:</span>
                            </div>
                            <p className="text-xs text-slate-600 leading-relaxed">
                              {skill.projects}
                            </p>
                          </div>

                          {/* Animated Progress Indicator */}
                          <div className="h-1 bg-slate-200 rounded-full overflow-hidden">
                            <div 
                              className={`h-full bg-gradient-to-r ${category.gradient} rounded-full transition-all duration-1000 ease-out`}
                              style={{ 
                                width: isVisible ? '100%' : '0%',
                                transitionDelay: `${(categoryIndex * 150) + (skillIndex * 100)}ms`
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Category Footer */}
                <div className="mt-6 pt-4 border-t border-slate-200">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>{category.skills.length} Skills</span>
                    <div className="flex items-center gap-1">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.gradient}`}></div>
                      <span>Academic Foundation</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}