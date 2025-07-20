"use client";
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { authApi } from '@/lib/api';

const AdminLoginPage: React.FC = () => {
  const router = useRouter();
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const [isLogging, setIsLogging] = useState(false);
  const [loginStatus, setLoginStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLogging(true);
    setErrorMessage('');
    
    try {
      const response = await authApi.login(credentials);
      
      if (response.success) {
        setLoginStatus('success');
        setTimeout(() => {
          router.push('/admin');
        }, 1000);
      } else {
        throw new Error(response.message || 'Login failed');
      }
      
    } catch (error) {
      console.error('Login failed:', error);
      setLoginStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Login failed. Please check your credentials.');
      setTimeout(() => setLoginStatus('idle'), 5000);
    } finally {
      setIsLogging(false);
    }
  };

  const isFormValid = credentials.email && credentials.password;

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      {/* Background effects - simplified version */}
      <div className="fixed inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(255, 215, 0, 0.15) 1px, transparent 2px),
              radial-gradient(circle at 75% 75%, rgba(255, 215, 0, 0.1) 1px, transparent 2px)
            `,
            backgroundSize: '150px 150px, 200px 200px',
            animation: 'dataFlow 12s linear infinite'
          }}
        />
        
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            background: `linear-gradient(
              90deg,
              transparent 0%,
              transparent 45%,
              rgba(255, 215, 0, 0.3) 50%,
              transparent 55%,
              transparent 100%
            )`,
            animation: 'scanLine 20s linear infinite'
          }}
        />
      </div>

      {/* Back to Home Button */}
      <motion.button
        onClick={() => router.push('/')}
        className="fixed top-8 left-8 flex items-center gap-2 text-gray-400 hover:text-white transition-colors z-20"
        whileHover={{ x: -5 }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="m12 19-7-7 7-7"/>
          <path d="M19 12H5"/>
        </svg>
        Back to Home
      </motion.button>

      {/* Login Form */}
      <motion.div
        className="relative z-10 w-full max-w-md"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <motion.h1 
              className="text-3xl font-bold mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Admin <span className="text-yellow-400">Login</span>
            </motion.h1>
            <motion.p 
              className="text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Access the OpenERA admin dashboard
            </motion.p>
          </div>

          {/* Login Form */}
          <motion.form 
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={credentials.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-gray-400"
                placeholder="Enter your admin email"
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Password *
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={credentials.password}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-gray-400"
                placeholder="Enter your password"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={!isFormValid || isLogging}
              className={`w-full py-3 px-6 rounded-lg font-semibold text-sm uppercase tracking-wide transition-all duration-300 ${
                isFormValid && !isLogging
                  ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-300 hover:to-yellow-500 transform hover:scale-105'
                  : 'bg-gray-700 text-gray-400 cursor-not-allowed'
              }`}
              whileHover={isFormValid && !isLogging ? { scale: 1.02 } : {}}
              whileTap={isFormValid && !isLogging ? { scale: 0.98 } : {}}
            >
              {isLogging ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                  Logging in...
                </div>
              ) : (
                'Login'
              )}
            </motion.button>

            {/* Status Messages */}
            {loginStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-center"
              >
                <p className="text-green-400 font-medium">
                  ✅ Login successful! Redirecting to dashboard...
                </p>
              </motion.div>
            )}

            {loginStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-center"
              >
                <p className="text-red-400 font-medium">
                  ❌ {errorMessage}
                </p>
              </motion.div>
            )}
          </motion.form>
        </div>

        {/* Security Notice */}
        <motion.div 
          className="mt-6 p-4 bg-gray-900/30 border border-gray-700 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-gray-400 text-xs text-center">
            🔒 This is a secure admin area. Only authorized personnel should access this page.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AdminLoginPage;
