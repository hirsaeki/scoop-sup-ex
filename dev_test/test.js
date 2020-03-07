ws = WScript.CreateObject("WScript.Shell");
ws.Run("test.bat");
var env = ws.Environment("Process");
var e = new Enumerator(env);
var outstr = "";
for (e.moveFirst(); !e.atEnd(); e.moveNext()) {
    WScript.Echo(e.item());
};