import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from './components/table';
import FilterBar from './components/filterBar';

class Tracks extends Component {
    addTrack(params) {
        this.props.onAddTrack(params);
    }
    findTrack(params) {
        this.props.onFindTrack(params);
    }
    render () {
        return (
            <div>
                <Table
                    tracks = {this.props.tracks}
                    onAddTrack = { (params) => this.addTrack(params) }
                />
                <FilterBar
                    tracks = {this.props.tracks}
                    onFindTrack = { (params) => this.findTrack(params) }
                />
            </div>
        );
    }
}

export default connect(
  state => ({
      tracks: state.tracks.filter((track) => {
        const input = state.filterTracks.name;
        switch (input) {
            case 'performer':
                return track.performer.toLowerCase().includes(state.filterTracks.value.toLowerCase());
            case 'title':
                return track.title.toLowerCase().includes(state.filterTracks.value.toLowerCase());
            case 'genre':
                return track.genre.toLowerCase().includes(state.filterTracks.value.toLowerCase());
            case 'year':
                return track.year.toLowerCase().includes(state.filterTracks.value.toLowerCase());
        }
        return true;
      })
  }),
  dispatch => ({
      onAddTrack: (payload) => {
        dispatch({
            type: 'ADD_TRACK',
            payload
        });
      },
      onFindTrack: (payload) => {
          console.log('on find name', payload);
          dispatch({
             type: 'FIND_TRACK',
             payload
          });
      }
  })
)(Tracks);