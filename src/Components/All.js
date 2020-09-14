export const setBG = (elm, url) => {
  var header = document.querySelector(elm);
  header.style.backgroundImage = `url(${url})`;
}


export const bgFetchDelay = (elm, url, delay = 0) => {
  var localUrl, dtog = false;

  fetch(url)
    .then(response => response.blob())
    .then(images => {
      localUrl = URL.createObjectURL(images)
      // console.log({ localUrl })
      dtog && setBG(elm, localUrl)
    })

  // console.log({ delay })
  setTimeout(() => {
    dtog = true;
    localUrl && setBG(elm, localUrl)
  }, delay)
}


