import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, ExternalLink, Download, Code, User, Briefcase, GraduationCap, Globe, Star, ChevronDown, Menu, X, Award } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState({});
  const [scrollY, setScrollY] = useState(0);

  const skills = {
    languages: ['JavaScript', 'HTML5', 'CSS3', 'PHP', 'SQL', 'Java', 'Python'],
    frameworks: ['React', 'Vue.js', 'Angular', 'Laravel', 'Node.js', 'Express.js'],
    tools: ['Bootstrap', 'Tailwind CSS', 'Git & GitHub', 'MySQL', 'Microsoft Office']
  };

  const projects = [
    {
      title: 'Cinepolis Pedralbes',
      type: 'Proyecto Individual',
      description: 'Plataforma completa de venta de entradas de cine desarrollada desde cero con sistema de reservas, selección de asientos y gestión de películas.',
      technologies: ['Nuxt3', 'Vue.js', 'Tailwind CSS', 'PHP', 'Laravel'],
      features: [
        'Sistema de reservas online', 
        'Selección interactiva de asientos',
        'Panel de administración',
        'Integración con base de datos'
      ],
      video: 'http://cinepolisfront.daw.inspedralbes.cat/',
      code: 'https://github.com/inspedralbes/tr3-cinema-24-25-JoselynNC1999.git',
      category: 'Full Stack'
    },
    {
      title: 'GRUPIFY',
      subtitle: 'Gestió Educativa Intel·ligent per a Professors',
      type: 'Proyecto en Equipo',
      description: 'Plataforma integral para empoderar a profesores en la gestión de clases, alumnos y proyectos grupales con herramientas de IA para optimización educativa.',
      technologies: ['React', 'Node.js', 'MongoDB', 'TensorFlow.js'],
      features: [
        'Generación automática de grupos',
        'Seguimiento de progreso de alumnos',
        'Herramientas de análisis con IA',
        'Dashboard interactivo'
      ],
      video: 'https://youtu.be/4wn1zk1ZfLo?si=yHEdl903I52GX3jk',
      code: 'https://github.com/inspedralbes/prj-final-grupify.git',
      category: 'Full Stack'
    },
    {
      title: 'TaskFlow',
      type: 'Proyecto Personal',
      description: 'Aplicación de gestión de tareas con arrastrar y soltar, categorización inteligente y recordatorios automatizados.',
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'React DnD'],
      features: [
        'Interfaz drag-and-drop',
        'Categorización automática',
        'Sincronización en la nube',
        'Notificaciones push'
      ],
      video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      code: '#',
      category: 'Frontend'
    }
  ];

  const experience = [
    {
      period: '2023 - 2024',
      title: 'Desarrolladora Web en Prácticas',
      company: 'IRIS Technology Solutions',
      responsibilities: [
        'Desarrollo front-end con React y Vue.js para aplicaciones empresariales',
        'Implementación de APIs RESTful con Node.js y Express',
        'Optimización de rendimiento de aplicaciones existentes',
        'Participación en reuniones de planificación ágil (Scrum)'
      ]
    },
    {
      period: '2021 - 2023',
      title: 'Gestora Administrativa',
      company: 'Mapfre',
      responsibilities: [
        'Digitalización de procesos administrativos',
        'Creación de macros y herramientas Excel para automatización',
        'Gestión de base de datos de clientes',
        'Soporte técnico básico a usuarios internos'
      ]
    }
  ];

  const education = [
    {
      period: '2023 - Mayo 2025 (en curso)',
      title: 'CFGS Desarrollo de Aplicaciones Web (DAW)',
      institution: 'Institut Pedralbes',
      highlights: [
        'Promedio: 8.7/10',
        'Proyectos destacados: Cinepolis, GRUPIFY',
        'Módulos principales: Programación, Bases de Datos, Diseño de Interfaces'
      ]
    },
    {
      period: 'Completado en 2019',
      title: 'Bachillerato Humanístico',
      institution: 'Severo Ochoa',
      highlights: [
        'Especialidad en Tecnología de la Información',
        'Participación en Olimpiada Informática'
      ]
    }
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  const SkillBadge = ({ skill, delay = 0 }) => (
    <div 
      className="group relative overflow-hidden"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="px-6 py-3 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 hover:border-amber-300 rounded-full transition-all duration-500 hover:shadow-lg hover:shadow-amber-200/25 transform hover:scale-105">
        <span className="text-amber-900 font-medium text-sm tracking-wide">{skill}</span>
        <div className="absolute inset-0 bg-gradient-to-r from-amber-200/0 via-amber-200/50 to-amber-200/0 transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-700"></div>
      </div>
    </div>
  );

  const ProjectCard = ({ project, index }) => (
    <div className={`group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 overflow-hidden border border-gray-100 ${isVisible.proyectos ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}
         style={{ animationDelay: `${index * 200}ms` }}>
      
      {/* Decorative element */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
      
      <div className="p-8">
        <div className="flex justify-between items-start mb-6">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-amber-400 to-orange-500"></div>
              <span className="text-amber-600 font-semibold text-sm tracking-wide uppercase">{project.category}</span>
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-amber-700 transition-colors duration-300">{project.title}</h4>
            {project.subtitle && (
              <p className="text-amber-600 font-medium text-sm mb-3">{project.subtitle}</p>
            )}
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
              {project.type}
            </span>
          </div>
          <div className="flex space-x-2">
            {project.video && (
              <a href={project.video} target="_blank" rel="noopener noreferrer" 
                 className="p-3 bg-gray-50 rounded-xl hover:bg-amber-50 transition-all duration-300 group/btn border border-gray-200 hover:border-amber-200"
                 title="Ver demo en YouTube">
                <ExternalLink className="w-5 h-5 text-gray-600 group-hover/btn:text-amber-600 transition-colors" />
              </a>
            )}
            {project.code && (
              <a href={project.code} target="_blank" rel="noopener noreferrer" 
                 className="p-3 bg-gray-50 rounded-xl hover:bg-amber-50 transition-all duration-300 group/btn border border-gray-200 hover:border-amber-200"
                 title="Ver código">
                <Code className="w-5 h-5 text-gray-600 group-hover/btn:text-amber-600 transition-colors" />
              </a>
            )}
          </div>
        </div>
        
        <p className="text-gray-600 text-sm leading-relaxed mb-6">{project.description}</p>
        
        <div className="mb-6">
          <h5 className="text-gray-900 font-semibold text-sm mb-3 flex items-center">
            <Award className="w-4 h-4 mr-2 text-amber-500" />
            Características principales
          </h5>
          <ul className="space-y-2">
            {project.features.map((feature, idx) => (
              <li key={idx} className="flex items-start text-gray-600 text-sm">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 mt-2 mr-3 flex-shrink-0"></div>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, idx) => (
            <span key={idx} className="px-3 py-1 bg-gray-50 text-gray-700 rounded-lg text-xs font-medium border border-gray-200">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-gray-900 relative overflow-hidden font-sans">
      {/* Subtle Background Pattern */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/30 via-white to-orange-50/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-amber-100/40 to-transparent rounded-full blur-3xl transform translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-orange-100/40 to-transparent rounded-full blur-3xl transform -translate-x-48 translate-y-48"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="font-bold text-2xl tracking-tight">
              <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Joselyn</span>
              <span className="text-gray-900 ml-1">Ninahuaman</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['inicio', 'sobre-mi', 'proyectos', 'experiencia', 'formacion', 'contacto'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`relative capitalize text-sm font-medium tracking-wide transition-all duration-300 py-2 group ${
                    activeSection === section ? 'text-amber-600' : 'text-gray-700 hover:text-amber-600'
                  }`}
                >
                  {section.replace('-', ' ')}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 transform origin-left transition-transform duration-300 ${
                    activeSection === section ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-3 rounded-xl hover:bg-gray-50 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white/95 backdrop-blur-lg rounded-2xl mt-2 p-4 border border-gray-200 shadow-xl">
              {['inicio', 'sobre-mi', 'proyectos', 'experiencia', 'formacion', 'contacto'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left py-3 px-4 capitalize text-sm rounded-xl transition-all duration-300 ${
                    activeSection === section 
                      ? 'bg-gradient-to-r from-amber-50 to-orange-50 text-amber-700 border border-amber-200' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {section.replace('-', ' ')}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative">
          {/* Parallax Background Element */}
          <div 
            className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-full blur-2xl"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          ></div>
          
          <div className="mb-12 animate-fade-in">
            <div className="relative w-48 h-48 mx-auto mb-12 group">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full blur-md opacity-25 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="/public/IMG_8108.jpg"  
                  alt="Foto de Joselyn Ninahuaman"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 bg-clip-text text-transparent">
                Joselyn
              </span>
              <br />
              <span className="text-gray-900 text-4xl md:text-6xl">
                Ninahuaman
              </span>
            </h1>
            
            <div className="space-y-4 mb-12">
              <p className="text-xl md:text-2xl text-amber-700 font-medium tracking-wide animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                Desarrolladora Web Full Stack Junior
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full animate-fade-in-up" style={{ animationDelay: '0.4s' }}></div>
              <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-lg animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                Apasionada por crear soluciones digitales innovadoras y elegantes. Combino habilidades técnicas con experiencia en atención al cliente para desarrollar aplicaciones web funcionales y centradas en el usuario.
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mb-16 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
            <a href="tel:610674560" className="group flex items-center gap-3 text-gray-700 hover:text-amber-700 transition-all duration-300 px-6 py-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 hover:border-amber-200 hover:shadow-lg hover:shadow-amber-200/25 transform hover:-translate-y-1">
              <div className="p-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl group-hover:from-amber-200 group-hover:to-orange-200 transition-all duration-300">
                <Phone className="w-5 h-5 text-amber-600" />
              </div>
              <span className="font-medium">610 674 560</span>
            </a>
            <a href="mailto:joselynelvira99@gmail.com" className="group flex items-center gap-3 text-gray-700 hover:text-amber-700 transition-all duration-300 px-6 py-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 hover:border-amber-200 hover:shadow-lg hover:shadow-amber-200/25 transform hover:-translate-y-1">
              <div className="p-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl group-hover:from-amber-200 group-hover:to-orange-200 transition-all duration-300">
                <Mail className="w-5 h-5 text-amber-600" />
              </div>
              <span className="font-medium">joselynelvira99@gmail.com</span>
            </a>
            <div className="flex items-center gap-3 text-gray-700 px-6 py-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200">
              <div className="p-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl">
                <MapPin className="w-5 h-5 text-amber-600" />
              </div>
              <span className="font-medium">Vilanova i la Geltrú</span>
            </div>
          </div>

          <div className="animate-bounce cursor-pointer" onClick={() => scrollToSection('sobre-mi')}>
            <div className="w-12 h-12 mx-auto bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <ChevronDown className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-mi" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-amber-500"></div>
              <span className="text-amber-600 font-semibold text-sm tracking-widest uppercase">Sobre mí</span>
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-amber-500"></div>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 tracking-tight">
              Pasión por el
              <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent"> desarrollo</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Desarrolladora web con formación técnica sólida y habilidades interpersonales que me permiten integrarme eficazmente en equipos de trabajo multidisciplinarios.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className={`space-y-8 ${isVisible['sobre-mi'] ? 'animate-fade-in-left' : 'opacity-0 translate-x-10'}`}>
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mr-4">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Mi Enfoque</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Como desarrolladora junior, me especializo en crear aplicaciones web completas utilizando tecnologías modernas. 
                  Mi enfoque combina la atención al detalle técnico con la comprensión de las necesidades del usuario final, 
                  gracias a mi experiencia previa en atención al cliente.
                </p>
              </div>
              
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mr-4">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Competencias Clave</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'Trabajo en equipo', 
                    'Resolución de problemas', 
                    'Aprendizaje rápido',
                    'Comunicación efectiva',
                    'Pensamiento analítico',
                    'Adaptabilidad'
                  ].map((skill, idx) => (
                    <div key={idx} className="flex items-center space-x-3 group">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 group-hover:scale-125 transition-transform duration-300"></div>
                      <span className="text-gray-700 text-sm font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mr-4">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Idiomas</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { language: 'Español', level: 'Nativo', proficiency: '100%' },
                    { language: 'Catalán', level: 'Avanzado', proficiency: '90%' },
                    { language: 'Inglés', level: 'Intermedio (B1)', proficiency: '65%' }
                  ].map((lang, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700 font-medium">{lang.language}</span>
                        <span className="text-amber-600 text-sm font-semibold">{lang.level}</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-amber-500 to-orange-500 h-2 rounded-full transition-all duration-1000 ease-out" 
                          style={{ width: isVisible['sobre-mi'] ? lang.proficiency : '0%' }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={`${isVisible['sobre-mi'] ? 'animate-fade-in-right' : 'opacity-0 translate-x-10'}`}>
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 sticky top-32">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mr-4">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Habilidades Técnicas</h3>
                </div>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="text-lg font-semibold text-amber-700 mb-4 flex items-center">
                      <div className="w-2 h-2 rounded-full bg-amber-500 mr-3"></div>
                      Lenguajes de Programación
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {skills.languages.map((skill, idx) => (
                        <SkillBadge key={idx} skill={skill} delay={idx * 100} />
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-amber-700 mb-4 flex items-center">
                      <div className="w-2 h-2 rounded-full bg-amber-500 mr-3"></div>
                      Frameworks y Librerías
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {skills.frameworks.map((skill, idx) => (
                        <SkillBadge key={idx} skill={skill} delay={idx * 100} />
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-amber-700 mb-4 flex items-center">
                      <div className="w-2 h-2 rounded-full bg-amber-500 mr-3"></div>
                      Herramientas y Tecnologías
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {skills.tools.map((skill, idx) => (
                        <SkillBadge key={idx} skill={skill} delay={idx * 100} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-32 bg-gradient-to-b from-gray-50 to-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-amber-500"></div>
              <span className="text-amber-600 font-semibold text-sm tracking-widest uppercase">Portfolio</span>
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-amber-500"></div>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 tracking-tight">
              Proyectos
              <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent"> destacados</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Una selección de mis trabajos más recientes, desde proyectos académicos hasta desarrollos personales que demuestran mi pasión por la tecnología.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-8 text-lg">¿Interesado en ver más de mi trabajo?</p>
            <a 
              href="https://github.com/tu-usuario" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-2xl font-semibold tracking-wide transition-all duration-300 hover:shadow-xl hover:shadow-amber-200/50 transform hover:-translate-y-1"
            >
              <Github className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
              Explorar GitHub
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experiencia" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-amber-500"></div>
              <span className="text-amber-600 font-semibold text-sm tracking-widest uppercase">Trayectoria</span>
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-amber-500"></div>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 tracking-tight">
              Experiencia
              <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent"> profesional</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Mi trayectoria profesional, combinando desarrollo tecnológico y experiencia en atención al cliente para crear soluciones centradas en el usuario.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Elegant Timeline */}
            <div className="absolute left-8 md:left-1/2 h-full w-px bg-gradient-to-b from-amber-200 via-orange-300 to-amber-200 transform md:-translate-x-1/2"></div>
            
            <div className="space-y-16">
              {experience.map((exp, index) => (
                <div 
                  key={index} 
                  className={`relative pl-20 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'} ${isVisible.experiencia ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}
                  style={{ animationDelay: `${index * 300}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 transform md:-translate-x-1/2 shadow-lg border-4 border-white"></div>
                  
                  <div className={`bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                    <div className="flex flex-col space-y-4 mb-6">
                      <span className="inline-block px-4 py-2 bg-gradient-to-r from-amber-50 to-orange-50 text-amber-700 rounded-full text-sm font-semibold tracking-wide border border-amber-200 self-start">
                        {exp.period}
                      </span>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                        <p className="text-amber-600 font-semibold text-lg">{exp.company}</p>
                      </div>
                    </div>
                    
                    <ul className="space-y-3">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start text-gray-600 text-sm leading-relaxed">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 mt-2 mr-4 flex-shrink-0"></div>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="formacion" className="py-32 bg-gradient-to-b from-gray-50 to-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-amber-500"></div>
              <span className="text-amber-600 font-semibold text-sm tracking-widest uppercase">Educación</span>
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-amber-500"></div>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 tracking-tight">
              Formación
              <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent"> académica</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Mi trayectoria educativa y certificaciones relevantes que fundamentan mi expertise técnico.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {education.map((edu, index) => (
              <div 
                key={index} 
                className={`group bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${isVisible.formacion ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-700 transition-colors duration-300">{edu.title}</h3>
                    <p className="text-amber-600 font-semibold">{edu.institution}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <span className="inline-block px-4 py-2 bg-gradient-to-r from-amber-50 to-orange-50 text-amber-700 rounded-full text-sm font-semibold tracking-wide border border-amber-200">
                    {edu.period}
                  </span>
                </div>
                
                {edu.highlights && (
                  <ul className="space-y-3">
                    {edu.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start text-gray-600 text-sm leading-relaxed">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 mt-2 mr-4 flex-shrink-0"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-32 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-amber-500"></div>
              <span className="text-amber-600 font-semibold text-sm tracking-widest uppercase">Contacto</span>
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-amber-500"></div>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 tracking-tight">
              Hablemos de tu
              <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent"> próximo proyecto</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              ¿Interesado en trabajar juntos o tienes alguna pregunta? Estaré encantada de escuchar sobre tu próximo proyecto.
            </p>
          </div>

          <div className={`bg-white rounded-3xl p-12 shadow-2xl border border-gray-100 ${isVisible.contacto ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Información de Contacto</h3>
                
                <div className="space-y-6">
                  <div className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm font-medium mb-1">Email</p>
                      <a href="mailto:joselynelvira99@gmail.com" className="text-gray-900 font-semibold text-lg hover:text-amber-600 transition-colors">
                        joselynelvira99@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm font-medium mb-1">Teléfono</p>
                      <a href="tel:610674560" className="text-gray-900 font-semibold text-lg hover:text-amber-600 transition-colors">
                        +34 610 674 560
                      </a>
                    </div>
                  </div>

                  <div className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm font-medium mb-1">Ubicación</p>
                      <p className="text-gray-900 font-semibold text-lg">Vilanova i la Geltrú, Barcelona</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h4 className="text-xl font-bold text-gray-900 mb-6">Perfiles profesionales</h4>
                  <div className="flex space-x-4">
                    <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer" 
                       className="group w-14 h-14 bg-gray-900 hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-500 rounded-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                      <Github className="w-7 h-7 text-white" />
                    </a>
                    <a href="https://linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer" 
                       className="group w-14 h-14 bg-gray-900 hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-500 rounded-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                      <Globe className="w-7 h-7 text-white" />
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Envíame un mensaje</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-3">Nombre completo</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-gray-900 placeholder-gray-500 transition-all duration-300"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-3">Correo electrónico</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-gray-900 placeholder-gray-500 transition-all duration-300"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 text-sm font-medium mb-3">Asunto</label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-gray-900 placeholder-gray-500 transition-all duration-300"
                      placeholder="¿De qué se trata tu proyecto?"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-3">Mensaje</label>
                    <textarea 
                      id="message" 
                      rows="6" 
                      className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-gray-900 placeholder-gray-500 transition-all duration-300 resize-none"
                      placeholder="Cuéntame más sobre tu proyecto, necesidades y cómo puedo ayudarte..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="group w-full px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-2xl font-semibold tracking-wide transition-all duration-300 hover:shadow-xl hover:shadow-amber-200/50 transform hover:-translate-y-1 relative overflow-hidden"
                  >
                    <span className="relative z-10">Enviar mensaje</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                  </button>
                </form>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-gray-200 text-center">
              <a
                href="/joselyn_Ninahuaman_Calcina_cv.pdf"
                download
                className="group inline-flex items-center px-8 py-4 bg-gray-900 hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-500 text-white rounded-2xl font-semibold tracking-wide transition-all duration-300 transform hover:-translate-y-1"
              >
                <Download className="w-6 h-6 mr-3 group-hover:animate-bounce" />
                Descargar CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/10 to-orange-900/10"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="mb-8 lg:mb-0 text-center lg:text-left">
              <div className="font-bold text-2xl tracking-tight mb-2">
                <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Joselyn</span>
                <span className="text-white ml-1">Ninahuaman</span>
              </div>
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Todos los derechos reservados.
              </p>
            </div>
            <div className="flex space-x-8">
              <button onClick={() => scrollToSection('inicio')} className="text-gray-400 hover:text-amber-300 transition-colors text-sm font-medium">Inicio</button>
              <button onClick={() => scrollToSection('proyectos')} className="text-gray-400 hover:text-amber-300 transition-colors text-sm font-medium">Proyectos</button>
              <button onClick={() => scrollToSection('contacto')} className="text-gray-400 hover:text-amber-300 transition-colors text-sm font-medium">Contacto</button>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-500 text-xs">
              Desarrollado con ❤️ usando React y Tailwind CSS • Diseño inspirado en la elegancia de Nespresso
            </p>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        
        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
        
        @keyframes fade-in {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes fade-in-up {
          from { 
            opacity: 0; 
            transform: translateY(40px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes fade-in-left {
          from { 
            opacity: 0; 
            transform: translateX(-40px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }
        
        @keyframes fade-in-right {
          from { 
            opacity: 0; 
            transform: translateX(40px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        .animate-fade-in-left {
          animation: fade-in-left 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        .animate-fade-in-right {
          animation: fade-in-right 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #f59e0b, #ea580c);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #d97706, #dc2626);
        }
      `}</style>
    </div>
  );
} 