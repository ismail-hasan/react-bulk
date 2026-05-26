import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const Home = () => {
  return (
    <View className='flex-1 justify-center items-center'>
      <Text className='text-3xl'>Home</Text>
      <Link href={"/About"}>
        <Text>GO to About</Text>
      </Link>
    </View>
  )
}

export default Home