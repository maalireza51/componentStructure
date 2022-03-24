//inputs
function Username() {
    return <div className="form-element">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" />
    </div>
}
function Password() {
    return <div className="form-element">
        <label htmlFor="password">Password: </label>
        <input type="text" id="password" />
    </div>
}
function TodoInput() {
    return <div className="form-element">
        <label htmlFor="todoInput">What do you want to do today?</label>
        <input type="text" id="todoInput" placeholder="type your tasks" />
    </div>
}
function Checkbox() {
    return <div className="form-element">
        <label htmlFor="checkbox">task1</label>
        <input type="checkbox" id="checkbox" />
    </div>
}

//button
function Submit() {
    return <input type="submit" id="submit" />
}

//Forms
function Form() {
    return <form className="login-form">
        <Username />
        <Password />
        <Submit />
    </form>
}
function Todoform() {
    return <form className="todo-form">
        <TodoInput />
        <Checkbox />
    </form>
}

//columns
function Col() {
    return <div className="col"><Form /></div>
}
function Todocol(){
    return <div className="todocol"><Todoform /></div>
}

//row
function Row(){
    return <div className="row">
        <Auth/>
        <Col/>
        <Todocol/>
    </div>
}

ReactDOM.render(<Row />, document.getElementById('root'));