// Social button component
import { Text, TouchableOpacity } from 'react-native';

export default function SocialButton({ title, ...props }) {
  return (
    <TouchableOpacity {...props}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}
