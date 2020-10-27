import {data, send, subscribe, dataModel, User} from './internal.js'

dataModel('Reminder')
export default class Reminder {
    used = [data, send, subscribe, dataModel, User]
}

dataModel('Reminders')
export class Reminders {
}
