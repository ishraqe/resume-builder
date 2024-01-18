import { RefObject, createContext, useContext } from "react";

export interface IThemeContextValue {
  theme: string;
  setTheme: (theme: string) => void;
  myRef: RefObject<any> | undefined;
}

export const ThemeContext = createContext<IThemeContextValue>({
  theme: "teal",
  setTheme: () => {},
  myRef: undefined
});
export const useThemeContext = () => {
  return useContext(ThemeContext);
};
