// src/components/SearchBar.tsx
import React, { useState, useEffect, useRef } from 'react';
import { Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Plant {
  id: string;
  name: {
    fr: string;
    en: string;
  };
  scientific_name: string;
}

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  plants: Plant[];
}

export const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, plants }) => {
  const { t, i18n } = useTranslation();
  const [localValue, setLocalValue] = useState(value);
  const [isFocused, setIsFocused] = useState(false);
  const [filteredPlants, setFilteredPlants] = useState<Plant[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  const currentLanguage = i18n.language || 'fr';

  // Filtrer les plantes en fonction de la saisie
  useEffect(() => {
    if (!plants || plants.length === 0) {
      console.log("Aucune plante disponible pour le filtrage");
      return;
    }

    if (localValue.trim() === '') {
      setFilteredPlants(plants.slice(0, 10)); // Affiche les 10 premières plantes si aucune saisie
    } else {
      const filtered = plants.filter(plant => {
        const plantName = plant.name[currentLanguage as keyof typeof plant.name] || plant.name.fr;
        return plantName.toLowerCase().includes(localValue.toLowerCase()) || 
               plant.scientific_name.toLowerCase().includes(localValue.toLowerCase());
      });
      setFilteredPlants(filtered.slice(0, 10)); // Limite à 10 résultats pour ne pas surcharger
    }
    
    console.log("Plantes filtrées:", filteredPlants);
  }, [localValue, plants, currentLanguage, filteredPlants]);

  // Gérer le clic en dehors du dropdown pour le fermer
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node) && 
          inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onChange(localValue);
  };

  const handlePlantSelect = (plantName: string) => {
    setLocalValue(plantName);
    onChange(plantName);
    setIsFocused(false);
  };

  console.log("État actuel - isFocused:", isFocused, "plants disponibles:", plants?.length, "plantes filtrées:", filteredPlants?.length);

  return (
    <form onSubmit={handleSubmit} className="relative max-w-xl mx-auto">
      <div className="flex">
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            ref={inputRef}
            type="text"
            value={localValue}
            onChange={(e) => setLocalValue(e.target.value)}
            onFocus={() => {
              console.log("Input focus");
              setIsFocused(true);
            }}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-l-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600"
            placeholder={t('search.placeholder')}
          />
          
          {isFocused && filteredPlants && filteredPlants.length > 0 && (
            <div 
              ref={dropdownRef}
              className="absolute z-50 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto"
            >
              <ul className="py-1">
                {filteredPlants.map((plant) => (
                  <li 
                    key={plant.id}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex flex-col"
                    onClick={() => handlePlantSelect(plant.name[currentLanguage as keyof typeof plant.name] || plant.name.fr)}
                  >
                    <span className="font-medium">
                      {plant.name[currentLanguage as keyof typeof plant.name] || plant.name.fr}
                    </span>
                    <span className="text-sm text-gray-500 italic">{plant.scientific_name}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
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