import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class PlatformStats extends Component {
  render() {
    const {
      statistics
    } = this.props;

    const statRows = statistics.map((stat) => {
      return (
        <tr key={stat.key}>
          <td>{stat.key}</td>
          <td>{stat.value}</td>
        </tr>
      )
    })

    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Version</th>
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
