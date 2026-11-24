import React from 'react';
import StudioItem from './StudioItem';

export default function StudiosList ({ studios }) {
  if (!studios.length) {
    return <p>No studios found.</p>;
  }

  return (
    <ul>
      {studios.map(studio => (
        <StudioItem key={studio.id} studio={studio} />
      ))}
    </ul>
  );
}
