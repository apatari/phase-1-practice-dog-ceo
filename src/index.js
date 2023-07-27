
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
fetch(imgUrl)
.then(response => response.json())
.then(data => renderImages(data))

function renderImages(data) {
    data.message.forEach((picUrl) => {
        const pic = document.createElement('img')
        pic.src = picUrl
        pic.style.width = '20%'
        document.getElementById('dog-image-container').append(pic)
    }
    )
}

const breedUrl = "https://dog.ceo/api/breeds/list/all";
fetch(breedUrl)
.then(response => response.json())
.then(data => allBreeds(data))
.then(activateFilters())

function allBreeds(data) {
    for(breed in data.message) {
        const element = document.createElement('li')
        element.innerText = breed
        element.addEventListener('click', () => element.style.color = 'blue')
        document.getElementById('dog-breeds').append(element)
    }
}

function activateFilters() {

    document.querySelector('#breed-dropdown').addEventListener('change', (e) => filterBreeds(e.target.value))

}

function filterBreeds(letter) {
    fetch(breedUrl)
    .then(response => response.json())
    .then(data => someBreeds(data, letter))
}

function someBreeds(data, letter) {
    document.getElementById('dog-breeds').innerHTML = ''
    for(breed in data.message) {
        if (breed[0] === letter){
            const element = document.createElement('li')
            element.innerText = breed
            element.addEventListener('click', () => element.style.color = 'blue')
            document.getElementById('dog-breeds').append(element)
        }
        
    }
}

