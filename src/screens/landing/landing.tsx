import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { StackScreenProps } from '@react-navigation/stack';

import { useStores } from '../../stores';
import { useServices } from '../../services';

type LandingScreenProps = StackScreenProps<ScreenProps, 'Landing'>;

const LandingScreen: React.FC<LandingScreenProps> = ({
  navigation,
  route,
}) => {
  // const { param } = route.params;
  const {} = useStores();
  const { auth } = useServices();

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollview}
        contentContainerStyle={styles.scrollviewContent}
        contentInsetAdjustmentBehavior={'automatic'}
      >
        <Text>Landing</Text>

        <Pressable onPress={auth.signUp}>
          <Text>Sign Up</Text>
        </Pressable>

        <Pressable onPress={auth.logIn}>
          <Text>Login</Text>
        </Pressable>
      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollview: {
    flex: 1,
  },
  scrollviewContent: {
    padding: 16,
  },
});

export default LandingScreen;