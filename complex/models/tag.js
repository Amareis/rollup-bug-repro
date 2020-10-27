
import {data, send, subscribe, dataModel} from './internal.js'

dataModel('Tag')
export default class Tag {
    used = [data, send, subscribe]
}

dataModel('Tags')
export class Tags {
}
