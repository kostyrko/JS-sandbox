import types from './types'

const add = item => ({
    type: types.ADD_DROID_CLASS, item
})

const reset = item => ({
    type: types.RESET_DROIDS_CLASS, item
})

export default {
    add,
    reset
}