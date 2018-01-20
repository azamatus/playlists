import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from './components/table';
import FilterBar from './components/filterBar';

class Tracks extends Component {
    addTrack(params) {
        this.props.onAddTrack(params);
    }
    findTrack() {
        console.log('findTrack', this.searchInput.value);
        this.props.onFindTrack(this.searchInput.value);
    }
    render () {
        return (
            <div>
                <Table
                    tracks = {this.props.tracks}
                    onAddTrack = { (params) => this.addTrack(params) }
                />
                <FilterBar />
                <div>
                    <input type="text" ref={(input) => this.trackInput = input} />
                    <button onClick={this.addTrack.bind(this)}>Add track</button>
                </div>
                <div>
                    <input type="text" ref={(input) => this.searchInput = input} />
                    <button onClick={this.findTrack.bind(this)}>Find track</button>
                </div>
                <ul>
                    {
                        this.props.tracks.map((track, index) =>
                            <li key={index} > {track.title} </li>
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default connect(
  state => ({
      tracks: state.tracks
  }),
  dispatch => ({
      onAddTrack: (payload) => {
        dispatch({
            type: 'ADD_TRACK',
            payload
        });
      },
      onFindTrack: (name) => {
          console.log('on find name', name);
          dispatch({
             type: 'FIND_TRACK',
             payload: name
          });
      }
  })
)(Tracks);