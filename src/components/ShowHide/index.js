// Write your code here
import './index.css'
import {Component} from 'react'

class ShowHide extends Component {
  state = {isVisibleFirstname: 'hide', isVisibleLastname: 'hide'}

  onShowHideFirstname = () => {
    const {isVisibleFirstname} = this.state
    if (isVisibleFirstname === 'hide') {
      this.setState(prevState => ({isVisibleFirstname: 'show'}))
    } else {
      this.setState(prevState => ({isVisibleFirstname: 'hide'}))
    }
  }

  onShowHideLastname = () => {
    const {isVisibleLastname} = this.state
    if (isVisibleLastname === 'hide') {
      this.setState(prevState => ({isVisibleLastname: 'show'}))
    } else {
      this.setState(prevState => ({isVisibleLastname: 'hide'}))
    }
  }

  render() {
    const {isVisibleFirstname, isVisibleLastname} = this.state
    let FirstCard = null
    let LastCard = null
    if (isVisibleFirstname === 'hide') {
      FirstCard = (
        <div className="name-card">
          <h1 className="name">Joe</h1>
        </div>
      )
    } else {
      FirstCard = null
    }

    if (isVisibleLastname === 'hide') {
      LastCard = (
        <div className="name-card">
          <h1 className="name">Jonas</h1>
        </div>
      )
    }
    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="card-container">
          <div className="card">
            <button
              className="btn"
              type="button"
              onClick={this.onShowHideFirstname}
            >
              Show/Hide Firstname
            </button>
            {FirstCard}
          </div>
          <div className="card">
            <button
              className="btn"
              type="button"
              onClick={this.onShowHideLastname}
            >
              Show/Hide Lastname
            </button>
            {LastCard}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
