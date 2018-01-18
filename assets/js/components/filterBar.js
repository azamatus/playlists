import React from 'react';

export default class FilterBar extends React.Component {
    render () {
        return (
            <div className="col-md-3 pull-right">
                <h4>Фильтр</h4>
                <form action="" className="form">
                    <div className="form-group">
                        <label htmlFor="performer">Исполнитель</label>
                        <select className="form-control" id="performer">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="genre">Жанр</label>
                        <select className="form-control" id="genre">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="year">Год</label>
                        <select className="form-control" id="year">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </div>
                </form>
            </div>
        );
    }
}