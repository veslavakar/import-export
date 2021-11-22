import {Settings as Set} from "../core/constants/settings";

export class DonateForm {
    #donateForm

    constructor(totalAmount, createNewDonate) {
        this.totalAmount = totalAmount
        this.createNewDonate = createNewDonate
        this.#donateForm = document.createElement('form')
        this.#donateForm.className = 'donate-form'
    }

    render() {
        const header = document.createElement('h1')
        header.id = 'total-amount'
        header.textContent = '28$'

        const donateLabel = document.createElement('label')
        donateLabel.className = 'donate-form__input-label'
        donateLabel.textContent = `Введите сумму в ${Set.currency}`

        const donateInput = document.createElement('input')
        donateInput.className = 'donate-form__donate-input'
        donateInput.name = 'amount'
        donateInput.type = 'number'
        donateInput.max = '100'
        donateInput.min = '1'
        donateInput.required = ''

        const submitButton = document.createElement('button')
        submitButton.className = 'donate-form__submit-button'
        submitButton.type = 'submit'
        submitButton.textContent = 'Задонатить'

        this.#donateForm.append(header, donateLabel, submitButton)
        donateLabel.append(donateInput)
        this.#donateForm.addEventListener('submit', (event) => {
            event.preventDefault()
            const newDonate = {
                date: new Date(),
                amount: Number(donateInput.value),
            }
            this.createNewDonate(newDonate)
        })

        return this.#donateForm
    }

    updateTotalAmount(totalAmount) {
        const header = document.querySelector('#total-amount')
        header.textContent = `${totalAmount}${Set.currency}`
    }
}