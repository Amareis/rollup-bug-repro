import {data, dataModel, User, Chat, Reminder, Issue} from '../internal.js'
import ViewerView from './viewer.js'
import ContactsView from './contacts.js'
import SnackbarView from './snackbar.js'
import FlowView from './flow.js'
import IssuesView from './issues.js'
import RemindersView from './reminders.js'
dataModel('Views')
export default class Views {
    used = [data, dataModel, User, Chat, Reminder, Issue, ViewerView, ContactsView, SnackbarView, FlowView, IssuesView, RemindersView]
}
