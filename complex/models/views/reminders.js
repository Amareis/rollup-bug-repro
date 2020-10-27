import {data, send, subscribe, dataModel, Reminder, User} from '../internal.js'
import RemindersArchiveView from './remindersArchive.js'
dataModel('RemindersView')
export default class RemindersView {
    used = [data, send, subscribe, dataModel, Reminder, User, RemindersArchiveView]
}
