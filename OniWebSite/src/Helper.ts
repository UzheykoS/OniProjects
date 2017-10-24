export const Tabs = {
    About: "О нас",
    Cakes: "Торты",
    Macarons: "Макаруны",
    Marmalade: "Мармелад",
    Corporate: "Корпоративным клиентам",
    Contacts: "Контакты"
}

export function loadMainPageImage(url: string) {
    return new Promise((resolve, reject) => {
        let img = new Image();
        img.onload = () => {
            resolve();
        }
        img.src = url;        
        //ie fix
        if (img.complete) {
            resolve();
        }
    });
}

export function preloadImages(urls: string[]) {
    return new Promise((resolve, reject) => {
        urls.forEach(url => {
            let img = new Image();
            img.src = url;
        });
        resolve();
    });
}