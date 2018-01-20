import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from './components/table';
import FilterBar from './components/filterBar';

class Tracks extends Component {
    addTrack() {
        console.log('addTrack', this.trackInput.value);
        this.props.onAddTrack(this.trackInput.value);
        this.trackInput.value = '';
    }
    findTrack() {
        console.log('findTrack', this.searchInput.value);
        this.props.onFindTrack(this.searchInput.value);
    }
    render () {
        console.log(this.props.tracks);
        return (
            <div>
                <Table />
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
                            <li key={index} > {track.name} </li>
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
      onAddTrack: (name) => {
        const payload = {
          id: Date.now().toString(),
          name
        };
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