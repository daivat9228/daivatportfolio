(async () => {
  const imagemin = (await import('imagemin')).default;
  const imageminWebp = (await import('imagemin-webp')).default;
  const imageminPngquant = (await import('imagemin-pngquant')).default;

  try {
    await imagemin(['src/img/*.{png,jpg,jpeg}'], {
      destination: 'src/img/optimized',
      plugins: [
        imageminPngquant({ quality: [0.6, 0.8] }),
        imageminWebp({ quality: 75 })
      ]
    });
    
    console.log('✅ Images optimized!');
    console.log('📁 Check src/img/optimized/');
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
})();