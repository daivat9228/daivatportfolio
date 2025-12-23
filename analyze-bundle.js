const fs = require('fs');
const path = require('path');

// Simple bundle analysis
const buildDir = './build/static/js';
const files = fs.readdirSync(buildDir);

console.log('📊 Bundle Analysis Results:\n');

const jsFiles = files.filter(f => f.endsWith('.js') && !f.endsWith('.map'));
let totalSize = 0;

jsFiles.forEach(file => {
  const filePath = path.join(buildDir, file);
  const stats = fs.statSync(filePath);
  const sizeKB = (stats.size / 1024).toFixed(2);
  totalSize += stats.size;
  
  let type = 'Unknown';
  if (file.includes('main')) type = '🎯 Main Bundle';
  else if (file.includes('chunk')) type = '📦 Code Split Chunk';
  
  console.log(`${type}: ${file} - ${sizeKB} KB`);
});

console.log(`\n📈 Total Bundle Size: ${(totalSize / 1024).toFixed(2)} KB`);

// Performance recommendations
console.log('\n🚀 Performance Analysis:');
if (totalSize > 300 * 1024) {
  console.log('❌ Bundle is large (>300KB). Consider:');
  console.log('   - Remove unused dependencies');
  console.log('   - Use tree shaking');
  console.log('   - Split code further');
} else if (totalSize > 200 * 1024) {
  console.log('⚠️  Bundle is moderate (>200KB). Room for improvement.');
} else {
  console.log('✅ Bundle size is good (<200KB)');
}

// Check for code splitting effectiveness
const chunks = jsFiles.filter(f => f.includes('chunk')).length;
console.log(`\n📦 Code Splitting: ${chunks} chunks created`);
if (chunks > 0) {
  console.log('✅ Code splitting is working!');
} else {
  console.log('❌ No code splitting detected');
}