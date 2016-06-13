import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class TotalStats extends Component {
  render() {
    const {
      totals
    } = this.props;

    const platformName = function(platform) {
      switch (platform) {
        case 'android':
          return 'Android';
        case 'ios':
          return 'iOS';
        case 'windows-phone':
          return 'Windows Phone'
      }
    }

    const statRows = totals.stats.map((stat) => {
      return (
        <tr key={stat.platform}>
          <td><Link to={ '/stats/' + stat.platform }>{ platformName(stat.platform) }</Link></td>
          <td>{stat.total}</td>
        </tr>
      )
    })

    return (
      <table className="table table-striped">
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
