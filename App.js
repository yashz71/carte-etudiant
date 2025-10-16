import React from 'react';
import { StyleSheet, Text, View, Image,ImageBackground } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.headeC}>
<ImageBackground         source={{ uri: 'https://imgs.search.brave.com/geZUcgxhW5c2Bu15U_f9a02RD1ZMEOf3_HumorPBdpw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/MDQuOXJheXRpLmNv/bS9yc3JjL2NhY2hl/L3dpZGVuXzIyNC91/cGxvYWRzLzIwMTIv/MDcvTE9HTy1FTVNJ/LnBuZw' }}
 resizeMode="center" style={styles.emsiLogo}></ImageBackground>
       <Text style={styles.bigTitle}>EMSI MAARIF </Text>
       </View>
       
       <View style={styles.bodyC}>

      <Image
        source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
        style={styles.profileImg}
      /> 
<View style={styles.textC}>
      <Text style={styles.name}>Nom: Zaoui </Text>
      <Text style={styles.name}>Prénom: Yassine</Text>
      <Text style={styles.title}>Année universitaire: 2025/2026</Text>

      </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    display: 'flex',
    flexDirection: 'row',      
    flexWrap:'wrap',
    alignItems: 'center',      
    marginTop: 200,
    backgroundColor: '#f8fafc',
    paddingVertical: 10,
    height: 300,


    

  },
  bigTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom:0,    
    margin: 0,
    padding: 0,

  },
  emsiLogo: {
    width: 120,
    height: 120,
    marginBottom:0,
    marginRight: 10,
    marginLeft: 10,
    

  },
  profileImg: {
    width: 100,
    height: 100,
    margin:0,
    marginRight: 10,

  },
  textC: {
    marginTop:10,
    flexDirection: 'column', 
  },

  bodyC: {
  flexDirection: 'row',      
  alignItems: 'center',      
  padding:0,
  paddingRight: 10,
  paddingLeft:10,
  marginTop: -50, 
  },

  headeC: {
    flexDirection: 'row',      
    alignItems: 'center',      
    justifyContent: 'center',   
    marginTop:0,
    marginLeft:30,
    paddingBottom: 0,
    marginBottom: 0,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0f172a',
    
  },
  title: {
    fontSize: 16,
    color: '#334155',
    marginBottom: 20,
  },
  
});
