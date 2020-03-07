var ws = WScript.CreateObject("WScript.Shell");
var env = ws.Environment("Process");

function file_open(file, encode){
    var stream = WScript.CreateObject('ADODB.Stream');
    stream.charset = encode || "UTF-8";
    stream.Open();
    stream.loadFromFile(file);
    var contents = stream.ReadText();
    stream.close();

    return contents;
}

for(e = new Enumerator(file_open("vpnc_customenv.txt").split('\n')); !e.atEnd(); e.moveNext()) {
	key = e.item().split('=')[0];
	value = e.item().split('=')[1];
    env(key) = value;
    WScript.Echo(env(key));
};
