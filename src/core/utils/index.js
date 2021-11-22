import moment from "moment"

export const calculateSumOfNumbers = (numbers) => {
    if (Array.isArray(numbers) && !numbers.some(el => isNaN((Number(el))))) {
       return numbers.reduce((acc, el) => acc + Number(el), 0)
    }
}

export const getFormattedTime = (date) => {
    return moment(date).format('MMMM Do YYYY, h:mm:ss a')
}
