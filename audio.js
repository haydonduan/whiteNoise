import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Sound from 'react-native-sound';
import Slider from '@react-native-community/slider';

type Props = {
  fileName: string;
  isPlay: boolean;
};

export default class AudioComponent extends Component<Props> {

  state = {
    volume: 0
  };

  componentDidMount() {
    Sound.setCategory('Playback');
    const fileName = this.props.fileName;
    this.audio = new Sound(`${fileName}.mp3`, Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      console.log('duration in seconds: ' + this.audio.getDuration() + 'number of channels: ' + this.audio.getNumberOfChannels());
    });
  }

  render() {
    return (
      <View style={{
        display: 'flex',
      }}>
        <View style={{ height: 30, display: 'flex', flexDirection: 'row' }}>
          <Text style={{ flex: 0.3 }}>{this.props.fileName}</Text>
          <Slider
            style={{ flex: 0.7 }}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
            onValueChange={this.onHandleVolume}
          />
        </View>
      </View>
    );
  }

  onHandleVolume = (volume) => {
    this.audio.setVolume(volume);
    this.setState({volume: volume})
  };

  componentWillReceiveProps(nextProps) {
    if(nextProps.isPlay) {
      this.audio.play();
      this.audio.setVolume(this.state.volume);
      return;
    }

    this.audio.stop();
  }

}

