// import React, { createContext, useContext, useEffect, useState } from "react";

// const AppDataContext = createContext(null);

// export function AppDataProvider({ children }) {
//   const [data, setData] = useState(null);     // { organizer, logistics, social }
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch once (from public/app-data.json or your API)
//   useEffect(() => {
//     const url = "/app-data.json"; // change to your API endpoint if needed
//     fetch(url)
//       .then((r) => {
//         if (!r.ok) throw new Error(`HTTP ${r.status}`);
//         return r.json();
//       })
//       .then((json) => setData(json))
//       .catch((e) => setError(e))
//       .finally(() => setLoading(false));
//   }, []);

//   return (
//     <AppDataContext.Provider value={{ data, loading, error }}>
//       {children}
//     </AppDataContext.Provider>
//   );
// }

// export function useAppData() {
//   const ctx = useContext(AppDataContext);
//   if (!ctx) throw new Error("useAppData must be used inside <AppDataProvider>");
//   return ctx;
// }


import React, { createContext, useContext, useEffect, useState } from "react";

const AppDataContext = createContext(null);

export function AppDataProvider({ children }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/app-data.json") // because your file is in /public
      .then(r => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  return (
    <AppDataContext.Provider value={{ data, loading, error }}>
      {children}
    </AppDataContext.Provider>
  );
}

export function useAppData() {
  const ctx = useContext(AppDataContext);
  if (!ctx) throw new Error("useAppData must be used inside <AppDataProvider>");
  return ctx;
}
