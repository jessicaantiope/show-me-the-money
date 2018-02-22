import Meeting from './Meeting'
import {startMeeting, secondTick} from '../actions/currentMeeting'

let arr = [{first_name: 'Edi', last_name: 'Rose', wage: '16'}, {first_name: 'Jay', last_name: 'and', wage: '16'}, {first_name: 'Silent', last_name: 'Bob', wage: '18'}]

class StartButton extends React.Component() {
  constructor (props){
    super(props)
    this.state ={
      showMeeting:false
    }
    //bind here
  }

handleClick() {
  this.setState(showMeeting:true)
  this.dispatch(startMeeting())
  this.setTimer()
}

setTimer() {
setInterval(() => this.countTime (), 1000);
}

getWages(stuff){
  let wages = stuff.map(cell => cell.wage)
  return wages
}

setPerSecWages() {
 let wages = this.getWages(wage)
 const combinedWages = wages.reduce((a, b) => a + b)
 const perSecondWages = (combinedWages / 60) / 60
 return perSecondWages
}

countTime() {
 dispatch(secondTick())
}

render () {

  return

  <div className="container">
    <h2 className="title is-2">Start Meeting</h2>
    <div className="startButton">
      <button class="button" onClick={this.handleClick}>Start Meeting</button>
    </div>
  </div>
}
}

mapStateToProps

export default connect()(StartButton)
