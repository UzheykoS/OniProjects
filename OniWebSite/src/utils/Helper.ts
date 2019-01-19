export const Tabs = {
    Main: 'Главная',
    About: 'О нас',
    Cakes: 'Торты',
    Macarons: 'Макарон',
    Marmalade: 'Мармелад',
    Corporate: 'Корпоративным клиентам',
    Contacts: 'Доставка и оплата'
}

export function loadMainPageImage(url: string) {
    return new Promise((resolve, reject) => {
        let img = new Image();
        img.onload = () => {
            resolve();
        }
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
    return new Promise((resolve, reject) => {
        urls.forEach(url => {
            let img = new Image();
            img.src = url;
        });
        resolve();
    });
}