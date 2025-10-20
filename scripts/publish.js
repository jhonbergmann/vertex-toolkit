#!/usr/bin/env node

/**
 * Publish Script for Vertex Toolkit
 * 
 * This script helps automate the publishing process with proper version management
 * and changelog updates.
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function runCommand(command, description) {
  log(`\n${description}...`, 'cyan');
  try {
    execSync(command, { stdio: 'inherit' });
    log(`✅ ${description} completed successfully`, 'green');
  } catch (error) {
    log(`❌ ${description} failed`, 'red');
    process.exit(1);
  }
}

function getCurrentVersion() {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  return packageJson.version;
}

function updateChangelog(version, type) {
  const changelogPath = 'CHANGELOG.md';
  if (!fs.existsSync(changelogPath)) {
    log('⚠️  CHANGELOG.md not found, skipping changelog update', 'yellow');
    return;
  }

  const today = new Date().toISOString().split('T')[0];
  const changelog = fs.readFileSync(changelogPath, 'utf8');
  
  // Add new version entry after the header
  const lines = changelog.split('\n');
  const headerIndex = lines.findIndex(line => line.startsWith('## ['));
  
  if (headerIndex === -1) {
    log('⚠️  Could not find version header in CHANGELOG.md', 'yellow');
    return;
  }

  const newEntry = [
    `## [${version}] - ${today}`,
    '',
    '### Added',
    '- ',
    '',
    '### Changed',
    '- ',
    '',
    '### Fixed',
    '- ',
    '',
  ];

  lines.splice(headerIndex, 0, ...newEntry);
  fs.writeFileSync(changelogPath, lines.join('\n'));
  
  log(`📝 Added version ${version} to CHANGELOG.md`, 'green');
  log('⚠️  Please update the CHANGELOG.md with your changes before publishing!', 'yellow');
}

function main() {
  const args = process.argv.slice(2);
  const versionType = args[0] || 'patch';
  
  if (!['patch', 'minor', 'major'].includes(versionType)) {
    log('❌ Invalid version type. Use: patch, minor, or major', 'red');
    process.exit(1);
  }

  log('🚀 Starting publish process...', 'bright');
  log(`📦 Version type: ${versionType}`, 'blue');

  // Check if working directory is clean
  try {
    execSync('git diff --quiet', { stdio: 'pipe' });
    execSync('git diff --cached --quiet', { stdio: 'pipe' });
  } catch {
    log('⚠️  Working directory has uncommitted changes', 'yellow');
    log('Please commit your changes before publishing', 'yellow');
    process.exit(1);
  }

  const currentVersion = getCurrentVersion();
  log(`Current version: ${currentVersion}`, 'blue');

  // Clean and build
  runCommand('npm run clean', 'Cleaning dist folder');
  runCommand('npm run build', 'Building project');

  // Run dry-run to check what will be published
  runCommand('npm publish --dry-run', 'Checking package contents');

  // Confirm publication
  log('\n📋 Ready to publish!', 'bright');
  log('This will:', 'yellow');
  log(`  - Update version (${versionType})`, 'yellow');
  log('  - Create git tag', 'yellow');
  log('  - Publish to NPM', 'yellow');
  log('  - Update CHANGELOG.md', 'yellow');
  
  // For now, we'll proceed automatically
  // In a real scenario, you might want to add a confirmation prompt
  
  // Version bump
  runCommand(`npm version ${versionType}`, `Bumping ${versionType} version`);
  
  const newVersion = getCurrentVersion();
  log(`New version: ${newVersion}`, 'green');

  // Update changelog
  updateChangelog(newVersion, versionType);

  // Publish
  runCommand('npm publish', 'Publishing to NPM');

  // Push git changes
  runCommand('git push origin main --tags', 'Pushing changes and tags to git');

  log('\n🎉 Successfully published!', 'green');
  log(`✅ Version ${newVersion} is now available on NPM`, 'green');
  log('🔗 https://www.npmjs.com/package/vertex-toolkit', 'cyan');
}

if (require.main === module) {
  main();
}