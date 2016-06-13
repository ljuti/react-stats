import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class TotalStats extends Component {
  render() {
    const {
      totals
    } = this.props;

    console.dir(totals);

    const statRows = totals.stats.map((stat) => {
      return (
        <tr key={stat.platform}>
          <td><Link to={ '/stats/' + stat.platform }>{stat.platform}</Link></td>
          <td>{stat.total}</td>
        </tr>
      )
    })

    return (
      <table>
        <thead>
          <tr>
            <th>Platform</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          { statRows }
        </tbody>
      </table>
    )
  }
}
