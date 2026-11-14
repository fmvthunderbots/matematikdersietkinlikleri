Set oWS = WScript.CreateObject("WScript.Shell")
sLinkFile = oWS.SpecialFolders("Desktop") & "\Matematik Etkinlikleri.lnk"
Set oLink = oWS.CreateShortcut(sLinkFile)
oLink.TargetPath = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
oLink.Arguments = "--app=https://fmvthunderbots.github.io/matematikdersetkinlikleri/"
oLink.Save
