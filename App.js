import React from 'react';
import { StyleSheet, Text, View, Alert, TouchableOpacity, Dimensions } from 'react-native';
import Entypo from "@expo/vector-icons/Entypo"

var board = ["","","","","","","","",""]
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default class TicTacToe extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isCross:true
    }
  }
  componentDidMount() {
    this.resetGame();
  }
  drawItem(number){
    if(board[number]=="" && this.winGame()==""){
      if(this.state.isCross)
        board[number] = "star"
      else  
        board[number] = "heart"
      this.setState({isCross:!this.state.isCross})  
      if(this.winGame()!="") {
        Alert.alert(board[number].toUpperCase() + " won The Game")
      }
    }
   
  }
  resetGame = () => {
    this.setState({isCross:true}) 
    board=["","","","","","","","",""]
  }
  chooseItemColor = (number) => {
    if(board[number]=="star")
      return "#E9967A"
    else if(board[number]=="heart")
      return "#6495ED"
      
    return "#74B9FF"  
  }
  winGame = () => {
    if(board[0] != "" && board[0] == board[1] && board[1] == board[2]){
      return board[0]
    }else if(board[3] != "" && board[3] == board[4] && board[4] == board[5]){
      return board[3]
    }else if(board[6] != "" && board[6] == board[7] && board[7] == board[8]){
      return board[6]
    }else if(board[0] != "" && board[0] == board[3] && board[3] == board[6]){
      return board[0]
    }else if(board[1] != "" && board[1] == board[4] && board[4] == board[7]){
      return board[1]
    }else if(board[2] != "" && board[2] == board[5] && board[5] == board[8]){
      return board[2]
    }else if(board[0] != "" && board[0] == board[4] && board[4] == board[8]){
      return board[0]
    }else if(board[2] != "" && board[2] == board[4] && board[4] == board[6]){
      return board[2]
    }else{
      return ""
    }
  }

  render(){
    return (
          <View style={styles.container}>
              <View style={[styles.row]}>
                    <Text style={styles.headerLabel}>Tic-Tac-Toe</Text>
              </View> 
              
              <View style={styles.row}>              
                  <TouchableOpacity style={styles.button} onPress={() => this.drawItem(0)}>
                      <Entypo name={board[0]} size={width*0.2} color={this.chooseItemColor(0)} />
                  </TouchableOpacity>          
                  <TouchableOpacity style={styles.button}  onPress={() => this.drawItem(1)}>
                      <Entypo name={board[1]} size={width*0.2} color={this.chooseItemColor(1)} />
                  </TouchableOpacity>          
                  <TouchableOpacity style={styles.button} onPress={() => this.drawItem(2)}>
                      <Entypo name={board[2]} size={width*0.2} color={this.chooseItemColor(2)} />
                  </TouchableOpacity>          
                  
              </View>              
    
              <View style={styles.row}>              
                  <TouchableOpacity style={styles.button} onPress={() => this.drawItem(3)}>
                      <Entypo name={board[3]} size={width*0.2} color={this.chooseItemColor(3)} />
                  </TouchableOpacity>          
                  <TouchableOpacity style={styles.button}  onPress={() => this.drawItem(4)}>
                      <Entypo name={board[4]} size={width*0.2} color={this.chooseItemColor(4)} />
                  </TouchableOpacity>          
                  <TouchableOpacity style={styles.button} onPress={() => this.drawItem(5)}>
                      <Entypo name={board[5]} size={width*0.2} color={this.chooseItemColor(5)} />
                  </TouchableOpacity>          
                  
              </View>     
                      
              <View style={styles.row}>              
                  <TouchableOpacity style={styles.button} onPress={() => this.drawItem(6)}>
                      <Entypo name={board[6]} size={width*0.2} color={this.chooseItemColor(6)} />
                  </TouchableOpacity>          
                  <TouchableOpacity style={styles.button}  onPress={() => this.drawItem(7)}>
                      <Entypo name={board[7]} size={width*0.2} color={this.chooseItemColor(7)} />
                  </TouchableOpacity>          
                  <TouchableOpacity style={styles.button} onPress={() => this.drawItem(8)}>
                      <Entypo name={board[8]} size={width*0.2} color={this.chooseItemColor(8)} />
                  </TouchableOpacity>          
              </View>              
    
              <View style={styles.row}>   
                  <TouchableOpacity style={styles.resetButton} onPress={()=>this.resetGame()}>
                          {/*<Entypo name="controller-jump-to-start" size={"100%"} color="#2B2B52" />*/}
                          <Text style={styles.resetLabel}>Restart</Text>
                  </TouchableOpacity> 
              </View>               
          </View>
      )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: "row",
    flexWrap: "nowrap",
    width: width * 0.94,
    heigth: 'auto',
    alignItems: "center",
    justifyContent: 'center',
  },
  headerLabel:{
    color: "rgba(112,80,81,1)",
    fontSize: 30,
    fontWeight: "bold",
    textDecorationLine: 'underline',
    fontFamily: 'sans-serif',
    padding: "5%",
  },
  button:{
    margin: "1%",
    width: width * 0.3,
    height: width * 0.3,
    backgroundColor:"rgba(52, 52, 52, 0.1)",
    alignItems: "center",
    justifyContent: 'center',
  },
  resetButton: {
    margin:"5%",
    flexDirection:"row",
    width: width * 0.5,
    height: width * 0.2,
    borderRadius:10,
    backgroundColor:"bisque",
    alignItems: "center",
    justifyContent: 'center',
  },
  resetLabel:{
    color:"#2B2B52",
    fontSize: 20, 
  },
});
