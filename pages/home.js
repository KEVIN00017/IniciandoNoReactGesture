import { View,Text,StyleSheet,Pressable, SafeAreaView} from "react-native";
import Animated,{ interpolateColor, useAnimatedStyle,useSharedValue,withSpring, withTiming} from "react-native-reanimated"
import { GestureDetector,Gesture } from "react-native-gesture-handler";
export default function Home(){
    const DoubleTapActive=useSharedValue(0)

    const Position=useSharedValue(100)
    const Position2=useSharedValue(100)
    const onGesture=Gesture
    .Tap()
    .numberOfTaps(2)
    .onStart(()=>{
        DoubleTapActive.value=withTiming(DoubleTapActive.value===0? 1:0,{duration:500})
        console.log("Tocou Duas Vezes!")
    })
    const AnimatedStyle=useAnimatedStyle(()=>({
width:Position.value,
height:Position.value,
backgroundColor:interpolateColor(DoubleTapActive.value ,[0,1],['purple','green'])
    }))
    const AnimatedStyle2=useAnimatedStyle(()=>({
        width:Position2.value,
        height:Position2.value,
        backgroundColor:interpolateColor(DoubleTapActive.value ,[0,1],['purple','green'])
            }))

    function onPressIn(Position){
        Position.value = withSpring(150)
        console.log("segurou")
    }
    
    function onPressOut(Position){
        Position.value = withSpring(100)
        console.log("soltou")
    }
    return(
        <SafeAreaView >
           <GestureDetector gesture={onGesture}>
                <Pressable onPressIn={()=>onPressIn(Position)} onPressOut={()=>onPressOut(Position)}>
                    <Animated.View style={[styles.box,AnimatedStyle]}/>
                </Pressable>
              
                </GestureDetector>
                
        </SafeAreaView>
        
    )
}
const styles=StyleSheet.create({
    box:{
        height:100,
        width:100,
        borderRadius:20,
        marginLeft:'40%',
        marginTop:'10%'
    }
})