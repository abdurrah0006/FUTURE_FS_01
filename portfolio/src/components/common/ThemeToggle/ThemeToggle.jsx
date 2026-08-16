import { useTheme } from "../../../context/ThemeContext";
import "./ThemeToggle.css";

const themeOptions = [
  { id: "purple", label: "Purple", className: "theme-purple" },
  { id: "blue", label: "Blue", className: "theme-blue" },
  { id: "rose", label: "Rose", className: "theme-rose" },
  { id: "dark", label: "Dark", className: "theme-dark" }
];

function ThemeToggle() {
  const { theme, changeTheme } = useTheme();

  return (
    <div className="theme-toggle">
      <div className="theme-toggle-options" role="group" aria-label="Choose color theme">
        {themeOptions.map((option) => (
          <button
            key={option.id}
            type="button"
            className={`theme-option ${option.className} ${theme === option.id ? "active" : ""}`}
            onClick={() => changeTheme(option.id)}
            aria-label={`Use ${option.label} theme`}
            aria-pressed={theme === option.id}
            title={option.label}
          >
            <span className="theme-option-dot" />
          </button>
        ))}
      </div>
    </div>
  );
}

export default ThemeToggle;