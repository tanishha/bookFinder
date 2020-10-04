import {
    toast
} from 'react-toastify'

function showSuccess(msg) {
    toast.success(msg)
}

function showInfo(msg) {
    toast.info(msg)
}

function showWarnings(msg) {
    toast.warn(msg)
}

function handleError(error) {
    console.log('error is', error)
    debugger;
    let errMsg = "Something went wrong"
    let err = error.response
    if (err && err.data) {
        errMsg = err.data.msg
    }
    toast.error(errMsg)
}

export default {
    showSuccess,
    showInfo,
    showWarnings,
    handleError
}