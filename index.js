var w_kotoba = [
    ["Chin Chin", "ちんちん", "Kintama", "金玉", "Bobo", "ぼぼ", "Ketsu", "ケツ", "Ketusnoana", "Chikubi", "乳首", "Oppai", "おっぱい", "Paipai", "ぱいぱい", "Oshikko", "おしっこ", "Ochinchin", "おちんちん", "Chinko", "ちんこ", "Chinpo", "チンポ", "Pokochin", "ポコチン", "Oppai", "おっぱい", "Tamatama", "たまたま", "Manko", "まんこ", "Okasu", "犯す", "Komasu", "こます", "Itekomasu", "いてこます", "Kamawohoru", "かまをほる", "Kuso", "糞", "Kusotare", "クソタレ", "Unko", "うんこ", "Shikko", "しっこ", "Konchikushou ", "こん畜生", "Chikushou", "畜生", "Okama", "おかま", "Yariman", "やりまん", "Kemuri", "煙", "シガレット", "Shigaretto", "喫煙者", "Kitsuen-sha", "Nomu", "飲む", "酔っ払い", "Yopparai", "薬漬け", "Yakudzuke", "薬物", "Yakubutsu", "死ぬ", "Kuso", "糞", "Kusotare", "クソタレ", "Unko", "うんこ", "Shikko", "しっこ", "Hentai", "変態"],
    ["Bakemono", "化け物", "Akuma", "悪魔", "Oni", "鬼", "Majyo", "魔女", "Obake", "おばけ", "Miira", "ミイラ", "Hidoi", "酷い", "メイジ", "Meiji", "ソーサラー", "Sosara", "魔女", "Majo", "ドルイド", "Doruido"],
    ["Baka", "馬鹿", "Otankonasu", "おたんこなす", "Aho", "あほ", "Kusottare", "クソッタレ", "Manuke", "間抜け", "Heta", "Hetakuso", "下手糞", "Doji", "どじ", "Bontsuke", "ぽんつく", "Roba", "驢馬", "Usagiuma", "兎馬", "Arokamono", "愚か者", "Funeke", "腑抜け", "Gubetsu", "愚物", "Oko", "おこ", "Dobeta", "ど下手", "Doinaka", "ど田舎", "Donbyakushou", "どん百姓"],
    ["Damatte", "黙って", "Damare", "黙れ", "Shine", "死ね", "Urusai", "うるさい", "Ikke-nai", "Ikke-naine", "いっけ-ない", "Kutabare", "くたばれ", "Deteike", "出て行け", "Bakanisuruna", "ばかにするな", "Hikome", "ひっこめ", "Namekusatte", "なめくさって"]
];
var not_kotoba = ["Ugokasu", "Okane"];

function ScanLyrics() {
    document.getElementById("kt").innerHTML = "";
    document.getElementById("kt1").innerHTML = "";
    document.getElementById("kt2").innerHTML = "";
    document.getElementById("kt3").innerHTML = "";
    document.getElementById("kt4").innerHTML = "";
    var lyrics = document.getElementById("Lyrics").value;
    var kt = 0;
    var kt1 = 0;
    var kt2 = 0;
    var kt3 = 0;
    var kt4 = 0;
    lyrics = lyrics.toUpperCase();
    for (z = 0; z < w_kotoba.length; z++) {
        for (c = 0; c < w_kotoba[z].length; c++) {
            if (lyrics.search(w_kotoba[z][c].toUpperCase()) > -1) {
                kt++;
                if (z == 0) {
                    kt1++;
                } else if (z == 1) {
                    kt2++;
                } else if (z == 2) {
                    kt3++;
                } else if (z == 3) {
                    kt4++;
                }
            }
            if (c < not_kotoba.length) {
                if (lyrics.search(not_kotoba[c].toUpperCase()) > -1) {
                    kt[0]--;
                }
            }
        }
    }
    if (kt > 0) {
        document.getElementById("kt").innerHTML = "Essa música contém:";
        if (kt1 > 0) {
            document.getElementById("kt1").innerHTML = "Linguagem obscena";
        }
        if (kt2 > 0) {
            document.getElementById("kt2").innerHTML = "Conteúdo obscuro";
        }
        if (kt3 > 0) {
            document.getElementById("kt3").innerHTML = "Apóstrofes parciais";
        }
        if (kt4 > 0) {
            document.getElementById("kt4").innerHTML = "Imperativos ameaçadores";
        }
    } else {
        document.getElementById("kt").innerHTML = "Nenhum expletívo identificado.";
    }
}