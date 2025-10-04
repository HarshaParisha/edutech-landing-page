import React, { useState, useEffect } from 'react';
import { Play, Clock, HelpCircle } from 'react-feather';
import { getQuizzes } from '../services/api';

const Quizzes = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetchQuizzes();
  }, []);

  const fetchQuizzes = async () => {
    try {
      const response = await getQuizzes();
      setQuizzes(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching quizzes:', error);
      setLoading(false);
    }
  };

  const displayedQuizzes = showAll ? quizzes : quizzes.slice(0, 5);

  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner':
        return 'text-green-600 bg-green-50';
      case 'intermediate':
        return 'text-yellow-600 bg-yellow-50';
      case 'advanced':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="container-custom text-center">
          <div className="animate-pulse">Loading quizzes...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-8 md:mb-12 px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">Test Your Knowledge</h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-8 md:mb-12">
            Challenge yourself with interactive quizzes across various topics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedQuizzes.map((quiz) => (
            <div key={quiz.id} className="card p-6 group">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="bg-blue-50 p-3 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <HelpCircle size={28} />
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(
                    quiz.difficulty
                  )}`}
                >
                  {quiz.difficulty}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                {quiz.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm">{quiz.description}</p>

              {/* Meta Info */}
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center space-x-1">
                  <HelpCircle size={16} />
                  <span>{quiz.questions} questions</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock size={16} />
                  <span>{quiz.duration}</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                  <span>Completed</span>
                  <span className="font-semibold">{quiz.completed}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-primary to-secondary h-full rounded-full transition-all"
                    style={{ width: `${quiz.completed}%` }}
                  ></div>
                </div>
              </div>

              {/* Start Button */}
              <button className="w-full btn-primary flex items-center justify-center space-x-2">
                <Play size={18} />
                <span>{quiz.completed > 0 ? 'Continue' : 'Start Quiz'}</span>
              </button>
            </div>
          ))}
        </div>

        {/* See More / See Less Button */}
        {quizzes.length > 5 && (
          <div className="text-center mt-8 md:mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn-secondary px-8 py-3"
            >
              {showAll ? 'Show Less' : `See More Quizzes (${quizzes.length - 5} more)`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Quizzes;
