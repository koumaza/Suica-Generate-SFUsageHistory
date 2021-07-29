export const createDateGridElem = (date) => {
    const dateElem = document.createElement('div')
    dateElem.classList.add('grid-Date')
    dateElem.innerText = date
    return dateElem // Not Array
}

export const createTypeGridElem = (types) => {
    if (types.length === 1) {
        const typeElem = [document.createElement('div')]
        typeElem[0].classList.add('grid-Type', 'grid-TypeOneC')
        typeElem[0].innerText = types[0]
        return typeElem // Array
    } else if (types.length === 2) {
        const typeElems = [document.createElement('div'), document.createElement('div')]
        typeElems.forEach(typeElem => { typeElem.classList.add('grid-Type') })
        typeElems[0].innerText = types[0]
        typeElems[1].innerText = types[1]
        return typeElems // Array
    }
}

export const createLocationGridElem = (locations) => {
    if (locations.length === 1) {
        const locationElems = [document.createElement('div'), document.createElement('div')]
        locationElems.forEach(locationElem => { locationElem.classList.add('grid-Location') })
        locationElems[0].innerText = locations[0]
        return locationElems // Array
    } else if (locations.length === 2) {
        const locationElems = [document.createElement('div'), document.createElement('div')]
        locationElems.forEach(locationElem => { locationElem.classList.add('grid-Location') })
        locationElems[0].innerText = locations[0]
        locationElems[1].innerText = locations[1]
        return locationElems // Array
    }
}

export const createPayBalanceGridElem = (balance) => {
    const balanceElem = document.createElement('div')
    balanceElem.classList.add('grid-Pay', 'grid-PayBalance')
    balanceElem.innerText = '残高￥' + balance
    return balanceElem // Not Array
}

export const createPayAmountGridElem = (amount) => {
    const amountElem = document.createElement('div')
    amountElem.classList.add('grid-Pay', 'grid-PayAmount')
    amountElem.innerText = amount
    return amountElem // Not Array
}


export const getContainerElement = () => {
    return document.getElementById('contentContainer')
}

export const generateGridElements = (data) => {
    const elements = []
    data.forEach(datum => {
        const dateGridElem = createDateGridElem(datum.Date) // Not Array
        const typeGridElem = createTypeGridElem(datum.Type) // Array
        const locationGridElem = createLocationGridElem(datum.Location) // Array
        const payBalanceGridElem = createPayBalanceGridElem(datum.Balance) // Not Array
        const payAmountGridElem = createPayAmountGridElem(datum.Amount) // Not Array
        elements.push({
            dateGridElem: dateGridElem,
            typeGridElem: typeGridElem,
            locationGridElem: locationGridElem,
            payBalanceGridElem: payBalanceGridElem,
            payAmountGridElem: payAmountGridElem
        })
    })
    return elements
}

export const applyToContainer = (elementsArray) => {
    elementsArray.forEach(elements => {
        const contentBlockElement = document.createElement('div')
        contentBlockElement.classList.add('contentBlock')
        contentBlockElement.appendChild(elements.dateGridElem)
        elements.typeGridElem.forEach(elem => {
            contentBlockElement.appendChild(elem)
        })
        elements.locationGridElem.forEach(elem => {
            contentBlockElement.appendChild(elem)
        })
        contentBlockElement.appendChild(elements.payBalanceGridElem)
        contentBlockElement.appendChild(elements.payAmountGridElem)
        getContainerElement().appendChild(contentBlockElement)
    })
}

export const generateHTML = (elementsArray, containerElem) => {
    elementsArray.forEach(elements => {
        const contentBlockElement = document.createElement('div')
        contentBlockElement.classList.add('contentBlock')
        contentBlockElement.appendChild(elements.dateGridElem)
        elements.typeGridElem.forEach(elem => {
            contentBlockElement.appendChild(elem)
        })
        elements.locationGridElem.forEach(elem => {
            contentBlockElement.appendChild(elem)
        })
        contentBlockElement.appendChild(elements.payBalanceGridElem)
        contentBlockElement.appendChild(elements.payAmountGridElem)
        containerElem.appendChild(contentBlockElement)
    })
}