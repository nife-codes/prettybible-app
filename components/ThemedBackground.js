// Themed background component
import { View } from 'react-native';

export default function ThemedBackground({ children }) {
  return <View style={{ flex: 1, backgroundColor: '#fff0f5' }}>{children}</View>;
}
