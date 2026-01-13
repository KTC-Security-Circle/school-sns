import React from 'react';
import { Home, FileText, Hash, Search, User, Edit } from 'lucide-react';
import { User as UserType } from '../../App';

type SidebarProps = {
  currentUser: UserType;
  currentPage: string;
  onNavigate: (page: string) => void;
  onLogout: () => void;
};

export default function Sidebar({ currentUser, currentPage, onNavigate }: SidebarProps) {
  const navItems = [
    { id: 'timeline', icon: Home, label: 'ホーム' },
    { id: 'search', icon: Search, label: '検索' },
    { id: 'home', icon: User, label: 'マイページ' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 safe-area-inset-bottom z-50">
      <div className="flex items-center justify-around h-16 max-w-lg mx-auto px-2">
        {navItems.map((item) => {
          const isActive = currentPage === item.id;
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center justify-center flex-1 h-full transition-colors active:scale-95 ${isActive ? 'text-indigo-600' : 'text-gray-600'
                }`}
            >
              <Icon className={`w-6 h-6 ${isActive ? 'stroke-2' : ''}`} />
              <span className={`text-xs mt-1 ${isActive ? 'font-medium' : ''}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}