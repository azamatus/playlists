import React from 'react';

export default class Table extends React.Component {
    render () {
        return (
          <div className="col-md-9 pull-left">
              <h4>Плейлист</h4>
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
                  <tr>
                      <td>John</td>
                      <td>Doe</td>
                      <td>john@example.com</td>
                      <td>2222</td>
                  </tr>
                  <tr>
                      <td>Mary</td>
                      <td>Moe</td>
                      <td>mary@example.com</td>
                      <td>4444</td>
                  </tr>
                  <tr>
                      <td>July</td>
                      <td>Dooley</td>
                      <td>july@example.com</td>
                      <td>4566</td>
                  </tr>
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
                      <li className="page-item active"><a class="page-link" href="#">3</a></li>
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