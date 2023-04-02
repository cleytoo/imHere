import { useState } from 'react'
import {
  ScrollView,
  Text,
  TextInput,
  View,
  FlatList,
  Alert,
  Keyboard
} from 'react-native'

import { Participant } from '../../components/Participant'

import { styles } from './styles'
import { Button } from '../../components/Button'

export const Home = () => {
  const [participants, setParticipants] = useState<string[]>([])
  const [newParticipant, setNewParticipant] = useState<string>('')

  const date = new Date().toLocaleDateString('pt-BR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  const handleAddParticipant = () => {
    const hasParticipant = participants.includes(newParticipant)
    if (hasParticipant) {
      return Alert.alert(
        'Participante já Existe',
        'Você não pode adicionar um participante duas vezes.'
      )
    }
    if (newParticipant.length < 3)
      return Alert.alert(
        'Nome invalido',
        'Digite um nome com mais de 3 caracteres.'
      )

    setParticipants((oldParticipants) => [...oldParticipants, newParticipant])
    setNewParticipant('')
    Keyboard.dismiss()
  }

  const handleRemoveParticipant = (name: string) => {
    Alert.alert(
      'Remover participante',
      `Tem certeza que você deseja remover ${name}?`,
      [
        {
          text: 'Sim',
          onPress: () =>
            setParticipants((prevParticipants) =>
              prevParticipants.filter((participant) => participant !== name)
            )
        },
        {
          text: 'Não',
          style: 'cancel'
        }
      ]
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>{date}.</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
          onChangeText={setNewParticipant}
          value={newParticipant}
        />
        <Button type="add" onPress={handleAddParticipant} />
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            name={item}
            onRemove={() => handleRemoveParticipant(item)}
          />
        )}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.emptyText}>
            Adicione participantes a sua lista.
          </Text>
        )}
      />

      {/* <ScrollView showsVerticalScrollIndicator={false}>
        {participants.map((participant) => (
          <Participant
            key={participant}
            name={participant}
            onRemove={() => handleRemoveParticipant(participant)}
          />
        ))}
      </ScrollView> */}
    </View>
  )
}
