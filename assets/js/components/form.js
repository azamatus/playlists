import React, { Component } from 'react';

export default class Form extends Component {
    render() {
        return (
            <form action="">
                <div className="form-group">
                    <input type="text" value="" placeholder="Исполнитель" className="form-control" name="performer" required={true}/>
                </div>
                <div className="form-group">
                    <input type="text" value="" placeholder="Песня" className="form-control" name="title" required={true}/>
                </div>
                <div className="form-group">
                    <input type="text" value="" placeholder="Жанр" className="form-control" name="genre" required={true}/>
                </div>
                <div className="form-group">
                    <input type="number" value="" min="1900" max="2020" placeholder="Год" className="form-control" name="year" required={true}/>
                </div>
                <div className="modal-footer" style={{padding: 0}}>
                    <button type="button" className="btn btn-default btn-simple" data-dismiss="modal">Закрыть</button>
                    <button type="submit" className="btn btn-primary">Сохранить</button>
                </div>
            </form>
        );
    }
}