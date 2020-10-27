import {
    dataModel, send, subscribe, data, Todo, User, OurFile, Issue, Message, Group,
} from './internal.js'

dataModel('CheckStatus')
export class CheckStatus {
    used = [send, subscribe, data, Todo, User, OurFile, Issue, Message, Group]
}

dataModel('Chat')
export default class Chat {}

dataModel('Chats')
export class Chats {}
