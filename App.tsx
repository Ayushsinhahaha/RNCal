import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Header from './src/component/Header';

const width = Dimensions.get('window').width;

const App = () => {
  const [result, setResult] = useState('');
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('');
  const [calculation, setCalculation] = useState('');

  const handleNum = num => {
    if (!operator) {
      setNum1(num1 + num.toString());
      setCalculation(num1 + num.toString());
    } else {
      setNum2(num2 + num.toString());
      setCalculation(num1 + operator + num2 + num.toString());
    }
  };

  const handleOperator = op => {
    if (num1) {
      setOperator(op);
      setCalculation(num1 + op);
    }
  };

  const handleResult = () => {
    let res;
    switch (operator) {
      case '+':
        res = Number(num1) + Number(num2);
        break;
      case '-':
        res = Number(num1) - Number(num2);
        break;
      case '*':
        res = Number(num1) * Number(num2);
        break;
      case '/':
        res = Number(num1) / Number(num2);
        break;
    }
    setResult(res.toString());
    setNum1('');
    setNum2('');
    setOperator('');
    setCalculation(num1 + operator + num2 + num1.toString());
  };

  const handleClear = () => {
    setResult('');
    setNum1('');
    setNum2('');
    setOperator('');
    setCalculation('');
  };

  return (
    <>
      <Header title={'Calculator'} />
      <SafeAreaView style={styles.container}>
        <View style={styles.monitor}>
          <Text style={styles.monitorText}>
            {num1} {operator} {num2} 
            {/* {operator && num2 ? '=' : ''} */}
            {}
          </Text>
          <Text style={styles.resultText}>{result}</Text>
        </View>
        {/* row 1 */}
        {/* <View style={styles.row}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>( )</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>/</Text>
          </TouchableOpacity>
        </View> */}
        {/* row2 */}
        <View style={styles.row}>
          <TouchableOpacity onPress={() => handleNum(7)} style={styles.button}>
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNum(8)} style={styles.button}>
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNum(9)} style={styles.button}>
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleOperator('/')}
            style={styles.button}>
            <Text style={styles.buttonText}>/</Text>
          </TouchableOpacity>
        </View>
        {/* row3 */}
        <View style={styles.row}>
          <TouchableOpacity onPress={() => handleNum(4)} style={styles.button}>
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNum(5)} style={styles.button}>
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNum(6)} style={styles.button}>
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleOperator('*')}
            style={styles.button}>
            <Text style={styles.buttonText}>*</Text>
          </TouchableOpacity>
        </View>
        {/* row4 */}
        <View style={styles.row}>
          <TouchableOpacity onPress={() => handleNum(1)} style={styles.button}>
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNum(2)} style={styles.button}>
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNum(3)} style={styles.button}>
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleOperator('-')}
            style={styles.button}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
        {/* row 5 */}
        <View style={styles.row}>
          <TouchableOpacity onPress={() => handleNum(0)} style={styles.button}>
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleClear()} style={styles.button}>
            <Text style={styles.buttonText}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              handleResult();
            }}
            style={styles.button}>
            <Text style={styles.buttonText}>=</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleOperator('+')}
            style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'grey',
    justifyContent: 'flex-end',
  },
  monitor: {
    backgroundColor: 'lightgrey',
    width: width - 20,
    height: 70,
    marginBottom: 10,
    borderRadius: 20,
    borderWidth: 2,
  },
  monitorText: {
    fontSize: 40,
    textAlign: 'right',
    right:10
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  button: {
    width: width / 5,
    height: width / 5,
    borderWidth: 1,
    backgroundColor: '#000',
    margin: 5,
    borderRadius: 55,
    justifyContent: 'center',
    borderColor: 'dodgerblue',
  },
  buttonText: {
    fontSize: 32,
    color: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  resultText:{
    fontSize: 38,
    color: 'dodgerblue',
    textAlign: 'right',
    fontWeight: 'bold',
    bottom:48,
    right:14

  }
});
