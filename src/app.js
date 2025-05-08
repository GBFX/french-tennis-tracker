// Main application file
const { useState } = React;
const { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } = Recharts;

// Import du composant TournamentsMap (importé dynamiquement)
function LazyTournamentsMap({ gender }) {
  return (
    <div className="min-h-96 w-full">
      <React.Suspense fallback={
        <div className="bg-white p-4 rounded-lg shadow-md text-center h-96 flex items-center justify-center">
          <span>Chargement de la carte des tournois...</span>
        </div>
      }>
        <TournamentsMap gender={gender} />
      </React.Suspense>
    </div>
  );
}

const TennisTracker = () => {
  const [gender, setGender] = React.useState("hommes");
  const [view, setView] = React.useState("general");

  // Données des joueurs français
  const menRankings = [
    { rank: 15, player: "Arthur Fils", points: 2840, evolution: "+2", age: 20 },
    { rank: 20, player: "Ugo Humbert", points: 2260, evolution: "-1", age: 26 },
    { rank: 37, player: "Adrian Mannarino", points: 1355, evolution: "-3", age: 35 },
    { rank: 42, player: "Gaël Monfils", points: 1280, evolution: "+5", age: 38 },
    { rank: 69, player: "Alexandre Müller", points: 833, evolution: "+10", age: 27 },
    { rank: 71, player: "Arthur Rinderknech", points: 810, evolution: "-2", age: 28 },
    { rank: 77, player: "Quentin Halys", points: 756, evolution: "+6", age: 27 },
    { rank: 82, player: "Giovanni Mpetshi Perricard", points: 715, evolution: "+8", age: 20 },
    { rank: 90, player: "Corentin Moutet", points: 680, evolution: "-5", age: 25 },
    { rank: 102, player: "Richard Gasquet", points: 611, evolution: "-7", age: 38 }
  ];
  
  const womenRankings = [
    { rank: 21, player: "Caroline Garcia", points: 2060, evolution: "-1", age: 30 },
    { rank: 43, player: "Clara Burel", points: 1195, evolution: "+3", age: 23 },
    { rank: 52, player: "Diane Parry", points: 1073, evolution: "+2", age: 21 },
    { rank: 91, player: "Varvara Gracheva", points: 684, evolution: "-3", age: 23 },
    { rank: 92, player: "Océane Dodin", points: 680, evolution: "+5", age: 27 },
    { rank: 104, player: "Alizé Cornet", points: 624, evolution: "-2", age: 34 },
    { rank: 115, player: "Jessika Ponchet", points: 587, evolution: "+8", age: 27 },
    { rank: 131, player: "Chloé Paquet", points: 522, evolution: "-5", age: 29 },
    { rank: 140, player: "Kristina Mladenovic", points: 494, evolution: "-3", age: 31 },
    { rank: 157, player: "Fiona Ferro", points: 442, evolution: "+15", age: 27 }
  ];

  // Résultats récents Madrid Masters
  const menResults = [
    { player: 'Arthur Fils', tournament: 'Madrid Masters', round: '2ème tour', opponent: 'Comesana', score: '6-7, 4-6' },
    { player: 'Ugo Humbert', tournament: 'Madrid Masters', round: '2ème tour', opponent: 'Müller', score: '6-2, 6-7, 6-7' },
    { player: 'Gaël Monfils', tournament: 'Madrid Masters', round: '2ème tour', opponent: 'Draper', score: '2-6, 4-6' },
    { player: 'Adrian Mannarino', tournament: 'Madrid Masters', round: '1er tour', opponent: 'Michelsen', score: '3-6, 2-6' },
    { player: 'Alexandre Müller', tournament: 'Madrid Masters', round: '3ème tour', opponent: 'Tsitsipas', score: '1-6, 4-6' }
  ];
  
  const womenResults = [
    { player: 'Caroline Garcia', tournament: 'Madrid Open', round: 'Forfait', opponent: 'Blessure au dos', score: 'N/A' },
    { player: 'Clara Burel', tournament: 'Madrid Open', round: '2ème tour', opponent: 'Andreeva', score: '4-6, 2-6' },
    { player: 'Diane Parry', tournament: 'Madrid Open', round: '1er tour', opponent: 'Juvan', score: '3-6, 4-6' },
    { player: 'Océane Dodin', tournament: 'Madrid Open', round: 'Qualifications', opponent: 'Tomova', score: '4-6, 6-7' },
    { player: 'Varvara Gracheva', tournament: 'Madrid Open', round: '1er tour', opponent: 'Kostyuk', score: '2-6, 3-6' }
  ];

  // Données hebdomadaires
  const menWeeklyData = [
    { name: 'S16 (Monte-Carlo)', victories: 5, defeats: 6 },
    { name: 'S17 (Barcelone/Belgr.)', victories: 7, defeats: 4 },
    { name: 'S18 (Madrid)', victories: 4, defeats: 9 },
    { name: 'S19 (Madrid/Rome)', victories: 3, defeats: 5 },
    { name: 'S20 (Genève/Lyon)', victories: 4, defeats: 2 }
  ];
  
  const womenWeeklyData = [
    { name: 'S16 (Charleston)', victories: 3, defeats: 3 },
    { name: 'S17 (Stuttgart)', victories: 2, defeats: 4 },
    { name: 'S18 (Madrid)', victories: 1, defeats: 5 },
    { name: 'S19 (Madrid/Rome)', victories: 2, defeats: 5 },
    { name: 'S20 (Strasbourg)', victories: 3, defeats: 2 }
  ];

  // Données par surface
  const menSurfaceData = [
    { surface: "Terre battue", victoires: 19, defaites: 24 },
    { surface: "Gazon", victoires: 0, defaites: 0 },
    { surface: "Dur extérieur", victoires: 35, defaites: 23 },
    { surface: "Dur intérieur", victoires: 18, defaites: 9 }
  ];
  
  const womenSurfaceData = [
    { surface: "Terre battue", victoires: 11, defaites: 17 },
    { surface: "Gazon", victoires: 0, defaites: 0 },
    { surface: "Dur extérieur", victoires: 22, defaites: 19 },
    { surface: "Dur intérieur", victoires: 11, defaites: 8 }
  ];
  
  const surfaceData = gender === "hommes" ? menSurfaceData : womenSurfaceData;

  // Données des meilleurs résultats par tournoi
  const menBestResults = [
    { tournament: "Open 13 Marseille", player: "Ugo Humbert", result: "Vainqueur", date: "11 février 2025" },
    { tournament: "Open de Montpellier", player: "Arthur Fils", result: "Finaliste", date: "4 février 2025" },
    { tournament: "Indian Wells", player: "Arthur Fils", result: "Quart de finaliste", date: "14 mars 2025" },
    { tournament: "ATP 250 Auckland", player: "Adrian Mannarino", result: "Vainqueur", date: "13 janvier 2025" },
    { tournament: "Monte-Carlo Masters", player: "Gaël Monfils", result: "8ème de finale", date: "10 avril 2025" }
  ];
  
  const womenBestResults = [
    { tournament: "WTA 1000 Doha", player: "Caroline Garcia", result: "Demi-finaliste", date: "16 février 2025" },
    { tournament: "WTA 500 Linz", player: "Diane Parry", result: "Quart de finaliste", date: "4 février 2025" },
    { tournament: "WTA 250 Lyon", player: "Clara Burel", result: "Quart de finaliste", date: "29 janvier 2025" },
    { tournament: "Australian Open", player: "Caroline Garcia", result: "3ème tour", date: "19 janvier 2025" },
    { tournament: "WTA 250 Hua Hin", player: "Océane Dodin", result: "Demi-finaliste", date: "4 février 2025" }
  ];

  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Header */}
      <header className="bg-blue-700 text-white p-4 shadow-lg">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">Suivi Hebdomadaire des Performances du Tennis Français</h1>
          <div className="flex justify-between items-center mt-2">
            <p className="text-sm">Mise à jour : 8 mai 2025</p>
            <select 
              className="px-2 py-1 text-sm bg-white text-blue-800 rounded" 
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="hommes">ATP - Hommes</option>
              <option value="femmes">WTA - Femmes</option>
            </select>
          </div>
        </div>
      </header>
      
      {/* Navigation */}
      <nav className="bg-white shadow border-b border-gray-200">
        <div className="container mx-auto">
          <div className="flex">
            <button 
              className={`px-4 py-3 text-sm font-medium ${view === 'general' ? 'text-blue-700 border-b-2 border-blue-700' : 'text-gray-600'}`}
              onClick={() => setView('general')}
            >
              Vue Générale
            </button>
            <button 
              className={`px-4 py-3 text-sm font-medium ${view === 'surfaces' ? 'text-blue-700 border-b-2 border-blue-700' : 'text-gray-600'}`}
              onClick={() => setView('surfaces')}
            >
              Par Surface
            </button>
            <button 
              className={`px-4 py-3 text-sm font-medium ${view === 'tournaments' ? 'text-blue-700 border-b-2 border-blue-700' : 'text-gray-600'}`}
              onClick={() => setView('tournaments')}
            >
              Par Tournoi
            </button>
            <button 
              className={`px-4 py-3 text-sm font-medium ${view === 'map' ? 'text-blue-700 border-b-2 border-blue-700' : 'text-gray-600'}`}
              onClick={() => setView('map')}
            >
              Carte des Tournois
            </button>
            <button 
              className={`px-4 py-3 text-sm font-medium ${view === 'rankings' ? 'text-blue-700 border-b-2 border-blue-700' : 'text-gray-600'}`}
              onClick={() => setView('rankings')}
            >
              Classements
            </button>
          </div>
        </div>
      </nav>
      
      {/* Main content */}
      <main className="container mx-auto p-4 flex-grow">
        {/* General view */}
        {view === 'general' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold mb-4">Performances Hebdomadaires</h2>
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-2 text-left">Semaine</th>
                    <th className="px-4 py-2 text-left">Victoires</th>
                    <th className="px-4 py-2 text-left">Défaites</th>
                    <th className="px-4 py-2 text-left">Ratio</th>
                  </tr>
                </thead>
                <tbody>
                  {(gender === 'hommes' ? menWeeklyData : womenWeeklyData).map((week, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                      <td className="px-4 py-2">{week.name}</td>
                      <td className="px-4 py-2 text-green-600">{week.victories}</td>
                      <td className="px-4 py-2 text-red-600">{week.defeats}</td>
                      <td className="px-4 py-2">{((week.victories / (week.victories + week.defeats)) * 100).toFixed(1)}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold mb-4">Derniers Résultats</h2>
              <div className="space-y-3 overflow-auto max-h-72">
                {(gender === 'hommes' ? menResults : womenResults).map((result, index) => (
                  <div key={index} className="border-b pb-2">
                    <div className="flex justify-between">
                      <span className="font-medium text-sm">{result.player}</span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-red-100 text-red-800">
                        Défaite
                      </span>
                    </div>
                    <div className="text-xs text-gray-600">{result.tournament} - {result.round}</div>
                    <div className="flex justify-between text-xs mt-1">
                      <span>vs. {result.opponent}</span>
                      <span>{result.score}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {/* Surface view */}
        {view === 'surfaces' && (
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Performance par Surface</h2>
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-2 text-left">Surface</th>
                  <th className="px-4 py-2 text-left">Victoires</th>
                  <th className="px-4 py-2 text-left">Défaites</th>
                  <th className="px-4 py-2 text-left">Ratio</th>
                </tr>
              </thead>
              <tbody>
                {surfaceData.map((surface, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                    <td className="px-4 py-2">{surface.surface}</td>
                    <td className="px-4 py-2 text-green-600">{surface.victoires}</td>
                    <td className="px-4 py-2 text-red-600">{surface.defaites}</td>
                    <td className="px-4 py-2">{surface.victoires + surface.defaites > 0 ? ((surface.victoires / (surface.victoires + surface.defaites)) * 100).toFixed(1) : 'N/A'}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        
        {/* Tournament view */}
        {view === 'tournaments' && (
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Meilleurs Résultats par Tournoi</h2>
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-2 text-left">Tournoi</th>
                  <th className="px-4 py-2 text-left">Joueur</th>
                  <th className="px-4 py-2 text-left">Meilleur Résultat</th>
                  <th className="px-4 py-2 text-left">Date</th>
                </tr>
              </thead>
              <tbody>
                {(gender === 'hommes' ? menBestResults : womenBestResults).map((result, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                    <td className="px-4 py-2">{result.tournament}</td>
                    <td className="px-4 py-2 font-medium">{result.player}</td>
                    <td className="px-4 py-2">{result.result}</td>
                    <td className="px-4 py-2">{result.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        
        {/* Map view - Nouvelle vue pour la carte des tournois */}
        {view === 'map' && (
          <LazyTournamentsMap gender={gender} />
        )}
        
        {/* Rankings view */}
        {view === 'rankings' && (
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Classement {gender === 'hommes' ? 'ATP' : 'WTA'} des Joueurs Français</h2>
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-2 text-left">Rang</th>
                  <th className="px-4 py-2 text-left">Joueur</th>
                  <th className="px-4 py-2 text-left">Points</th>
                  <th className="px-4 py-2 text-left">Évolution</th>
                  <th className="px-4 py-2 text-left">Âge</th>
                </tr>
              </thead>
              <tbody>
                {(gender === 'hommes' ? menRankings : womenRankings).map((player, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                    <td className="px-4 py-2">{player.rank}</td>
                    <td className="px-4 py-2 font-medium">{player.player}</td>
                    <td className="px-4 py-2">{player.points}</td>
                    <td className={`px-4 py-2 ${player.evolution.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {player.evolution}
                    </td>
                    <td className="px-4 py-2">{player.age}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-100 border-t border-gray-200 p-4 mt-auto">
        <div className="container mx-auto text-center text-sm text-gray-600">
          Suivi des performances du tennis français - Données officielles basées sur ATP Tour et WTA Tennis - Mises à jour le 8 mai 2025
        </div>
      </footer>
    </div>
  );
};

// Définir le composant global
window.TournamentsMap = LazyTournamentsMap;

ReactDOM.render(<TennisTracker />, document.getElementById('root'));