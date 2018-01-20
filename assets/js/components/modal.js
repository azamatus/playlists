import React, { Component } from 'react';
import AddTrackForm from './form';

class ModalHeader extends Component {
    render() {
        return (
            <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 className="modal-title" id="track-modal-label">{this.props.title}</h4>
            </div>
        );
    }
}

class ModalBody extends Component {
    render() {
        return (
            <div className="modal-body">
                <AddTrackForm onAddTrack={(params) => this.props.onAddTrack(params)}/>
            </div>
        );
    }
}

export default class Modal extends Component {
    render() {
        return (
            <div id="add-track-modal" className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="track-modal-label" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <ModalHeader title="Добавить трек" />
                        <ModalBody onAddTrack={(params) => this.props.onAddTrack(params)}/>
                    </div>
                </div>
            </div>
        );
    }
}