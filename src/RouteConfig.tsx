import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Home, TodoList, MobxTodoList } from '@/routes'
import App from '@/App'

interface Props {}
interface State {}

export default class RouteConfig extends Component<Props, State> {
  state = {}

  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact render={() => <Redirect to='/home' />} />
          <Route path='/home' component={Home} />
          <Route path='/app' component={App} />
          <Route path='/todo' component={TodoList} />
          <Route path='/mobx-todo' component={MobxTodoList} />
        </Switch>
      </Router>
    )
  }
}
