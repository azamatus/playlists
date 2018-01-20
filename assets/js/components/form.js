import React, { Component } from 'react';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
          performer: '',
          title: '',
          genre: '',
          year: ''
        };
    }

    onChange(e) {
        const state = this.state;
        state[e.target.name] = $(e.target).val();
        this.setState(state);
    }

    onSubmit(e) {
        e.preventDefault();
        let self = this;
        const { performer, title, genre, year } = self.state;
        $.post('/', {performer: performer, title: title, genre: genre, year: year}, function (response) {
            if (response.success) {
                self.props.onAddTrack(response.params);
            }
        }).done(function() {
            const $modal = $('#add-track-modal');
            // $modal.modal('hide'); not working
            $modal.find('.close').click();
            $modal.find('input').val('');
        });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <div className="form-group">
                    <input type="text" placeholder="Исполнитель" className="form-control" name="performer" required={true} onChange={this.onChange.bind(this)}/>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Песня" className="form-control" name="title" required={true} onChange={this.onChange.bind(this)}/>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Жанр" className="form-control" name="genre" required={true} onChange={this.onChange.bind(this)}/>
                </div>
                <div className="form-group">
                    <input type="number" min="1900" max="2020" placeholder="Год" className="form-control" name="year" required={true} onChange={this.onChange.bind(this)}/>
                </div>
                <div className="modal-footer" style={{padding: 0}}>
                    <button type="button" className="btn btn-default btn-simple" data-dismiss="modal">Закрыть</button>
                    <button type="submit" className="btn btn-primary btn-simple">Сохранить</button>
                </div>
            </form>
        );
    }
}