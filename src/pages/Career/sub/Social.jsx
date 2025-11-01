// import React from 'react'
// import { useAppData } from "@/context/AppDataProvider";

// export default function Social() {
// const { data, loading, error } = useAppData();

//   return (
//     <>
    


//     <div>{data.logistics.dateLabel}</div>  
//     <div>{data.logistics.timeLabel}</div>  
//     <div>{data.logistics.venueLabel}</div>  
//     <div>{data.logistics.mapUrl}</div>  

//     </>
//   )
// }

// import React from "react";
// import { useAppData } from "@/context/AppDataProvider";

// export default function Social() {
//   const { data, loading, error } = useAppData();

//   if (loading) return <p>Loading data...</p>;
//   if (error) return <p>Failed to load data: {error.message}</p>;
//   if (!data) return <p>No data available</p>;

//   const { logistics } = data;

//   return (
//     <>
//       <div>{logistics.dateLabel}</div>
//       <div>{logistics.timeLabel}</div>
//       <div>{logistics.venueLabel}</div>
//       <div>
//         <a href={logistics.mapUrl} target="_blank" rel="noopener noreferrer">
//           View on Map
//         </a>
//       </div>
//     </>
//   );
// }


import React from "react";
// ⬇️ go up three levels from pages/Career/sub to reach src/context
import { useAppData } from "../../../context/AppDataProvider";

export default function Social() {
  const { data, loading, error } = useAppData();

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>Failed to load data: {error.message}</p>;
  if (!data) return <p>No data available</p>;

//   const { logistics } = data;
 const { social, organizer, logistics } = data; 
  return (
    <>
      <div>{logistics.dateLabel}</div>
      <div>{logistics.timeLabel}</div>
      <div>{logistics.venueLabel}</div>
      <div>{logistics.name}</div>
      <div>{logistics.link[0].name}</div>


      {/* {logistics.link.map((item, index) => (
  <div key={index}>{item.name}</div>
))} */}

{/* {logistics.link?.map((item, index) => (
  <div key={index}>{item.name}</div>
))} */}
     
      <div>
        <a href={logistics.mapUrl} target="_blank" rel="noopener noreferrer">
          View on Map
        </a>
      </div>
    </>
  );
}
