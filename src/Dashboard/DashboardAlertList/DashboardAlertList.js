import React, { Component } from 'react';
import './DashboardAlertList.css';

class DashboardAlertList extends Component {
  render() {
    const hostAlerts = this.props.alerts.host
      .map((alert) =>
      <li className="Alert Host"><a href="#">{alert}</a></li>
    );
    const criticalServiceAlerts = this.props.alerts.service.critical
      .map((alert) =>
      <li className="Alert Service Critical"><a href="#">{alert}</a></li>
    );
    const warningServiceAlerts = this.props.alerts.service.warning
      .map((alert) =>
      <li className="Alert Service Warning"><a href="#">{alert}</a></li>
    );
    const unknownServiceAlerts = this.props.alerts.service.unknown
      .map((alert) =>
      <li className="Alert Service Unknown"><a href="#">{alert}</a></li>
    );
    return (
      <div>
        <ul className="DashboardList Alert Host">{hostAlerts}</ul>
        <ul className="DashboardList Alert Service Critical">{criticalServiceAlerts}</ul>
        <ul className="DashboardList Alert Service Warning">{warningServiceAlerts}</ul>
        <ul className="DashboardList Alert Service Unknown">{unknownServiceAlerts}</ul>
      </div>
    );
  }
}

export default DashboardAlertList;
