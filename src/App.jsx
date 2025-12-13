import { useState } from 'react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Akash Sharma</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#about" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200">
                  About
                </a>
                <a href="#projects" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200">
                  Projects
                </a>
                <a href="#skills" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200">
                  Skills
                </a>
                <a href="#experience" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200">
                  Experience
                </a>
                <a href="#contact" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200">
                  Contact
                </a>
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-200"
              >
                <span className="sr-only">Open main menu</span>
                <svg className={`block h-6 w-6 transition-transform duration-200 ${isMenuOpen ? 'rotate-45' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>
        </nav>
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <a href="#about" className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium transition-colors duration-200">About</a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium transition-colors duration-200">Projects</a>
              <a href="#skills" className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium transition-colors duration-200">Skills</a>
              <a href="#experience" className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium transition-colors duration-200">Experience</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium transition-colors duration-200">Contact</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full mb-8">
              <span className="text-blue-600 text-sm font-medium">Product Manager & Data Enthusiast</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Building Data-Driven Products &
              <br />
              <span className="text-blue-600">Scalable Operations</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Assistant Product Manager with a focus on EdTech, Automation, and Analytics.
              I bridge the gap between user needs and engineering execution to deliver high-impact solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                View My Work
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors duration-200">
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Passionate about technology and data-driven solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6 text-gray-600">
                <p className="text-lg leading-relaxed">
                  I am an Assistant Product Manager based in Gurugram, passionate about solving complex problems through technology and data. Currently driving strategy and operational excellence at Masters' Union, I specialize in reducing friction in user journeys and optimizing internal workflows.
                </p>
                <p className="text-lg leading-relaxed">
                  With a PGDM from the Management Development Institute and a background in Mathematics, I combine analytical rigor with creative product thinking. My work has been recognized with 2 Director's Awards for leading high-impact innovations.
                </p>
                <p className="text-lg leading-relaxed">
                  When I'm not managing product lifecycles, I am building AI-powered tools to analyze financial portfolios.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-1">2+</h4>
                <p className="text-gray-600 text-sm">Awards</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-1">3+</h4>
                <p className="text-gray-600 text-sm">Years Exp</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Case studies of high-impact product initiatives</p>
          </div>
          <div className="space-y-16">
            {/* Project 1 */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Revolutionizing the EdTech LMS Experience</h4>
                    <p className="text-blue-600 font-medium text-sm">Assistant Product Manager | Operational Efficiency & Engagement</p>
                  </div>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">High Impact</span>
                </div>

                <div className="mb-6">
                  <h5 className="font-semibold text-gray-900 mb-2">The Challenge</h5>
                  <p className="text-gray-600 text-sm">The learning management system faced critical issues with academic dishonesty, manual grading bottlenecks, and low student engagement.</p>
                </div>

                <div className="mb-6">
                  <h5 className="font-semibold text-gray-900 mb-2">The Solution</h5>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• <strong>AI-Powered Grading:</strong> Automated 80% of assessments, cutting grading time by 60%</li>
                    <li>• <strong>Proctored Exams:</strong> Reduced academic dishonesty incidents by 70%</li>
                    <li>• <strong>Gamification:</strong> Boosted student engagement by 45%</li>
                    <li>• <strong>Smart Attendance:</strong> QR system saving faculty 2+ hours weekly</li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">AI/ML</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium">EdTech</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">Automation</span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-green-400 via-green-500 to-green-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-6 left-6">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">Data Analytics</span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div>
                    <h4 className="text-3xl font-bold mb-2 text-gray-900">Data-Driven Placement Optimization</h4>
                    <p className="text-blue-600 font-medium">Product Analyst/APM | Power BI, Figma, SQL</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">High Impact</span>
                  </div>
                </div>
                <div className="mb-6">
                  <h5 className="text-lg font-semibold mb-3 text-gray-800">The Challenge</h5>
                  <p className="text-gray-600 mb-4">Improving the accuracy of matching students to placement opportunities and ensuring fair assessment processes.</p>
                </div>
                <div className="mb-6">
                  <h5 className="text-lg font-semibold mb-3 text-gray-800">The Solution</h5>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">•</span>
                      <span><strong>Performance Rating Score (PRS):</strong> Engineered a data-driven model that improved placement match accuracy by 30%.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">•</span>
                      <span><strong>Usage Analytics:</strong> Developed dashboards to ensure data integrity across academic courses.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">•</span>
                      <span><strong>Portal Optimization:</strong> Used funnel analytics to enable faster candidate matching.</span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Power BI</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">SQL</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Figma</span>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-6 left-6">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">Automation</span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div>
                    <h4 className="text-3xl font-bold mb-2 text-gray-900">Enterprise Workflow Automation</h4>
                    <p className="text-blue-600 font-medium">Assistant Product Manager | N8N, Jira, ClickUp</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">High Impact</span>
                  </div>
                </div>
                <div className="mb-6">
                  <h5 className="text-lg font-semibold mb-3 text-gray-800">The Challenge</h5>
                  <p className="text-gray-600 mb-4">High manual effort in internal operations and slow grievance resolution times.</p>
                </div>
                <div className="mb-6">
                  <h5 className="text-lg font-semibold mb-3 text-gray-800">The Solution</h5>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">•</span>
                      <span><strong>N8N Workflows:</strong> Built automation workflows, cutting manual effort by 40%.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">•</span>
                      <span><strong>Grievance Platform:</strong> Revamped with centralized tracking, reducing resolution time from 120 hours to 48 hours.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">•</span>
                      <span><strong>Documentation:</strong> Authored over 100 PRDs and wireframes in Figma, reducing engineering rework by 80%.</span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">N8N</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Jira</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">ClickUp</span>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-indigo-400 via-indigo-500 to-indigo-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-6 left-6">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">AI Portfolio Analysis</span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div>
                    <h4 className="text-3xl font-bold mb-2 text-gray-900">AI Portfolio Analysis Tool</h4>
                    <p className="text-blue-600 font-medium">Developer | AI, Python/React</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Personal Project</span>
                  </div>
                </div>
                <div className="mb-6">
                  <p className="text-gray-600 mb-4">A custom tool designed to analyze financial portfolios using Artificial Intelligence.</p>
                  <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View on GitHub
                  </a>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">AI</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Python</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">React</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Toolkit Section */}
      <section id="skills" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">Skills & Toolkit</h3>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">Technical expertise and tools I use to deliver high-impact product solutions</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-xl p-8 rounded-3xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 group">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-6 text-white group-hover:text-cyan-400 transition-colors duration-300">Product Management</h4>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center group/item">
                  <span className="text-cyan-400 mr-3 group-hover/item:scale-110 transition-transform duration-200">▹</span>
                  <span>Roadmapping & Strategy</span>
                </li>
                <li className="flex items-center group/item">
                  <span className="text-cyan-400 mr-3 group-hover/item:scale-110 transition-transform duration-200">▹</span>
                  <span>Agile/Scrum Methodologies</span>
                </li>
                <li className="flex items-center group/item">
                  <span className="text-cyan-400 mr-3 group-hover/item:scale-110 transition-transform duration-200">▹</span>
                  <span>User Feedback Loops</span>
                </li>
                <li className="flex items-center group/item">
                  <span className="text-cyan-400 mr-3 group-hover/item:scale-110 transition-transform duration-200">▹</span>
                  <span>PRDs & Wireframing</span>
                </li>
              </ul>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-xl p-8 rounded-3xl border border-slate-700/50 hover:border-purple-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"></path>
                </svg>
              </div>
              <h4 className="text-2xl font-bold mb-6 text-white group-hover:text-purple-400 transition-colors duration-300">Design & Prototyping</h4>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center group/item">
                  <span className="text-purple-400 mr-3 group-hover/item:scale-110 transition-transform duration-200">▹</span>
                  <span>Figma</span>
                </li>
                <li className="flex items-center group/item">
                  <span className="text-purple-400 mr-3 group-hover/item:scale-110 transition-transform duration-200">▹</span>
                  <span>Miro</span>
                </li>
                <li className="flex items-center group/item">
                  <span className="text-purple-400 mr-3 group-hover/item:scale-110 transition-transform duration-200">▹</span>
                  <span>Storylane (Demos)</span>
                </li>
              </ul>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-xl p-8 rounded-3xl border border-slate-700/50 hover:border-emerald-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10 group">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-green-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h4 className="text-2xl font-bold mb-6 text-white group-hover:text-emerald-400 transition-colors duration-300">Data & Analytics</h4>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center group/item">
                  <span className="text-emerald-400 mr-3 group-hover/item:scale-110 transition-transform duration-200">▹</span>
                  <span>Power BI</span>
                </li>
                <li className="flex items-center group/item">
                  <span className="text-emerald-400 mr-3 group-hover/item:scale-110 transition-transform duration-200">▹</span>
                  <span>MS Excel</span>
                </li>
                <li className="flex items-center group/item">
                  <span className="text-emerald-400 mr-3 group-hover/item:scale-110 transition-transform duration-200">▹</span>
                  <span>Google Analytics</span>
                </li>
                <li className="flex items-center group/item">
                  <span className="text-emerald-400 mr-3 group-hover/item:scale-110 transition-transform duration-200">▹</span>
                  <span>Funnel Optimisation</span>
                </li>
              </ul>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-xl p-8 rounded-3xl border border-slate-700/50 hover:border-blue-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h4 className="text-2xl font-bold mb-6 text-white group-hover:text-blue-400 transition-colors duration-300">Tools & Platforms</h4>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center group/item">
                  <span className="text-blue-400 mr-3 group-hover/item:scale-110 transition-transform duration-200">▹</span>
                  <span>Jira & ClickUp</span>
                </li>
                <li className="flex items-center group/item">
                  <span className="text-blue-400 mr-3 group-hover/item:scale-110 transition-transform duration-200">▹</span>
                  <span>Notion & Loom</span>
                </li>
                <li className="flex items-center group/item">
                  <span className="text-blue-400 mr-3 group-hover/item:scale-110 transition-transform duration-200">▹</span>
                  <span>N8N Automation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Experience Timeline</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">My professional journey in product management</p>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 hover:shadow-md transition-shadow duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h4 className="text-2xl font-bold text-gray-900">Assistant Product Manager</h4>
                  <p className="text-blue-600 font-medium">Masters' Union</p>
                </div>
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mt-2 md:mt-0">Apr 2025 – Present</span>
              </div>
              <p className="text-gray-600 mb-4">Focus: Strategy, Vision, and Operational Excellence</p>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                <p className="text-green-800 font-medium">🏆 Recognized with 2 Director's Awards for leading high-impact innovations</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 hover:shadow-md transition-shadow duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h4 className="text-2xl font-bold text-gray-900">Product Analyst</h4>
                  <p className="text-blue-600 font-medium">Masters' Union</p>
                </div>
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mt-2 md:mt-0">Jun 2023 – May 2025</span>
              </div>
              <p className="text-gray-600">Operations focus with data-driven product improvements and analytics</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 hover:shadow-md transition-shadow duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h4 className="text-2xl font-bold text-gray-900">Operations Intern</h4>
                  <p className="text-blue-600 font-medium">Masters' Union</p>
                </div>
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mt-2 md:mt-0">Apr 2023 – Jun 2023</span>
              </div>
              <p className="text-gray-600 mb-4">Developed 3 IT solutions cutting operational costs by 15%</p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <p className="text-blue-800 font-medium">💡 Implemented innovative solutions for operational efficiency</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 hover:shadow-md transition-shadow duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h4 className="text-2xl font-bold text-gray-900">Research & Marketing Intern</h4>
                  <p className="text-blue-600 font-medium">Readily Mobility Solutions</p>
                </div>
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mt-2 md:mt-0">May 2022 – Jul 2022</span>
              </div>
              <p className="text-gray-600">Market research and strategic analysis for mobility solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">I'd love to hear from you. Let's work together on your next data-driven product initiative!</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6 bg-gray-50 p-8 rounded-lg border border-gray-200">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input type="text" placeholder="Your Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200" />
                </div>
                <div>
                  <input type="email" placeholder="Your Email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200" />
                </div>
              </div>
              <div>
                <textarea placeholder="Your Message" rows="6" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none"></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h4 className="text-2xl font-bold mb-4">Let's Build Something Great</h4>
            <p className="text-gray-400 max-w-2xl mx-auto">Ready to collaborate on your next data-driven product initiative</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <h5 className="text-lg font-semibold mb-4 text-blue-400">Contact Information</h5>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center justify-center space-x-3">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <span>sharmaakash4299@gmail.com</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <span>+91 8171846361</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span>Gurugram, India</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <h5 className="text-lg font-semibold mb-4 text-purple-400">Quick Links</h5>
              <div className="space-y-2">
                <a href="#about" className="block text-gray-300 hover:text-blue-400 transition-colors duration-200">About</a>
                <a href="#projects" className="block text-gray-300 hover:text-blue-400 transition-colors duration-200">Projects</a>
                <a href="#skills" className="block text-gray-300 hover:text-blue-400 transition-colors duration-200">Skills</a>
                <a href="#experience" className="block text-gray-300 hover:text-blue-400 transition-colors duration-200">Experience</a>
              </div>
            </div>
            <div className="text-center">
              <h5 className="text-lg font-semibold mb-4 text-green-400">Connect With Me</h5>
              <div className="flex justify-center space-x-6">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 hover:scale-110 transform">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200 hover:scale-110 transform">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="text-center text-gray-500 border-t border-gray-700 pt-8">
            <p>&copy; 2024 Akash Sharma. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
