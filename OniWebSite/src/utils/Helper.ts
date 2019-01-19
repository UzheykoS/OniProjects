export const Tabs = {
    Main: 'Главная',
    Products: 'Продукция',
    CorporateClients: 'Корпоративным клиентам',
    DeliveryAndPayment: 'Доставка и оплата',
    About: 'О нас',    
    News: 'Новости'
}

export const ProductTabs = {
    Cakes: 'Торты',
    Macarons: 'Макарон',
    Zephyr: 'Зефир',
    Choux: 'Шу'
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