import {
    data, send, subscribe, dataModel, Issue, Group, User, Tag, Data,
} from '../internal.js'
import IssuesArchiveView from './issuesArchive.js'
export function dateTitle() {
}

dataModel('Filter')
export class Filter {
}

export function isFilterValid() {
}

dataModel('IssuesView')
export default class IssuesView {
    used = [data, send, subscribe, dataModel, Issue, Group, User, Tag, Data, IssuesArchiveView]
}
