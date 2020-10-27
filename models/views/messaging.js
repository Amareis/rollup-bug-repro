import {
    OurFile, PageInfo, User, Message, data, send, subscribe, makeFrom, Chat, dataModel,
} from '../internal.js'
import ParamsView from './params.js'
dataModel('Anchor')
export class Anchor {
}

dataModel('MessagingView')
export default class MessagingView {
    used = [OurFile, PageInfo, User, Message, data, send, subscribe, makeFrom, Chat, ParamsView]
}
