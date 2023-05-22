import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios'

export default class DailyPicScreen extends Component {
    constructor(){

        super()
    this.state = {data:[]}
    }
    getData =()=>{
        axios.get("https://api.nasa.gov/planetary/apod?api_key=dmkZtV37sceTYyT53OskEIFw5e6CL4sbLsZkLcms")
        .then(response =>{
            this.setState({data:response.data})
        })
        .catch(error=>{console.log("error")})
    }
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>DailyPic Screen!</Text>
            </View>
        )
    }
}