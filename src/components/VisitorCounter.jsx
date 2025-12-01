import React, { useEffect, useState } from 'react';
import { Eye, TrendingUp } from 'lucide-react';

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState(0);
  const [todayCount, setTodayCount] = useState(0);

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = localStorage.getItem('hasVisitedOdishaAI');
    const lastVisit = localStorage.getItem('lastVisitDate');
    const today = new Date().toDateString();

    // Get stored counts
    let totalCount = parseInt(localStorage.getItem('totalVisitors') || '15247');
    let dailyCount = parseInt(localStorage.getItem('todayVisitors') || '342');

    // Reset daily count if new day
    if (lastVisit !== today) {
      dailyCount = 0;
      localStorage.setItem('lastVisitDate', today);
    }

    // Increment counts if new visitor
    if (!hasVisited) {
      totalCount += 1;
      dailyCount += 1;
      localStorage.setItem('hasVisitedOdishaAI', 'true');
      localStorage.setItem('totalVisitors', totalCount.toString());
      localStorage.setItem('todayVisitors', dailyCount.toString());
    }

    setVisitorCount(totalCount);
    setTodayCount(dailyCount);
  }, []);

  const formatNumber = (num) => {
    return num.toLocaleString('en-IN');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-white rounded-xl shadow-2xl border-2 border-orange-200 p-4 min-w-[200px]">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-sm font-semibold text-gray-700">Visitor Stats</h4>
          <Eye className="w-4 h-4 text-orange-600" />
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-600">Total Visitors:</span>
            <span className="text-lg font-bold text-orange-600">{formatNumber(visitorCount)}</span>
          </div>
          
          <div className="flex items-center justify-between pt-2 border-t border-gray-100">
            <span className="text-xs text-gray-600 flex items-center">
              <TrendingUp className="w-3 h-3 mr-1 text-green-500" />
              Today:
            </span>
            <span className="text-base font-semibold text-green-600">{formatNumber(todayCount)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitorCounter;