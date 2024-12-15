const bookmarkData = [
    {
        image: "../assets/illustration-features-tab-1.svg",
        title: "Bookmark in one click",
        paragraph: "Organize your bookmarks however you like. Our simple<br>drag-and-drop interface gives you complete control<br>over how you manage your favourite sites."
    },
]

const bookmark = document.querySelector('.bookmark-btn');
bookmark.addEventListener('click', function() {
    bookmarkData.forEach((item) => {
        const content = document.querySelector('.original');
        content.innerHTML = '';
        const newDiv = document.createElement('div');
        newDiv.className = 'new-bookmark'
        const newDivImg = document.createElement('div');
        newDivImg.className = ' new-bookmark-img';
        newDivImg.innerHTML = 
        `<div>
            <img src="${item.image}">
        </div>
        `
        const newDivText = document.createElement('div');
        newDivText.className = ' new-bookmark-text';
        newDivText.innerHTML = 
        `
        <div>
            <h3>${item.title}</h3>
            <p>${item.paragraph}</p>
            <button>More Info</button>
        </div>
        `
        newDiv.appendChild(newDivImg);
        newDiv.appendChild(newDivText);
        content.appendChild(newDiv);
    });
});

const speedyData = [
    {
        image: "../assets/illustration-features-tab-2.svg",
        title: " Intelligent search",
        paragraph: "Our powerful search feature will help you find saved<br>sites in no time at all. No need to trawl through all of<br>your bookmarks."
    },
]

const speedy = document.querySelector('.speedy-btn');
speedy.addEventListener('click', function() {
    speedyData.forEach((item) => {
        const content = document.querySelector('.original');
        content.innerHTML = '';
        const newDiv = document.createElement('div');
        newDiv.className = 'new-speedy';
        const newDivImg = document.createElement('div');
        newDivImg.className = ' new-speedy-img';
        newDivImg.innerHTML = 
        `<div>
            <img src="${item.image}">
        </div>
        `
        const newDivText = document.createElement('div');
        newDivText.className = ' new-speedy-text';
        newDivText.innerHTML = 
        `
        <div>
            <h3>${item.title}</h3>
            <p>${item.paragraph}</p>
            <button>More Info</button>
        </div>
        `
        newDiv.appendChild(newDivImg);
        newDiv.appendChild(newDivText);
        content.appendChild(newDiv);
    });
});

const easyData = [
    {
        image: "../assets/illustration-features-tab-3.svg",
        title: "Share your bookmarks",
        paragraph: "Easily share your bookmarks and collections with<br>others. Create a shareable link that you can send at<br>the click of a button."
    },
]

const easy = document.querySelector('.easy-btn');
easy.addEventListener('click', function() {
    easyData.forEach((item) => {
        const content = document.querySelector('.original');
        content.innerHTML = '';
        const newDiv = document.createElement('div');
        newDiv.className = 'new-easy';
        const newDivImg = document.createElement('div');
        newDivImg.className = ' new-easy-img';
        newDivImg.innerHTML = 
        `<div>
            <img src="${item.image}">
        </div>
        `
        const newDivText = document.createElement('div');
        newDivText.className = ' new-easy-text';
        newDivText.innerHTML = 
        `
        <div>
            <h3>${item.title}</h3>
            <p>${item.paragraph}</p>
            <button>More Info</button>
        </div>
        `
        newDiv.appendChild(newDivImg);
        newDiv.appendChild(newDivText);
        content.appendChild(newDiv);
    });
});
