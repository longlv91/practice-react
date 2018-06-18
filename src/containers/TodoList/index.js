import React from "react";
import List from "../../components/List/index";
import ListItem from "../../components/ListItem/index";
import Button from "../../components/Button";
import Input from "../LoginPage/Input"

export class TodoListPage extends React.Component {
    constructor(props) {
        super();
        this.props = props;
        this.state = {
            todoList: ["Test 1"],
            currentIndex: 0,
            itemName: ""
        };
    }

    handleChange(event) {
        if (event.target.value !== "") {
            this.setState({
                itemName: event.target.value
            })
        }
    }

    addTodoItem() {
        if (this.state.itemName !== "") {
            let arr = this.state.todoList;
            arr.push(this.state.itemName);
            this.setState({
                todoList: arr
            });
            this.setState({
                itemName: ""
            });
        }
    }

    deleteTodoItem(index) {
        console.log("Delete Action", index);
    }

    updateTodoItem() {
        console.log("Update Action");
    }

    loadToDoItem(index) {
        console.log("View Action", index);
    }

    render() {
        return (
            <div>
                <Input value={this.state.itemName} type={"text"} placeholder={"Enter item name"} onChange={this.handleChange.bind(this)}/>
                <Button onClick={this.addTodoItem.bind(this)}>Add Item</Button>
                <List items={this.state.todoList} component={ListItem}
                      loadToDoItem={this.loadToDoItem.bind(this)}/>
            </div>
        );
    }

}