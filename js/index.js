let narudzbine = []
let dinos = [
    {
        id: 0,
        name: 'Scipionyx',
        img: 'http://images.dinosaurpictures.org/Scipionyx_QY_200_3742.jpg',
        cena: 221
    },
    {
        id: 1,
        name: 'Becklespinax',
        img: 'http://images.dinosaurpictures.org/altispinax-becklespinax_e05c.jpg',
        cena: 275
    },
    {
        id: 2,
        name: 'Sciurumimus',
        img: 'http://images.dinosaurpictures.org/Sciurumimus_albersdoerferi_web_fa15.jpg',
        cena: 341
    },
    {
        id: 3,
        name: 'Hypsilophodon',
        img: 'http://images.dinosaurpictures.org/hypsilophodon-1024x636_6963.jpg',
        cena: 189
    },
    {
        id: 4,
        name: 'Dacentrurus',
        img: 'http://images.dinosaurpictures.org/Dacentrurus_20140118_5d27.jpg',
        cena: 315
    },
    {
        id: 5,
        name: 'Iguanodon',
        img: 'http://images.dinosaurpictures.org/Iguanodon_1157950_ea00.jpg',
        cena: 374
    },
    {
        id: 6,
        name: 'Asylosaurus',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Asylosaurus_NT.jpg/440px-Asylosaurus_NT.jpg',
        cena: 301
    },
    {
        id: 7,
        name: 'Efraasia',
        img: 'http://images.dinosaurpictures.org/efraasia_0a4e.jpg',
        cena: 199
    },
    {
        id: 8,
        name: 'Cryptosaurus',
        img: 'https://images.dinosaurpictures.org/Cryptosaurus/Cryptosaurus_tumblr_inline_on3a5nVchm1rx4yme_1280_94c8.jpg',
        cena: 218
    }
]
//selektovanje inputa
const inputKupac = document.querySelector('#kupac')
const inputDino = document.querySelector('#select-dino')
const inputNapomena = document.querySelector('#textarea-field')
const forma = document.querySelector('#forma')
const glavni = document.querySelector('#item-container')
const naruciti = document.querySelector('#naruci')
const ispisNarudzbina = document.querySelector('#btn-all')

//elementi narudzbine
{/* <div class="item">
        <p><span>Купац:</span> Ана Перић</p>
        <p><span>Напомена:</span> Упаковати као рођендански поклон</p>
        <p><span>Диносаурус: </span> Efraasia</p>
        <p><span>Цена: </span> 199</p>
        <p><button>Обриши</button></p>
    </div> */}
// const itemi = document.createElement('div')
// itemi.className = 'item'

// const kupac = document.createElement('p')
// kupac.innerHTML = `<span>Kupac:</span> ${inputKupac.value}`

// const napomena = document.createElement('p')
// kupac.innerHTML = `<span>Kupac:</span> ${inputNapomena.value}`

// const dino = document.createElement('p')
// kupac.innerHTML = `<span>Kupac:</span> ${inputDino.value}`

// const cena = document.createElement('p')
// kupac.innerHTML = `<span>Kupac:</span> ${imeKupca}`
ispisNarudzbina.addEventListener('click', () =>{
    narudzbine.push({
        id: 0,
        name: inputDino.value,
        img: dinos[i][2],
        cena: dinos[i][3] //sta je i?????
})

})

naruciti.addEventListener('click', () => {
    uslovi
    if(inputKupac.value.trim() == '' || inputDino.value.trim() == '' || inputKupac.value.trim().length < 4)
    {
        console.log('Nepravilan unos');
        return
    }

    const itemi = document.createElement('div')
    itemi.className = 'item'

    const kupac = document.createElement('p')
    kupac.innerHTML = `<span>Kupac:</span> ${inputKupac.value}`

    const napomena = document.createElement('p')
    napomena.innerHTML = `<span>Napomena:</span> ${inputNapomena.value}`

    const dino = document.createElement('p')
    dino.innerHTML = `<span>Dinosaurus:</span> ${inputDino.value}`

    const cena = document.createElement('p')
    cena.innerHTML = `<span>Cena:</span> ${inputKupac}`

    const brisanje = document.createElement('p')

    const dugmeBrisanje = document.createElement('button')
    dugmeBrisanje.innerText = 'Obrisi'
    dugmeBrisanje.addEventListener('click', (e) =>{
        e.target.parentElement.remove()
    })
    brisanje.appendChild(dugmeBrisanje)
    itemi.appendChild(kupac)
    itemi.appendChild(napomena)
    itemi.appendChild(dino)
    itemi.appendChild(cena)
    itemi.appendChild(brisanje)

    glavni.appendChild(itemi)

    narudzbine.push({
            id: 0,
            name: 'Scipionyx',
            img: 'http://images.dinosaurpictures.org/Scipionyx_QY_200_3742.jpg',
            cena: dinos[i][3]
    })

})