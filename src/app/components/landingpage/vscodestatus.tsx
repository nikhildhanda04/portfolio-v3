'use client';

import React, { useState, useEffect } from 'react';

const VSCodeStatusWidget = () => {
  const [status, setStatus] = useState<{
    isOnline: boolean;
    duration: number;
    lastSeen: number | null;
    lastSessionDuration: number;
    loading: boolean;
  }>({
    isOnline: false,
    duration: 0,
    lastSeen: null,
    lastSessionDuration: 0,
    loading: true
  });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await fetch('/api/wakatime-status');
        const data = await response.json();
        
        setStatus({
          ...data,
          loading: false
        });
      } catch (error) {
        console.error('Failed to fetch coding status:', error);
        setStatus(prev => ({ ...prev, loading: false }));
      }
    };

    fetchStatus();
    const interval = setInterval(fetchStatus, 60000);
    
    return () => clearInterval(interval);
  }, []);

  const formatDuration = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    
    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    } else if (minutes > 0) {
      return `${minutes}m`;
    } else {
      return `${seconds}s`;
    }
  };

  const formatLastSeen = (timestamp: number | null) => {
    if (timestamp == null) return '';
    const now = Date.now();
    const diff = Math.floor((now - timestamp) / 1000);
    const minutes = Math.floor(diff / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    
    if (days > 0) return `${days}d ago`;
    if (hours > 0) return `${hours}h ago`;
    if (minutes > 0) return `${minutes}m ago`;
    return 'just now';
  };

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Status Dot */}
      <div className={`
        w-5 h-5 rounded-full border-2 border-stone-300 shadow-lg cursor-pointer transition-all
        ${status.isOnline ? 'bg-green-500' : 'bg-gray-400'}
        ${isHovered ? 'scale-110' : 'scale-100'}
      `}>
        {/* {status.isOnline && (
          <span className="absolute inset-0 bg-green-500 rounded-full opacity-75" />
        )} */}
      </div>

      {/* Tooltip - Opens to the right */}
      {isHovered && !status.loading && (
        <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 z-50 animate-in fade-in slide-in-from-left-1 duration-200">
          <div className="dark:bg-gray-900 bg-gray-100 dark:text-white text-gray-900 px-3 py-2 rounded-lg shadow-xl border dark:border-gray-700 border-gray-300 min-w-max">
            <div className="flex items-center gap-2 mb-1">
              {/* VS Code Icon SVG */}
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5036 2.6177L7.37947 10.6446L3.40983 7.73259C2.98835 7.40014 2.37996 7.43941 2.00831 7.82508L0.330467 9.54726C-0.110156 10.0009 -0.110156 10.7354 0.330467 11.189L3.16772 14.0996L0.330467 17.0102C-0.110156 17.4638 -0.110156 18.1984 0.330467 18.652L2.00831 20.3742C2.37996 20.7599 2.98835 20.7991 3.40983 20.4667L7.37947 17.5547L17.5036 25.5816C18.1545 26.0755 19.0843 25.6093 19.0843 24.8037V3.39556C19.0843 2.58625 18.1489 2.12376 17.5036 2.6177ZM21.3976 6.18683V19.0125C21.3976 19.5617 21.8453 20.0094 22.3944 20.0094H23.3915C23.9407 20.0094 24.3884 19.5617 24.3884 19.0125V6.18683C24.3884 5.63768 23.9407 5.18997 23.3915 5.18997H22.3944C21.8453 5.18997 21.3976 5.63768 21.3976 6.18683Z" fill="#007ACC"/>
              </svg>
              <span className="text-sm font-medium">
                {status.isOnline ? 'Coding in VS Code' : 'Offline in VS Code'}
              </span>
            </div>
            <div className="text-xs dark:text-gray-400 text-gray-600">
              {status.isOnline 
                ? `Working for ${formatDuration(status.duration)}`
                : status.lastSeen 
                  ? `Last active ${formatLastSeen(status.lastSeen)} • Worked for ${formatDuration(status.lastSessionDuration)}`
                  : 'Yesterday Worked for 5h 37m'
              }
            </div>
          </div>
          {/* Tooltip arrow pointing left */}
          <div className="absolute right-full top-1/2 transform -translate-y-1/2 mr-px">
            <div className="border-4 border-transparent dark:border-r-gray-700 border-r-gray-300" />
          </div>
        </div>
      )}
    </div>
  );
};

export default VSCodeStatusWidget;