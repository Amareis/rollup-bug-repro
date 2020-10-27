import {OurFile, send, subscribe, data, dataModel} from './internal.js'

dataModel('Profile')
export class Profile {
    used = [OurFile, send, subscribe, data]
}

dataModel('User')
export default class User {
}

dataModel('Users')
export class Users {
}
