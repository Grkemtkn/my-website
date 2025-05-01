const images = [
    'img/foto1.jpg',
    'img/foto2.jpg',
    'img/foto3.jpg',
    'img/foto4.jpg',
    'img/foto5.jpg'
];

let index = 0;
const slider = document.getElementById('slider');
const dotsContainer = document.getElementById('dots-container');


images.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function showImage() {
    slider.src = images[index];


    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

function nextSlide() {
    index = (index + 1) % images.length;
    showImage();
}

function prevSlide() {
    index = (index - 1 + images.length) % images.length;
    showImage();
}

function goToSlide(i) {
    index = i;
    showImage();
}


showImage();


setInterval(nextSlide, 5000);

function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 41.08250, lng: 28.62250 },
        zoom: 11
    });

    const locations = [
        { 
            lat: 41.03689, 
            lng: 28.67872, 
            title: "Bağlar Çeşme Mah. Doğan Araslı Caddesi, 1114. Sk. No:2, 34510 Esenyurt/İstanbul",
            branch: "MERKEZ ŞUBE"
        },
        { 
            lat: 41.02877, 
            lng: 28.66493, 
            title: "Yeşilkent, 1911. Sk. NO:16/1, 34510 Esenyurt/İstanbul",
            branch: "YEŞİLKENT ŞUBE"
        },
        { 
            lat: 41.01486, 
            lng: 28.69311, 
            title: "Akşemsettin Mahallesi 211 sokak, 298. Sk. 2/1, 34522 Esenyurt/İstanbul",
            branch: "FATİH SANAYİ ŞUBE"
        },
        { 
            lat: 41.08195, 
            lng: 28.62804, 
            title: "Akçaburgaz, Halil Fahri Orman Cd. No:1, 34522 Esenyurt/İstanbul",
            branch: "AKÇABURGAZ ŞUBE"
        }
    ];

    const infoWindow = new google.maps.InfoWindow();

    locations.forEach((location) => {
        const marker = new google.maps.Marker({
            position: { lat: location.lat, lng: location.lng },
            map: map,
            title: location.title,
        });

        marker.addListener("click", () => {
            infoWindow.setContent(`
                <div style="min-width:220px;max-width:260px;padding:12px 10px;background:#fff;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.15);font-size:15px;color:#222;">
                    <strong>${location.branch}</strong><br>
                    <span style="font-size:13px;">${location.title}</span>
                </div>
            `);
            infoWindow.open(map, marker);
        });
    });
}
