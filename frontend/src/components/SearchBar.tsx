import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  const { t } = useTranslation();
  const [localValue, setLocalValue] = useState(value);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onChange(localValue);
  };

  return (
    <form onSubmit={handleSubmit} className="relative max-w-xl mx-auto">
      <div className="flex">
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={localValue}
            onChange={(e) => setLocalValue(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-l-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600"
            placeholder={t('search.placeholder')}
          />
        </div>
        <button
          type="submit"
          className="px-6 py-2 bg-emerald-600 text-white rounded-r-lg hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2"
        >
          {t('search.button')}
        </button>
      </div>
    </form>
  );
};