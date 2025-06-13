import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, ExternalLink, Download, Code, User, Briefcase, GraduationCap, Globe, Star, ChevronDown, Menu, X } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState({});

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
      video: 'https://www.youtube.com/watch?v=QwZT7T-TXT0',
      code: '#'
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
      video: 'https://www.youtube.com/watch?v=2Vv-BfVoq4g',
      code: '#'
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
      code: '#'
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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  const SkillBadge = ({ skill, delay = 0 }) => (
    <span 
      className="px-4 py-2 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-full text-sm font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
      style={{ animationDelay: `${delay}ms` }}
    >
      {skill}
    </span>
  );

  const ProjectCard = ({ project, index }) => (
    <div className={`group bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-gray-700 hover:border-teal-400/60 transition-all duration-500 transform hover:-translate-y-1 ${isVisible.proyectos ? 'animate-fade-in-up' : 'opacity-0'}`}
         style={{ animationDelay: `${index * 200}ms` }}>
      <div className="flex justify-between items-start mb-4">
        <div>
          <h4 className="text-xl font-bold text-white mb-1">{project.title}</h4>
          {project.subtitle && (
            <p className="text-teal-300 font-medium text-sm mb-2">{project.subtitle}</p>
          )}
          <span className="px-2 py-1 bg-blue-600/30 text-blue-200 rounded-full text-xs">
            {project.type}
          </span>
        </div>
        <div className="flex space-x-2">
          {project.video && (
            <a href={project.video} target="_blank" rel="noopener noreferrer" 
               className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
               title="Ver demo en YouTube">
              <ExternalLink className="w-4 h-4 text-teal-400" />
            </a>
          )}
          {project.code && (
            <a href={project.code} target="_blank" rel="noopener noreferrer" 
               className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
               title="Ver código">
              <Code className="w-4 h-4 text-teal-400" />
            </a>
          )}
        </div>
      </div>
      <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>
      <div className="mb-4">
        <h5 className="text-white font-semibold text-sm mb-2">Características principales:</h5>
        <ul className="space-y-1">
          {project.features.map((feature, idx) => (
            <li key={idx} className="flex items-start text-gray-400 text-sm">
              <Star className="w-3 h-3 text-teal-400 mr-2 mt-1 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-wrap gap-2 mt-4">
        {project.technologies.map((tech, idx) => (
          <span key={idx} className="px-2 py-1 bg-gray-800/50 text-gray-300 rounded text-xs border border-gray-700">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-950 text-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 right-0 w-full h-full opacity-5">
          <div className="absolute top-20 right-20 w-64 h-64 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        </div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
              Joselyn Ninahuman
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              {['inicio', 'sobre-mi', 'proyectos', 'experiencia', 'formacion', 'contacto'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize text-sm font-medium transition-colors duration-300 hover:text-teal-300 ${
                    activeSection === section ? 'text-teal-400' : 'text-gray-400'
                  }`}
                >
                  {section.replace('-', ' ')}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-gray-900/95 backdrop-blur-lg rounded-lg mt-2 p-2 border border-gray-800">
              {['inicio', 'sobre-mi', 'proyectos', 'experiencia', 'formacion', 'contacto'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left py-2 px-3 capitalize text-sm rounded-md transition-colors ${
                    activeSection === section ? 'bg-gray-800 text-teal-400' : 'text-gray-400 hover:bg-gray-800'
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
      <section id="inicio" className="min-h-screen flex items-center justify-center relative pt-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden shadow-2xl border-4 border-white/10 relative group">
  <img 
    src="/joselyn.jpg"  
    alt="Foto de Joselyn Ninahuaman"
    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
  />
  <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(0,0,0,0.3)]"></div>
</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-teal-300 via-blue-300 to-teal-300 bg-clip-text text-transparent animate-fade-in">
              Joselyn Ninahuman
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              Desarrolladora Web Full Stack Junior
            </p>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              Apasionada por crear soluciones digitales innovadoras. Combino habilidades técnicas con experiencia en atención al cliente para desarrollar aplicaciones web funcionales y centradas en el usuario.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
            <a href="tel:610674560" className="flex items-center gap-2 text-gray-300 hover:text-teal-300 transition-colors px-4 py-2 bg-gray-800/50 rounded-lg">
              <Phone className="w-4 h-4 text-teal-400" />
              <span>610 674 560</span>
            </a>
            <a href="mailto:joselynelvira99@gmail.com" className="flex items-center gap-2 text-gray-300 hover:text-teal-300 transition-colors px-4 py-2 bg-gray-800/50 rounded-lg">
              <Mail className="w-4 h-4 text-teal-400" />
              <span>joselynelvira99@gmail.com</span>
            </a>
            <div className="flex items-center gap-2 text-gray-300 px-4 py-2 bg-gray-800/50 rounded-lg">
              <MapPin className="w-4 h-4 text-teal-400" />
              <span>Esplugues de Llobregat</span>
            </div>
          </div>

          <div className="mt-12 animate-bounce">
            <ChevronDown 
              className="w-6 h-6 mx-auto text-teal-400 cursor-pointer hover:text-teal-300 transition-colors" 
              onClick={() => scrollToSection('sobre-mi')}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-mi" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
              Sobre Mí
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Desarrolladora web con formación técnica y habilidades interpersonales que me permiten integrarme eficazmente en equipos de trabajo.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className={`space-y-6 ${isVisible['sobre-mi'] ? 'animate-fade-in-left' : 'opacity-0'}`}>
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                <h3 className="text-xl font-bold text-white mb-4">Mi Enfoque</h3>
                <p className="text-gray-400 leading-relaxed">
                  Como desarrolladora junior, me especializo en crear aplicaciones web completas utilizando tecnologías modernas. 
                  Mi enfoque combina la atención al detalle técnico con la comprensión de las necesidades del usuario final, 
                  gracias a mi experiencia previa en atención al cliente.
                </p>
              </div>
              
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                <h3 className="text-xl font-bold text-white mb-4">Competencias Clave</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'Trabajo en equipo', 
                    'Resolución de problemas', 
                    'Aprendizaje rápido',
                    'Comunicación efectiva',
                    'Pensamiento analítico',
                    'Adaptabilidad'
                  ].map((skill, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <Star className="w-4 h-4 text-teal-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-400 text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                <h3 className="text-xl font-bold text-white mb-4">Idiomas</h3>
                <div className="space-y-3">
                  {[
                    { language: 'Español', level: 'Nativo', proficiency: '100%' },
                    { language: 'Catalán', level: 'Avanzado', proficiency: '90%' },
                    { language: 'Inglés', level: 'Intermedio (B1)', proficiency: '65%' }
                  ].map((lang, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-400 text-sm">{lang.language}</span>
                        <span className="text-teal-400 text-xs font-medium">{lang.level}</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-1.5">
                        <div 
                          className="bg-gradient-to-r from-teal-500 to-blue-500 h-1.5 rounded-full" 
                          style={{ width: lang.proficiency }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={`${isVisible['sobre-mi'] ? 'animate-fade-in-right' : 'opacity-0'}`}>
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                <h3 className="text-xl font-bold text-white mb-6">Habilidades Técnicas</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-md font-semibold text-teal-300 mb-3 flex items-center">
                      <Code className="w-4 h-4 mr-2" />
                      Lenguajes de Programación
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.languages.map((skill, idx) => (
                        <SkillBadge key={idx} skill={skill} delay={idx * 100} />
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-md font-semibold text-teal-300 mb-3 flex items-center">
                      <Globe className="w-4 h-4 mr-2" />
                      Frameworks y Librerías
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.frameworks.map((skill, idx) => (
                        <SkillBadge key={idx} skill={skill} delay={idx * 100} />
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-md font-semibold text-teal-300 mb-3 flex items-center">
                      <Briefcase className="w-4 h-4 mr-2" />
                      Herramientas y Tecnologías
                    </h4>
                    <div className="flex flex-wrap gap-2">
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
      <section id="proyectos" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
              Mis Proyectos
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Algunos de mis trabajos más recientes, desde proyectos académicos hasta desarrollos personales.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">¿Quieres ver más de mi trabajo?</p>
            <a 
              href="https://github.com/tu-usuario" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-white font-medium"
            >
              <Github className="w-5 h-5 mr-2" />
              Visita mi GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experiencia" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
              Experiencia Profesional
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Mi trayectoria profesional, combinando desarrollo tecnológico y experiencia en atención al cliente.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="relative">
            {/* Timeline */}
            <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-teal-500/30 via-blue-500/50 to-teal-500/30 transform -translate-x-1/2"></div>
            
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div 
                  key={index} 
                  className={`relative pl-10 md:pl-0 ${index % 2 === 0 ? 'md:pr-10 md:text-right' : 'md:pl-10'} ${isVisible.experiencia ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="absolute left-0 md:left-1/2 w-3 h-3 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 transform -translate-x-1/2 mt-1.5"></div>
                  
                  <div className={`bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 ${index % 2 === 0 ? 'md:mr-6' : 'md:ml-6'}`}>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div className={`${index % 2 === 0 ? 'md:order-2 md:text-right' : ''}`}>
                        <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                        <p className="text-teal-300 font-medium">{exp.company}</p>
                      </div>
                      <span className={`px-3 py-1 bg-blue-600/30 text-blue-200 rounded-full text-xs font-medium mt-2 md:mt-0 ${index % 2 === 0 ? 'md:order-1 md:mr-4' : 'md:ml-4'}`}>
                        {exp.period}
                      </span>
                    </div>
                    
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start text-gray-400 text-sm">
                          {index % 2 === 0 && <Star className="w-3 h-3 text-teal-400 mr-2 mt-1 flex-shrink-0" />}
                          {resp}
                          {index % 2 !== 0 && <Star className="w-3 h-3 text-teal-400 ml-2 mt-1 flex-shrink-0" />}
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
      <section id="formacion" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
              Formación Académica
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Mi trayectoria educativa y certificaciones relevantes.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <div 
                key={index} 
                className={`bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-teal-400/30 transition-colors ${isVisible.formacion ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start mb-4">
                  <div className="p-2 bg-blue-600/20 rounded-lg mr-4">
                    <GraduationCap className="w-5 h-5 text-teal-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{edu.title}</h3>
                    <p className="text-teal-300 text-sm">{edu.institution}</p>
                  </div>
                </div>
                <span className="inline-block px-2 py-1 bg-gray-800/50 text-gray-300 rounded text-xs font-medium mb-4">
                  {edu.period}
                </span>
                {edu.highlights && (
                  <ul className="space-y-2 mt-4">
                    {edu.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start text-gray-400 text-sm">
                        <Star className="w-3 h-3 text-teal-400 mr-2 mt-1 flex-shrink-0" />
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
      <section id="contacto" className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
              Contacto
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              ¿Interesado en trabajar juntos o tienes alguna pregunta? No dudes en contactarme.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto rounded-full mt-6"></div>
          </div>

          <div className={`bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 ${isVisible.contacto ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-6">Información de Contacto</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-blue-600/20 rounded-lg">
                      <Mail className="w-5 h-5 text-teal-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <a href="mailto:joselynelvira99@gmail.com" className="text-white font-medium hover:text-teal-300 transition-colors">
                        joselynelvira99@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-blue-600/20 rounded-lg">
                      <Phone className="w-5 h-5 text-teal-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Teléfono</p>
                      <a href="tel:610674560" className="text-white font-medium hover:text-teal-300 transition-colors">
                        +34 610 674 560
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-blue-600/20 rounded-lg">
                      <MapPin className="w-5 h-5 text-teal-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Ubicación</p>
                      <p className="text-white font-medium">Esplugues de Llobregat, Barcelona</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-bold text-white mb-4">Redes y Perfiles</h4>
                  <div className="flex space-x-4">
                    <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                      <Github className="w-5 h-5 text-white" />
                    </a>
                    <a href="https://linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                      <Globe className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-6">Envíame un Mensaje</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-400 text-sm mb-1">Nombre</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-400 text-sm mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-400 text-sm mb-1">Mensaje</label>
                    <textarea 
                      id="message" 
                      rows="4" 
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white"
                      placeholder="Tu mensaje..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full px-6 py-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
                  >
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <a
              href="/joselyn_Ninahuaman_Calcina_cv.pdf"
              download
              className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-white font-medium"
            >
              <Download className="w-5 h-5 mr-2" />
              Descargar CV
            </a>
          </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800 bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Joselyn Ninahuman. Todos los derechos reservados.
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-teal-300 transition-colors text-sm">Inicio</a>
              <a href="#proyectos" className="text-gray-400 hover:text-teal-300 transition-colors text-sm">Proyectos</a>
              <a href="#contacto" className="text-gray-400 hover:text-teal-300 transition-colors text-sm">Contacto</a>
            </div>
          </div>
          <div className="mt-4 text-center md:text-left">
            <p className="text-gray-500 text-xs">
              Desarrollado con React, Next.js y Tailwind CSS. Desplegado en Vercel.
            </p>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-left {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes fade-in-right {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out forwards;
        }
        
        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out forwards;
        }
        
        .animate-blob {
          animation: blob 7s infinite ease-in-out;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}