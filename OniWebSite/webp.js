const imagemin = require('imagemin');
const webp = require('imagemin-webp');

(async () => {
  const aboutFiles = await imagemin(['public/images/pages/about/*.jpg'], {
    destination: 'public/images/pages/about',
    plugins: [
      webp({
        quality: 80,
      }),
    ],
  });

  const cakesFiles = await imagemin(['public/images/pages/cakes/*.jpg'], {
    destination: 'public/images/pages/cakes',
    plugins: [
      webp({
        quality: 80,
      }),
    ],
  });

  const chouxFiles = await imagemin(['public/images/pages/choux/*.jpg'], {
    destination: 'public/images/pages/choux',
    plugins: [
      webp({
        quality: 80,
      }),
    ],
  });

  const contactsFiles = await imagemin(['public/images/pages/contacts/*.jpg'], {
    destination: 'public/images/pages/contacts',
    plugins: [
      webp({
        quality: 80,
      }),
    ],
  });

  const macaronsFiles = await imagemin(['public/images/pages/macarons/*.jpg'], {
    destination: 'public/images/pages/macarons',
    plugins: [
      webp({
        quality: 80,
      }),
    ],
  });

  const mainFiles = await imagemin(['public/images/pages/main/*.jpg'], {
    destination: 'public/images/pages/main',
    plugins: [
      webp({
        quality: 80,
      }),
    ],
  });

  const zephyrFiles = await imagemin(['public/images/pages/zephyr/*.jpg'], {
    destination: 'public/images/pages/zephyr',
    plugins: [
      webp({
        quality: 80,
      }),
    ],
  });

  const cheesecakesFiles = await imagemin(['public/images/pages/cheesecakes/*.jpg'], {
    destination: 'public/images/pages/cheesecakes',
    plugins: [
      webp({
        quality: 80,
      }),
    ],
  });

  console.log(`Converted ${aboutFiles.length} files in About folder!`);
  console.log(`Converted ${cakesFiles.length} files in Cakes folder!`);
  console.log(`Converted ${chouxFiles.length} files in Choux folder!`);
  console.log(`Converted ${contactsFiles.length} files in Contacts folder!`);
  console.log(`Converted ${macaronsFiles.length} files in Macarons folder!`);
  console.log(`Converted ${mainFiles.length} files in Main folder!`);
  console.log(`Converted ${zephyrFiles.length} files in Zephyr folder!`);
  console.log(`Converted ${cheesecakesFiles.length} files in Zephyr folder!`);
})();
