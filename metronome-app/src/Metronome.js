import React, { Component } from 'react';
import './Metronome.css';

export default class Metronome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playing: false,
      count: 0,
      bpm: 100,
      beatsPerMeasure: 4
    };
  }
  handleBpmChange = (e) => {
    const bpm =  e.target.value;
    this.setState({ bpm });
  }
  render() {
    const { playing, bpm } = this.state;
    return(
      <div className='metronome'>
        <div className='bpm-slider'>
          <div>{bpm} BPM</div>
          <input
          type='range'
          min='60'
          max='240'
          value={bpm}
          onChange={this.handleBpmChange}
          />
          </div>
          <button>{ playing ? 'Stop' : 'Start'}</button>
        </div>
    );
  }
}
