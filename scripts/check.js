#!/usr/bin/env node

/**
 * Quick verification script before publishing
 */

const { execSync } = require('child_process');
const fs = require('fs');

const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function check(description, condition, fix = '') {
  if (condition) {
    log(`✅ ${description}`, 'green');
    return true;
  } else {
    log(`❌ ${description}`, 'red');
    if (fix) log(`   💡 Fix: ${fix}`, 'yellow');
    return false;
  }
}

function main() {
  log('🔍 Pre-publishing verification checklist\n', 'blue');
  
  let allGood = true;

  // Check if package.json exists and is valid
  try {
    const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    allGood &= check('package.json exists and is valid JSON', true);
    allGood &= check('Package name is set', pkg.name, 'Set "name" in package.json');
    allGood &= check('Package version is set', pkg.version, 'Set "version" in package.json');
    allGood &= check('Package description is set', pkg.description, 'Set "description" in package.json');
  } catch {
    allGood &= check('package.json exists and is valid JSON', false, 'Create or fix package.json');
  }

  // Check if essential files exist
  allGood &= check('README.md exists', fs.existsSync('README.md'), 'Create README.md');
  allGood &= check('LICENSE exists', fs.existsSync('LICENSE'), 'Create LICENSE file');
  allGood &= check('CHANGELOG.md exists', fs.existsSync('CHANGELOG.md'), 'Create CHANGELOG.md');
  allGood &= check('TypeScript config exists', fs.existsSync('tsconfig.json'), 'Create tsconfig.json');

  // Check git status
  try {
    execSync('git diff --quiet', { stdio: 'pipe' });
    execSync('git diff --cached --quiet', { stdio: 'pipe' });
    allGood &= check('Git working directory is clean', true);
  } catch {
    allGood &= check('Git working directory is clean', false, 'Commit your changes: git add . && git commit -m "message"');
  }

  // Check if we can build
  try {
    execSync('npm run build', { stdio: 'pipe' });
    allGood &= check('Project builds successfully', true);
    allGood &= check('dist/ folder exists', fs.existsSync('dist'), 'Run npm run build');
  } catch {
    allGood &= check('Project builds successfully', false, 'Fix build errors: npm run build');
  }

  // Check NPM login
  try {
    const username = execSync('npm whoami', { encoding: 'utf8' }).trim();
    allGood &= check(`NPM user logged in (${username})`, true);
  } catch {
    allGood &= check('NPM user logged in', false, 'Login to NPM: npm login');
  }

  // Check docs folder
  allGood &= check('docs/ folder exists', fs.existsSync('docs'), 'Create docs/ folder');
  if (fs.existsSync('docs')) {
    allGood &= check('docs/README.md exists', fs.existsSync('docs/README.md'), 'Create docs/README.md');
    allGood &= check('docs/EXAMPLES.md exists', fs.existsSync('docs/EXAMPLES.md'), 'Create docs/EXAMPLES.md');
  }

  log('\n' + '='.repeat(50), 'cyan');
  
  if (allGood) {
    log('🎉 All checks passed! Ready to publish!', 'green');
    log('\nNext steps:', 'blue');
    log('  npm run publish:patch   # For bug fixes', 'cyan');
    log('  npm run publish:minor   # For new features', 'cyan');
    log('  npm run publish:major   # For breaking changes', 'cyan');
  } else {
    log('❌ Some checks failed. Please fix the issues above before publishing.', 'red');
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}