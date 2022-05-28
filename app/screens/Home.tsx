import { useEffect, useState } from 'react';
import { Platform, StyleSheet } from 'react-native';
import Card from '../components/Card';
import WeeklyChart from '../components/charts/WeeklyChart';
import YearlyChart from '../components/charts/YearlyChart';
import Logo from '../components/Logo';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import { RootTabScreenProps } from '../types';

export default function Home({ navigation }: RootTabScreenProps<'Home'>) {
  const [data, setData] = useState([]);
  const isWeb = Platform.OS === 'web';
  useEffect(() => {
    // Aqui se haría la petición a la API
    fetch('http://www.randomnumberapi.com/api/v1.0/random?min=1&max=99&count=2')
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          setData(data);
        }
      })
      .catch((e) => console.error(e));
  }, []);
  console.log(isWeb);
  return (
    <View style={styles.container}>
      <Logo />
      {isWeb && <Text style={{
        width:'100%',
        fontSize: 25,
        marginBottom: 20,
        fontFamily: 'montserrat-bold',
      }}>Dashboard</Text>}
      <View>
        <Text style={styles.title}>Transactions history</Text>
        <Text style={styles.subtitle}>
          These are your monthly and daily actions📊
        </Text>
      </View>
      <View style={styles.content}>
        <View style={styles.firstRow}>
          <Card transactions={data ? data[0] : 0} when='LAST MONTH' />
          <Card transactions={data ? data[1] : 0} when='TODAY' />
        </View>
        <View style={styles.secondRow}>
          <View style={styles.secondRowHeader}>
            <Text style={styles.subsubtitle}>Transactions Last Year</Text>
            <View style={styles.secondRowSubHeader}>
              <View style={styles.bottomBorder}>
                <Text style={styles.captionOne}>Monthly</Text>
              </View>
              <Text style={styles.captionTwo}>Daily</Text>
            </View>
          </View>
          <YearlyChart />
        </View>
      </View>
      {isWeb && (
        <View>
          <WeeklyChart />
        </View>
      )}
    </View>
  );
}

const containerWebStyles = Platform.select({
  web: {
    width: '1200px',
    margin: 'auto',
  },
});

const styles = StyleSheet.create({
  container: {
    paddingLeft: 30,
    paddingRight: 30,
    height: '100%',
    backgroundColor: Colors.light.background,
    ...containerWebStyles,
  },
  title: {
    fontSize: 24,
    fontWeight: Platform.select({ ios: '500', android: undefined }),
    fontFamily: Platform.select({
      ios: 'montserrat-medium',
      android: 'montserrat-medium',
    }),
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '100%',
  },
  subtitle: {
    fontSize: 18,
  },
  content: {
    marginTop: 30,
    flexDirection: Platform.select({ web: 'row' }),
    marginBottom: Platform.select({ web: '30px' }),
  },
  firstRow: {
    flexDirection: Platform.select({ web: 'column', default: 'row' }),
    justifyContent: 'space-between',
    marginBottom: 30,
    marginRight: Platform.select({ web: 30, default: 0 }),
  },
  secondRow: {
    width: Platform.select({ web: '950px', default: 'auto' }),
    backgroundColor: 'white',
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 15,
    padding: 20,
  },
  secondRowHeader: {
    backgroundColor: 'white',
  },
  secondRowSubHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: 15,
  },
  subsubtitle: {
    fontSize: 18,
    fontFamily: Platform.select({
      ios: 'montserrat-bold',
      android: 'montserrat-bold',
    }),
    marginBottom: 10,
  },
  captionOne: {
    fontSize: 18,
    fontFamily: Platform.select({ ios: 'montserrat', android: 'montserrat' }),
    color: '#6979F8',
    padding: 10,
  },
  captionTwo: {
    fontSize: 18,
    fontFamily: Platform.select({ ios: 'montserrat', android: 'montserrat' }),
    color: '#6979F8',
    padding: 10,
  },
  bottomBorder: {
    borderBottomColor: '#6979F8',
    borderBottomWidth: 4,
    backgroundColor: 'white',
  },
});
