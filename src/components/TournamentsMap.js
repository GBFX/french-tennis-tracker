import React, { useState, useEffect } from 'react';
import { tournaments, tournamentLevels, surfaces } from '../data/tournaments';

const TournamentsMap = ({ gender }) => {
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedSurface, setSelectedSurface] = useState('all');
  const [selectedTournament, setSelectedTournament] = useState(null);

  // Initialiser la carte au chargement du composant
  useEffect(() => {
    // Vérifier si leaflet est disponible
    if (!window.L) {
      // Charger Leaflet dynamiquement si non disponible
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css';
      document.head.appendChild(link);

      const script = document.createElement('script');
      script.src = 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.js';
      script.onload = initializeMap;
      document.body.appendChild(script);
    } else {
      initializeMap();
    }

    return () => {
      if (map) {
        map.remove();
      }
    };
  }, []);

  // Mettre à jour les marqueurs quand les filtres ou la carte changent
  useEffect(() => {
    if (map) {
      updateMarkers();
    }
  }, [map, selectedLevel, selectedSurface, gender]);

  // Initialiser la carte
  const initializeMap = () => {
    if (window.L && !map) {
      const newMap = window.L.map('tournaments-map').setView([30, 0], 2);
      
      window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(newMap);
      
      setMap(newMap);
    }
  };

  // Mise à jour des marqueurs selon les filtres
  const updateMarkers = () => {
    // Supprimer les marqueurs existants
    markers.forEach(marker => map.removeLayer(marker));
    
    // Filtrer les tournois
    const filteredTournaments = tournaments.filter(tournament => {
      const levelMatch = selectedLevel === 'all' || tournament.level.includes(selectedLevel);
      const surfaceMatch = selectedSurface === 'all' || tournament.surface === selectedSurface;
      return levelMatch && surfaceMatch;
    });
    
    // Créer de nouveaux marqueurs
    const newMarkers = filteredTournaments.map(tournament => {
      const marker = window.L.circleMarker([tournament.lat, tournament.lng], {
        radius: getTournamentRadius(tournament.level),
        color: tournament.color,
        fillColor: tournament.color,
        fillOpacity: 0.8,
        weight: 1
      }).addTo(map);
      
      // Ajouter un popup au marqueur
      marker.bindTooltip(tournament.name);
      
      // Ajouter un événement de clic
      marker.on('click', () => {
        setSelectedTournament(tournament);
      });
      
      return marker;
    });
    
    setMarkers(newMarkers);
  };

  // Déterminer la taille du marqueur selon le niveau du tournoi
  const getTournamentRadius = (level) => {
    if (level.includes('Grand Chelem')) return 10;
    if (level.includes('Masters 1000')) return 8;
    if (level.includes('500')) return 6;
    return 5; // ATP 250 / WTA 250
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Carte des Tournois {gender === 'hommes' ? 'ATP' : 'WTA'}</h2>
      
      {/* Filtres */}
      <div className="flex flex-wrap gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Niveau</label>
          <select 
            className="px-2 py-1 text-sm bg-white border border-gray-300 rounded" 
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
          >
            <option value="all">Tous les niveaux</option>
            {tournamentLevels.map((level, index) => (
              <option key={index} value={level.name}>{level.name}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Surface</label>
          <select 
            className="px-2 py-1 text-sm bg-white border border-gray-300 rounded" 
            value={selectedSurface}
            onChange={(e) => setSelectedSurface(e.target.value)}
          >
            <option value="all">Toutes les surfaces</option>
            {surfaces.map((surface, index) => (
              <option key={index} value={surface.name}>{surface.name}</option>
            ))}
          </select>
        </div>
      </div>
      
      {/* Légende */}
      <div className="flex flex-wrap gap-4 mb-4">
        {tournamentLevels.map((level, index) => (
          <div key={index} className="flex items-center">
            <div 
              className="w-4 h-4 rounded-full mr-2" 
              style={{ backgroundColor: level.color }}
            ></div>
            <span className="text-xs">{level.name}</span>
          </div>
        ))}
      </div>
      
      {/* Conteneur de la carte */}
      <div id="tournaments-map" className="h-96 w-full rounded-lg"></div>
      
      {/* Détails du tournoi sélectionné */}
      {selectedTournament && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-semibold">{selectedTournament.name}</h3>
            <button 
              className="text-gray-500 hover:text-gray-700"
              onClick={() => setSelectedTournament(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="text-sm"><span className="font-medium">Lieu:</span> {selectedTournament.city}, {selectedTournament.country}</p>
              <p className="text-sm"><span className="font-medium">Niveau:</span> {selectedTournament.level}</p>
              <p className="text-sm"><span className="font-medium">Surface:</span> {selectedTournament.surface}</p>
              <p className="text-sm"><span className="font-medium">Période:</span> {selectedTournament.date}</p>
            </div>
            <div>
              <p className="text-sm"><span className="font-medium">Meilleur résultat français:</span></p>
              <p className="text-sm">{selectedTournament.frenchBestResult.player} - {selectedTournament.frenchBestResult.result}</p>
              <p className="text-sm mt-2"><span className="font-medium">Dernier vainqueur ({gender === 'hommes' ? 'ATP' : 'WTA'}):</span></p>
              <p className="text-sm">{gender === 'hommes' ? selectedTournament.lastWinner.atp : selectedTournament.lastWinner.wta || 'Non applicable'}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TournamentsMap;