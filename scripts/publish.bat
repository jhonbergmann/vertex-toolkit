@echo off
REM Vertex Toolkit Publishing Script for Windows
REM Usage: publish.bat [patch|minor|major]

set VERSION_TYPE=%1
if "%VERSION_TYPE%"=="" set VERSION_TYPE=patch

echo.
echo 🚀 Publishing Vertex Toolkit - %VERSION_TYPE% version
echo.

REM Check if git working directory is clean
git diff --quiet >nul 2>&1
if errorlevel 1 (
    echo ❌ Working directory has uncommitted changes
    echo Please commit your changes before publishing
    exit /b 1
)

git diff --cached --quiet >nul 2>&1
if errorlevel 1 (
    echo ❌ Working directory has uncommitted changes
    echo Please commit your changes before publishing
    exit /b 1
)

echo ✅ Working directory is clean
echo.

echo 🧹 Cleaning dist folder...
call npm run clean
if errorlevel 1 goto :error

echo 🔨 Building project...
call npm run build
if errorlevel 1 goto :error

echo 📦 Running dry-run check...
call npm run publish:dry
if errorlevel 1 goto :error

echo.
echo 📊 Bumping %VERSION_TYPE% version...
call npm version %VERSION_TYPE%
if errorlevel 1 goto :error

echo 📤 Publishing to NPM...
call npm publish
if errorlevel 1 goto :error

echo 📤 Pushing to git...
git push origin main --tags
if errorlevel 1 goto :error

echo.
echo 🎉 Successfully published %VERSION_TYPE% version!
echo ✅ Package is now available on NPM
echo 🔗 https://www.npmjs.com/package/vertex-toolkit
echo.
goto :end

:error
echo.
echo ❌ Publishing failed!
echo Please check the errors above and try again.
exit /b 1

:end