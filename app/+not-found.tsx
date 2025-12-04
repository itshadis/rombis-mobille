import { Link, Stack } from 'expo-router'
import React from 'react'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const NotFoundScreen = () => {
  const inset = useSafeAreaInsets()
  return (
    <View style={{ marginTop: inset.top, padding: 20 }}>
      <Stack.Screen options={{ title: "Oops! Not Found" }} />
        <View>
          <Link href="/(root)/(tabs)/index">
            Go Back to Home Screen
          </Link>
        </View>
    </View>
  )
}

export default NotFoundScreen