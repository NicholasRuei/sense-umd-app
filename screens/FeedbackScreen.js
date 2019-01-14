import React, { Component } from "react"
import {
    View, 
    Text,
    StyleSheet,
    Image
} from "react-native"

import { Container, Content, Header, Left, Right, Icon} from 'native-base'

import { ExpoConfigView } from '@expo/samples'
import Swiper from 'react-native-swiper'


export class FeedbackScreen extends React.Component {

static navigationOptions = {
    title: 'Home',
    headerStyle: {
        backgroundColor: '#b70000',
    },
    headerTitleStyle: {
        fontWeight: 'bold',
        color: 'white',
    },
    headerLeft: 
    <Icon name = "md-menu" style = {{ color: 'white'}} />
    ,
    headerLeftContainerStyle: {
        paddingLeft: 15
    },
  };
    
  render(){
        return(
            <Container style = {{overflow: 'hidden'}}>
                <Content style={{ backgroundColor: '#d5d5d6'}}> 
                    {/*This View style is responsible for the white border that surrounds the text*/}
                    <View style= {{backgroundColor: 'white', flex: 1, borderRadius: 10, width: '95%', alignSelf: 'center'}}>
                        <View style={{ height: 100, justifyContent: 'center', alignItems: 'center', paddingTop: 10}}>
                            <Text style = {{fontFamily: 'BebasNeue', fontSize: 100}}> SENSE</Text>
                        </View>
                            <Swiper
                            autoplay={true}
                            style={{height:250}}
                            >
                            <View style= {{flex:1, alignItems: 'center'}}>
                            <Image 
                                // style={{ flex: 1, height: null, width: null, resizeMode: 'contain'}}
                                style= {styles.swipeImages}
                                source={require('../assets/images/testudo.jpg')} />
                            </View>
                            <View style= {{flex:1, alignItems: 'center'}}>
                            <Image 
                                style={styles.swipeImages}
                                source={require('../assets/images/umd.jpg')} />   
                            </View>
                            <View style= {{flex:1, alignItems: 'center'}}>
                            <Image 
                                style={styles.swipeImages}
                                source={require('../assets/images/nature.jpg')} />
                            </View>
                            </Swiper>
                        <Text style= {styles.forHeader}>Who are we?</Text> 
                            <Text style = {styles.forBody}>SENSE is a student research project developed at University of Maryland
                             that monitors weather, air pollution, and greenhouse gases with low-cost, 
                             high-density smart sensors in an urban environment.</Text>
                        <Text style = {styles.forHeader}>Why SENSE?</Text> 
                            <Text style = {styles.forBody}>The current monitoring approach typically consists of high-accuracy but 
                            high-cost instruments, which limits their wide-spread use.</Text>
                        <Text style = {styles.forHeader}>Our Idea</Text>
                            <Text style = {styles.forBody}>Using low-cost moderate-precision sensors in a smart network to quantify 
                            the spatial characteristics of air pollution gases and GHGs</Text>

                            <Text style = {styles.forBody}>Engaging the community through real-time information display/feedback via 
                            web and cell phone apps</Text>

                            <Text style = {styles.forBody}>Empowering individuals and groups for action</Text>

                            <Text></Text>
                    </View> 
                        <View style = {{backgroundColor: 'purple', flex: 1, borderRadius: 10, width: '95%', alignSelf: 'center'}}>
                        <View style={{ height: 100, justifyContent: 'center', alignItems: 'center', paddingTop: 10,}}>
                                <Text style = {{fontFamily: 'BebasNeue', fontSize: 100}}> SENSE</Text>
                        </View>
                            <View style= {{flex: 1, alignItems: 'center'}}>
                                <Text style = {styles.headerLearning}>Measurement Techniques:</Text>
                                <Image 
                                    style= {styles.images}
                                    source={require('../assets/images/raspberry_pi.png')} />
                                <Text style = {styles.forBody}>-Instrumentation</Text>
                                <Text style = {styles.forBody}>-Electronics</Text>
                                <Text style ={styles.forBody}>-Networking/Communicaton</Text>
                            </View>
                            <View style= {{flex: 1, alignItems: 'center'}}>
                                <Text style = {styles.headerLearning}>Data Collection and Analysis:</Text>
                                <Image 
                                    style= {styles.images}
                                    source={require('../assets/images/programming.png')} />
                                <Text style = {styles.forBody}> -Python </Text>
                                <Text style = {styles.forBody}> -C </Text>
                                <Text style = {styles.forBody}> -Fortran </Text>
                            </View>
                            <View style= {{flex: 1, alignItems: 'center'}}>
                                <Text style = {styles.headerLearning}>Modeling:</Text>
                                <Image 
                                    style= {styles.images}
                                    source={require('../assets/images/co2.png')} />
                                <Text style = {styles.forBody}>-Mesoscale atmospheric monitoring</Text>
                                <Text style = {styles.forBody}>-Carbon cycle/chemistry models</Text>
                                <Text style = {styles.forBody}>-Data Assimilation</Text>
                            </View>
                            <View style= {{flex: 1, alignItems: 'center'}}>
                                <Text style = {styles.headerLearning}>Outreach/Management/Leadership:</Text>
                                <Image 
                                    style= {styles.images}
                                    source={require('../assets/images/earth_hand.png')} />
                                <Text style = {styles.forBody}>-Deployment and maintenance of sensor network</Text>
                                <Text style = {styles.forBody}>-Dissemination and use of information</Text>
                                <Text style = {styles.forBody}>-Working with K-12 students/teachers, residents, companies, colleges, and government agencies</Text>
                            </View>
                          
                          
                    </View>
                </Content>
            </Container>
        )
    }
}
export default FeedbackScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center'
    },
    forHeader:{
        fontSize: 40,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        width: '90%',
        alignSelf: 'center',
    },
    forBody:{
        fontSize: 25,
        fontFamily: 'Montserrat',
        width: '90%',
        alignSelf: 'center',
        borderTopWidth: 10, 
        borderBottomWidth: 10,
    },
    swipeImages:{
        height: '100%', 
        width: '95%', 
        resizeMode: 'stretch',
        borderRadius: 10,
        overlayColor: 'white',
    },
    images:{
        height: 200,
        width: '95%',
        resizeMode: 'contain',
        borderRadius: 10,
        overlayColor: 'white',
    },
    headerLearning:{
        fontSize: 30,
        paddingBottom: 20,
        width: '90%',
        alignSelf: 'center',
    },
})