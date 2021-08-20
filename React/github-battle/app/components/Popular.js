import React from 'react';

const LanguagesNav = ({selected, onUpdateLanguage}) => (
  <ul className='flex-center'>
    {languages.map(language => (
      <li key={language}>
        <button 
          className='btn-clear nav-link'
          style={language === selected ? {color: 'rgb(187, 46, 31)'} : null}
          onClick={(() => onUpdateLanguage(language))}
        >
          {language}
        </button>
      </li>
    ))}
  </ul>
);

const languages = [
  'All',
  'Javascript',
  'Ruby',
  'Java',
  'CSS',
  'Python'
];

class Popular extends React.Component {
  state = {
    selectedLanguage: 'All'
  }

  updateLanguage(selectedLanguage) {
    this.setState({
      selectedLanguage
    });
  }

  render() {
    const {selectedLanguage} = this.state;

    return (
      <React.Fragment>
        <LanguagesNav
          selected={selectedLanguage}
          onUpdateLanguage={this.updateLanguage.bind(this)}
        />
      </React.Fragment>
    )
  }
}

export default Popular;
