import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons as Icon} from 'react-native-vector-icons';
import { black } from 'ansi-colors';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameState: [
        [0,0,0],
        [0,0,0],
        [0,0,0]
      ],
      currentPlayer: 1
    }
  }

  componentDidMount() { // porque no se puede setear un estado de un componente que no se ha montado aún. Entonces aquí se inicializa el juego.
    this.initializeGame();
  }

  initializeGame = () => {
    this.setState({ // Cada arreglo es una fila del juego. Cero es el estado inicial.
      gameState: [
        [0,0,0],
        [0,0,0],
        [0,0,0]
      ]
    });
  }

  onTilePress = (row, col) => {
    let currentPlayer = this.state.currentPlayer;

    // Establece la casilla correcta
    let arr = this.state.gameState.slice();
    arr[row][col] = currentPlayer;
    this.setState({gameState: arr});

    // Cambiar a otro jugador
    let nextPlayer = (currentPlayer == 1) ? 2 : 1;
    this.setState({currentPlayer: nextPlayer});
  }

  renderIcon = (row, col) => { // para renderizar los iconos, esta función recibe de parámetros donde se escontrarán los íconos: filas y columnas.
    let value = this.state.gameState[row][col];
    switch(value) { // El condicional switch recibe de parámetro el estado inicial en filas y columnas.
      case 1: return  <Icon name="close" style={styles.titleX}/>;
      case 2: return  <Icon name="circle-outline" style={styles.titleO}/>;
      default: return <View/>; // Si el valor es cero regresará una vista en blanco.
    }
  }

  render() {
    return ( // En cada vista (casilla) se llama la función renderIcon y como argumento la posición de cada casilla en fila y columna.
      <View style={styles.container}>
        <View style={{flexDirection: "row"}}>
          <TouchableOpacity onPress={() => this.onTilePress(0,0)} style={[styles.title, {borderLeftWidth:0, borderTopWidth:0}]}> 
            {this.renderIcon(0,0)} 
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onTilePress(0,1)} style={[styles.title, {borderTopWidth:0}]}>
            {this.renderIcon(0,1)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onTilePress(0,2)} style={[styles.title, {borderRightWidth:0, borderTopWidth:0}]}>
            {this.renderIcon(0,2)}
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: "row"}}>
          <TouchableOpacity onPress={() => this.onTilePress(1,0)} style={[styles.title, {borderLeftWidth:0}]}>
            {this.renderIcon(1,0)}
          </TouchableOpacity>                    
          <TouchableOpacity onPress={() => this.onTilePress(1,1)} style={styles.title}>
            {this.renderIcon(1,1)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onTilePress(1,2)} style={[styles.title, {borderRightWidth:0}]}>
            {this.renderIcon(1,2)}
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: "row"}}>
          <TouchableOpacity onPress={() => this.onTilePress(2,0)} style={[styles.title, {borderLeftWidth:0, borderBottomWidth:0}]}>
            {this.renderIcon(2,0)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onTilePress(2,1)} style={[styles.title, {borderBottomWidth:0}]}>
            {this.renderIcon(2,1)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onTilePress(2,2)} style={[styles.title, {borderBottomWidth:0, borderRightWidth:0}]}>
            {this.renderIcon(2,2)}
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    borderWidth: 10,
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center"
  },

  titleX: {
    color: "red",
    fontSize: 60,
  },

  titleO: {
    color: "green",
    fontSize: 60,
  }
});
