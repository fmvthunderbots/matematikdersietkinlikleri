@echo off
chcp 65001 >nul
title Matematik Etkinlik Portali Kurulumu

echo ========================================================
echo       MATEMATIK ETKINLIK PORTALI KURULUM ARACI
echo ========================================================
echo.
echo Masaustunuze "Matematik Etkinlikleri" adinda bir 
echo program kisayolu olusturuluyor...
echo.

:: Edge tarayicisinin yerini bul
set "EDGE_PATH=C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
if not exist "%EDGE_PATH%" set "EDGE_PATH=C:\Program Files\Microsoft\Edge\Application\msedge.exe"

:: İkon ayarlari
set "ICON_PATH=%USERPROFILE%\MatematikPortali.ico"
set "FINAL_ICON=%EDGE_PATH%, 0"

:: 1. Eger bat dosyasinin yaninda simge.ico (senin hazirladigin) varsa onu kullan
if exist "%~dp0simge.ico" (
    copy /y "%~dp0simge.ico" "%ICON_PATH%" >nul
    set "FINAL_ICON=%ICON_PATH%"
) else if exist "%~dp0simge2.ico" (
    copy /y "%~dp0simge2.ico" "%ICON_PATH%" >nul
    set "FINAL_ICON=%ICON_PATH%"
) else (
    :: 2. Yoksa Github'dan indirmeyi dene
    powershell -Command "try { Invoke-WebRequest -Uri 'http://fmvthunderbots.github.io/matematikdersetkinlikleri/simge.ico' -OutFile '%ICON_PATH%' -UseBasicParsing } catch {}"
    for /f "usebackq" %%A in ('"%ICON_PATH%"') do if %%~zA GTR 1024 set "FINAL_ICON=%ICON_PATH%"
)

:: VBScript olusturup calistiriyoruz (Desktop yolunu OneDrive vb. hatalarina karsi otomatik bulur)
echo Set oWS = WScript.CreateObject("WScript.Shell") > CreateShortcut.vbs
echo sLinkFile = oWS.SpecialFolders("Desktop") ^& "\Matematik Etkinlikleri.lnk" >> CreateShortcut.vbs
echo Set oLink = oWS.CreateShortcut(sLinkFile) >> CreateShortcut.vbs
echo oLink.TargetPath = "%EDGE_PATH%" >> CreateShortcut.vbs
echo oLink.Arguments = "--app=https://fmvthunderbots.github.io/matematikdersetkinlikleri/" >> CreateShortcut.vbs
echo oLink.Description = "Matematik Etkinlik Portali" >> CreateShortcut.vbs
echo oLink.IconLocation = "%FINAL_ICON%" >> CreateShortcut.vbs
echo oLink.Save >> CreateShortcut.vbs

cscript /nologo CreateShortcut.vbs
del CreateShortcut.vbs

echo ========================================================
echo KURULUM BASARIYLA TAMAMLANDI!
echo ========================================================
echo Lutfen masaustunuze donun ve yeni eklenen 
echo "Matematik Etkinlikleri" kisayoluna cift tiklayin.
echo Programiniz aninda acilacaktir! (Bu pencere kapanacak...)
echo.
ping 127.0.0.1 -n 4 >nul
