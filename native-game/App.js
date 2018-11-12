import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons as Icon} from 'react-native-vector-icons';
import { black } from 'ansi-colors';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameState: [],
      currentPlayer: "player1"
    }
  }

  componentDidMount() { // porque no se puede setear un estado de un componente que no se ha montado aún. Entonces aquí se inicializa el juego.
    this.initializeGame();
  }

  initializeGame = () => {
    this.setState({
      gameState: [
        [0,0,0],
        [0,0,0],
        [0,0,0]
      ]
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection: "row"}}>
          <View style={[styles.title, {borderLeftWidth:0, borderTopWidth:0}]}>
            <Icon name="close" style={styles.titleX}/>
          </View>
          <View style={[styles.title, {borderTopWidth:0}]}>
            <Icon name="circle-outline" style={styles.titleO}/>  
          </View>
          <View style={[styles.title, {borderRightWidth:0, borderTopWidth:0}]}/>
        </View>

        <View style={{flexDirection: "row"}}>
          <View style={[styles.title, {borderLeftWidth:0}]}/>
          <View style={styles.title}/>
          <View style={[styles.title, {borderRightWidth:0}]}/>
        </View>

        <View style={{flexDirection: "row"}}>
          <View style={[styles.title, {borderLeftWidth:0, borderBottomWidth:0}]}/>
          <View style={[styles.title, {borderBottomWidth:0}]}/>
          <View style={[styles.title, {borderBottomWidth:0, borderRightWidth:0}]}/>
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
