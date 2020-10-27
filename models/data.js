import {
    Settings, Preferences, Views, Users, Chats, Reminders, Issues, Groups, Tags,
} from './internal.js'

export const dataModel = console.log

export function data() {}

export const send = console.log

export const subscribe = console.log


export default class Data {
    used = [Settings, Preferences, Views, Users, Chats, Reminders, Issues, Groups, Tags]
}

