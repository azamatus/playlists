import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from './components/table';
import FilterBar from './components/filterBar';

class Tracks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sortedTable: false
        }
    }

    addTrack(params) {
        this.props.onAddTrack(params);
    }
    findTrack(params) {
        this.props.onFindTrack(params);
        this.setState({
            sortedTable: false
        });
    }
    sortTracks(params) {
        this.props.onSortTracks(params);
        this.setState({
           sortedTable: true
        });
    }
    deleteTrack(params) {
        this.props.onDeleteTrack(params);
    }
    render () {
        return (
            <div>
                <Table
                    tracks = {this.props.tracks}
                    sortedTracks = {this.props.sortedTracks}
                    sortedTable = {this.state.sortedTable}
                    onAddTrack = { (params) => this.addTrack(params) }
                    onSortTracks = {(params) => this.sortTracks(params)}
                    onDeleteTrack = {(params) => this.deleteTrack(params)}
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
      }),
      sortedTracks: state.tracks
  }),
  dispatch => ({
      onAddTrack: (payload) => {
        dispatch({
            type: 'ADD_TRACK',
            payload
        });
      },
      onFindTrack: (payload) => {
          dispatch({
             type: 'FIND_TRACK',
             payload
          });
      },
      onSortTracks: (payload) => {
          dispatch({
              type: 'SORT_TRACKS',
              payload
          })
      },
      onDeleteTrack: (payload) => {
          dispatch({
             type: 'DELETE_TRACK',
             payload
          });
      }
  })
)(Tracks);