import React from 'react'
import Input from './Input'
import List from './List'

class State extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [
        {
          id: 1,
          title: '标题1',
          completed: false
        },
        {
          id: 2,
          title: '标题2',
          completed: false
        },
        {
          id: 3,
          title: '标题3',
          completed: false
        }
      ]
    }
  }
  render() {
    return <div>
      <Input addItem={this.addItem}></Input>
      <List list={this.state.list}
        deleteItem={this.deleteItem}
        toggleCompleted={this.toggleCompleted}
      />
    </div>
  }
  // 新增一项
  addItem = (title) => {
    const list = this.state.list
    this.setState({
      // 使用 concat 返回不可变值
      list: list.concat({
        id: Math.random().toString().slice(-5), // id 累加
        title,
        completed: false
      })
    })
  }
  // 删除一项
  deleteItem = (id) => {
    console.log('delete' , id)
    this.setState({
      // 使用 filter 返回不可变值
      list: this.state.list.filter(item => item.id !== id)
    })
  }
  // 切换完成状态
  toggleCompleted = (id) => {
    this.setState({
      // 使用 map 返回不可变值
      list: this.state.list.map(item => {
        const completed = item.id === id
          ? !item.completed
          : item.completed // 切换完成状态
        // 返回新对象
        return {
          ...item,
          completed
        }
      })
    })
  }
    // 读取本地存储的数据 
   getData = () => {
     console.log('get data')
      var data = localStorage.getItem("todo");
      if (data !== null) {
          // 本地存储里面的数据是字符串格式的 但是我们需要的是对象格式的
          return JSON.parse(data);
      } else {
          return [];
      }
  }
  // 保存本地存储数据
 saveData = (data) => {
  console.log('save data')
      localStorage.setItem("todo", JSON.stringify(data));
  }
  componentDidMount() {
    console.log('didMount')
    this.setState({
      list: this.getData()
    })
  }
  componentWillUnmount() {    
    console.log('willUnount')
    this.saveData(this.state.list)
  }
}

export default State