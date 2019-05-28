import {
  withStyles,
} from '@material-ui/core';
import React, { Component } from 'react';
import WorkstationCard from './Workstation';
import {Workstation} from './requests';

const styles = theme => ({
  root: {
    margin: theme.spacing.unit,
    display: 'flex',
  },
});

class Workstations extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      workstations: [],
      users: []
    };

  }
  componentDidMount() {
    Workstation.all().then(workstations => {
      this.setState({ 
        workstations: workstations.data,
        users: workstations.included,
        loading: false
      });
    });
  }
  
  render(){
    if (this.state.loading){
      return (
        <main className="QuestionIndexPage">
          <h2>Loading...</h2>
        </main>
      )
    }
    return(
    <div className={this.props.classes.root}>      
      {this.state.workstations.map(station => (
        <WorkstationCard station={station} key={station.id}/>        
      ))}
      
    </div>
    )
  };
}

export default withStyles(styles, { withTheme: true })(Workstations);
