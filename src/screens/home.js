import React from 'react'
import {View, Text, Button} from 'react-native'


const Home = ({navigation}) => {
    return(
        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
            <Text>Home Screen</Text>
            <Button 
            title='Go to Reset Password Screen'
            onPress={() => navigation.navigate('ResetPassword')}
            />
        </View>
    )
}

export default Home;