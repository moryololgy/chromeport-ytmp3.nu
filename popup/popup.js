function id(id) {
   return document.getElementById(id);
}

function checkURL(url) {
   url = url.replace(/https\:\/\/|http\:\/\/|www\./g, '');

   if(url.indexOf('watch?v=') > -1 || url.indexOf('shorts/') > -1) {
      return /[a-zA-Z0-9\-\_]{11}/.exec(url);
   } else {
      return null;
   }
}

var button = id('selection').querySelectorAll('button');

button[0].addEventListener('click', async function() {
   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      var video = checkURL(tabs[0].url);

      if(video == null) {
         id('selection').style.display = 'none';
         id('error').style.display = 'block';
      } else {
         chrome.tabs.create({url: 'https://ytmp3.nu/#' + video + '/mp3'});
         window.close();
      }
   });
});

button[1].addEventListener('click', async function() {
   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      var video = checkURL(tabs[0].url);

      if(video == null) {
         id('selection').style.display = 'none';
         id('error').style.display = 'block';
      } else {
         chrome.tabs.create({url: 'https://ytmp3.nu/#' + video + '/mp4'});
         window.close();
      }
   });
});

button[2].addEventListener('click', async function() {
   chrome.tabs.create({url: 'https://ytmp3.nu/'});
   window.close();
});
