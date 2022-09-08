

const loadPhotos = async()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/photos")
    const data =await res.json()
    // console.log(data);
    displayPhotos(data)
    
}
const displayPhotos = photos =>{
    const photosContainer = document.getElementById('photo-container')
    photos = photos.slice(0,15)
    photos.forEach(photo => {
        const col = document.createElement('div')
        col.classList.add('col')
        col.innerHTML = ` <div class="card p-3">
        <img src="${photo.url}" class="card-img-top" alt="...">
        <div class="card-body py-4">
            <h5 class="card-title text-capitalize py-3">${photo.title}</h5>
            <button class="">Album No.</button>
        </div>`
        photosContainer.appendChild(col)


        
        
    });
}



loadPhotos()