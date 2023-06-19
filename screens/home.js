import { useEffect, useRef } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import * as Notifications from 'expo-notifications';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  const responseListener = useRef();

  useEffect(() => {
    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      navigation.navigate('Splash'); // Navigate to 'Splash' screen
    });

    return () => {
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Button
        title="Alarm set"
        onPress={async () => {
          await schedulePushNotification();
        }}
      />
    </View>
  );
}

async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: 'It\'s time to go to bed.',
      body: 'Please touch this screen and answer the questions.',
    },
    trigger: { seconds: 2 },
  });
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
