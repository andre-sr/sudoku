//ELEMENTOS
const mainContainer = document.querySelector('#main-container')


//VARIAVEIS
var tableMirror = []
var tableMirrorSolution = []

//FUNCOES 
function tableLineConstructor() {
    mainContainer.innerHTML = ""
    let tableElement = document.createElement('table')
    let contY = 0
    for (let y = 0; y < 11; y++) {
        let trElement = document.createElement('tr')
        let contX = 0
        if (y == 3 || y == 7) {
            for (let x = 0; x < 11; x++) {
                let tdElement = document.createElement('td')
                tdElement.classList.add('empty-space-line')
                trElement.append(tdElement) 
            }
        } else {
            for (let x = 0; x < 11; x++) {
                let tdElement = document.createElement('td')
                //tdElement.textContent = `${x+1}`
                if (x == 3 || x == 7) {
                    tdElement.classList.add('empty-space')
                } else {
                    tdElement.textContent = `o`
                    tdElement.classList.add(`y${contY}-x${contX}`)
                    tdElement.id = `y${contY}-x${contX}-q${qDefine(contY, contX)}`
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
    eventListenerCreator()
    arrayCreator()
}

function qDefine(y, x) { //função que retorna o quadrante a qual a célula pertence por meio do uso do x e y
    let q = 'Q'
    switch (y) {
        case 0:
        case 1:
        case 2:
            if (x < 3) {
                q = 1
            } else if (x > 2 && x < 6) {
                q = 2
            } else {
                q = 3
            }
            break;
        case 3:
        case 4:
        case 5:
            if (x < 3) {
                q = 4
            } else if (x > 2 && x < 6) {
                q = 5
            } else {
                q = 6
            }
            break;
        case 6:
        case 7:
        case 8:
            if (x < 3) {
                q = 7
            } else if (x > 2 && x < 6) {
                q = 8
            } else {
                q = 9
            }
            break;
        default:
            console.log("Opção inválida.");
    }
    return q    
}

function arrayCreator() {
    tableMirror = []
    tableMirrorSolution = []

    for (let y = 0; y < 9; y++) {
        let line = []
        for (let x = 0; x < 9; x++) {
            line.push('x')
        }
        tableMirrorSolution.push(line)
    }
    tableMirror = tableMirrorSolution
    console.log(tableMirrorSolution)
}

function solutionCreator() {
    for (let y = 0; y < 9; y++) {
        for (let x = 0; x < 9; x++) {
            randomNumber = 1 + Math.floor(Math.random() * 9)
            tableMirror[y][x] 
            
            if () {

            } 

 
        }
    }
}


function eventListenerCreator() {
    for (let y = 0; y < 9; y++) {
        for (let x = 0; x < 9; x++) {
            const cell  = document.querySelector(`.y${y}-x${x}`)
            cell.addEventListener('click', (e) => {
                console.log(e.srcElement.id)
            })    
        }
    }
}