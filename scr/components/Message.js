import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity  } from 'react-native';
import MessageDetail from '../json/MessageDetail.json';


const Message = ({ navigation }) => {
    return (
    <View>
        <View style={styles.viewStyle}>
            <View style={styles.headerStyle}>
                <View style = {{flexDirection:"row", alignItems: 'center',}}>
                    <TouchableOpacity 
                        onPress={() =>navigation.goBack()}>
                    <Image
                        source={{
                            uri:"https://raw.githubusercontent.com/Singularity-v/my_book_pics/master/drawable-xhdpi/Group%2039.png"
                        }}
                        style = {styles.ImageClass}/>
                    </TouchableOpacity>
                    <Text style = {styles.name}>crystalwu113</Text>
                    <Image
                        source={{
                            uri:"https://raw.githubusercontent.com/Singularity-v/my_book_pics/master/drawable-xhdpi/Group%2040.png"
                        }}
                        style = {{width:24,height:24}}/>
                </View>
                <View style = {{flexDirection:"row", alignItems: 'center',}}>
                    <TouchableOpacity 
                        onPress={() => Linking.openURL("https://www.youtube.com/watch?v=dqRZDebPIGs")}>
                    <Image
                        source={{
                            uri: "https://raw.githubusercontent.com/Singularity-v/my_book_pics/master/drawable-xhdpi/Group%2037.png"
                        }}
                        style = {styles.ImageClass}/>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={() => Linking.openURL("https://www.youtube.com/watch?v=dqRZDebPIGs")}>
                    <Image
                        source={{
                            uri: "https://raw.githubusercontent.com/Singularity-v/my_book_pics/master/drawable-xhdpi/Group%2038.png"
                        }}
                        style = {styles.ImageClass}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        <ScrollView >
            <View  style = {styles.bodyStyle}>
                <View style={styles.search_boxStyle}>
                    <Image
                        style={{width:28,height:28}}
                        source={{uri:"https://raw.githubusercontent.com/Singularity-v/my_book_pics/master/drawable-xhdpi/Group%2041.png"}}
                    />
                    <Text  style={styles.search_TextStyle}>搜尋</Text>
                </View>
                <View>
                    <Text  style={styles.TextStyle}>訊息</Text>
                </View>
                <View style={styles.barStyle}>
                    <View style={styles.outStyle}>
                    <Image
                        style={styles.head}
                        source={{uri:MessageDetail[0].head}}
                    />
                    <View style={styles.wordsStyle}>
                        <Text  style={styles.barTextStyle}>{MessageDetail[0].name}</Text>
                        <Text  style={styles.barTextStyle}>{MessageDetail[0].text}</Text>
                    </View>
                    </View>
                    <Image
                        style={styles.iconStyle}
                        source={{uri:MessageDetail[0].image}}
                    />
                </View>
                <View style={styles.barStyle}>
                    <View style={styles.outStyle}>
                    <Image
                        style={styles.head}
                        source={{uri:MessageDetail[1].head}}
                    />
                    <View style={styles.wordsStyle}>
                        <Text  style={styles.barTextStyle}>{MessageDetail[1].name}</Text>
                        <Text  style={styles.barTextStyle}>{MessageDetail[1].text}</Text>
                    </View>
                    </View>
                    <Image
                    style={styles.iconStyle}
                    source={{uri:MessageDetail[1].image}}
                    />
                </View>
                <View style={styles.barStyle}>
                    <View style={styles.outStyle}>
                    <Image
                        style={styles.head}
                        source={{uri:MessageDetail[2].head}}
                    />
                    <View style={styles.wordsStyle}>
                        <Text  style={styles.barTextStyle}>{MessageDetail[2].name}</Text>
                        <Text  style={styles.barTextStyle}>{MessageDetail[2].text}</Text>
                    </View>
                    </View>
                    <Image
                    style={styles.iconStyle}
                    source={{uri:MessageDetail[2].image}}
                    />
                </View>
                <View style={styles.barStyle}>
                    <View style={styles.outStyle}>
                    <Image
                        style={styles.head}
                        source={{uri:MessageDetail[3].head}}
                    />
                    <View style={styles.wordsStyle}>
                        <Text  style={styles.barTextStyle}>{MessageDetail[3].name}</Text>
                        <Text  style={styles.barTextStyle}>{MessageDetail[3].text}</Text>
                    </View>
                    </View>
                    <Image
                    style={styles.iconStyle}
                    source={{uri:MessageDetail[3].image}}
                    />
                </View>
                <View style={styles.barStyle}>
                    <View style={styles.outStyle}>
                    <Image
                        style={styles.head}
                        source={{uri:MessageDetail[4].head}}
                    />
                    <View style={styles.wordsStyle}>
                        <Text  style={styles.barTextStyle}>{MessageDetail[4].name}</Text>
                        <Text  style={styles.barTextStyle}>{MessageDetail[4].text}</Text>
                    </View>
                    </View>
                    <Image
                    style={styles.iconStyle}
                    source={{uri:MessageDetail[4].image}}
                    />
                </View>

            </View>
        </ScrollView>

        <View style={styles.box}>
            <View style={styles.center}>
            <Image
                style={styles.iconStyle}
                source={{uri:"https://raw.githubusercontent.com/Singularity-v/my_book_pics/master/drawable-xhdpi/Group%2043.png"}}
            />
            <Text  style={styles.camStyle}>相機</Text>
            </View>
            
        </View>
    </View>

    );
};

const styles = StyleSheet.create({
    viewStyle: {
    　zIndex:0,
    
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: "row",
      
      paddingTop:20,

      shadowColor:"#4d000000",
      shadowOffset:{width:0,height:1},
      shadowOpacity:0.2,

     
    },
    headerStyle: {
        backgroundColor: '#FAFAFA',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: "row",
       borderBottomWidth:1,
       borderColor:"#C7C7C7",
        height:56,
        width:360,
    },
    ImageClass:{
        width:40,
        height:40,
    },
    name: {
        
    　fontSize: 14,
    　fontFamily:"Roboto",
    　fontWeight:"bold",
    　color:"black",
      marginLeft:16
    },

    bodyStyle:{
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom:25,
    },
    search_boxStyle:{
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection:"row",
        borderWidth:1,
       
        height:30,
        width:340,
        borderColor:"#C7C7C7",
        borderRadius:3,
        marginTop:16,
        paddingRight:10,
        paddingRight:9,
    },
    TextStyle:{
        width:340,
        marginTop:20,
        fontWeight:"bold",
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },
    barStyle:{
        width:340,
        marginTop:20,
        flexDirection:"row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    head:{
        width:60,
        height:60,
    },
    outStyle:{
        flexDirection:"row",
        alignItems: "center",
    },
    wordsStyle:{
        marginLeft:15,
    },
    barTextStyle:{
        fontWeight:"bold",
    },


    box:{
        backgroundColor:"#FAFAFA",
        height:56,
        flexDirection:'row',
        alignItems: 'center',
        borderTopWidth:1,
        borderColor:"#C7C7C7",
        justifyContent:'space-around',
        

    },
    iconStyle:{
        width:40,
        height:40,
    },
   center:{
       width:1000,
        alignItems: 'center',
        justifyContent:'center',
        flexDirection:"row"
   },
   camStyle:{
       color:"#0095F6"
   }
});
export default Message;