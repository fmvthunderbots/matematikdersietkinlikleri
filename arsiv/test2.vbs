Set oWS = WScript.CreateObject("WScript.Shell")
sLinkFile = "C:\Users\b.oztunali\Desktop\Matematik Etkinlikleri 2.lnk"
Set oLink = oWS.CreateShortcut(sLinkFile)
oLink.TargetPath = "msedge.exe"
oLink.Arguments = "--app=http://fmvthunderbots.github.io/matematikdersetkinlikleri"
oLink.IconLocation = "msedge.exe, 0"
oLink.Save
