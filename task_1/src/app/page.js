import Image from "next/image";

export default function Home() {
  // Portfolio data for Um E Habiba with updated information
  const portfolioData = {
    name: "Um E Habiba",
    title: "Data Scientist",
    description: "I transform raw data into meaningful insights using advanced analytics and machine learning!",
    contact: {
      email: "umehabiba914@gmail.com",
      phone: "+92 302 0454824",
      location: "Lahore, Pakistan",
      instagram: "https://www.instagram.com/habiba_9432/",
      linkedin: "https://www.linkedin.com/in/habiba-akbar",
      github: "https://github.com/VizAnalystHabiba"
    },
    skills: [
      { name: "Python", level: 95, category: "Programming" },
      { name: "Machine Learning", level: 90, category: "Data Science" },
      { name: "Deep Learning", level: 88, category: "Data Science" },
      { name: "Data Visualization", level: 94, category: "Data Science" },
      { name: "Statistical Analysis", level: 88, category: "Analytics" },
      { name: "SQL/MySQL", level: 92, category: "Database" },
      { name: "TensorFlow", level: 85, category: "ML Frameworks" },
      { name: "PyTorch", level: 82, category: "ML Frameworks" },
      { name: "Power BI", level: 87, category: "Visualization" },
      { name: "Excel", level: 90, category: "Tools" },
      { name: "Git/GitHub", level: 85, category: "Tools" },
      { name: "NLP", level: 85, category: "Data Science" }
    ],
    projects: [
      {
        id: 1,
        title: "Housing Price Prediction",
        description: "Built ML models to predict housing prices using features like area, location, and number of rooms. Implemented feature engineering and evaluated performance using RMSE and R² score.",
        technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn"],
        github: "https://github.com/VizAnalystHabiba",
        live: "https://www.kaggle.com/code/umehabibaakbarali/house-pricing-predicition",
        image: "/project1.jpg"
      },
      {
        id: 2,
        title: "Titanic Survival Analysis",
        description: "Used regression techniques to forecast traffic density based on temporal and spatial data. Enhanced accuracy with feature scaling and polynomial regression.",
        technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
        github: "https://github.com/VizAnalystHabiba/Titanic-Survival-Analysis",
        live: "https://github.com/VizAnalystHabiba/Titanic-Survival-Analysis",
        image: "/project2.jpg"
      },
      {
        id: 3,
        title: "Movie Dataset (EDA)",
        description: "Explored trends and patterns in a movie dataset using Pandas, Seaborn, and Matplotlib. Focused on insights like genre popularity, ratings, and revenue.",
        technologies: ["Python", "Pandas", "Matplotlib", "Seaborn"],
        github: "https://github.com/VizAnalystHabiba/Movie-Dataset-EDA-",
        live: "https://github.com/VizAnalystHabiba/Movie-Dataset-EDA-",
        image: "/project3.jpg"
      },
      {
        id: 4,
        title: "AI Restaurant Chatbot",
        description: "Developed an AI-powered chatbot that recommends restaurants based on user mood and preferences using NLP and generative AI models. Deployed using Flask.",
        technologies: ["Python", "Flask", "NLTK", "OpenAI API", "HTML/CSS"],
        github: "https://github.com/VizAnalystHabiba/AI-Restaurant-Chatbot",
        live: "https://github.com/VizAnalystHabiba/AI-Restaurant-Chatbot",
        image: "/project4.jpg"
      },
      {
        id: 5,
        title: "Mental Health Support Chatbot",
        description: "Built a rule-based conversational chatbot to offer emotional support, using intent recognition and structured dialogue flow.",
        technologies: ["Python", "NLTK", "JSON", "Rule-based Logic"],
        github: "https://github.com/VizAnalystHabiba/Mental-Health-Support-Chatbot",
        live: "https://github.com/VizAnalystHabiba/Mental-Health-Support-Chatbot",
        image: "/project5.jpg"
      },
      {
        id: 6,
        title: "WeatherBot (Flask-based)",
        description: "Created a real-time weather chatbot that fetches and delivers weather info using APIs based on user location.",
        technologies: ["Python", "Flask", "WeatherAPI", "HTML/CSS"],
        github: "https://github.com/VizAnalystHabiba/WeatherBot",
        live: "https://github.com/VizAnalystHabiba/WeatherBot",
        image: "/project6.jpg"
      },
      {
        id: 7,
        title: "AI Code Explainer",
        description: "Designed an AI-powered tool that generates human-readable explanations for code snippets by combining natural language processing and generative AI.",
        technologies: ["Python", "HuggingFace", "Flask", "HTML/CSS"],
        github: "https://github.com/VizAnalystHabiba/Ai-Code-Explainer",
        live: "https://github.com/VizAnalystHabiba/Ai-Code-Explainer",
        image: "/project7.jpg"
      },
      {
        id: 8,
        title: "Summarize Pro (AI Code Explainer)",
        description: "Built a web-based tool that takes source code as input and generates concise explanations using NLP. Reduced manual documentation effort by offering line-by-line explanations.",
        technologies: ["React.js", "Tailwind CSS", "Redux", "Rapid API"],
        github: "https://github.com/VizAnalystHabiba",
        live: "#",
        image: "/project8.jpg"
      },
      {
        id: 9,
        title: "Help-Bridge",
        description: "Enabled organizations to register and collect donations for charitable causes. Facilitated user donations, allowing individuals to contribute.",
        technologies: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MySQL"],
        github: "https://github.com/VizAnalystHabiba",
        live: "#",
        image: "/project9.jpg"
      }
    ],
    education: [
      {
        degree: "BSc in Computer Science",
        institution: "University of Engineering & Technology",
        year: "2021 - 2025",
        details: "Specialization in Data Science and Machine Learning"
      }
    ],
    experience: [
      {
        position: "Data Science Intern",
        company: "Rombix Technologies",
        duration: "2025",
        responsibilities: [
          "Worked on machine learning projects for data analysis",
          "Assisted in developing predictive models",
          "Participated in data preprocessing and feature engineering"
        ]
      }
    ],
    tools: [
      "VS Code", "Jupyter", "Git/GitHub", "Hadoop", "Power BI", "Excel", "MySQL",
      "Flask", "React.js", "Node.js", "Express.js", "Pandas", "Scikit-learn",
      "Matplotlib", "Seaborn", "NLTK", "OpenAI API", "TensorFlow", "PyTorch"
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 font-sans dark:from-gray-900 dark:to-gray-800">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-xl font-bold text-blue-700 dark:text-blue-400">UH</div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">Home</a>
            <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">About</a>
            <a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">Skills</a>
            <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">Projects</a>
            <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">Contact</a>
          </div>
          <div className="md:hidden">
            <button className="text-gray-700 dark:text-gray-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        {/* Hero Section */}
        <section id="home" className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="lg:w-1/2">
                <div className="mb-6">
                  <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm font-medium mb-4">
                    Data Scientist & AI Engineer
                  </span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                  Hi, I'm <span className="text-blue-600 dark:text-blue-400">{portfolioData.name}</span>
                </h1>
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
                  {portfolioData.title}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {portfolioData.description}
                </p>
                <p className="text-xl text-gray-800 dark:text-gray-200 font-medium mb-8 italic">
                  "Transforming data into decisions, insights into impact."
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="#projects" 
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all shadow-md"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                    View Projects
                  </a>
                  <a 
                    href="#contact" 
                    className="flex items-center justify-center gap-2 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Contact Me
                  </a>
                </div>
                
                {/* Quick Contact Info */}
                <div className="mt-8 flex flex-wrap gap-4">
                  <a 
                    href={`mailto:${portfolioData.contact.email}`}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                    {portfolioData.contact.email}
                  </a>
                  <a 
                    href={`tel:${portfolioData.contact.phone.replace(/\s+/g, '')}`}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6h-.3c-.3 0-.5.1-.7.3l-2.2 2.2c-2.8-1.5-5.2-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1.1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z"/>
                    </svg>
                    {portfolioData.contact.phone}
                  </a>
                </div>
              </div>
              <div className="lg:w-1/2 flex justify-center">
                <div className="relative w-72 h-72 md:w-96 md:h-96">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 blur-xl"></div>
                  {/* Profile Image Container - Add your image here */}
                  <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
                    {/* Placeholder for your image */}
                    <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <div className="text-center text-white p-8">
                        <div className="w-32 h-32 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                          <span className="text-4xl font-bold">UH</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Um E Habiba</h3>
                        <p className="text-blue-100">Data Scientist</p>
                        <div className="flex justify-center space-x-2 mt-4">
                          {["Python", "ML", "AI", "NLP"].map((tag) => (
                            <span key={tag} className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    {/* Add your image like this:
                    <Image
                      src="/your-profile-image.jpg"
                      alt="Um E Habiba"
                      fill
                      className="object-cover"
                      priority
                    />
                    */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4 bg-white dark:bg-gray-900">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">About Me</h2>
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">My Data Science Journey</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  Passionate Data Scientist with expertise in transforming complex datasets into actionable insights. 
                  I specialize in building machine learning models, data analysis, and creating AI-powered solutions.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  My expertise spans across predictive modeling, natural language processing, data visualization, 
                  and building interactive web applications. I believe in the power of data to drive innovation 
                  and create meaningful impact across industries.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Quick Facts</h3>
                <div className="space-y-4">
                  <div className="bg-blue-50 dark:bg-gray-800 p-4 rounded-lg">
                    <p className="font-medium text-gray-700 dark:text-gray-300">📍 Location</p>
                    <p className="text-gray-600 dark:text-gray-400">{portfolioData.contact.location}</p>
                  </div>
                  <div className="bg-blue-50 dark:bg-gray-800 p-4 rounded-lg">
                    <p className="font-medium text-gray-700 dark:text-gray-300">📧 Email</p>
                    <p className="text-gray-600 dark:text-gray-400">{portfolioData.contact.email}</p>
                  </div>
                  <div className="bg-blue-50 dark:bg-gray-800 p-4 rounded-lg">
                    <p className="font-medium text-gray-700 dark:text-gray-300">💼 Availability</p>
                    <p className="text-gray-600 dark:text-gray-400">Open to Opportunities</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience & Education */}
            <div className="grid md:grid-cols-2 gap-12 mt-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Experience</h3>
                <div className="space-y-6">
                  {portfolioData.experience.map((exp, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200">{exp.position}</h4>
                      <p className="text-blue-600 dark:text-blue-400">{exp.company} • {exp.duration}</p>
                      <ul className="mt-2 space-y-1">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="text-gray-600 dark:text-gray-400 text-sm flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Education</h3>
                <div className="space-y-6">
                  {portfolioData.education.map((edu, index) => (
                    <div key={index} className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200">{edu.degree}</h4>
                      <p className="text-purple-600 dark:text-purple-400">{edu.institution} • {edu.year}</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">{edu.details}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">Technical Skills</h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              Expertise across the complete data science pipeline
            </p>
            
            {/* Skills Categories */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {["Programming", "Data Science", "ML Frameworks", "Visualization", "Database", "Tools"].map((category) => {
                const categorySkills = portfolioData.skills.filter(skill => skill.category === category);
                if (categorySkills.length === 0) return null;
                
                return (
                  <div key={category} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                      <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                      {category}
                    </h3>
                    <div className="space-y-4">
                      {categorySkills.map((skill) => (
                        <div key={skill.name}>
                          <div className="flex justify-between mb-1">
                            <span className="text-gray-700 dark:text-gray-300 text-sm">{skill.name}</span>
                            <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">{skill.level}%</span>
                          </div>
                          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Tools & Technologies */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 p-8 rounded-2xl border border-blue-100 dark:border-gray-700">
              <h3 className="text-2xl font-semibold text-center text-gray-900 dark:text-white mb-6">Tools & Technologies</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {portfolioData.tools.map((tool) => (
                  <div key={tool} className="bg-white dark:bg-gray-800 p-3 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
                    <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">{tool}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 bg-white dark:bg-gray-900">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">Data Science Projects</h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              Real-world applications of machine learning, data analysis, and AI
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioData.projects.map((project) => (
                <div 
                  key={project.id}
                  className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group"
                >
                  <div className="h-40 bg-gradient-to-r from-blue-500 to-purple-600 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                      <h3 className="text-xl font-bold text-white text-center">{project.title}</h3>
                    </div>
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-bold">DS</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-medium"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        Code
                      </a>
                      <a 
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-blue-600 hover:to-purple-600 transition-all"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <a 
                href={portfolioData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors font-medium"
              >
                View more projects on GitHub
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">Let's Connect</h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              Interested in data science collaboration? Let's discuss how we can work together!
            </p>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Contact Info */}
              <div className="lg:col-span-1">
                <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 h-full">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Contact Information</h3>
                  
                  <div className="space-y-6">
                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-gray-700 dark:text-gray-300">Email</p>
                        <a 
                          href={`mailto:${portfolioData.contact.email}`}
                          className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                        >
                          {portfolioData.contact.email}
                        </a>
                      </div>
                    </div>
                    
                    {/* Phone */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-gray-700 dark:text-gray-300">Phone</p>
                        <a 
                          href={`tel:${portfolioData.contact.phone.replace(/\s+/g, '')}`}
                          className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                        >
                          {portfolioData.contact.phone}
                        </a>
                      </div>
                    </div>
                    
                    {/* Location */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-gray-700 dark:text-gray-300">Location</p>
                        <p className="text-gray-600 dark:text-gray-400">{portfolioData.contact.location}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Social Links */}
                  <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Connect with me</h4>
                    <div className="flex gap-4">
                      {/* Instagram */}
                      <a 
                        href={portfolioData.contact.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-shadow"
                        aria-label="Instagram"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                        </svg>
                      </a>
                      
                      {/* LinkedIn */}
                      <a 
                        href={portfolioData.contact.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-shadow"
                        aria-label="LinkedIn"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                      
                      {/* GitHub */}
                      <a 
                        href={portfolioData.contact.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-shadow"
                        aria-label="GitHub"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                      
                      {/* Email Button */}
                      <a 
                        href={`mailto:${portfolioData.contact.email}`}
                        className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-shadow"
                        aria-label="Email"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 h-full">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Send me a message</h3>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Name</label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Email</label>
                        <input 
                          type="email" 
                          className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="you@example.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Subject</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Project inquiry or collaboration"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Project Type</label>
                      <select className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option value="">Select project type</option>
                        <option value="ml">Machine Learning</option>
                        <option value="analysis">Data Analysis</option>
                        <option value="nlp">NLP Project</option>
                        <option value="chatbot">Chatbot Development</option>
                        <option value="consultation">Consultation</option>
                        <option value="job">Job Opportunity</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Message</label>
                      <textarea 
                        rows="5"
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Tell me about your data science needs or project..."
                        required
                      ></textarea>
                    </div>
                    
                    <button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all shadow-md text-lg"
                    >
                      Send Message
                    </button>
                  </form>
                  
                  <p className="text-center text-gray-500 dark:text-gray-400 text-sm mt-6">
                    I typically respond within 24 hours. You can also reach me directly at {portfolioData.contact.phone}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-xl font-bold text-white mb-2">Um E Habiba</p>
              <p>Data Scientist & AI Specialist</p>
            </div>
            <div className="flex space-x-6">
              <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
              <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
              <a href={portfolioData.contact.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Um E Habiba. All rights reserved.</p>
            <p className="mt-2 text-sm">
              📧 {portfolioData.contact.email} | 📱 {portfolioData.contact.phone}
            </p>
            <p className="mt-2 text-sm">Built with Next.js • Powered by Data Science</p>
          </div>
        </div>
      </footer>
    </div>
  );
}