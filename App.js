/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import AudioComponent from './audio';
import DrawerLayout from 'react-native-drawer-layout';

type Props = {};
const audios = ['rainy', 'coffee', 'fire', 'thunder', 'wind', 'sea'];
export default class App extends Component<Props> {

  state = {
    isPlay: false
  };

  render() {
    const navigationView = (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }}>I'm in the Drawer!</Text>
      </View>
    );

    return (
      <DrawerLayout
        drawerWidth={300}
        drawerPosition={DrawerLayout.positions.Left}
        renderNavigationView={() => navigationView}>
        <View style={{
          display: 'flex',
          height: 100,
          padding: 20
        }}>
          {
            audios.map(audioFileName =>
              <AudioComponent fileName={audioFileName}
                              key={audioFileName}
                              isPlay={this.state.isPlay} />
            )
          }
          <View>
            <Button
              onPress={this.onPlayButton}
              title="PLAY"
              color="#841584"
            />
          </View>
          <View style={{ marginTop: 10 }}>
            <Button
              onPress={this.onStopButton}
              title="STOP"
              color="#841584"
            />
          </View>
        </View>
      </DrawerLayout>
    );
  }

  onPlayButton = () => {
    this.setState({ isPlay: true });
  };

  onStopButton = () => {
    this.setState({ isPlay: false });
  };

}

