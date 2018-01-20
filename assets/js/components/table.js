import React, { Component } from 'react';
import Modal from './modal';

export default class Table extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sortBy: 'ASC'
        }
    }

    sortClick(e) {
        const el = $(e.target);
        const sort = $(el).data('sort');
        const params = {
            sortTo: sort,
            sortBy: this.state.sortBy
        };
        this.props.onSortTracks(params);
        this.state.sortBy === 'ASC' ? this.setState({ sortBy: 'DESC' }) : this.setState({ sortBy: 'ASC' });
    }

    render () {
        return (
          <div className="col-md-9 pull-left table-tracks">
              <h4 className="pull-left">Плейлист</h4>
              <button className="btn btn-primary pull-right" data-toggle="modal" data-target="#add-track-modal">Добавить трек</button>
              <Modal onAddTrack = {(params) => this.props.onAddTrack(params) } />
              <table className="table table-striped">
                  <thead>
                  <tr>
                      <th><a href="javascript:void(0)" onClick={this.sortClick.bind(this)} data-sort="performer">Исполнитель <i className="fa fa-sort" aria-hidden="true"></i></a></th>
                      <th><a href="javascript:void(0)" onClick={this.sortClick.bind(this)} data-sort="title">Песня <i className="fa fa-sort" aria-hidden="true"></i></a></th>
                      <th><a href="javascript:void(0)" onClick={this.sortClick.bind(this)} data-sort="genre">Жанр <i className="fa fa-sort" aria-hidden="true"></i></a></th>
                      <th><a href="javascript:void(0)" onClick={this.sortClick.bind(this)} data-sort="year">Год <i className="fa fa-sort" aria-hidden="true"></i></a></th>
                  </tr>
                  </thead>
                  <tbody>
                  {
                      this.props.sortedTable ? (
                          this.props.sortedTracks ? (
                              this.props.sortedTracks.map((track, index) =>
                                  <tr key={index}>
                                      <td>{ track.performer }</td>
                                      <td>{ track.title }</td>
                                      <td>{ track.genre }</td>
                                      <td>{ track.year }</td>
                                  </tr>
                              )
                          ) : (
                              <tr className="text-center"><td colSpan={4}>Треков пока что нету</td></tr>
                          )
                          ) : (
                          this.props.tracks ? (
                              this.props.tracks.map((track, index) =>
                                  <tr key={index}>
                                      <td>{ track.performer }</td>
                                      <td>{ track.title }</td>
                                      <td>{ track.genre }</td>
                                      <td>{ track.year }</td>
                                  </tr>
                              )
                          ) : (
                              <tr className="text-center"><td colSpan={4}>Треков пока что нет</td></tr>
                          )
                      )
                  }
                  </tbody>
              </table>
              <div className="pagination-container justify-content-center">
                  <ul className="pagination pagination-info">
                      <li className="page-item arrow-margin-left">
                          <a className="page-link" href="#" aria-label="Previous">
                              <span aria-hidden="true"><i className="fa fa-angle-double-left" aria-hidden="true"></i></span>
                          </a>
                      </li>
                      <li className="page-item"><a className="page-link" href="#">1</a></li>
                      <li className="page-item"><a className="page-link" href="#">2</a></li>
                      <li className="page-item active"><a className="page-link" href="#">3</a></li>
                      <li className="page-item"><a className="page-link" href="#">4</a></li>
                      <li className="page-item"><a className="page-link" href="#">5</a></li>
                      <li className="page-item arrow-margin-right">
                          <a className="page-link" href="#" aria-label="Next">
                              <span aria-hidden="true"><i className="fa fa-angle-double-right" aria-hidden="true"></i></span>
                          </a>
                      </li>
                  </ul>
              </div>
          </div>
        );
    }
}