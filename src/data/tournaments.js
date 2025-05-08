// Données des tournois avec coordonnées géographiques et niveau
export const tournaments = [
  // Grands Chelems
  {
    id: 1,
    name: "Open d'Australie",
    city: "Melbourne",
    country: "Australie",
    level: "Grand Chelem",
    surface: "Dur extérieur",
    lat: -37.8199,
    lng: 144.9785,
    date: "Janvier",
    color: "#0033a0",
    frenchBestResult: {
      player: "Jo-Wilfried Tsonga",
      result: "Finale (2008)",
      year: 2008
    },
    lastWinner: {
      atp: "Jannik Sinner",
      wta: "Aryna Sabalenka"
    }
  },
  {
    id: 2,
    name: "Roland-Garros",
    city: "Paris",
    country: "France",
    level: "Grand Chelem",
    surface: "Terre battue",
    lat: 48.8471,
    lng: 2.2503,
    date: "Mai-Juin",
    color: "#0033a0",
    frenchBestResult: {
      player: "Yannick Noah",
      result: "Vainqueur (1983)",
      year: 1983
    },
    lastWinner: {
      atp: "Carlos Alcaraz",
      wta: "Iga Swiatek"
    }
  },
  {
    id: 3,
    name: "Wimbledon",
    city: "Londres",
    country: "Royaume-Uni",
    level: "Grand Chelem",
    surface: "Gazon",
    lat: 51.4341,
    lng: -0.2136,
    date: "Juin-Juillet",
    color: "#0033a0",
    frenchBestResult: {
      player: "Amélie Mauresmo",
      result: "Vainqueur (2006)",
      year: 2006
    },
    lastWinner: {
      atp: "Carlos Alcaraz",
      wta: "Marketa Vondrousova"
    }
  },
  {
    id: 4,
    name: "US Open",
    city: "New York",
    country: "États-Unis",
    level: "Grand Chelem",
    surface: "Dur extérieur",
    lat: 40.7499,
    lng: -73.8474,
    date: "Août-Septembre",
    color: "#0033a0",
    frenchBestResult: {
      player: "Marion Bartoli",
      result: "Demi-finale (2006)",
      year: 2006
    },
    lastWinner: {
      atp: "Jannik Sinner",
      wta: "Coco Gauff"
    }
  },
  
  // Masters 1000
  {
    id: 5,
    name: "Indian Wells",
    city: "Indian Wells",
    country: "États-Unis",
    level: "Masters 1000",
    surface: "Dur extérieur",
    lat: 33.7181,
    lng: -116.2389,
    date: "Mars",
    color: "#9c27b0",
    frenchBestResult: {
      player: "Arthur Fils",
      result: "Quart de finale (2025)",
      year: 2025
    },
    lastWinner: {
      atp: "Carlos Alcaraz",
      wta: "Iga Swiatek"
    }
  },
  {
    id: 6,
    name: "Miami Open",
    city: "Miami",
    country: "États-Unis",
    level: "Masters 1000",
    surface: "Dur extérieur",
    lat: 25.7781,
    lng: -80.1887,
    date: "Mars-Avril",
    color: "#9c27b0",
    frenchBestResult: {
      player: "Gilles Simon",
      result: "Demi-finale (2011)",
      year: 2011
    },
    lastWinner: {
      atp: "Jannik Sinner",
      wta: "Danielle Collins"
    }
  },
  {
    id: 7,
    name: "Monte-Carlo Masters",
    city: "Monte-Carlo",
    country: "Monaco",
    level: "Masters 1000",
    surface: "Terre battue",
    lat: 43.7405,
    lng: 7.4296,
    date: "Avril",
    color: "#9c27b0",
    frenchBestResult: {
      player: "Gaël Monfils",
      result: "8ème de finale (2025)",
      year: 2025
    },
    lastWinner: {
      atp: "Stefanos Tsitsipas",
      wta: ""
    }
  },
  {
    id: 8,
    name: "Madrid Open",
    city: "Madrid",
    country: "Espagne",
    level: "Masters 1000",
    surface: "Terre battue",
    lat: 40.4167,
    lng: -3.7167,
    date: "Mai",
    color: "#9c27b0",
    frenchBestResult: {
      player: "Richard Gasquet",
      result: "Demi-finale (2011)",
      year: 2011
    },
    lastWinner: {
      atp: "Andrey Rublev",
      wta: "Iga Swiatek"
    }
  },
  {
    id: 9,
    name: "Rome Masters",
    city: "Rome",
    country: "Italie",
    level: "Masters 1000",
    surface: "Terre battue",
    lat: 41.8974,
    lng: 12.4767,
    date: "Mai",
    color: "#9c27b0",
    frenchBestResult: {
      player: "Jo-Wilfried Tsonga",
      result: "Quart de finale (2013)",
      year: 2013
    },
    lastWinner: {
      atp: "Novak Djokovic",
      wta: "Iga Swiatek"
    }
  },
  {
    id: 10,
    name: "Canada Masters",
    city: "Montréal/Toronto",
    country: "Canada",
    level: "Masters 1000",
    surface: "Dur extérieur",
    lat: 43.6435,
    lng: -79.3791,
    date: "Août",
    color: "#9c27b0",
    frenchBestResult: {
      player: "Jo-Wilfried Tsonga",
      result: "Vainqueur (2014)",
      year: 2014
    },
    lastWinner: {
      atp: "Jannik Sinner",
      wta: "Jessica Pegula"
    }
  },
  {
    id: 11,
    name: "Cincinnati Masters",
    city: "Cincinnati",
    country: "États-Unis",
    level: "Masters 1000",
    surface: "Dur extérieur",
    lat: 39.1974,
    lng: -84.4529,
    date: "Août",
    color: "#9c27b0",
    frenchBestResult: {
      player: "Benoît Paire",
      result: "Quart de finale (2013)",
      year: 2013
    },
    lastWinner: {
      atp: "Novak Djokovic",
      wta: "Coco Gauff"
    }
  },
  {
    id: 12,
    name: "Shanghai Masters",
    city: "Shanghai",
    country: "Chine",
    level: "Masters 1000",
    surface: "Dur extérieur",
    lat: 31.2222,
    lng: 121.4581,
    date: "Octobre",
    color: "#9c27b0",
    frenchBestResult: {
      player: "Jo-Wilfried Tsonga",
      result: "Finale (2015)",
      year: 2015
    },
    lastWinner: {
      atp: "Hubert Hurkacz",
      wta: ""
    }
  },
  {
    id: 13,
    name: "Paris Masters",
    city: "Paris",
    country: "France",
    level: "Masters 1000",
    surface: "Dur intérieur",
    lat: 48.8342,
    lng: 2.2526,
    date: "Novembre",
    color: "#9c27b0",
    frenchBestResult: {
      player: "Jo-Wilfried Tsonga",
      result: "Vainqueur (2008)",
      year: 2008
    },
    lastWinner: {
      atp: "Novak Djokovic",
      wta: ""
    }
  },
  
  // ATP 500
  {
    id: 14,
    name: "Rotterdam Open",
    city: "Rotterdam",
    country: "Pays-Bas",
    level: "ATP 500",
    surface: "Dur intérieur",
    lat: 51.9244,
    lng: 4.4777,
    date: "Février",
    color: "#4caf50",
    frenchBestResult: {
      player: "Gaël Monfils",
      result: "Vainqueur (2019, 2020)",
      year: 2020
    },
    lastWinner: {
      atp: "Jannik Sinner",
      wta: ""
    }
  },
  {
    id: 15,
    name: "Dubai Tennis Championships",
    city: "Dubaï",
    country: "Émirats arabes unis",
    level: "ATP 500/WTA 1000",
    surface: "Dur extérieur",
    lat: 25.2048,
    lng: 55.2708,
    date: "Février-Mars",
    color: "#4caf50",
    frenchBestResult: {
      player: "Ugo Humbert",
      result: "Finale (2025)",
      year: 2025
    },
    lastWinner: {
      atp: "Daniil Medvedev",
      wta: "Jasmine Paolini"
    }
  },
  {
    id: 16,
    name: "Halle Open",
    city: "Halle",
    country: "Allemagne",
    level: "ATP 500",
    surface: "Gazon",
    lat: 52.0405,
    lng: 8.3936,
    date: "Juin",
    color: "#4caf50",
    frenchBestResult: {
      player: "Ugo Humbert",
      result: "Vainqueur (2021)",
      year: 2021
    },
    lastWinner: {
      atp: "Alexander Bublik",
      wta: ""
    }
  },
  {
    id: 17,
    name: "Queen's Club Championships",
    city: "Londres",
    country: "Royaume-Uni",
    level: "ATP 500",
    surface: "Gazon",
    lat: 51.4848,
    lng: -0.2141,
    date: "Juin",
    color: "#4caf50",
    frenchBestResult: {
      player: "Nicolas Mahut",
      result: "Vainqueur (2015)",
      year: 2015
    },
    lastWinner: {
      atp: "Carlos Alcaraz",
      wta: ""
    }
  },
  
  // ATP 250 / WTA 250
  {
    id: 18,
    name: "Open 13",
    city: "Marseille",
    country: "France",
    level: "ATP 250",
    surface: "Dur intérieur",
    lat: 43.2696,
    lng: 5.3976,
    date: "Février",
    color: "#ff9800",
    frenchBestResult: {
      player: "Ugo Humbert",
      result: "Vainqueur (2025)",
      year: 2025
    },
    lastWinner: {
      atp: "Ugo Humbert",
      wta: ""
    }
  },
  {
    id: 19,
    name: "Open Sud de France",
    city: "Montpellier",
    country: "France",
    level: "ATP 250",
    surface: "Dur intérieur",
    lat: 43.6045,
    lng: 3.8849,
    date: "Février",
    color: "#ff9800",
    frenchBestResult: {
      player: "Richard Gasquet",
      result: "Vainqueur (2015, 2016, 2022)",
      year: 2022
    },
    lastWinner: {
      atp: "Alexander Bublik",
      wta: ""
    }
  },
  {
    id: 20,
    name: "Open 6ème Sens",
    city: "Lyon",
    country: "France",
    level: "WTA 250",
    surface: "Dur intérieur",
    lat: 45.7578,
    lng: 4.8323,
    date: "Janvier",
    color: "#ff9800",
    frenchBestResult: {
      player: "Caroline Garcia",
      result: "Vainqueur (2022)",
      year: 2022
    },
    lastWinner: {
      atp: "",
      wta: "Danielle Collins"
    }
  }
];

// Catégories de tournois avec couleurs
export const tournamentLevels = [
  { name: "Grand Chelem", color: "#0033a0" },
  { name: "Masters 1000", color: "#9c27b0" },
  { name: "ATP 500/WTA 500", color: "#4caf50" },
  { name: "ATP 250/WTA 250", color: "#ff9800" }
];

// Types de surfaces
export const surfaces = [
  { name: "Dur extérieur", color: "#64b5f6" },
  { name: "Dur intérieur", color: "#9575cd" },
  { name: "Terre battue", color: "#e57373" },
  { name: "Gazon", color: "#81c784" }
];