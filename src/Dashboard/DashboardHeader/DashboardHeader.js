import React, { Component } from 'react';
import './DashboardHeader.css';

class DashboardHeader extends Component {
  render() {
    return (
      <div className="DashboardHeader">
        <span className="DashboardTitle">{this.props.name}</span>
        <span className="DashboardCount Alert Host">{this.props.alerts.host.length}</span>
        <span className="DashboardCount Alert Service Critical">{this.props.alerts.service.critical.length}</span>
        <span className="DashboardCount Alert Service Warning">{this.props.alerts.service.warning.length}</span>
        <span className="DashboardCount Alert Service Unknown">{this.props.alerts.service.unknown.length}</span>
      </div>
    );
  }
}

export default DashboardHeader;
