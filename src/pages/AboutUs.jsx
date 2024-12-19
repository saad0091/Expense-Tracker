import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function AboutUs({ user }) {
  const teamMembers = [
    {
      name: "John Doe",
      role: "Founder & CEO",
      image: "/placeholder.svg?height=300&width=300",
      description: "Visionary leader with 15+ years in fintech"
    },
    {
      name: "Jane Smith",
      role: "CTO",
      image: "/placeholder.svg?height=300&width=300",
      description: "Tech guru passionate about user-centric design"
    },
    {
      name: "Mike Johnson",
      role: "Head of Product",
      image: "/placeholder.svg?height=300&width=300",
      description: "Product strategist focused on delivering value"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar user={user} />
      
      {/* Hero Section */}
      <section className="pt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                {' '}
                ExpTracker
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We're on a mission to revolutionize personal finance management,
              making it accessible, intuitive, and empowering for everyone.
            </p>
          </motion.div>

          {/* Animated Background */}
          <div className="relative mt-16">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl"
            />
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Story
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Founded in 2020, ExpTracker was born from a simple idea: make expense tracking
              not just easy, but enjoyable. We've grown from a small startup to a trusted
              financial companion for thousands of users worldwide.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { year: "2020", event: "ExpTracker Founded" },
              { year: "2021", event: "Launched Mobile App" },
              { year: "2022", event: "Reached 100k Users" },
              { year: "2023", event: "Introduced AI Insights" },
              { year: "2024", event: "Global Expansion" },
              { year: "2025", event: "The Future Awaits!" },
            ].map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-md overflow-hidden"
              >
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                    {milestone.year}
                  </h3>
                </motion.div>
                <motion.p 
                  className="text-gray-600"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  {milestone.event}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              The passionate individuals behind ExpTracker's success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.3)",
                  transition: { duration: 0.2 }
                }}
                className="bg-white p-6 rounded-lg shadow-md transition-all duration-300"
              >
                <motion.div
                  className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="64" cy="64" r="64" fill="url(#gradient)" />
                    <defs>
                      <radialGradient id="gradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(64 64) rotate(90) scale(64)">
                        <stop stopColor="#4F46E5" />
                        <stop offset="1" stopColor="#7DD3FC" />
                      </radialGradient>
                    </defs>
                  </svg>
                </motion.div>
                <motion.h3 
                  className="text-xl font-bold text-gray-900 mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {member.name}
                </motion.h3>
                <motion.p 
                  className="text-blue-600 mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {member.role}
                </motion.p>
                <motion.p 
                  className="text-gray-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {member.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do at ExpTracker
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "User-Centric",
                description: "We put our users first in every decision we make",
              },
              {
                icon: "🔒",
                title: "Security",
                description: "Your financial data's safety is our top priority",
              },
              {
                icon: "💡",
                title: "Innovation",
                description: "We're always pushing the boundaries of what's possible",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <motion.div 
                  className="text-4xl mb-4"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.1 + index * 0.1
                  }}
                >
                  {value.icon}
                </motion.div>
                <motion.h3 
                  className="text-xl font-bold text-gray-900 mb-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  {value.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-600"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {value.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-black to-gray-800 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center relative z-10"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join Us in Revolutionizing Personal Finance
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Be part of our journey to make financial management accessible to everyone.
            </p>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link to="/signup" className="inline-block">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255,255,255,0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-black px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-200 transition-all duration-300"
                >
                  Start Your Financial Journey
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Animated elements */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="absolute top-10 left-10 w-20 h-20 bg-blue-500 rounded-full"
              animate={{
                y: [0, 20, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-10 right-10 w-16 h-16 bg-green-500 rounded-full"
              animate={{
                y: [0, -15, 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute top-1/2 left-1/4 w-12 h-12 bg-yellow-500 rounded-full"
              animate={{
                x: [0, 30, 0],
                opacity: [0.2, 0.7, 0.2],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AboutUs

