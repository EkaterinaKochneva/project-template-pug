/* Использование:
Подключить в основной файл js
//=include ../ui/video-cover/index.js

const videos = document.querySelectorAll('.video-cover');
videoCover(videos);
*/

function videoCover(videos) {

  const deleteLength = 'https://youtu.be/'.length;  

  const videoIframe = function(id) {
    const query = '?&autoplay=1';
    return 'https://www.youtube.com/embed/' + id + query;
  }

  const createIframe = function(id) {
    let iframe = document.createElement('iframe');
    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
    iframe.setAttribute('src', videoIframe(id));

    return iframe;
  }  

  videos.forEach((element) => {
    const videoHref = element.dataset.video;
    const videoId = videoHref.substring(deleteLength, videoHref.length);
    const button = element.querySelector('.video-cover__button');
    const videoCover = element.querySelector('.video-cover__img');

    button.addEventListener('click', function() {
      let iframe = createIframe(videoId);
      videoCover.remove();
      button.remove();
      element.appendChild(iframe);
    });

  });
}
