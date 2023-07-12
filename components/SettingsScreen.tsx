import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { setSms, setPush, setEmail } from '../store/settings';

const SettingsScreen = () => {
  const dispatch: AppDispatch = useDispatch();
  const settings = useSelector((state: RootState) => state.settings);

  return (
    <View style={styles.container}>
      <View style={styles.setting}>
        <Text>SMS notifications</Text>
        <Switch
          value={settings.sms}
          onValueChange={(newValue) => dispatch(setSms(newValue))}
        />
      </View>
      <View style={styles.setting}>
        <Text>Push notifications</Text>
        <Switch
          value={settings.push}
          onValueChange={(newValue) => dispatch(setPush(newValue))}
        />
      </View>
      <View style={styles.setting}>
        <Text>Email notifications</Text>
        <Switch
          value={settings.email}
          onValueChange={(newValue) => dispatch(setEmail(newValue))}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  setting: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
});

export default SettingsScreen;
