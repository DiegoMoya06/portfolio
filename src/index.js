import { render } from 'react-dom';
import App from './App';
import { ThemeProvider } from './contexts/theme';
import './index.css';
import './utils/i18n';

render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)
