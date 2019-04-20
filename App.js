/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Button, View } from 'react-native';
import AudioComponent from './audio';

type Props = {};
const audios = ['rainy', 'coffee'];
export default class App extends Component<Props> {

  state = {
    isPlay: false
  };

  render() {
    return (
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
    );
  }

  onPlayButton = () => {
    this.setState({ isPlay: true });
  };

  onStopButton = () => {
    this.setState({ isPlay: false });
  };

}

