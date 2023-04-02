import { View, Text } from 'react-native'

import { styles } from './styles'
import { Button } from '../Button'

interface ParticipantProps {
  name: string
  onRemove: () => void
}

export const Participant = ({ name, onRemove }: ParticipantProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Button type="remove" onPress={onRemove} />
    </View>
  )
}
