import {Link, OurFile, PageInfo, Message, data, send, subscribe, dataModel} from '../internal.js'
dataModel('ParamsView')
export default class ParamsView {
    used = [Link, OurFile, PageInfo, Message, data, send, subscribe]
}
