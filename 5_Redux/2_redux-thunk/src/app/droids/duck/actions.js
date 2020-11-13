import types from './types'

const add = item => ({
    type: types.ADD_DROID, item
})

const reset = item => ({
    type: types.RESET_DROIDS, item
})

export default {
    add,
    reset
}