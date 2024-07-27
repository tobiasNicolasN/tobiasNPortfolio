// 'use client'
// import { createContext, useState, useEffect, ReactNode, useContext } from 'react';

// interface IThemeContextProps {
//   darkMode: boolean;
//   toggleDarkMode: () => void;
// }

// interface IThemeProvider {
//     children: ReactNode
// }

// export const ThemeContext = createContext<IThemeContextProps>({
//   darkMode: false,
//   toggleDarkMode: () => {},
// });

// export const useTheme = () => {
//     const context = useContext(ThemeContext);
//     if (!context) throw new Error('useTheme debe ser usado con un ThemeProvider');
//     return context;
//   };

// export const ThemeProvider = ({ children }: IThemeProvider) => {
//   const [darkMode, setDarkMode] = useState<boolean>(false);

//   useEffect(() => {
//     const savedMode = localStorage.getItem('dark-mode');
//     setDarkMode(savedMode === 'true');
//     document.documentElement.classList.toggle('dark', savedMode === 'true');
//   }, []);

//   const toggleDarkMode = () => {
//     const newMode = !darkMode;
//     setDarkMode(newMode);
//   };

//   return (
//     <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };
