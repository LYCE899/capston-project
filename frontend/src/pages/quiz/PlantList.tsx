import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { plants } from "../../data/plants";
import { SearchBar } from "../../components/SearchBar";

export const PlantList: React.FC = () => {
  const { i18n } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");

  // Mapper vos données de plantes pour correspondre à la structure attendue par SearchBar
  const searchBarPlants = plants.map((plant) => ({
    id: plant.id,
    name: {
      fr: plant.commonName.fr,
      en: plant.commonName.en,
    },
    scientific_name: plant.scientificName,
  }));

  console.log("Plantes préparées pour SearchBar:", searchBarPlants);

  const filteredPlants = plants.filter((plant) => {
    const searchLower = searchQuery.toLowerCase();
    return (
      plant.scientificName.toLowerCase().includes(searchLower) ||
      plant.commonName[i18n.language as "en" | "fr"]
        .toLowerCase()
        .includes(searchLower) ||
      plant.medicinalUses[i18n.language as "en" | "fr"].some((use) =>
        use.toLowerCase().includes(searchLower)
      )
    );
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          plants={searchBarPlants}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPlants.map((plant) => (
          <Link
            key={plant.id}
            to={`/plants/${plant.id}`}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src={plant.thumbnailUrl}
              alt={plant.commonName[i18n.language as "en" | "fr"]}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {plant.commonName[i18n.language as "en" | "fr"]}
              </h3>
              <p className="text-sm text-gray-600 italic">
                {plant.scientificName}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
