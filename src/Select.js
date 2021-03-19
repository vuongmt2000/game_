import React, {useEffect} from 'react';
import { View } from 'react-native';
function Select(props) {
    useEffect(()=>{
        //   for (var i = 0; i < count.length; i++) {
        //     if (count[i].z != 0) {
        //       console.log("reSet");
        //       setCount({...count, z: 0});
        //     }
        //   }
        console.log("hello");
        }, [])
    return (
        <View>
            <Text>heeeee</Text>
        </View>
    );
}

export default Select;