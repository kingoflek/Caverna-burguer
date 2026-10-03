import React from 'react';
import { Flame, Zap, CupSoda, Utensils, LayoutGrid } from 'lucide-react';
import { CATEGORIES } from '../data/products';

export default function CategoryNavigation({ activeCategory, onSelectCategory }) {
  // Mapeia ícones pelo nome configurado
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Flame':
        return <Flame className="w-4 h-4" />;
      case 'Zap':
        return <Zap className="w-4 h-4" />;
      case 'CupSoda':
        return <CupSoda className="w-4 h-4" />;
      default:
        return <Utensils className="w-4 h-4" />;
    }
  };

  const allCategories = [
    { id: 'all', name: 'TODOS OS ITENS', shortName: 'Todos', icon: 'LayoutGrid' },
    ...CATEGORIES
  ];

  return (
    <div className="w-full">
      {/* SCROLLABLE PILLS CONTAINER */}
      <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-3 pt-1 scrollbar-none no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
        {allCategories.map((cat) => {
          const isActive = activeCategory === cat.id;

          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => onSelectCategory(cat.id)}
              className={`flex-shrink-0 flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 border focus:outline-none focus:ring-2 focus:ring-redaccent-600 ${
                isActive
                  ? 'bg-gradient-to-r from-redaccent-700 to-redaccent-600 border-redaccent-500 text-white shadow-md shadow-redaccent-950/50 scale-[1.02]'
                  : 'bg-caverna-850 hover:bg-caverna-800 text-caverna-300 hover:text-white border-caverna-700/80 hover:border-caverna-600'
              }`}
            >
              <span className={isActive ? 'text-white' : 'text-caverna-400'}>
                {cat.id === 'all' ? <LayoutGrid className="w-4 h-4" /> : getIcon(cat.icon)}
              </span>
              <span>{cat.shortName || cat.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
