import React, { createContext, useState } from 'react';

export const ParcelContext = createContext();

export const ParcelProvider = ({ children }) => {
  const [parcelName, setParcelName] = useState('');

  return (
    <ParcelContext.Provider value={{ parcelName, setParcelName }}>
      {children}
    </ParcelContext.Provider>
  );
};