import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212529',
    padding: 24
  },
  eventName: {
    fontSize: 24,
    color: '#fdfcfe',
    fontWeight: 'bold',
    marginTop: 48
  },
  eventDate: {
    color: '#6b6b6b',
    fontSize: 16
  },
  input: {
    height: 42,
    flex: 1,
    backgroundColor: '#343A40',
    borderRadius: 4,
    paddingHorizontal: 12,
    fontSize: 16,
    color: '#fdfcfe'
  },
  form: {
    marginTop: 36,
    marginBottom: 42,
    gap: 12,
    width: '100%',
    flexDirection: 'row'
  },
  emptyText: {
    color: '#fff',
    fontSize: 16,
    alignSelf: 'center'
  }
})
