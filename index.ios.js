'use strict';

import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Alert,
  Navigator,
  NativeModules,
  View
} from 'react-native';

var Button = require('react-native-button');
var F3HViewController = NativeModules.F3HViewController;

class RNHighScores extends React.Component {

  testButtonClicked(navigationController) {
      F3HViewController.pop()
  }

  render() {
    var contents = this.props["scores"].map(
      score => <Text key={score.name}>{score.name}:{score.value}{"\n"}</Text>
    );
    return (
      <Navigator
        initialRoute={{ title: 'Awesome Scene', index: 0 }}
        renderScene={(route, navigator) =>
          <View style={styles.container}>
            <Text style={styles.highScoresTitle}>
              2048 High Scores!
            </Text>
            <Text style={styles.scores}>
              {contents}
            </Text>
            <Button
               style={styles.buttonText}
               onPress={() => this.testButtonClicked(this.props["navigationController"])}>
               TestComponent
            </Button>
          </View>
        }
        style={{padding: 100}}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  highScoresTitle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  scores: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

// Module name
AppRegistry.registerComponent('RNHighScores', () => RNHighScores);
