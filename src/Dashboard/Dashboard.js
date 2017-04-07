import React, { Component } from 'react';
import DashboardAlertList from './DashboardAlertList/DashboardAlertList';
import DashboardHeader from './DashboardHeader/DashboardHeader';
import './Dashboard.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alerts: {
        host: [
          "localhost is down",
          "127.0.0.1 is down"
        ],
        service: {
          critical: [
            "sun service is unavailable"
          ],
          warning: [
            "water is too wet"
          ],
          unknown: [
            "error code 0x0"
          ]
        }
      }
    };
  }
  
  componentDidMount() {
    // startup actions
    this.timer = setInterval(
      () => this.refreshDashboard(),
      this.props.interval * 1000
    );
  }
  
  componentWillUnmount() {
    // cleanup actions
    clearInterval(this.timer);
  }

  fetchHostAlerts() {
    console.log('Fetching host alerts for ' + this.props.name);
  }
  
  fetchServiceAlerts() {
    console.log('Fetching service alerts for ' + this.props.name);
  }
  
  refreshDashboard() {
    // TODO: implement alert fetching from JSON URL
    this.fetchHostAlerts().then(response => {
      this.setState({
        alerts: {host: response.alerts}
      });
    });
    this.fetchServiceAlerts().then(response => {
      this.setState({
        alerts: {service: response.alerts}
      });
    });
  }

  render() {
    return (
      <div className="Dashboard">
        <DashboardHeader name={this.props.name} alerts={this.state.alerts} />
        <DashboardAlertList alerts={this.state.alerts} />
      </div>
    );
  }
}

export default Dashboard;
