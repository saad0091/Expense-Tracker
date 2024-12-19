import React, { useState } from 'react';
import { Eye } from 'lucide-react';
import { auth } from '../firebase';
import { 
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleError = (error) => {
    let errorMessage;
    switch (error.code) {
      case 'auth/user-not-found':
        errorMessage = 'No account found with this email. Please sign up.';
        break;
      case 'auth/wrong-password':
        errorMessage = 'Incorrect password. Please try again.';
        break;
      case 'auth/invalid-email':
        errorMessage = 'Please enter a valid email address.';
        break;
      case 'auth/too-many-requests':
        errorMessage = 'Too many failed attempts. Please try again later.';
        break;
      default:
        errorMessage = 'An error occurred. Please try again.';
    }
    setError(errorMessage);
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('User signed in:', userCredential.user);
      
      if (rememberMe) {
        // Implement persistence if needed
        localStorage.setItem('rememberMe', 'true');
      }
      
      navigate('/');
    } catch (error) {
      handleError(error);
    }
  };

  const handleGoogleSignIn = async () => {
    setError('');
    setLoading(true);
    
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log('User signed in:', result.user);
      navigate('/');
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center p-4 animate-fade-in">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-semibold text-center text-gray-900 mb-8">
          Login
        </h1>

        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded" role="alert">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="relative">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border-b-2 border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-vercel-highlight transition-colors duration-200"
                required
                aria-label="Email address"
              />
            </div>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border-b-2 border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-vercel-highlight transition-colors duration-200 pr-10"
                required
                aria-label="Password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors duration-200 border-none focus:outline-none appearance-none p-0 bg-transparent"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                <Eye className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 rounded border-gray-300 text-vercel-highlight focus:ring-vercel-highlight cursor-pointer transition-colors duration-200"
              />
              <span className="text-gray-600">Remember Me</span>
            </label>
            <Link to="/forgot-password" className="text-vercel-highlight hover:text-vercel-dark transition-colors duration-200">
              Forgot Password?
            </Link>
          </div>
          
          <button
            type="submit"
            className="w-full bg-vercel-dark text-white py-3 rounded-md shadow-sm hover:bg-vercel-gray transition-colors duration-200 text-base font-medium disabled:opacity-50"
            disabled={loading}
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <div className="mt-6 space-y-4">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={handleGoogleSignIn}
              className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-50 transition-colors duration-200"
              disabled={loading}
              aria-label="Sign in with Google"
            >
              <img src="/google icon.png" alt="" className="w-5 h-5 mr-2" />
              <span className="text-gray-900">Google</span>
            </button>
            <button
              className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-50 transition-colors duration-200"
              disabled={loading}
              aria-label="Sign in with GitHub"
            >
              <img src="/github.jpg" alt="" className="w-5 h-5 mr-2" />
              <span className="text-gray-900">GitHub</span>
            </button>
          </div>
        </div>
        
        <p className="text-center text-sm text-gray-600 mt-6">
          Don't have an account?{' '}
          <Link to="/signup" className="text-vercel-highlight hover:text-vercel-dark transition-colors duration-200">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;