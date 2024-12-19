import { Link } from 'react-router-dom'
import { FiGithub, FiTwitter, FiLinkedin, FiFacebook } from 'react-icons/fi'

function Footer() {
  return (
    <footer className="bg-[#f6f8fa] border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
              Product
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/features" className="text-gray-600 hover:text-gray-900">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/security" className="text-gray-600 hover:text-gray-900">
                  Security
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-600 hover:text-gray-900">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/enterprise" className="text-gray-600 hover:text-gray-900">
                  Enterprise
                </Link>
              </li>
            </ul>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
              Platform
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/developer-api" className="text-gray-600 hover:text-gray-900">
                  Developer API
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-gray-600 hover:text-gray-900">
                  Partners
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-600 hover:text-gray-900">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
              Support
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/docs" className="text-gray-600 hover:text-gray-900">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/guides" className="text-gray-600 hover:text-gray-900">
                  Guides
                </Link>
              </li>
              <li>
                <Link to="/help" className="text-gray-600 hover:text-gray-900">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-gray-600 hover:text-gray-900">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-gray-900">
                  About
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-gray-900">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-600 hover:text-gray-900">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/press" className="text-gray-600 hover:text-gray-900">
                  Press
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="flex justify-between items-center">
            <p className="text-gray-500 text-base">
              {new Date().getFullYear()} ExpTracker, Inc. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <FiGithub className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <FiTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <FiLinkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <FiFacebook className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
