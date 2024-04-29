//VARIAVEIS
const mainContainer = document.querySelector('#main-container')


//FUNCOES 
function tableLineConstructor() {
    let tableElement = document.createElement('table')
    let contY = 0
    for (let y = 0; y < 11; y++) {
        let trElement = document.createElement('tr')
        let contX = 0
        if (y == 3 || y == 7) {
            for (let x = 0; x < 11; x++) {
                let tdElement = document.createElement('td')
                //tdElement.textContent = `${x+1}`
                
                tdElement.classList.add('empty-space-line')
                
               // tdElement.textContent = `x=${contX+1} - `
                
               
                trElement.append(tdElement)
                
            }

        } else {
            for (let x = 0; x < 11; x++) {
                let tdElement = document.createElement('td')
                //tdElement.textContent = `${x+1}`
                if (x == 3 || x == 7) {
                    tdElement.classList.add('empty-space')
                } else {
                    tdElement.textContent = `X`
                    tdElement.classList.add(`y${contY}-x${contX}`)
                    contX += 1
                }
                trElement.append(tdElement)
                
            }
        }    
        tableElement.append(trElement)
        if (y !== 3 && y !== 7) {
            contY += 1

        }
        
    }
    mainContainer.append(tableElement)
}