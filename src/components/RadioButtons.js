import React, { Component , PropTypes } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import style from './style.css'

class RadioButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '2',
    }
  }

  handleChange(event) {
    if (!this.props.disabled) {
      this.setState({ value: event.target.value });
    }
  };

  render() {
    const theme = createMuiTheme({
      palette: {
        primary: { main: this.props.color },
      },
    });

    return (
      <div className={style.radioButtonContainer}>
        <MuiThemeProvider theme={theme}>
          <RadioGroup
            style={{ opacity: (this.props.disabled) ? 0.6 : 1 }}
            value={this.state.value}
            onChange={ (event) => this.handleChange(event) }
          >
          <FormControlLabel value='1' control={<Radio color="primary" />} label="Radio Button" />
          <FormControlLabel value='2' control={<Radio color="primary" />} label="Radio Button" />
          </RadioGroup>
          </MuiThemeProvider>
      </div>

    );
  }
}

RadioButtons.propTypes = {
  color: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default RadioButtons;
