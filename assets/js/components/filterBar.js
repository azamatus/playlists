import React, { Component } from 'react';

export default class FilterBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
          tracks: this.props.tracks
        };
    }

    componentDidMount() {
        let duplicated = {};
        $('#genre').find('option').each(function() {
            if(duplicated[this.text]) {
                $(this).remove();
            } else {
                duplicated[this.text] = this.value.toLowerCase();
            }
        });

        $('#year').find('option').each(function () {
            if (duplicated[this.text]) {
                $(this).remove();
            } else {
                duplicated[this.text] = this.value.toLowerCase();
            }
        });
    }

    handleChange(e) {
        const params = {
           name: e.target.id,
           value: e.target.value
        };
        this.props.onFindTrack(params);
    }

    render () {
        return (
            <div className="col-md-3 pull-right">
                <h4>Фильтр</h4>
                <form className="form">
                    <div className="form-group">
                        <label htmlFor="performer">Исполнитель</label>
                        <input type="text" className="form-control" id="performer" onChange={this.handleChange.bind(this)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="title">Песня</label>
                        <input type="text" className="form-control" id="title" onChange={this.handleChange.bind(this)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="genre">Жанр</label>
                        <select className="form-control" id="genre" onChange={this.handleChange.bind(this)}>
                            <option value="">Выберите жанр</option>
                            {
                                this.state.tracks.map((track, index) =>
                                    <option key={index} value={track.genre}>{track.genre}</option>
                                )
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="year">Год</label>
                        <select className="form-control" id="year" onChange={this.handleChange.bind(this)}>
                            <option value="">Выберите год</option>
                            {
                                this.state.tracks.map((track, index) =>
                                    <option key={index} value={track.year}>{ track.year }</option>
                                )
                            }
                        </select>
                    </div>
                </form>
            </div>
        );
    }
}