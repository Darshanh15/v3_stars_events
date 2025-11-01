import React from 'react'
import { useAppData } from '../../../context/AppDataProvider';

export default function Cards() {
    //   const { data, loading, error } = useAppData();
   

    //   const { social } = data

    const { data, loading, error } = useAppData();
     if (loading) return <div>Loading…</div>;
  if (error) return <div>Failed to load: {error.message}</div>;
  if (!data) return null;
    const { social, logistics = {} } = data ?? {};
// const { social } = data; // ✅ safe now
  return (
    <>
     <div>{social.instagram}</div>
     <div>{social.facebook}</div>
     <div>{social.twitter}</div>
     <div>{social.linkedin}</div>
     <div>{social.youtube}</div>

     {/* <div>{logistics.dateLabel}</div> */}
     
    </>
  )
}

