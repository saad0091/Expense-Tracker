import { motion } from 'framer-motion';
import Navbar from './Navbar'; // Adjust the path if necessary
import Footer from '../components/Footer';

const PricingSection = () => {
  // Define animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="pricing-section w-full mt-32"> {/* Ensure this section has a white background */}
      <Navbar user={null} hideNavbar={false} /> {/* Add the Navbar here */}
      <motion.div 
        className="max-w-[1200px] mx-auto px-4 py-16"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        transition={{ duration: 0.5 }} // Adjust duration as needed
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Hobby Plan */}
          <motion.div 
            className="relative bg-white rounded-xl p-6"
            initial={{ scale: 0.95 }} 
            animate={{ scale: 1 }} 
            transition={{ duration: 0.3 }} // Adjust duration as needed
          >
            <div>
              <h2 className="text-xl font-semibold mb-4">Hobby</h2>
              <div className="flex items-baseline mb-2">
                <span className="text-[2.5rem] font-bold leading-none tracking-tight">$0</span>
              </div>
              <p className="text-[#666666] mb-8">Start your next side project</p>
              <ul className="space-y-[10px] mb-12">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Support for 35+ Frameworks</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Fast Globally (Edge Network)</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Automatic CI/CD (Git Integration)</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Functions (Serverless, Edge)</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Starter Database (KV, Postgres)</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Web Analytics</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Community Support</span>
                </li>
              </ul>
            </div>
            <button className="w-full h-10 px-4 text-sm font-medium text-black bg-white border border-[#eaeaea] rounded-md hover:border-black transition-colors duration-200 flex items-center justify-center">
              Start deploying
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>

          {/* Pro Plan */}
          <motion.div 
            className="relative bg-white rounded-xl p-6 border border-[#eaeaea]"
            initial={{ scale: 0.95 }} 
            animate={{ scale: 1 }} 
            transition={{ duration: 0.3 }} // Adjust duration as needed
          >
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <div className="bg-black text-white text-xs px-3 py-1 rounded-full font-medium">
                Most Popular
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Pro</h2>
              <div className="flex items-baseline mb-2">
                <span className="text-[2.5rem] font-bold leading-none tracking-tight">$20</span>
                <span className="ml-2 text-[#666666]">per user / month</span>
              </div>
              <p className="text-[#666666] mb-8">Everything in Hobby, plus higher limits and team features</p>
              <ul className="space-y-[10px] mb-12">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Unlimited Environments</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>More Functions (Serverless, Edge)</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>More Databases (KV, Postgres)</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>More Web Analytics Events</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>More Experimentation (Edge Config, Middleware)</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Preview/Comment/Edit Deployments</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Basic DDoS Mitigation</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Email Support</span>
                </li>
              </ul>
            </div>
            <button className="w-full h-10 px-4 text-sm font-medium text-white bg-black rounded-md hover:bg-gray-900 transition-colors duration-200 flex items-center justify-center">
              Start a free trial
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>

          {/* Enterprise Plan */}
          <motion.div 
            className="relative bg-white rounded-xl p-6 border border-[#eaeaea]"
            initial={{ scale: 0.95 }} 
            animate={{ scale: 1 }} 
            transition={{ duration: 0.3 }} // Adjust duration as needed
          >
            <div>
              <h2 className="text-xl font-semibold mb-4">Enterprise</h2>
              <div className="flex items-baseline mb-2">
                <span className="text-[2.5rem] font-bold leading-none tracking-tight">Custom</span>
              </div>
              <p className="text-[#666666] mb-8">For teams with more security, support, and performance needs.</p>
              <ul className="space-y-[10px] mb-12">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>99.99% SLA</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>IP Allow & Block Rules</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Isolated Builds & Deployments</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Additional Role & Access Controls</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>High-Performance Edge Network</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>SAML Single-Sign-On (SSO)</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Advanced DDoS Mitigation</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Secure VPC and VPN Connectivity</span>
                </li>
              </ul>
            </div>
            <div className="flex gap-3">
              <button className="flex-1 h-10 px-4 text-sm font-medium text-white bg-black rounded-md hover:bg-gray-900 transition-colors duration-200 flex items-center justify-center">
                Contact Sales
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button className="flex-1 h-10 px-4 text-sm font-medium text-black bg-white border border-[#eaeaea] rounded-md hover:border-black transition-colors duration-200">
                Request Trial
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default PricingSection;