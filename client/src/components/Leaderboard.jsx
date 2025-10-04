import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Award, TrendingUp } from 'react-feather';
import { getLeaderboard } from '../services/api';

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  const fetchLeaderboard = async () => {
    try {
      const response = await getLeaderboard();
      setLeaderboard(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching leaderboard:', error);
      setLoading(false);
    }
  };

  const displayedLeaderboard = showAll ? leaderboard : leaderboard.slice(0, 5);

  const getBadgeColor = (badge) => {
    switch (badge) {
      case 'gold':
        return 'from-yellow-400 to-yellow-600';
      case 'silver':
        return 'from-gray-300 to-gray-500';
      case 'bronze':
        return 'from-orange-400 to-orange-600';
      default:
        return 'from-gray-400 to-gray-600';
    }
  };

  if (loading) {
    return (
      <section id="leaderboard" className="py-20 bg-gray-50">
        <div className="container-custom text-center">
          <div className="animate-pulse">Loading leaderboard...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="leaderboard" className="py-12 md:py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-8 md:mb-12 px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">Top Learners</h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-8 md:mb-12">
            Celebrate excellence and get inspired by our top performers
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-secondary text-white p-4 md:p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl md:text-2xl font-bold flex items-center space-x-2">
                  <Award size={24} className="md:w-7 md:h-7" />
                  <span>Top {showAll ? leaderboard.length : 5} Learners</span>
                </h3>
                <TrendingUp size={20} className="md:w-6 md:h-6" />
              </div>
            </div>

            {/* Leaderboard List */}
            <div className="divide-y">
              {displayedLeaderboard.map((learner) => (
                <div
                  key={learner.id}
                  className="p-6 hover:bg-gray-50 transition-colors group"
                >
                  <div className="flex items-center space-x-4">
                    {/* Rank */}
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br ${getBadgeColor(
                        learner.badge
                      )} flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                    >
                      {learner.rank}
                    </div>

                    {/* Avatar */}
                    <img
                      src={learner.avatar}
                      alt={learner.name}
                      className="w-14 h-14 rounded-full border-2 border-gray-200 group-hover:scale-110 transition-transform"
                    />

                    {/* Info */}
                    <div className="flex-grow">
                      <h4 className="text-lg font-semibold text-gray-900">
                        {learner.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {learner.coursesCompleted} courses completed
                      </p>
                    </div>

                    {/* Points */}
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">
                        {learner.points.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-600">points</div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-4">
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                      <span>Overall Progress</span>
                      <span className="font-semibold">{learner.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-primary to-secondary h-full rounded-full transition-all duration-500"
                        style={{ width: `${learner.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* View Full Leaderboard Button */}
          {leaderboard.length > 5 && !showAll && (
            <div className="text-center mt-6">
              <Link
                to="/leaderboard"
                className="inline-block btn-secondary px-8 py-3"
              >
                View Full Leaderboard ({leaderboard.length - 5} more)
              </Link>
            </div>
          )}
          {showAll && (
            <div className="text-center mt-6">
              <button
                onClick={() => setShowAll(false)}
                className="btn-secondary px-8 py-3"
              >
                Show Top 5 Only
              </button>
            </div>
          )}

          {/* CTA */}
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Want to see your name here? Start learning today!
            </p>
            <button className="btn-primary">Start Your Journey</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;
