import {data, User, Chat, subscribe, send, dataModel} from './internal.js'

export const imagesMimes = ['image/png', 'image/jpeg']

export function makeFrom() {}

export function urlFor() {}

dataModel('ImageArea')
export class Area {
}

dataModel('OurFile')
export default class OurFile {
    used = [data, User, Chat, subscribe, send, dataModel]
}
