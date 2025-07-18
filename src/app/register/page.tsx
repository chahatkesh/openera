"use client";
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface FormData {
  teamLeaderEmail: string;
  teamLeaderName: string;
  teamName: string;
  demoUrl: string;
  githubUrl: string;
  driveLink: string;
}

const RegisterPage: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    teamLeaderEmail: '',
    teamLeaderName: '',
    teamName: '',
    demoUrl: '',
    githubUrl: '',
    driveLink: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // TODO: Replace with actual API call
      console.log('Submitting form data:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          teamLeaderEmail: '',
          teamLeaderName: '',
          teamName: '',
          demoUrl: '',
          githubUrl: '',
          driveLink: ''
        });
        setSubmitStatus('idle');
      }, 3000);
      
    } catch (error) {
      console.error('Submission failed:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.teamLeaderEmail && formData.teamLeaderName && 
                     formData.teamName && formData.demoUrl && formData.githubUrl;

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Complete Financial Background Implementation */}
      <div className="fixed inset-0 overflow-hidden">
        {/* Neural Network Layer - Base complexity */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern id="neural-network" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="1" fill="#FFD700" opacity="0.3">
                  <animate attributeName="r" values="0.5;2;0.5" dur="4s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.1;0.4;0.1" dur="4s" repeatCount="indefinite" />
                </circle>
                <circle cx="150" cy="50" r="1.5" fill="#FFD700" opacity="0.25">
                  <animate attributeName="r" values="1;2.5;1" dur="5s" repeatCount="indefinite" begin="1s" />
                  <animate attributeName="opacity" values="0.15;0.35;0.15" dur="5s" repeatCount="indefinite" begin="1s" />
                </circle>
                <circle cx="50" cy="150" r="1.2" fill="#FFD700" opacity="0.35">
                  <animate attributeName="r" values="0.8;2.2;0.8" dur="3.5s" repeatCount="indefinite" begin="2s" />
                  <animate attributeName="opacity" values="0.2;0.45;0.2" dur="3.5s" repeatCount="indefinite" begin="2s" />
                </circle>
                <circle cx="150" cy="150" r="0.8" fill="#FFD700" opacity="0.4">
                  <animate attributeName="r" values="0.5;1.8;0.5" dur="4.5s" repeatCount="indefinite" begin="0.5s" />
                  <animate attributeName="opacity" values="0.25;0.5;0.25" dur="4.5s" repeatCount="indefinite" begin="0.5s" />
                </circle>
                <path d="M50,50 L150,50 L150,150 L50,150 Z" fill="none" stroke="#FFD700" strokeWidth="0.2" opacity="0.15">
                  <animate attributeName="stroke-dasharray" values="0,400;200,200;400,0;0,400" dur="8s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.05;0.25;0.05" dur="8s" repeatCount="indefinite" />
                </path>
                <path d="M50,50 L150,150" fill="none" stroke="#FFD700" strokeWidth="0.15" opacity="0.2">
                  <animate attributeName="stroke-dasharray" values="0,200;100,100;200,0;0,200" dur="6s" repeatCount="indefinite" begin="1s" />
                  <animate attributeName="opacity" values="0.1;0.35;0.1" dur="3.5s" repeatCount="indefinite" begin="0.5s" />
                </path>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#neural-network)" />
          </svg>
        </div>
        
        {/* Data Flow Layer - Representing financial data streams */}
        <div 
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(255, 215, 0, 0.15) 1px, transparent 2px),
              radial-gradient(circle at 75% 75%, rgba(255, 215, 0, 0.1) 1px, transparent 2px),
              radial-gradient(circle at 50% 50%, rgba(255, 215, 0, 0.08) 0.5px, transparent 1px)
            `,
            backgroundSize: '150px 150px, 200px 200px, 80px 80px',
            animation: 'dataFlow 12s linear infinite'
          }}
        />
        
        {/* Depth Layer - Subtle noise texture for sophistication */}
        <div 
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.15) 1px, transparent 0),
              radial-gradient(circle at 1px 1px, rgba(255, 215, 0, 0.1) 1px, transparent 0)
            `,
            backgroundSize: '50px 50px, 100px 100px',
            animation: 'breathe 6s ease-in-out infinite alternate'
          }}
        />
        
        {/* Scanning Line Effect - Tech blueprint feel */}
        <div 
          className="absolute inset-0 opacity-[0.15]"
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
        
        {/* Financial Data Nodes - Representing market data points */}
        <div className="absolute inset-0 opacity-[0.10]">
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern id="financial-nodes" x="0" y="0" width="300" height="300" patternUnits="userSpaceOnUse">
                {/* Market data points */}
                <g>
                  <circle cx="75" cy="75" r="1.5" fill="#FFD700" opacity="0.4">
                    <animate attributeName="r" values="1;2.5;1" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.2;0.6;0.2" dur="3s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="225" cy="75" r="1" fill="#FFD700" opacity="0.3">
                    <animate attributeName="r" values="0.5;2;0.5" dur="4s" repeatCount="indefinite" begin="1s" />
                    <animate attributeName="opacity" values="0.1;0.5;0.1" dur="4s" repeatCount="indefinite" begin="1s" />
                  </circle>
                  <circle cx="150" cy="225" r="2" fill="#FFD700" opacity="0.5">
                    <animate attributeName="r" values="1;3;1" dur="5s" repeatCount="indefinite" begin="2s" />
                    <animate attributeName="opacity" values="0.2;0.7;0.2" dur="5s" repeatCount="indefinite" begin="2s" />
                  </circle>
                  <circle cx="75" cy="225" r="1.2" fill="#FFD700" opacity="0.35">
                    <animate attributeName="r" values="0.8;2.2;0.8" dur="3.5s" repeatCount="indefinite" begin="0.5s" />
                    <animate attributeName="opacity" values="0.15;0.55;0.15" dur="3.5s" repeatCount="indefinite" begin="0.5s" />
                  </circle>
                  <circle cx="225" cy="225" r="1.8" fill="#FFD700" opacity="0.45">
                    <animate attributeName="r" values="1.2;2.8;1.2" dur="4.5s" repeatCount="indefinite" begin="1.5s" />
                    <animate attributeName="opacity" values="0.2;0.65;0.2" dur="4.5s" repeatCount="indefinite" begin="1.5s" />
                  </circle>
                </g>
                
                {/* Data connection lines - representing financial relationships */}
                <g stroke="#FFD700" strokeWidth="0.3" fill="none">
                  <path d="M75,75 Q150,50 225,75" opacity="0.2">
                    <animate attributeName="stroke-dasharray" values="0,100;50,50;100,0;0,100" dur="6s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.1;0.3;0.1" dur="6s" repeatCount="indefinite" />
                  </path>
                  <path d="M225,75 Q200,150 225,225" opacity="0.15">
                    <animate attributeName="stroke-dasharray" values="0,80;40,40;80,0;0,80" dur="7s" repeatCount="indefinite" begin="1s" />
                    <animate attributeName="opacity" values="0.05;0.25;0.05" dur="7s" repeatCount="indefinite" begin="1s" />
                  </path>
                  <path d="M225,225 Q150,250 75,225" opacity="0.18">
                    <animate attributeName="stroke-dasharray" values="0,90;45,45;90,0;0,90" dur="5.5s" repeatCount="indefinite" begin="2s" />
                    <animate attributeName="opacity" values="0.08;0.28;0.08" dur="5.5s" repeatCount="indefinite" begin="2s" />
                  </path>
                  <path d="M75,225 Q50,150 75,75" opacity="0.16">
                    <animate attributeName="stroke-dasharray" values="0,85;42,43;85,0;0,85" dur="6.5s" repeatCount="indefinite" begin="0.5s" />
                    <animate attributeName="opacity" values="0.06;0.26;0.06" dur="6.5s" repeatCount="indefinite" begin="0.5s" />
                  </path>
                  <path d="M75,75 L150,225" opacity="0.12">
                    <animate attributeName="stroke-dasharray" values="0,70;35,35;70,0;0,70" dur="8s" repeatCount="indefinite" begin="1.5s" />
                    <animate attributeName="opacity" values="0.04;0.2;0.04" dur="8s" repeatCount="indefinite" begin="1.5s" />
                  </path>
                  <path d="M225,75 L75,225" opacity="0.14">
                    <animate attributeName="stroke-dasharray" values="0,75;37,38;75,0;0,75" dur="7.5s" repeatCount="indefinite" begin="2.5s" />
                    <animate attributeName="opacity" values="0.05;0.22;0.05" dur="7.5s" repeatCount="indefinite" begin="2.5s" />
                  </path>
                </g>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#financial-nodes)" />
          </svg>
        </div>
        
        {/* Circuit Board Traces - AI processing pathways */}
        <div 
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
              linear-gradient(45deg, transparent 48%, rgba(255, 215, 0, 0.1) 49%, rgba(255, 215, 0, 0.1) 51%, transparent 52%),
              linear-gradient(-45deg, transparent 48%, rgba(255, 215, 0, 0.08) 49%, rgba(255, 215, 0, 0.08) 51%, transparent 52%),
              linear-gradient(0deg, transparent 49%, rgba(255, 215, 0, 0.06) 50%, transparent 51%)
            `,
            backgroundSize: '400px 400px, 350px 350px, 250px 250px',
            animation: 'circuitFlow 25s linear infinite, circuitPulse 8s ease-in-out infinite alternate'
          }}
        />
        
        {/* Floating Financial Particles */}
        <div className="financial-particles"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 p-8">
        <motion.button
          onClick={() => router.push('/')}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          whileHover={{ x: -5 }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m12 19-7-7 7-7"/>
            <path d="M19 12H5"/>
          </svg>
          Back to Home
        </motion.button>
      </header>

      {/* Main Content */}
      <div className="relative z-10 max-w-2xl mx-auto px-8 pb-16">
        {/* Page Title */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">
            Project
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 ml-3">
              Submission
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-md mx-auto">
            Submit your innovative AI × Finance solution for OpenERA 2025
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Team Leader Details */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-yellow-400 mb-4">Team Leader Details</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Team Leader Name *
                </label>
                <input
                  type="text"
                  name="teamLeaderName"
                  value={formData.teamLeaderName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400 transition-colors"
                  placeholder="Enter team leader name"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Team Leader Email *
                </label>
                <input
                  type="email"
                  name="teamLeaderEmail"
                  value={formData.teamLeaderEmail}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400 transition-colors"
                  placeholder="Enter team leader email"
                  required
                />
              </div>
            </div>
          </div>

          {/* Team Details */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-yellow-400 mb-4">Team Details</h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Team Name *
              </label>
              <input
                type="text"
                name="teamName"
                value={formData.teamName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400 transition-colors"
                placeholder="Enter your team name"
                required
              />
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-yellow-400 mb-4">Project Submission</h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Demo URL *
              </label>
              <input
                type="url"
                name="demoUrl"
                value={formData.demoUrl}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400 transition-colors"
                placeholder="https://your-demo-url.com"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                GitHub Repository URL *
              </label>
              <input
                type="url"
                name="githubUrl"
                value={formData.githubUrl}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400 transition-colors"
                placeholder="https://github.com/username/repo"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Drive Link for PPT (Optional)
              </label>
              <input
                type="url"
                name="driveLink"
                value={formData.driveLink}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400 transition-colors"
                placeholder="https://drive.google.com/file/d/..."
              />
            </div>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={!isFormValid || isSubmitting}
            className={`w-full py-4 px-8 rounded-lg font-semibold text-lg transition-all duration-300 ${
              isFormValid && !isSubmitting
                ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-500 hover:to-orange-600 shadow-lg hover:shadow-xl'
                : 'bg-gray-700 text-gray-400 cursor-not-allowed'
            }`}
            whileHover={isFormValid && !isSubmitting ? { scale: 1.02 } : {}}
            whileTap={isFormValid && !isSubmitting ? { scale: 0.98 } : {}}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                Submitting...
              </div>
            ) : (
              'Submit Project'
            )}
          </motion.button>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-center"
            >
              <p className="text-green-400 font-medium">
                ✅ Project submitted successfully! We&apos;ll review your submission soon.
              </p>
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-center"
            >
              <p className="text-red-400 font-medium">
                ❌ Failed to submit project. Please try again.
              </p>
            </motion.div>
          )}
        </motion.form>

        {/* Guidelines */}
        <motion.div 
          className="mt-12 p-6 bg-gray-900/30 border border-gray-700 rounded-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold text-yellow-400 mb-4">Submission Guidelines</h3>
          <ul className="text-gray-300 space-y-2 text-sm">
            <li>• Ensure your demo URL is accessible and working</li>
            <li>• GitHub repository should be public or accessible to judges</li>
            <li>• Include a comprehensive README.md in your repository</li>
            <li>• PPT should summarize your solution, tech stack, and impact</li>
            <li>• All team members should be listed in the repository</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default RegisterPage;
