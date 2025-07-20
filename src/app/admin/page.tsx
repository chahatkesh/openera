"use client";
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { submissionApi, authApi, type Submission } from '@/lib/api';

const AdminPanel: React.FC = () => {
  const router = useRouter();
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null);
  const [filterStatus, setFilterStatus] = useState<'all' | 'pending' | 'under_review' | 'approved' | 'rejected'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminProfile, setAdminProfile] = useState<any>(null);
  const [error, setError] = useState<string>('');

  // Check authentication on mount
  useEffect(() => {
    const checkAuth = async () => {
      if (!authApi.isAuthenticated()) {
        router.push('/admin/login');
        return;
      }

      try {
        // Verify token by getting profile
        const profileResponse = await authApi.getProfile();
        if (profileResponse.success) {
          setIsAuthenticated(true);
          setAdminProfile(profileResponse.data);
          await loadSubmissions();
        } else {
          // Token invalid, redirect to login
          router.push('/admin/login');
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        router.push('/admin/login');
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  // Load submissions from backend
  const loadSubmissions = async () => {
    try {
      setLoading(true);
      const response = await submissionApi.getAll();
      
      if (response.success && response.data) {
        setSubmissions(response.data);
      } else {
        setError('Failed to load submissions');
      }
    } catch (error) {
      console.error('Failed to load submissions:', error);
      setError('Failed to load submissions');
    } finally {
      setLoading(false);
    }
  };

  // Handle logout
  const handleLogout = async () => {
    try {
      await authApi.logout();
      router.push('/admin/login');
    } catch (error) {
      console.error('Logout failed:', error);
      // Still redirect even if logout API fails
      router.push('/admin/login');
    }
  };

  // Update submission status
  const updateSubmissionStatus = async (id: string, newStatus: Submission['status']) => {
    try {
      const response = await submissionApi.updateStatus(id, newStatus);
      
      if (response.success) {
        // Update local state
        setSubmissions(prev => 
          prev.map(sub => 
            sub.id === id ? { ...sub, status: newStatus } : sub
          )
        );
        
        // Update selected submission if it's the one being updated
        if (selectedSubmission && selectedSubmission.id === id) {
          setSelectedSubmission({ ...selectedSubmission, status: newStatus });
        }
      } else {
        setError('Failed to update submission status');
      }
    } catch (error) {
      console.error('Failed to update status:', error);
      setError('Failed to update submission status');
    }
  };

  // Delete submission
  const deleteSubmission = async (id: string) => {
    if (!confirm('Are you sure you want to delete this submission? This action cannot be undone.')) {
      return;
    }

    try {
      const response = await submissionApi.delete(id);
      
      if (response.success) {
        // Remove from local state
        setSubmissions(prev => prev.filter(sub => sub.id !== id));
        
        // Close modal if this submission was selected
        if (selectedSubmission && selectedSubmission.id === id) {
          setSelectedSubmission(null);
        }
      } else {
        setError('Failed to delete submission');
      }
    } catch (error) {
      console.error('Failed to delete submission:', error);
      setError('Failed to delete submission');
    }
  };

  // Filter submissions based on status and search term
  const filteredSubmissions = submissions.filter(submission => {
    const matchesFilter = filterStatus === 'all' || submission.status === filterStatus;
    const matchesSearch = submission.teamName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         submission.teamLeaderName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         submission.teamLeaderEmail.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleStatusChange = (submissionId: string, newStatus: Submission['status']) => {
    updateSubmissionStatus(submissionId, newStatus);
  };

  const getStatusColor = (status: Submission['status']) => {
    switch (status) {
      case 'pending': return 'text-yellow-400 bg-yellow-400/20';
      case 'under_review': return 'text-blue-400 bg-blue-400/20';
      case 'approved': return 'text-green-400 bg-green-400/20';
      case 'rejected': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getStatusCount = (status: Submission['status']) => {
    return submissions.filter(sub => sub.status === status).length;
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Loading State */}
      {loading && !isAuthenticated && (
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-400">Loading...</p>
          </div>
        </div>
      )}

      {/* Error Display */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-4 right-4 z-50 p-4 bg-red-500/20 border border-red-500/30 rounded-lg max-w-md"
        >
          <p className="text-red-400">{error}</p>
          <button 
            onClick={() => setError('')}
            className="mt-2 text-sm text-red-300 hover:text-red-100"
          >
            Dismiss
          </button>
        </motion.div>
      )}

      {/* Main Admin Panel - Only show if authenticated */}
      {isAuthenticated && (
        <>
          {/* Header */}
          <header className="bg-gray-900/50 border-b border-gray-800 p-6">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold text-yellow-400">OpenERA 2025 - Admin Panel</h1>
                <p className="text-gray-400 mt-2">Manage project submissions and team registrations</p>
              </div>
              
              <div className="flex items-center gap-4">
                {adminProfile && (
                  <div className="text-right">
                    <div className="text-sm text-white">{adminProfile.name}</div>
                    <div className="text-xs text-gray-400">{adminProfile.email}</div>
                  </div>
                )}
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-sm font-medium transition-colors"
                >
                  Logout
                </button>
              </div>
            </div>
          </header>

          <div className="max-w-7xl mx-auto p-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <motion.div 
                className="bg-gray-900/50 border border-gray-700 rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="text-2xl font-bold text-white">{submissions.length}</div>
                <div className="text-sm text-gray-400">Total Submissions</div>
              </motion.div>
              
              <motion.div 
                className="bg-gray-900/50 border border-gray-700 rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="text-2xl font-bold text-yellow-400">{getStatusCount('pending')}</div>
                <div className="text-sm text-gray-400">Pending Review</div>
              </motion.div>
              
              <motion.div 
                className="bg-gray-900/50 border border-gray-700 rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="text-2xl font-bold text-green-400">{getStatusCount('approved')}</div>
                <div className="text-sm text-gray-400">Approved</div>
              </motion.div>
              
              <motion.div 
                className="bg-gray-900/50 border border-gray-700 rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="text-2xl font-bold text-red-400">{getStatusCount('rejected')}</div>
                <div className="text-sm text-gray-400">Rejected</div>
              </motion.div>
            </div>

            {/* Filters and Search */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search by team name, leader name, or email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400 transition-colors"
                />
              </div>
              
              <div className="flex gap-2">
                {(['all', 'pending', 'under_review', 'approved', 'rejected'] as const).map(status => (
                  <button
                    key={status}
                    onClick={() => setFilterStatus(status)}
                    className={`px-4 py-2 rounded-lg transition-colors capitalize ${
                      filterStatus === status
                        ? 'bg-yellow-400 text-black'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>

            {/* Submissions Table */}
            <div className="bg-gray-900/50 border border-gray-700 rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-800/50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Team</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Leader</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Status</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Submitted</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    {loading ? (
                      <tr>
                        <td colSpan={5} className="px-6 py-12 text-center text-gray-400">
                          <div className="flex items-center justify-center gap-2">
                            <div className="w-5 h-5 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin" />
                            Loading submissions...
                          </div>
                        </td>
                      </tr>
                    ) : filteredSubmissions.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="px-6 py-12 text-center text-gray-400">
                          No submissions found matching your criteria.
                        </td>
                      </tr>
                    ) : (
                      filteredSubmissions.map((submission) => (
                        <tr key={submission.id} className="hover:bg-gray-800/30 transition-colors">
                          <td className="px-6 py-4">
                            <div className="font-medium text-white">{submission.teamName}</div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-white">{submission.teamLeaderName}</div>
                            <div className="text-gray-400 text-sm">{submission.teamLeaderEmail}</div>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(submission.status)}`}>
                              {submission.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-gray-400 text-sm">
                            {new Date(submission.submittedAt).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4">
                            <button
                              onClick={() => setSelectedSubmission(submission)}
                              className="text-yellow-400 hover:text-yellow-300 transition-colors"
                            >
                              View Details
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Submission Details Modal */}
      {selectedSubmission && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <motion.div 
            className="bg-gray-900 border border-gray-700 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-yellow-400">Submission Details</h2>
                <button
                  onClick={() => setSelectedSubmission(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12"/>
                  </svg>
                </button>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Team Name</label>
                    <div className="text-white">{selectedSubmission.teamName}</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Team Leader</label>
                    <div className="text-white">{selectedSubmission.teamLeaderName}</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                    <div className="text-white">{selectedSubmission.teamLeaderEmail}</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Status</label>
                    <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedSubmission.status)}`}>
                      {selectedSubmission.status}
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Demo URL</label>
                  <a 
                    href={selectedSubmission.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors break-all"
                  >
                    {selectedSubmission.demoUrl}
                  </a>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">GitHub Repository</label>
                  <a 
                    href={selectedSubmission.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors break-all"
                  >
                    {selectedSubmission.githubUrl}
                  </a>
                </div>

                {selectedSubmission.driveLink && (
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Presentation (Drive Link)</label>
                    <a 
                      href={selectedSubmission.driveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors break-all"
                    >
                      {selectedSubmission.driveLink}
                    </a>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Submitted At</label>
                  <div className="text-white">{new Date(selectedSubmission.submittedAt).toLocaleString()}</div>
                </div>

                {/* Status Update */}
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Update Status</label>
                  <div className="flex gap-2">
                    {(['pending', 'under_review', 'approved', 'rejected'] as const).map(status => (
                      <button
                        key={status}
                        onClick={() => handleStatusChange(selectedSubmission.id, status)}
                        className={`px-3 py-1 rounded text-sm transition-colors capitalize ${
                          selectedSubmission.status === status
                            ? getStatusColor(status)
                            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        }`}
                      >
                        {status}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;