import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking,Image,Button } from 'react-native';
import AlbumList from "../components/AlbumList";
import Buttonnav from "../components/BottomNaver";


const Header = ({ navigation }) => {
    return (
      <View style={styles.bigStyle}>
    <View style={styles.viewStyle}>
        <View style={styles.headerStyle}>
            <View style = {{flexDirection:"row", alignItems: 'center',}}>
                <Image
                    source={{
                        uri:"https://raw.githubusercontent.com/Singularity-v/my_book_pics/master/drawable-xhdpi/camera.png"
                    }}
                    style = {styles.ImageClass}/>
                <Image
                    source={{
                        uri:"https://raw.githubusercontent.com/Singularity-v/my_book_pics/master/drawable-xhdpi/ig.png"
                    }}
                    style = {{width:84,height:23,marginTop:4,marginLeft:4}}/>
            </View>
        <TouchableOpacity 
            onPress={() =>navigation.push('Message')}>
        <Image
            source={{
                uri: "https://raw.githubusercontent.com/Singularity-v/my_book_pics/master/drawable-xhdpi/send_top.png"
            }}
            style = {styles.ImageClass}/>
        </TouchableOpacity>
        </View>
        </View>

        <View>
            <AlbumList />
        </View>
        <View>
        <Buttonnav />
        </View>

    </View>
    
    );
};

const styles = StyleSheet.create({
    bigStyle:{
        flex:1,
    },
      viewStyle: {
    　zIndex:0,
      backgroundColor: '#FAFAFA',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: "row",
      height:75,
      paddingTop:20,

      shadowColor:"#4d000000",
      shadowOffset:{width:0,height:1},
      shadowOpacity:0.2,

      elevation:6
    },
    headerStyle: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: "row",

        width:344,

    },
    ImageClass:{
        width:40,
        height:40,
    },
    textStyle: {
    　fontSize: 20,
    　fontFamily:"Roboto",
    　fontWeight:"bold",
    　color:"#ffffff",
    　lineHeight:24,
    },

    box:{
        backgroundColor:"#FAFAFA",
        height:56,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-around',
        
        elevation:5,
    },
    iconStyle:{
        width:40,
        height:40,
    },
   center:{
    alignItems: 'center',
    justifyContent:'center',
   },
});

export default Header;