import './index.css'

const TodoItem = props => {
  const {todoItem, deleteFunction} = props
  const {id, title} = todoItem

  const onDelete = () => {
    deleteFunction(id)
  }

  return (
    <li className="todo-item">
      <p className="item-content">{title}</p>
      <button className="delete-button" onClick={onDelete} type="button">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
