import React, { Component } from 'react';
import Modal from './modal';

export default class Table extends Component {

    render () {
        return (
          <div className="col-md-9 pull-left table-tracks">
              <h4 className="pull-left">Плейлист</h4>
              <button className="btn btn-primary pull-right" data-toggle="modal" data-target="#add-track-modal">Add track</button>
              <Modal onAddTrack = {(params) => this.props.onAddTrack(params) } />
              <table className="table table-striped">
                  <thead>
                  <tr>
                      <th>Исполнитель</th>
                      <th>Песня</th>
                      <th>Жанр</th>
                      <th>Год</th>
                  </tr>
                  </thead>
                  <tbody>
                  {
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
                          <tr className="text-center"><td colSpan={4}>No tracks</td></tr>
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