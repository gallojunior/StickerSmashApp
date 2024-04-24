import { View, Image } from 'react-native'
import React from 'react'
import Animated from 'react-native-reanimated'

export default function EmojiSticker({ imageSize, stickerSource }) {
  return (
    <View style={{ top: -350}}>
      <Image
        source={stickerSource}
        resizeMode='contain'
        style={{ width: imageSize, height: imageSize }}
      />
    </View>
  )
}