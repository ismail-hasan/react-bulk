import { Link } from 'expo-router'
import { Text, View } from 'react-native'

const About = () => {
      return (
            <View className='flex-1 justify-center items-center'>
                  <Text className='text-3xl'>About</Text>
                  <Link href={"/"}>
                        <Text>GO to Home</Text>
                  </Link>
            </View>
      )
}

export default About