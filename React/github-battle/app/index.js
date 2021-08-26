
import React from 'react';
import ReactDOM from 'react-dom';
import Popular from './components/Popular';
import Battle from './components/Battle';
import { ThemeProvider } from './contexts/theme';
import './index.css';

class App extends React.Component {
  state = {
    theme: 'light',
    toggleTheme: () => {
      this.setState(({theme}) => ({
        theme: theme === 'light' ? 'dark' : 'light'
      }))
    }
  }

  render() {
    return (
      <ThemeProvider value={this.state}>
        <div className="container">
          <Battle />
        </div>
      </ThemeProvider>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
