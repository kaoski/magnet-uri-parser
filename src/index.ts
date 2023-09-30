const samples: Array <string> = [
"magnet:?xt=urn:btih:945f2e8866dbe16761f034757c5629ba9b6c66f0&dn=Smolensk.2016.DVDRip.x264-AFO&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Fzer0day.ch%3A1337&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Fpublic.popcorn-tracker.org%3A6969",
"magnet:?xt=urn:btih:f170ef7c940838c509e6e86b10fbf51f2f2e0a57&dn=Split+2016+BluRay+HD+x264-LOL&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Fzer0day.ch%3A1337&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Fpublic.popcorn-tracker.org%3A6969",
"magnet:?xt=urn:btih:d5254c71fe912bb62c9c0516b9c5a5a7bfa6c84c&dn=Dead.Story.2017.HDRip.XviD.AC3-EVO&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Fzer0day.ch%3A1337&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Fpublic.popcorn-tracker.org%3A6969",
"magnet:?xt=urn:btih:b53f3e12cb21ec06f75c585c4f197ae83fdc0e85&dn=ZINDAGI+Zindagi+50+50+Hindi+Song&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Fzer0day.ch%3A1337&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Fpublic.popcorn-tracker.org%3A6969",
"magnet:?xt=urn:btih:f65d5f640c8abc2976b20c8d08e01fd1eea2adc4&dn=The+Upright+Thinkers%3A+The+Human+Journey+from+Living+in+Trees+to+&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Fzer0day.ch%3A1337&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Fpublic.popcorn-tracker.org%3A6969",
"magnet:?xt=urn:btih:38d81da01f1d582423585a41bd72630b35911e66&dn=Unity+Pro+5.3.4f1+%5BMAC%5D&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Fzer0day.ch%3A1337&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Fpublic.popcorn-tracker.org%3A6969",
"magnet:?xt=urn:ed2k:354B15E68FB8F36D7CD88FF94116CDC1&xt=urn:tree:tiger:7N5OAMRNGMSSEUE3ORHOKWN4WWIQ5X4EBOOTLJY&xt=urn:btih:QHQXPYWMACKDWKP47RRVIV7VOURXFE5Q&xl=10826029&dn=mediawiki-1.15.1.tar.gz&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce&as=http%3A%2F%2Fdownload.wikimedia.org%2Fmediawiki%2F1.15%2Fmediawiki-1.15.1.tar.gz&xs=http%3A%2F%2Fcache.example.org%2FXRX2PEFXOOEJFRVUCX6HMZMKS5TWG4K5&xs=dchub://example.org",
"magnet:?xt=urn:ed2k:354B15E68FB8F36D7CD88FF94116CDC1&xt=urn:tree:tiger:7N5OAMRNGMSSEUE3ORHOKWN4WWIQ5X4EBOOTLJY&xt=urn:btih:QHQXPYWMACKDWKP47RRVIV7VOURXFE5Q&xl=10826029&as=http%3A%2F%2Fdownload.wikimedia.org%2Fmediawiki%2F1.15%2Fmediawiki-1.15.1.tar.gz&dn=mediawiki-1.15.1.tar.gz&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce&xs=http%3A%2F%2Fcache.example.org%2FXRX2PEFXOOEJFRVUCX6HMZMKS5TWG4K5&xs=dchub%3A%2F%2Fexample.org"]

interface MagnetData {
    xt?: Array <string>;
    dn?: string;
    xl?: string;
    tr?: Array <string>;
    ws?: string;
    as?: string;
    xs?: string | Array <string>;
    kt?: string;
    mt?: string;
    so?: Array<string>;
    xPe?: Array<string>;
}

function parseMagnetUri (magnetUri: string): MagnetData {
    let result: MagnetData = {};
    const [ , queryString] = magnetUri.split('?');
    const queryParams = queryString.split('&');
    queryParams.forEach(queryParam => {
        let [key, val] = queryParam.split('=');
        switch (key.toLowerCase()) {
            case 'xt': 
                result.xt = result.xt?result.xt: [];
                result.xt.push(decodeURIComponent(val));
                break;
            case 'dn':
                result.dn = decodeURIComponent(val);
                break;
            case 'xl':
                result.xl = decodeURIComponent(val);
                break;
            case 'tr':
                result.tr = result.tr? result.tr : [];
                result.tr.push(decodeURIComponent(val));
                break;
            case 'ws':
                result.ws = decodeURIComponent(val);
                break;
            case 'as':
                result.as = decodeURIComponent(val);
                break;
            case 'xs':
                result.xs = decodeURIComponent(val);
                break;
            case 'kt':
                result.kt = decodeURIComponent(val);
                break;
            case 'mt':
                result.mt = decodeURIComponent(val);
                break;
            case 'so':
                result.so = result.so? result.so : [];
                result.so.push(decodeURIComponent(val));
                break;
            case 'x.pe':
                result.xPe = result.xPe? result.xPe : [];
                result.xPe.push(decodeURIComponent(val));
                break;
                    
            
        }
    });
    return result;
}


samples.forEach((magnetUri) => {
    console.log ("Parsing Magnet URI", magnetUri);
    console.log (parseMagnetUri(magnetUri));
});
