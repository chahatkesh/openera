"use client";
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface Submission {
  id: string;
  teamLeaderEmail: string;
  teamLeaderName: string;
  teamName: string;
  demoUrl: string;
  githubUrl: string;
  driveLink: string;
  submittedAt: string;
  status: 'pending' | 'reviewed' | 'accepted' | 'rejected';
}

const AdminPanel: React.FC = () => {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null);
  const [filterStatus, setFilterStatus] = useState<'all' | 'pending' | 'reviewed' | 'accepted' | 'rejected'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data - replace with actual API call
  useEffect(() => {
    const mockSubmissions: Submission[] = [
      {
        id: '1',
        teamLeaderEmail: 'john@example.com',
        teamLeaderName: 'John Doe',
        teamName: 'AI Innovators',
        demoUrl: 'https://demo.aiinnovators.com',
        githubUrl: 'https://github.com/aiinnovators/fintech-ai',
        driveLink: 'https://drive.google.com/file/d/1234567890',
        submittedAt: '2025-01-15T10:30:00Z',
        status: 'pending'
      },
      {
        id: '2',
        teamLeaderEmail: 'sarah@example.com',
        teamLeaderName: 'Sarah Smith',
        teamName: 'FinTech Pioneers',
        demoUrl: 'https://demo.fintechpioneers.com',
        githubUrl: 'https://github.com/fintechpioneers/trading-bot',
        driveLink: '',
        submittedAt: '2025-01-14T15:45:00Z',
        status: 'reviewed'
      },
      {
        id: '3',
        teamLeaderEmail: 'mike@example.com',
        teamLeaderName: 'Mike Johnson',
        teamName: 'Blockchain Wizards',
        demoUrl: 'https://demo.blockchainwizards.com',
        githubUrl: 'https://github.com/blockchainwizards/defi-solution',
        driveLink: 'https://drive.google.com/file/d/0987654321',
        submittedAt: '2025-01-13T09:15:00Z',
        status: 'accepted'
      }
    ];

    setTimeout(() => {
      setSubmissions(mockSubmissions);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredSubmissions = submissions.filter(submission => {
    const matchesFilter = filterStatus === 'all' || submission.status === filterStatus;
    const matchesSearch = submission.teamName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         submission.teamLeaderName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         submission.teamLeaderEmail.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleStatusChange = (submissionId: string, newStatus: Submission['status']) => {
    setSubmissions(prev => 
      prev.map(sub => 
        sub.id === submissionId ? { ...sub, status: newStatus } : sub
      )
    );
    if (selectedSubmission && selectedSubmission.id === submissionId) {
      setSelectedSubmission(prev => prev ? { ...prev, status: newStatus } : null);
    }
  };

  const getStatusColor = (status: Submission['status']) => {
    switch (status) {
      case 'pending': return 'text-yellow-400 bg-yellow-400/20';
      case 'reviewed': return 'text-blue-400 bg-blue-400/20';
      case 'accepted': return 'text-green-400 bg-green-400/20';
      case 'rejected': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getStatusCount = (status: Submission['status']) => {
    return submissions.filter(sub => sub.status === status).length;
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-gray-900/50 border-b border-gray-800 p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-yellow-400">OpenERA 2025 - Admin Panel</h1>
          <p className="text-gray-400 mt-2">Manage project submissions and team registrations</p>
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
            <div className="text-2xl font-bold text-green-400">{getStatusCount('accepted')}</div>
            <div className="text-sm text-gray-400">Accepted</div>
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
            {(['all', 'pending', 'reviewed', 'accepted', 'rejected'] as const).map(status => (
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
                    {(['pending', 'reviewed', 'accepted', 'rejected'] as const).map(status => (
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
