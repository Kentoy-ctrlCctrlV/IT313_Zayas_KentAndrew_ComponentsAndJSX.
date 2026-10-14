import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import StudentRoster from '../../components/StudentRoster';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <StudentRoster />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F6F1',
  },
});
