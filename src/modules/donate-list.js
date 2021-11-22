import {Settings as Set} from "../core/constants/settings"
import * as Utils from "../core/utils"

const createDonatesArr = (donatesArr) => {
    const donatesContainerArr = document.createElement('div')
    donatesContainerArr.className = 'donates-container__donates'
    donatesArr.forEach((el) => {
        const donateItem = document.createElement('div')
        donateItem.className = 'donate-item'
        const amountDollars = document.createElement('b')
        amountDollars.textContent = `${el.amount}${Set.currency}`
        donateItem.textContent = `${Utils.getFormattedTime(el.date)} - `
        donateItem.append(amountDollars)
        donatesContainerArr.append(donateItem)
    })
    return donatesContainerArr
}



export class DonateList {
    #donates
    #donatesContainer

    constructor(donates) {
        this.#donates = donates
        this.#donatesContainer = document.createElement('div')
        this.#donatesContainer.className = 'donates-container'
    }

    render() {
        const headerDonates = document.createElement('h2')
        headerDonates.className = 'donates-container__title'
        headerDonates.textContent = 'Список донатов'
        const donatesContainerArr = createDonatesArr(this.#donates)
        this.#donatesContainer.append(headerDonates, donatesContainerArr)
        return this.#donatesContainer
    }

    updateDonates(updatedDonates) {
        const donatesContainerArr = document.querySelector('.donates-container__donates')
        donatesContainerArr.remove()
        const donatesContainerArrHTML = createDonatesArr(updatedDonates)
        this.#donatesContainer.append(donatesContainerArrHTML)
    }

}