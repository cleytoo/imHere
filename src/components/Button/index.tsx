import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native'

import { styles } from './styles'

interface ButtonProps extends TouchableOpacityProps {
  type?: 'add' | 'remove'
}

export const Button = ({ type, ...props }: ButtonProps) => {
  const buttonStyles = type === 'add' ? styles.add : styles.remove

  return (
    <TouchableOpacity style={[styles.button, buttonStyles]} {...props}>
      {type === 'add' && <Text style={styles.buttonText}>+</Text>}
      {type === 'remove' && <Text style={styles.buttonText}>-</Text>}
    </TouchableOpacity>
  )
}
