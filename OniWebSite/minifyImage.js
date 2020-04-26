const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');

(async () => {
  const aboutFiles = await imagemin(['public/images/pages/about/*.jpg'], {
    destination: 'public/images/pages/about/small',
    plugins: [
      imageminMozjpeg({
        quality: 30,
      }),
    ],
  });

  const cakesFiles = await imagemin(['public/images/pages/cakes/*.jpg'], {
    destination: 'public/images/pages/cakes/small',
    plugins: [
      imageminMozjpeg({
        quality: 30,
      }),
    ],
  });

  const chouxFiles = await imagemin(['public/images/pages/choux/*.jpg'], {
    destination: 'public/images/pages/choux/small',
    plugins: [
      imageminMozjpeg({
        quality: 30,
      }),
    ],
  });

  const contactsFiles = await imagemin(['public/images/pages/contacts/*.jpg'], {
    destination: 'public/images/pages/contacts/small',
    plugins: [
      imageminMozjpeg({
        quality: 30,
      }),
    ],
  });

  const macaronsFiles = await imagemin(['public/images/pages/macarons/*.jpg'], {
    destination: 'public/images/pages/macarons/small',
    plugins: [
      imageminMozjpeg({
        quality: 30,
      }),
    ],
  });

  const mainFiles = await imagemin(['public/images/pages/main/*.jpg'], {
    destination: 'public/images/pages/main/small',
    plugins: [
      imageminMozjpeg({
        quality: 30,
      }),
    ],
  });

  const zephyrFiles = await imagemin(['public/images/pages/zephyr/*.jpg'], {
    destination: 'public/images/pages/zephyr/small',
    plugins: [
      imageminMozjpeg({
        quality: 30,
      }),
    ],
  });

  const cheesecakesFiles = await imagemin(['public/images/pages/cheesecakes/*.jpg'], {
    destination: 'public/images/pages/cheesecakes/small',
    plugins: [
      imageminMozjpeg({
        quality: 30,
      }),
    ],
  });

  console.log(`Minified ${aboutFiles.length} files in About folder!`);
  console.log(`Minified ${cakesFiles.length} files in Cakes folder!`);
  console.log(`Minified ${chouxFiles.length} files in Choux folder!`);
  console.log(`Minified ${contactsFiles.length} files in Contacts folder!`);
  console.log(`Minified ${macaronsFiles.length} files in Macarons folder!`);
  console.log(`Minified ${mainFiles.length} files in Main folder!`);
  console.log(`Minified ${zephyrFiles.length} files in Zephyr folder!`);
  console.log(`Minified ${cheesecakesFiles.length} files in Zephyr folder!`);
})();
