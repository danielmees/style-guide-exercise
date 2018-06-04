import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { colorPallet } from './constants/ColorPallet';
import Button from './components/Button';
import TextBox from './components/TextBox';
import RadioButtons from './components/RadioButtons';
import Card from './components/Card';
import style from './style.css';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      colorChosen: colorPallet[0].colorCode,
      btnTextColor: colorPallet[0].btnTextColor,
    }
  }

  render() {
    return (
      <Grid fluid className={style.container}>
        <Row>
           <Col xs={12} sm={12} md={12}>
             <h3>Please choose the color theme by clicking the buttons below</h3>
           </Col>
        </Row>
        <Row className={style.colorPalletContainer}>
          {colorPallet.map((color) =>
            <Col key={color.id} xs={6} sm={4} md={4}>
              <button
                style={{
                  color: color.btnTextColor,
                  backgroundColor: color.colorCode,
                  outline: (color.colorCode === this.state.colorChosen) ? '2px solid #696969' : 'none'
                }}
                onClick={() => this.setState({ colorChosen: color.colorCode, btnTextColor: color.btnTextColor })}
              >{color.name}</button>
            </Col>
          )}
        </Row>
        <hr />
        <Row>
           <Col xs={6} sm={6} md={6}>
             <h4>DISABLED</h4>
           </Col>
           <Col xs={6} sm={6} md={6}>
             <h4>HOVER / ENABLED</h4>
           </Col>
        </Row>
        <Row>
           <Col xs={12} sm={6} md={6}>
             <Button
               text="Primary Action"
               textColor={this.state.btnTextColor}
               color={this.state.colorChosen}
               disabled={true}
             />
           </Col>
           <Col xs={12} sm={6} md={6}>
             <Button
               text="Primary Action"
               textColor={this.state.btnTextColor}
               color={this.state.colorChosen}
               disabled={false}
             />
           </Col>
        </Row>
        <Row>
           <Col xs={12} sm={6} md={6}>
             <TextBox disabled={true} />
           </Col>
           <Col xs={12} sm={6} md={6}>
             <TextBox disabled={false} />
           </Col>
        </Row>
        <Row>
           <Col xs={12} sm={6} md={6}>
             <RadioButtons color={this.state.colorChosen} disabled={true} />
           </Col>
           <Col xs={12} sm={6} md={6}>
             <RadioButtons color={this.state.colorChosen} disabled={false} />
           </Col>
        </Row>
        <Row>
           <Col xs={12} smOffset={6} sm={6} mdOffset={6} md={6}>
             <Card btncolor={this.state.colorChosen} btnTextColor={this.state.btnTextColor} />
           </Col>
        </Row>
      </Grid>
    );
  }
}
