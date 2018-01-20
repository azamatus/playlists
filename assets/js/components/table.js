import React, { Component } from 'react';
import Modal from './modal';

class RemoveModal extends Component {

    removeTrack(e) {
        e.preventDefault();
        let self = this;
        $.post('/remove/', { track_id: self.props.trackId }, function (response) {
            if (response.success) {
                self.props.onDeleteTrack(self.props.trackId);
            }
        }).done(function() {
            const $modal = $('#remove-track-modal');
            $modal.find('.close').click();
            $modal.find('input').val('');
        });
    }

    render() {
        return (
            <div id="remove-track-modal" className="modal modal-mini modal-primary fade" tabIndex="-1" role="dialog" aria-labelledby="remove-modal-label" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title" id="track-modal-label">Удалить трек?</h4>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-link btn-neutral close" data-dismiss="modal">Закрыть</button>
                            <button type="submit" onClick={this.removeTrack.bind(this)} className="btn btn-link btn-neutral">Удалить</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default class Table extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sortBy: 'ASC',
            trackId: 0
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

    openRemoveModal(e) {
        const el = $(e.target);
        this.setState({
           trackId: el.data('id')
        });
    }

    render () {
        return (
          <div className="col-md-9 pull-left table-tracks">
              <h4 className="pull-left">Плейлист</h4>
              <button className="btn btn-primary pull-right" data-toggle="modal" data-target="#add-track-modal">Добавить трек</button>
              <Modal onAddTrack = {(params) => this.props.onAddTrack(params) } />
              <RemoveModal
                  trackId={this.state.trackId}
                  onDeleteTrack={(params) => this.props.onDeleteTrack(params)}
              />
              <table className="table table-striped">
                  <thead>
                  <tr>
                      <th><a href="javascript:void(0)" onClick={this.sortClick.bind(this)} data-sort="performer">Исполнитель <i className="fa fa-sort" aria-hidden="true"></i></a></th>
                      <th><a href="javascript:void(0)" onClick={this.sortClick.bind(this)} data-sort="title">Песня <i className="fa fa-sort" aria-hidden="true"></i></a></th>
                      <th><a href="javascript:void(0)" onClick={this.sortClick.bind(this)} data-sort="genre">Жанр <i className="fa fa-sort" aria-hidden="true"></i></a></th>
                      <th><a href="javascript:void(0)" onClick={this.sortClick.bind(this)} data-sort="year">Год <i className="fa fa-sort" aria-hidden="true"></i></a></th>
                      <th></th>
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
                                      <td>
                                          <a href="javascript:void(0)" data-id={track.id} onClick={this.openRemoveModal.bind(this)} data-toggle="modal" data-target="#remove-track-modal"><i data-id={track.id} className="fa fa-times" aria-hidden="true"></i></a>
                                      </td>
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
                                      <td>
                                          <a href="javascript:void(0)" data-test="222" data-id={track.id} onClick={this.openRemoveModal.bind(this)} data-toggle="modal" data-target="#remove-track-modal"><i data-id={track.id} className="fa fa-times" aria-hidden="true"></i></a>
                                      </td>
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