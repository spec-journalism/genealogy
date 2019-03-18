import React, { PureComponent } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import injectSheet from 'react-jss';

const styles = {
  steps: {
    padding: '0 5vw 130vh 5vw',
  },
  step: {
    position: 'relative',
    backgroundColor: '#fff',
    boxShadow: '0 5px 15px 0 rgba(0,0,0,0.41)',
    margin: '0 auto 70vh auto',
    maxWidth: '500px',
    '&:last-child': {
      marginBottom: 0,
    },
  },
  stepText: {
    textAlign: 'center',
    color: '#222',
    padding: '1rem',
    fontSize: '1.2rem', //23px
    fontFamily: 'Merriweather',
    fontWeight: 400,
    lineHeight: '2rem', //30px
  },
  sticky: {
    position: 'sticky',
    position: '-webkit-sticky',
    width: '100%',
    height: '100vh',
    top: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

class Graphic extends PureComponent {
  onStepEnter = () => {
    console.log('yote');
  }

  render() {
    const { classes, steps } = this.props;
    return (
      <div className={classes.Graphic}>
        <figure className={classes.sticky}>
        </figure>
        <article className={classes.steps}>
          <Scrollama onStepEnter={this.onStepEnter}>
            {steps.map(({ text }) => (
              <Step key={text}>
                <div className={classes.step}>
                  <p className={classes.stepText}>{text}</p>
                </div>
              </Step>
            ))}
          </Scrollama>
        </article>
      </div>
    );
  }
}

export default injectSheet(styles)(Graphic);
