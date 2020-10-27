import {Message, dataModel, data, subscribe, urlFor} from './internal.js'

dataModel('Link')
export default class Link {
    used = [Message, dataModel, data, subscribe, urlFor]
}
