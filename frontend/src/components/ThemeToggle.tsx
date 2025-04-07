import { useTheme } from '../contexts/ThemeContext';
import clsx from 'clsx';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={clsx(
        'p-2 rounded-full',
        'bg-gray-200 dark:bg-gray-700',
        'text-gray-700 dark:text-gray-200',
        'hover:bg-gray-300 dark:hover:bg-gray-600',
        'transition-colors'
      )}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}
