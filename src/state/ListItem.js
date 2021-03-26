import React from 'react'

class ListItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        // completed: false
    }
  } 
    render() {
        const { item } = this.props

        return <div style={{ marginTop: '10px' }}>
          <input type="checkbox" style={{margin: '5px'}}  checked={item.completed} onChange={this.completedChangeHandler} />
            <span style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
                {item.title}
            </span>
            <button style={{marginLeft: '5px'}} onClick={this.deleteHandler}>删除</button>
        </div>
    }
    completedChangeHandler = (e) => {
      const newVal = e.target.checked
        // this.setState({
        //   completed: newVal
        // })
        console.log('completed turned to', newVal)
        const { item, toggleCompleted } = this.props
        toggleCompleted(item.id)
    }
    deleteHandler = () => {
        const { item, deleteItem } = this.props
        deleteItem(item.id)
    }
}

export default ListItem
