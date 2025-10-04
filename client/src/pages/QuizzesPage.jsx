import React, { useState } from 'react';
import { 
  Search, Filter, Grid, List, Clock, Star, 
  BookOpen, Play, Monitor, Zap, Globe, Database,
  PenTool, Hash, Cloud, Shield
} from 'react-feather';
import GradientBackground from '../components/GradientBackground';
import QuizTakingPage from './QuizTakingPage';

const QuizzesPage = () => {
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('Popular');

  // Quiz catalog data
  const allQuizzes = [
    {
      id: 1,
      title: 'HTML & CSS Fundamentals',
      description: 'Test your knowledge of HTML5 and CSS3 basics',
      category: 'Frontend',
      difficulty: 'Easy',
      questions: 10,
      duration: 15,
      attempts: 2340,
      rating: 4.8,
      icon: <Monitor size={48} />,
      color: 'from-blue-500 to-cyan-500',
      popular: true
    },
    {
      id: 2,
      title: 'JavaScript ES6+',
      description: 'Modern JavaScript features and best practices',
      category: 'Frontend',
      difficulty: 'Medium',
      questions: 15,
      duration: 20,
      attempts: 1890,
      rating: 4.7,
      icon: <Zap size={48} />,
      color: 'from-yellow-500 to-orange-500',
      trending: true
    },
    {
      id: 3,
      title: 'React Hooks & State',
      description: 'Master React hooks and state management',
      category: 'Frontend',
      difficulty: 'Medium',
      questions: 12,
      duration: 18,
      attempts: 1560,
      rating: 4.9,
      icon: <Globe size={48} />,
      color: 'from-cyan-500 to-blue-500',
      popular: true
    },
    {
      id: 4,
      title: 'Python Basics',
      description: 'Core Python programming concepts',
      category: 'Backend',
      difficulty: 'Easy',
      questions: 10,
      duration: 15,
      attempts: 2100,
      rating: 4.6,
      icon: <BookOpen size={48} />,
      color: 'from-green-500 to-emerald-500',
      trending: true
    },
    {
      id: 5,
      title: 'SQL & Databases',
      description: 'Database design and SQL queries',
      category: 'Backend',
      difficulty: 'Medium',
      questions: 15,
      duration: 20,
      attempts: 1234,
      rating: 4.5,
      icon: <Database size={48} />,
      color: 'from-purple-500 to-pink-500',
      popular: false
    },
    {
      id: 6,
      title: 'UI/UX Design Principles',
      description: 'Design thinking and user experience',
      category: 'Design',
      difficulty: 'Easy',
      questions: 8,
      duration: 12,
      attempts: 987,
      rating: 4.7,
      icon: <PenTool size={48} />,
      color: 'from-pink-500 to-rose-500',
      trending: false
    },
    {
      id: 7,
      title: 'Data Structures',
      description: 'Arrays, linked lists, trees, and graphs',
      category: 'Computer Science',
      difficulty: 'Hard',
      questions: 20,
      duration: 30,
      attempts: 756,
      rating: 4.8,
      icon: <Hash size={48} />,
      color: 'from-indigo-500 to-purple-500',
      popular: true
    },
    {
      id: 8,
      title: 'Cloud Computing AWS',
      description: 'AWS services and cloud architecture',
      category: 'Cloud',
      difficulty: 'Medium',
      questions: 12,
      duration: 18,
      attempts: 1100,
      rating: 4.6,
      icon: <Cloud size={48} />,
      color: 'from-orange-500 to-red-500',
      trending: true
    },
    {
      id: 9,
      title: 'Cybersecurity Basics',
      description: 'Security fundamentals and best practices',
      category: 'Security',
      difficulty: 'Medium',
      questions: 10,
      duration: 15,
      attempts: 890,
      rating: 4.5,
      icon: <Shield size={48} />,
      color: 'from-red-500 to-pink-500',
      popular: false
    }
  ];

  const categories = ['All', 'Frontend', 'Backend', 'Design', 'Computer Science', 'Cloud', 'Security'];
  const difficulties = ['All', 'Easy', 'Medium', 'Hard'];

  // Filter quizzes
  const filteredQuizzes = allQuizzes.filter(quiz => {
    const matchesSearch = quiz.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         quiz.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || quiz.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'All' || quiz.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-700';
      case 'Medium': return 'bg-amber-100 text-amber-700';
      case 'Hard': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  // If a quiz is selected, show the quiz taking page
  if (selectedQuiz) {
    return <QuizTakingPage quiz={selectedQuiz} onBack={() => setSelectedQuiz(null)} />;
  }

  return (
    <div className="min-h-screen bg-white relative">
      <GradientBackground />
      
      <div className="relative z-10 pt-24 pb-12">
        <div className="container-custom">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Quiz Catalog</h1>
            <p className="text-base text-gray-600">Test your knowledge across various topics and skill levels</p>
          </div>

          {/* Search and Filters */}
          <div className="mb-6 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search quizzes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>

            {/* Sort */}
            <div className="flex items-center space-x-2">
              <Filter size={20} className="text-gray-600" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm font-medium"
              >
                <option>Popular</option>
                <option>Trending</option>
                <option>Newest</option>
                <option>Highest Rated</option>
              </select>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            {/* Sidebar Filters */}
            <div className="lg:col-span-1">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 sticky top-24">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Filter size={18} className="mr-2" />
                  Filters
                </h3>

                {/* Category */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Category</h4>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <label key={category} className="flex items-center space-x-2 cursor-pointer group">
                        <input
                          type="radio"
                          name="category"
                          checked={selectedCategory === category}
                          onChange={() => setSelectedCategory(category)}
                          className="w-4 h-4 text-primary focus:ring-primary"
                        />
                        <span className="text-sm text-gray-700 group-hover:text-primary transition-colors">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Difficulty */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Difficulty</h4>
                  <div className="space-y-2">
                    {difficulties.map(difficulty => (
                      <label key={difficulty} className="flex items-center space-x-2 cursor-pointer group">
                        <input
                          type="radio"
                          name="difficulty"
                          checked={selectedDifficulty === difficulty}
                          onChange={() => setSelectedDifficulty(difficulty)}
                          className="w-4 h-4 text-primary focus:ring-primary"
                        />
                        <span className="text-sm text-gray-700 group-hover:text-primary transition-colors">{difficulty}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Quiz Grid */}
            <div className="lg:col-span-3">
              {/* Results Header */}
              <div className="flex items-center justify-between mb-6">
                <p className="text-gray-600">
                  <span className="font-semibold text-gray-900">{filteredQuizzes.length}</span> quizzes available
                </p>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-colors ${
                      viewMode === 'grid' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <Grid size={18} />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg transition-colors ${
                      viewMode === 'list' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <List size={18} />
                  </button>
                </div>
              </div>

              {/* Quiz Cards */}
              <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 gap-6' : 'space-y-4'}>
                {filteredQuizzes.map(quiz => (
                  <div
                    key={quiz.id}
                    className={`bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group ${
                      viewMode === 'list' ? 'flex' : ''
                    }`}
                  >
                    <div className={`bg-gradient-to-br ${quiz.color} flex items-center justify-center ${
                      viewMode === 'list' ? 'w-48' : 'h-48'
                    }`}>
                      <div className="text-white">{quiz.icon}</div>
                    </div>
                    <div className="p-6 flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                            {quiz.category}
                          </span>
                        </div>
                        <div className="flex items-center space-x-1 text-amber-500">
                          <Star size={14} fill="currentColor" />
                          <span className="text-xs font-semibold text-gray-900">{quiz.rating}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                        {quiz.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">{quiz.description}</p>
                      <div className="flex items-center space-x-4 text-xs text-gray-500 mb-4">
                        <div className="flex items-center space-x-1">
                          <BookOpen size={14} />
                          <span>{quiz.questions} questions</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock size={14} />
                          <span>{quiz.duration} min</span>
                        </div>
                        <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${getDifficultyColor(quiz.difficulty)}`}>
                          {quiz.difficulty}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-gray-500">
                          {quiz.attempts.toLocaleString()} attempts
                        </div>
                        <button
                          onClick={() => setSelectedQuiz(quiz)}
                          className="flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                        >
                          <Play size={16} />
                          <span>Start Quiz</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizzesPage;
