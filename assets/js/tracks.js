import React from 'react';
import Table from './components/table';
import FilterBar from './components/filterBar';

export default class Tracks extends React.Component {
    render () {
        return (
            <div>
                <Table />
                <FilterBar />
            </div>
        );
    }
}