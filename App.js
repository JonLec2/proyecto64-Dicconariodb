import * as React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground} from 'react-native';
import dictionary from './db';


export default class App extends React.Component {

  constructor(){
    super()

    this.state={
      text1:'', 
      word:'',
      lexicalcategory:'', 
      definition: '', 
      isSearchPressed: false, 
      aviso:'Escribe una palabra', 
    }
  }

  getWord= (word)=>{
  var word1=word.toLowerCase()

  try{
    var word=dictionary[word1]["word"]
    var lexicalCategory=dictionary[word1]["lexicalCategory"]
    var definition=dictionary[word1]["definition"]

this.setState({
  "word":word,
  "lexicalcategory":lexicalCategory,
  "definition": definition,
  "aviso": 'Palabra encontrada ✅', 
})
  }

  catch(err){
    alert("Perdon esta palabra aun no se encuentra en nuestro diccionario")
    this.setState({
      'text':'',
      'isSearchPressed':false
    })
  }

  }


  render(){
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

<ImageBackground source={{uri:'https://thumbs.dreamstime.com/b/icono-del-diccionario-idioma-extranjero-estilo-plano-123874838.jpg'}} resizeMode="contain" style={styles.imageback}>  
   <View style={styles.header}>
<Text style={styles.textheader}>Diccionario</Text>
   </View>
     
      <Text style={styles.aviso}>Busca la palabra</Text>
      
<TextInput style={styles.BoxInput}  onChangeText={(text1)=>{
this.setState({
  text1: text1,
  isSearchPressed:false, 
  word: "",
  lexicalcategory:"",
  definition:"",
  aviso:"Escribe una palabra"
});


}}
value={this.state.text1}
/>

<TouchableOpacity style={styles.button}
onPress={()=>{
  this.setState({isSearchPressed: true});
  this.getWord(this.state.text1)
}}
><Text style={styles.textbuton}>Buscar</Text></TouchableOpacity>

<View style={styles.containeraviso}>
<Text  style={styles.avisotext}>{this.state.aviso}</Text>
</View>

<View style={styles.container2}>
<View style={styles.textinformation}>
  <View style={styles.grid}>
<Text style={styles.categoria}> Word: {""}</Text>
<Text style={styles.textdefinition}>{this.state.word}</Text>
</View>

<View  style={styles.grid}>
<Text style={styles.categoria} > Type: {""}</Text>
<Text style={styles.textdefinition}>{this.state.lexicalcategory}</Text>
</View>

<View style={styles.grid}>
<Text style={styles.categoria}>Definition:{""}</Text>
<Text  style={styles.textdefinition}>{this.state.definition}</Text>
</View>

</View>

</View>
</ImageBackground>

    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff8dc',
    
  },

  imageback:{
   
  },

  header:{
backgroundColor:'#a9a9a9',
width:'100%', 
height:'11%',
alignItems:"center", 
marginBottom:20, 
alignSelf:"center",

  },

  textheader:{
color:"white",
fontSize:20, 
fontWeight:"bold", 
marginTop:40,

  },

containeraviso:{
  backgroundColor:"#008b8b8f",
  width: 330,
  height:35,
  borderRadius:20,
  marginBottom:20,
  alignSelf:"center",
  justifyContent:"center",
},

  aviso:{
    fontSize:20,
    marginBottom:20,
    alignSelf:"center",
  },

BoxInput:{
height:30, 
width:200, 
borderWidth:2,
backgroundColor:"white", 
marginBottom:25, 
borderRadius:10,
paddingLeft:12,
alignSelf:"center",

},

button:{
  backgroundColor:"#008b8bef",
   width:200, 
   justifyContent:"center",
   alignItems:"center",
   height:60, 
   borderRadius:20, 
   borderWidth:2,
   borderColor: '#00ced1ab',
   marginBottom:20,
   alignSelf:"center",
  
},
textbuton:{
  fontSize:25,
  color:"white"
  
},

avisotext:{
  fontSize:19,
  textAlign:"center",
  color:"white",

},

container2:{
  backgroundColor:"#808080af",
  width: 330,
  borderRadius:20,
  flexDirection:"column",
  height: 400,
  alignSelf:"center",
  
},

textinformation:{
marginTop:30,
},

grid:{
  flexDirection: "row",
  flexWrap: "wrap",
 marginBottom:7,
  height:'16%',
  marginLeft:12,

},

categoria:{
  fontSize:20,
  fontWeight:"bold",
  color:"white"
},

textdefinition:{
  fontSize:20,
  textAlign:"justify",
paddingRight:20,
paddingLeft:5,
color:"white"
  
}


});
