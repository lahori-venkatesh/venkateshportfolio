import { useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

function getSystemTheme(): Theme {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }
  return "light";
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check for saved theme preference
    const saved = localStorage.getItem("theme") as Theme | null;
    return saved || "system";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    
    if (theme === "system") {
      const systemTheme = getSystemTheme();
      root.classList.remove("light", "dark");
      root.classList.add(systemTheme);
    } else {
      root.classList.remove("light", "dark");
      root.classList.add(theme);
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return { theme, setTheme };
}
