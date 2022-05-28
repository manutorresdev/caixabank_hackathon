import { Platform, StyleSheet } from 'react-native';
import Logo from '../components/Logo';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';

export default function Profile() {
  return (
    <View style={styles.container}>
      <Logo />
      <View>
        <Text style={styles.title}>Profile</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>🚧Work in progress🚧</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 30,
    paddingRight: 30,
    height: '100%',
    backgroundColor: Colors.light.background,
  },
  title: {
    fontSize: 24,
    fontWeight: Platform.select({ios: '500', android: undefined}),
    fontFamily: Platform.select({ios: 'montserrat-medium', android: 'montserrat-medium'}),
  },
  subtitle: {
    fontSize: 18,
  },
  content: {
    marginTop: 30,
    alignContent: 'center',
    alignItems: 'center',
  },
});