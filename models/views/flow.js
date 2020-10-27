import {data, Chat, subscribe, send, dataModel, User, Issue} from '../internal.js'
import MessagingView from './messaging.js'
dataModel('FlowView')
export default class FlowView {
    used = [data, Chat, subscribe, send, dataModel, User, Issue, MessagingView]
}
