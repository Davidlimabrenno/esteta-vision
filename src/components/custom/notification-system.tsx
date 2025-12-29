'use client';

import { useState, useEffect } from 'react';

interface Notification {
  id: string;
  type: 'success' | 'error' | 'info' | 'warning';
  message: string;
  duration?: number;
}

export function NotificationSystem() {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = (notification: Omit<Notification, 'id'>) => {
    const id = Math.random().toString(36).substring(2, 11);
    const newNotification = { ...notification, id };
    
    setNotifications(prev => [...prev, newNotification]);

    // Auto-remove após duração especificada (padrão: 5s)
    setTimeout(() => {
      removeNotification(id);
    }, notification.duration || 5000);
  };

  const removeNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  // Expor função globalmente para uso em qualquer lugar
  useEffect(() => {
    (window as any).notify = addNotification;
  }, []);

  const getIcon = (type: string) => {
    switch (type) {
      case 'success': return '✅';
      case 'error': return '❌';
      case 'warning': return '⚠️';
      case 'info': return 'ℹ️';
      default: return '📢';
    }
  };

  const getColors = (type: string) => {
    switch (type) {
      case 'success': return 'border-green-500/50 bg-green-500/10 text-green-400';
      case 'error': return 'border-red-500/50 bg-red-500/10 text-red-400';
      case 'warning': return 'border-yellow-500/50 bg-yellow-500/10 text-yellow-400';
      case 'info': return 'border-blue-500/50 bg-blue-500/10 text-blue-400';
      default: return 'border-[#d4af37]/50 bg-[#d4af37]/10 text-[#d4af37]';
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2 max-w-sm">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`border rounded-lg p-4 shadow-lg backdrop-blur-sm animate-slide-in ${getColors(notification.type)}`}
        >
          <div className="flex items-start gap-3">
            <span className="text-2xl">{getIcon(notification.type)}</span>
            <div className="flex-1">
              <p className="font-medium">{notification.message}</p>
            </div>
            <button
              onClick={() => removeNotification(notification.id)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

// Helper para usar notificações
export const notify = {
  success: (message: string, duration?: number) => {
    if (typeof window !== 'undefined' && (window as any).notify) {
      (window as any).notify({ type: 'success', message, duration });
    }
  },
  error: (message: string, duration?: number) => {
    if (typeof window !== 'undefined' && (window as any).notify) {
      (window as any).notify({ type: 'error', message, duration });
    }
  },
  warning: (message: string, duration?: number) => {
    if (typeof window !== 'undefined' && (window as any).notify) {
      (window as any).notify({ type: 'warning', message, duration });
    }
  },
  info: (message: string, duration?: number) => {
    if (typeof window !== 'undefined' && (window as any).notify) {
      (window as any).notify({ type: 'info', message, duration });
    }
  },
};
