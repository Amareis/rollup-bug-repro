import {data, User, subscribe, send, dataModel} from '../internal.js'
dataModel('ContactsView')
export default class ContactsView {
    used = [data, User, subscribe, send]
}
