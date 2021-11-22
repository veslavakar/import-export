import {DonateForm} from "./donate-form"
import {DonateList} from "./donate-list"
import * as Utils from "../core/utils";

//import {createDonatesArr} from "./donate-list";

const mockDonates = [
    {amount: 4, date: new Date()},
    {amount: 20, date: new Date()},
    {amount: 3, date: new Date()},
    {amount: 1, date: new Date()},
]
//createDonatesArr(mockDonates)

export default class App {
    #donateForm
    #donateList

    constructor() {
        const amountArray = []
        mockDonates.forEach(el => amountArray.push(el.amount))

        this.state = {
            donates: mockDonates,
            totalAmount: Utils.calculateSumOfNumbers(amountArray),
        }
        this.#donateForm = new DonateForm(this.state.totalAmount, this.createNewDonate.bind(this))
        this.#donateList = new DonateList(this.state.donates)

    }

    run() {
        const donateFormHTML = this.#donateForm.render()
        document.body.append(donateFormHTML)
        const donateListHTML = this.#donateList.render()
        document.body.append(donateListHTML)
        this.#donateForm.updateTotalAmount(this.state.totalAmount)

    }

    createNewDonate(newDonate) {
        this.state.donates.push(newDonate)
        this.state.totalAmount = this.state.donates.reduce((acc, el) => {
            return acc + el.amount
        }, 0)
        this.#donateList.updateDonates(this.state.donates)
        this.#donateForm.updateTotalAmount(this.state.totalAmount)

        const donateInput = document.querySelector('.donate-form__donate-input')
        donateInput.value = ''

    }


}