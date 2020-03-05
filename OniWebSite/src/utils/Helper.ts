export function loadMainPageImage(url: string) {
  return new Promise(resolve => {
    let img = new Image();
    img.onload = () => {
      resolve();
    };
    img.src = url;

    //ie fix
    // setTimeout(() => {
    //     if (img.complete) {
    //         resolve();
    //     }
    // }, 500);
  });
}

export function preloadImages(urls: string[]) {
  return new Promise(resolve => {
    urls.forEach(url => {
      let img = new Image();
      img.src = url;
    });
    resolve();
  });
}

export const SEPARATORS = {
  SPACE_DASH_SPACE: '\u2007\u2014\u2007',
  DASH: '\u2014',
  RIGHT_SINGLE_QUOTE: '\u2019',
};

export const px2vw = (size: number, width = 1440) => `${(size / width) * 100}vw`;
