import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Button from './src/componentes/Button';
import Display from './src/componentes/Display';

const initState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  indexValue: 0,
}
export default class App extends Component {
  state = { ...initState }

  addValue = n => {

    const clearDisplay = 
      this.state.displayValue === '0' || this.state.clearDisplay;

    if (n === '.' && !clearDisplay && this.state.displayValue.includes('.'))
      return;

    const currentValue = clearDisplay ? '' : this.state.displayValue;
    const displayValue = currentValue + n;
    this.setState({ displayValue, clearDisplay: false });

    if (n !== '.') {
      const newValue = parseFloat(displayValue);
      const values = [...this.state.values];
      values[this.state.indexValue] = newValue;
      this.setState({ values });
    }

  }

  clearMemory = () => {
    this.setState({ ...initState });
  }

  setOperation = operation => {
    
    if (this.state.indexValue === 0) {
      this.setState({ operation, indexValue: 1, clearDisplay: true });
      return;
    }

    const equals = operation === '=';
    const values = [...this.state.values];

    try {
      values[0] = eval(`${values[0]} ${this.state.operation} ${values[1]}`)
    } catch (e) {
      values[0] = this.state.values[0];
    }
    values[1] = 0;
    this.setState({
      displayValue: `${values[0]}`,
      operation: equals ? null : operation,
      indexValue: equals ? 0 : 1,
      clearDisplay: true,
      values
    });
  }

  render() {
    return (
      <View styles={styles.container}>
        <Display valor={this.state.displayValue}></Display>
        <View style={styles.buttons}>
          <Button label="AC" isTriple={true} onClick={this.clearMemory} />
          <Button label="/" isOperation={true} onClick={() => this.setOperation('/')} />
          <Button label="7" onClick={() => this.addValue('7')} />
          <Button label="8" onClick={() => this.addValue('8')} />
          <Button label="9" onClick={() => this.addValue('9')} />
          <Button label="*" isOperation={true} onClick={() => this.setOperation('*')} />
          <Button label="4" onClick={() => this.addValue('4')} />
          <Button label="5" onClick={() => this.addValue('5')} />
          <Button label="6" onClick={() => this.addValue('6')} />
          <Button label="-" isOperation={true} onClick={() => this.setOperation('-')} />
          <Button label="1" onClick={() => this.addValue('1')} />
          <Button label="2" onClick={() => this.addValue('2')} />
          <Button label="3" onClick={() => this.addValue('3')} />
          <Button label="+" isOperation={true} onClick={() => this.setOperation('+')} />
          <Button label="0" isDouble={true} onClick={() => this.addValue('0')} />
          <Button label="." onClick={() => this.addValue('.')} />
          <Button label="=" isOperation={true} onClick={() => this.setOperation('=')} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});
