import React from 'react'

class Input extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: ''
    }
  }
  render() {
    return <div>
      <input value={this.state.title} onChange={this.changeHandler} />
      <button onClick={this.addHandler}>添加</button>
    </div>
  }
  changeHandler = (e) => {
    const newTitle = e.target.value
    this.setState({
      title: newTitle
    })
  }
  addHandler = () => {
    console.log('add')
    const { addItem } = this.props
    addItem(this.state.title)
    this.setState({
      title: ''
    })
  }
}
export default Input