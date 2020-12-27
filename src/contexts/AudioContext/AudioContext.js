import { createContext } from 'react';

export const AudioContextContext= createContext();

export AudioContextProvider = ({ children }) => (
  <AudioContextContext.Provider>
    {children}
  </AudioContextContext.Provider>
)
