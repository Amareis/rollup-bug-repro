import {Chat, data, send, subscribe, dataModel} from './internal.js'

dataModel('Todo')
export default class Todo {
    used = [Chat, data, send, subscribe]
}
