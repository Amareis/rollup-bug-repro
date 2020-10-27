import {data, send, User, Chat, OurFile, Link, subscribe, dataModel} from './internal.js'

dataModel('Message')
export default class Message {
    used = [data, send, User, Chat, OurFile, Link, subscribe, dataModel]
}
