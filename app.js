import {Data} from './models/index.js'

export * from './models/index.js'

function makeData() {
    const d = new Data()
    return d
}

export class App {
    data = makeData()
}

let app = undefined

export function createApp() {
    app = new App()
    return app
}

export {app as default}
