const {execSync} = require('child_process');

const changedFiles = execSync('git diff --cached --name-only')
  .toString()
  .split('\n');

if (changedFiles.includes('.eslintrc.js')) {
  // Cambia a tu archivo específico
  console.error('Modifications to .eslintrc.js are not allowed!');
  process.exit(1);
}
