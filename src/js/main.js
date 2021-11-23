import image_1 from '../media/images/1.jpg';
import image_2 from '../media/images/2.jpg';
import image_3 from '../media/images/3.jpg';
import image_4 from '../media/images/4.gif';
import audio_1 from '../media/audio/1.mp3';
import audio_2 from '../media/audio/2.mp3';
import audio_3 from '../media/audio/3.mp3';
import video_1 from '../media/video/1.mp4';
import video_2 from '../media/video/2.mp4';
import '../style/style.scss';

let gallery = [
    { type: 'img', title: 'image_1', src: image_1 },
    { type: 'img', title: 'image_2', src: image_2 },
    { type: 'img', title: 'image_3', src: image_3 },
    { type: 'img', title: 'image_4', src: image_4 },
    { type: 'audio', title: 'audio_1', src: audio_1 },
    { type: 'audio', title: 'audio_2', src: audio_2 },
    { type: 'audio', title: 'audio_3', src: audio_3 },
    { type: 'video', title: 'video_1', src: video_1 },
    { type: 'video', title: 'video_2', src: video_2 },
];

let grid = document.getElementById('gallery');

gallery.forEach(item => {
    let itemHTML = '';

    switch (item.type) {
        case 'img':
            itemHTML = `<img src="${item.src}" alt="${item.title}">`;
            break;
        case 'audio':
            itemHTML = `<audio controls>
                            <source src="${item.src}" type="audio/mpeg">
                        </audio>`;
            break;
        case 'video':
            itemHTML = `
            <video width="100%" height="300" controls="controls">
                <source src="${item.src}" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
            </video>
            `;
            break;
    }

    grid.insertAdjacentHTML('beforeend', `
        <div class="item gallery__item">
            <div class="gallery__content">${itemHTML}</div>
            <div class="gallery__desc">${item.title}</div>
        </div>
    `);
});