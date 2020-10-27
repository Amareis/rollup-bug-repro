import {data, send, subscribe, dataModel, Tag, Chat, User, Group} from './internal.js'

dataModel('Issue')
export default class Issue {
    used = [data, send, subscribe, dataModel, Tag, Chat, User, Group]
}

dataModel('Issues')
export class Issues {
}
