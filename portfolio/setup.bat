@echo off
echo Setting up Radhitya's Portfolio Website...
echo.

echo Creating necessary directories...
mkdir public 2>nul
mkdir public\images 2>nul
mkdir .next 2>nul

echo Copying image files to public/images directory...
copy ..\background-campus.png public\images\ >nul
copy ..\campus-life.png public\images\ >nul
copy ..\me.png public\images\ >nul
copy ..\profile.png public\images\ >nul

echo Installing dependencies...
call npm install

echo.
echo Setup complete!
echo.
echo To start the development server, run:
echo npm run dev
echo.
echo Then open http://localhost:3000 in your browser.
echo.
pause
