import {data, send, subscribe, dataModel} from './internal.js'

dataModel('Group')
export default class Group {
    used = [data, send, subscribe, dataModel]
}

dataModel('Groups')
export class Groups {
}
