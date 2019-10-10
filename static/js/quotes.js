let date = new Date;
let yeat = date.getFullYear();
let month = date.getMonth();
let day = date.getDate();
let currentDate = day+'-'+month;
 
let gitHubRawUrl = '//raw.githubusercontent.com/ikatolici/all-saints-dictionary/master/static/img/'

let croU = {
    "c_caron": decodeURI('%C4%8C'),
    "c_acute": decodeURI('%C4%86'),
    "d_stroke": decodeURI('%C4%90'),
    "s_caron": decodeURI('%C5%A0'),
    "z_caron": decodeURI('%C5%BD')
}

let croL = {
    "c_caron": decodeURI('%C4%8D'),
    "c_acute": decodeURI('%C4%87'),
    "d_stroke": decodeURI('%C4%91'),
    "s_caron": decodeURI('%C5%A1'),
    "z_caron": decodeURI('%C5%BE')
}

/* Dictionary */      
let quotes = {
    // Overview
    /* 
    Month indexes: 0 - 11
    Day indexes: 1 - 31 
    
    'day-(month-1)': {
        'quote':    '„Quote of the saint or a good replacement from the Bible“', 
        'author':   'Quote author', 
        'image':    gitHubRawUrl+'quotes_xx.jpg',
        'saints':    ['<a href=""><p></p></a>'],    
    }, */
    
    // January      - 0
    
    // February     - 1
    
    // March        - 2
    
    // April        - 3
    
    // May          - 4
    
    // June         - 5
    
    // July         - 6
    
    // August       - 7
    
    // September    - 8
    
    // October      - 9
    '1-9': {
        'quote':    '„Bog ne gleda na veličinu naših djela, nego samo na ljubav s kojom se ona obavljaju.“', 
        'author':   'sv. Terezija od Djeteta Isusa', 
        'image':    'https://static.tumblr.com/e1vmzwc/zYApyyz4a/quotes_32.jpg' ,
        'saints':    ['<a href=""><p>Sveta Terezija od Djeteta Isusa</p></a>, <a href=""><p>Sveti Bavo iz Genta</p></a>'],    
    },
    '2-9': {
        'quote':    '„Domovina je tamo, gdje mogu čim više napraviti za Božju slavu i pomoći bližnjima.“', 
        'author':   'bl. Jan Beyzym', 
        'image':    'https://static.tumblr.com/e1vmzwc/jDqpyyyw7/quotes_31.jpg' ,
        'saints':    ['<a href=""><p>Sveti anđeli čuvari</p></a>', '<a href=""><p>Blaženi Jan Beyzym</p></a>'],    
    },
    '3-9': {
        'quote':    '„Radost je odjek Božjeg života u nama.“', 
        'author':   'bl. Columba Marmiona', 
        'image':    'https://static.tumblr.com/e1vmzwc/Onzpyyyoh/quotes_30.jpg' ,
        'saints':    ['<a href=""><p>Blaženi Columba Marmiona</p></a>', '<a href=""><p>Sveta Teodora Guérin</p></a>', '<a href=""><p>Sveti Dionizije Aeropagit</p></a>'],    
    },
    '4-9': {
        'quote':    '„Jer koliki je čovjek pred Bogom, toliki je i ništa više.“', 
        'author':   'sv. Franjo Asiški', 
        'image':    'https://static.tumblr.com/e1vmzwc/H0Spyyyfg/quotes_29.jpg' ,
        'saints':    ['<a href=""><p>Sveti Franjo Asiški</p></a>', '<a href=""><p>Sveti Amon pustinjak</p></a>'],    
    },
    '5-9': {
        'quote':    '„Moja '+croL["z_caron"]+'ivotna la'+croL["d_stroke"]+'a sigurno plovi morem jer Ti si, Bo'+croL["z_caron"]+'e moj, njezin Kormilar.“', 
        'author':   'sv. Faustina Kowalska', 
        'image':    '//static.tumblr.com/e1vmzwc/YAVpyvd3e/quotes_00.jpg' ,
        'saints':    ['<a href=""><p>Sveti Placid i Mavro</p></a>','<a href=""><p>Sveta Faustina Kowalska</p></a>','<a href=""><p>Bla'+croL["z_caron"]+'eni Bartolo Longo</p></a>'], 
    },
    '6-9': {
        'quote':    '„Dok se svijet mijenja, križ čvrsto stoji.“', 
        'author':   'sv. Bruno', 
        'image':    'https://static.tumblr.com/e1vmzwc/u8hpyy6tt/quotes_03.jpg' ,
        'saints':    ['<a href=""><p>Sveti Bruno</p></a>', '<a href=""><p>Sveti Adalbero</p></a>'],  
    },
    '7-9': {
        'quote':    '„Krunica je najizvrsnija molitva i najefikasniji način za postizanje vječnoga života. Ona je lijek za sva zla i korijen svih naših blagoslova. Ne postoji izvrsniji način molitve.“', 
        'author':   'Papa Leon XIII. o krunici', 
        'image':    'https://static.tumblr.com/e1vmzwc/LOipz07nv/quotes_04.jpg' ,
        'saints':    ['<a href=""><p>Bla'+croL["z_caron"]+'ena Djevica Marija od Krunice</p></a>', '<a href=""><p>Sveti Sr'+croL["d_stroke"]+' i Bah</p></a>', '<a href=""><p>Sveta Justina Padovanska</p></a>'],    
    },
    '8-9': {
        'quote':    '„Sad otpuštaš slugu svojega, Gospodaru, po riječi svojoj, u miru! Ta vidješe oči moje spasenje tvoje, koje si pripravio pred licem svih naroda: svjetlost na prosvjetljenje naroda, slavu puka svoga izraelskoga.“', 
        'author':   'Luka 2, 29-32', 
        'image':    'https://static.tumblr.com/e1vmzwc/FW0pyygcq/quotes_05.jpg' ,
        'saints':    ['<a href=""><p>Sveti starac '+croU["s_caron"]+'imun</p></a>', '<a href=""><p>Sveti Marko papa</p></a>'],    
    },
    '9-9': {
        'quote':    '„Kad si to učinio i nisi mi uskratio svog jedinca sina, svoj ću blagoslov na te izliti i učiniti tvoje potomstvo brojnim poput zvijezda na nebu i pijeska na obali morskoj!“', 
        'author':   'Knjiga postanka 22, 16-17', 
        'image':    'https://static.tumblr.com/e1vmzwc/uCtpyyhsc/quotes_06.jpg' ,
        'saints':    ['<a href=""><p>Sveti Ivan Leonardi</p></a>', '<a href=""><p>Sveti Dionizije Pari'+croL["s_caron"]+'ki</p></a>', '<a href=""><p>Sveti Abraham, patrijarh</p></a>',],    
    },
    '10-9': {
        'quote':    '„Tko bi mogao omekšati srce moje, osim Tebe samoga, Bože moj!“', 
        'author':   'sv. Franjo Borgia', 
        'image':    'https://static.tumblr.com/e1vmzwc/fB4pyyih8/quotes_07.jpg' ,
        'saints':    ['<a href=""><p>Sveti Franjo Borgia</p></a>', '<a href=""><p>Sveti Luis Bertran</p></a>'],    
    },
    '11-9': {
        'quote':    '„Ljudi su poput vina - neki postanu ocat, a drugi postaju bolji s godinama.“', 
        'author':   'sv. Ivan XXIII.', 
        'image':    'https://static.tumblr.com/e1vmzwc/MJepyyjvg/quotes_08.jpg' ,
        'saints':    ['<a href="https://www.mladikatolici.net/post/188262717627/veliki-i-dobri-sveti-papa-ivan-xxiii"><p>Sveti Ivan XXIII.</p></a>', '<a href="https://www.mladikatolici.net/post/188263103967/sveti-daniel-comboni-misijski-velikan"><p>Sveti Daniele Comboni</p></a>', '<a href="https://www.mladikatolici.net/post/188263035897/sveti-canice-za%C5%A1titinik-brodolomaca"><p>Sveti Canice</p></a>'],    
    },
    '12-9': {
        'quote':    '„Nemam ništa osim krunice i kri'+croL["z_caron"]+'a, ali se nadam da '+croL["c_acute"]+'u i s tim koristiti fratrima i postati svetac.“', 
        'author':   'sv. Serafin', 
        'image':    'https://static.tumblr.com/e1vmzwc/qT3pyykv5/quotes_09.jpg' ,
        'saints':    ['<a href=""><p>Sveti Serafin</p></a>', '<a href=""><p>Sveti Maksimilijan Celjski</p></a>'],    
    },
    '13-9': {
        'quote':    '„Ne'+croL["c_acute"]+'u umrijeti ve'+croL["c_acute"]+' '+croL["z_caron"]+'ivjeti. Napu'+croL["s_caron"]+'taju'+croL["c_acute"]+'i zemlju umiru'+croL["c_acute"]+'ih, nadam se vidjeti Gospodinovu dobrotu u zemlji '+croL["z_caron"]+'ivih.“', 
        'author':   'sv. Eduard', 
        'image':    'https://static.tumblr.com/e1vmzwc/vUVpyyl8r/quotes_10.jpg' ,
        'saints':    ['<a href=""><p>Sveti Eduard</p></a>', '<a href=""><p>Sveti Koloman</p></a>'],    
    },
    '14-9': {
        'quote':    '„Sveg obilja ima u Bo'+croL["z_caron"]+'jima rukama, jer On je Gospodar nad silama i Kralj slave.“', 
        'author':   'sv. Kalist I.', 
        'image':    'https://static.tumblr.com/e1vmzwc/4C6pyylu7/quotes_11.jpg' ,
        'saints':    ['<a href=""><p>Sveti Kalist I.</p></a>', '<a href=""><p>Bla'+croL["z_caron"]+'eni Roman Lisko</p></a>', '<a href=""><p>Sveta Paraskeva (Petka)</p></a>'],    
    },
    '15-9': {
        'quote':    '„Sjetite se da Bog sve mo'+croL["z_caron"]+'e.“', 
        'author':   'sv. Terezija Avilska', 
        'image':    'https://static.tumblr.com/e1vmzwc/YDtpyym2j/quotes_12.jpg' ,
        'saints':    ['<a href=""><p>Sveta Terezija Avilska</p></a>', '<a href=""><p>Bla'+croL["z_caron"]+'ena Marija Poussepin</p></a>'],    
    },
    '16-9': {
        'quote':    '„Ne treba mi ništa osim Boga, i da se izgubim u srcu Isusovu.“', 
        'author':   'sv. Margareta Marija Alacoque', 
        'image':    'https://static.tumblr.com/e1vmzwc/Jozpyymok/quotes_13.jpg' ,
        'saints':    ['<a href=""><p>Sveta Hedviga</p></a>', '<a href=""><p>Sveta Margareta Marija Alacoque</p></a>', '<a href=""><p>Sveti Gal Irski</p></a>'],    
    },
    '17-9': {
        'quote':    '„Božje sam žito i zubi me zvijeri melju da postanem čisti kruh Kristov“', 
        'author':   'sv. Ignacije Antiohijski', 
        'image':    'https://static.tumblr.com/e1vmzwc/7pdpyynzk/quotes_14.jpg' ,
        'saints':    ['<a href=""><p>Sveti Ignacije Antiohijski</p></a>', '<a href=""><p>Blaženi Contardo Ferrini</p></a>'],    
    },
    '18-9': {
        'quote':    '„Tko je vjeran u najmanjem, i u najvećem je vjeran; a tko je u najmanjem nepošten, i u najvećem je nepošten.“', 
        'author':   'Luka 16, 10', 
        'image':    'https://static.tumblr.com/e1vmzwc/LM5pyyp92/quotes_15.jpg' ,
        'saints':    ['<a href=""><p>Sveti Luka, evanđelist</p></a>', '<a href=""><p>Sveti Justus iz Beauvaisa</p></a>'],    
    },
    '19-9': {
        'quote':    '„U svim svojim kušnjama naoružajte se vjerom, pouzdanjem u Boga i dubokom poniznošću srca. Ne bojte se ničega.“', 
        'author':   'sv. Pavao od Križa', 
        'image':    'https://static.tumblr.com/e1vmzwc/S05pyypiw/quotes_16.jpg' ,
        'saints':    ['<a href=""><p>Sveti Pavao od Križa</p></a>', '<a href=""><p>Sveti Ivan de Brébeuf i sjevernoamerički mučenici</p></a>'],    
    },
    '20-9': {
        'quote':    '„Tražim sreću, ali pravu sreću nalazim samo u Bogu.“', 
        'author':   'sv. Marija Bertilla Boscardin', 
        'image':    'https://static.tumblr.com/e1vmzwc/xj3pyyqp3/quotes_17.jpg' ,
        'saints':    ['<a href=""><p>Sveti Vendelin</p></a>', '<a href=""><p>Sveta Marija Bertilla Boscardin</p></a>'],    
    },
    '21-9': {
        'quote':    '„Što više molimo, to više činimo dobro.“', 
        'author':   'sv. Gašpar del Bufalo', 
        'image':    'https://static.tumblr.com/e1vmzwc/ojxpyyr4b/quotes_18.jpg' ,
        'saints':    ['<a href=""><p>Sveta Uršula</p></a>', '<a href=""><p>Sveti Hilarion iz Gaze</p></a>', '<a href=""><p>Sveti Gašpar del Bufalo</p></a>'],    
    },
    '22-9': {
        'quote':    '„Ljubav mi je sve objasnila, i ljubav je sve riješila.“', 
        'author':   'sv. Ivan Pavao II.', 
        'image':    'https://static.tumblr.com/e1vmzwc/KLzpyyrbc/quotes_19.jpg' ,
        'saints':    ['<a href=""><p>Sveti Ivan Pavao II.</p></a>', '<a href=""><p>Sveta Marija Saloma</p></a>'],    
    },
    '23-9': {
        'quote':    '„Zablistajte sjajem koji proizlazi iz dobrog primjera hvalevrijednog i besprijekornog života.“', 
        'author':   'sv. Ivan Kapistran', 
        'image':    'https://static.tumblr.com/e1vmzwc/fmnpyyrwy/quotes_20.jpg' ,
        'saints':    ['<a href=""><p>Sveti Ivan Kapistran</p></a>', '<a href=""><p>Sveti Ignacije Carigradski</p></a>'],    
    },
    '24-9': {
        'quote':    '„Kršćansko savršenstvo obuhvaća tri stvari: junačku molitvu, junački rad i junačko trpljenje.“', 
        'author':   'sv. Antun Marija Claret', 
        'image':    'https://static.tumblr.com/e1vmzwc/hGjpyysi9/quotes_21.jpg' ,
        'saints':    ['<a href=""><p>Sveti Antun Marija Claret</p></a>', '<a href=""><p>Sveti Luigi Guanella</p></a>'],    
    },
    '25-9': {
        'quote':    '„Ako je u srcu gorčina, čovjek se ne može osjećati mirnim.“', 
        'author':   'Iz romana „Katarina – kraljica bosanska“ Ibrahima Kajana', 
        'image':    'https://static.tumblr.com/e1vmzwc/J8Rpyyu5f/quotes_22.jpg' ,
        'saints':    ['<a href=""><p>Blažena Katarina Kotromanić</p></a>', '<a href=""><p>Sveti Krizant i Darija</p></a>'],    
    },
    '26-9': {
        'quote':    '„Njegova posvemašnja povezanost s Bogom dovodila ga je i u teškim pitanjima do pravog i sigurnog suda.“', 
        'author':   'Wilhelm Schamoni o bl. Bonaventuri iz Potenze', 
        'image':    'https://static.tumblr.com/e1vmzwc/kOMpyyvc8/quotes_23.jpg' ,
        'saints':    ['<a href=""><p>Sveti Demetrije Srijemski</p></a>', '<a href=""><p>Blaženi Bonaventura iz Potenze</p></a>'],    
    },
    '27-9': {
        'quote':    '„Budite jedni drugima dobrostivi, milosrdni; praštajte jedni drugima kao što i Bog u Kristu nama oprosti.“', 
        'author':   'Efežanima 4, 32', 
        'image':    'https://static.tumblr.com/e1vmzwc/uu0pyyxz1/quotes_28.jpg' ,
        'saints':    ['<a href=""><p>Sveti Frumencije</p></a>', '<a href=""><p>Sveti Abraham Pustinjak</p></a>', '<a href=""><p></p></a>'],    
    },
    '28-9': {
        'quote':    '„Zajedništvo u Kristovoj ljubavi traži i zajedništvo u patnji.“', 
        'author':   'Poruka Piusa Parscha za blagdan sv. apostola Šimuna i Jude', 
        'image':    'https://static.tumblr.com/e1vmzwc/bvipyywi5/quotes_24.jpg' ,
        'saints':    ['<a href=""><p>Sveti apostoli Šimun i Juda Tadej</p></a>', '<a href=""><p>Sveti Joaquín Royo Pérez i kineski mučenici</p></a>'],    
    },
    '29-9': {
        'quote':    '„Za tebe Isuse… Ako ti to želiš, želim i ja.“', 
        'author':   'bl. Chiara Luce Badano', 
        'image':    'https://static.tumblr.com/e1vmzwc/DaRpz07bp/quotes_25.jpg' ,
        'saints':    ['<a href=""><p>Sveti Narcis Jeruzalemski</p></a>', '<a href=""><p>Sveti Gaetano Errico</p></a>', '<a href=""><p>Blažena Chiara Luce Badano</p></a>'],    
    },
    '30-9': {
        'quote':    '„Služim Isusu Kristu, vječnom Kralju. Neću više služiti vašim carevima, te smatram nedostojnim klanjati se vašim drvenim i kamenim bogovima, gluhim i nijemim idolima. Od sada prestajem biti vojnik vašeg cara.“', 
        'author':   'sv. Marcel iz Tangera', 
        'image':    'https://static.tumblr.com/e1vmzwc/2dIpyyx2r/quotes_26.jpg' ,
        'saints':    ['<a href=""><p>Sveti Marcel iz Tangera</p></a>', '<a href=""><p>Sveti Angelo iz Acrija</p></a>'],    
    },
    '31-9': {
        'quote':    '„O, Gospodine! Kada bih znao, i kada bih mogao, služio bih Ti poput svih stvorova na nebu i na zemlji zajedno.“', 
        'author':   'sv. Alfons Rodriguez', 
        'image':    'https://static.tumblr.com/e1vmzwc/eu2pyyx82/quotes_27.jpg' ,
        'saints':    ['<a href=""><p>Sveti Alfons Rodriguez</p></a>', '<a href=""><p>Sveti Wolfgang</p></a>'],    
    },
    
    // November      - 10
    '1-10': {
        'quote':    '„Noći više biti neće i neće trebati svjetla od svjetiljke ni svjetla sunčeva: obasjavat će ih Gospod Bog i oni će kraljevati u vijeke vjekova.“', 
        'author':   'Otkrivenje 22, 5', 
        'image':    'https://static.tumblr.com/e1vmzwc/3J9pyzkm2/quotes_33.jpg' ,
        'saints':    ['<a href=""><p>Svi Sveti</p></a>'],    
    },
    '2-10': {
        'quote':    '„Dobrota i milost pratit će mene sve dane života moga. U Jahvinu ću domu prebivati kroz dane mnoge.“', 
        'author':   'Psalam 23, 6', 
        'image':    'https://static.tumblr.com/e1vmzwc/Urtpyzkm6/quotes_34.jpg' ,
        'saints':    ['<a href=""><p>Dušni dan</p></a>', '<a href=""><p>Sveti Just iz Trsta</p></a>'],    
    },
    '3-10': {
        'quote':    '„Sve, čak i pospremanja doma, rad u vrtu te briga o bolesnima može biti molitva, ako se prikaže Bogu.“', 
        'author':   'sv. Martín de Porres', 
        'image':    'https://static.tumblr.com/e1vmzwc/zYlpyzlo5/quotes_35.jpg' ,
        'saints':    ['<a href=""><p>Sveti Hubert</p></a>', '<a href=""><p>Sveti Martín de Porres</p></a>'],    
    },
    '4-10': {
        'quote':    '„Ako je malena iskra Božje ljubavi već gorjela u vama, nemojte je izlagati vjetru, jer bi se mogla ugasiti. Čvrsto zatvorite peć kako ne bi gubila toplinu i hladila se.“', 
        'author':   'sv. Karlo Boromejski', 
        'image':    'https://static.tumblr.com/e1vmzwc/qd2pyzlss/quotes_36.jpg' ,
        'saints':    ['<a href=""><p>Sveti Karlo Boromejski</p></a>', '<a href=""><p>Sveti Malahija iz Armagha</p></a>'],    
    },
    '5-10': {
        'quote':    '„Oboje bijahu pravedni pred Bogom: živjeli su besprijekorno po svim zapovijedima i odredbama Gospodnjim.“', 
        'author':   'sv. Luka o Elizabeti i Zahariji (Lk 1, 6)', 
        'image':    'https://static.tumblr.com/e1vmzwc/xwcpyzm4j/quotes_37.jpg' ,
        'saints':    ['<a href=""><p>Sveti Emerik</p></a>', '<a href=""><p>Sveti Elizabeta i Zaharija</p></a>', '<a href=""><p>Blaženi Serafin Kodić Glasnović i Anton Muzić</p></a>'],    
    },
    '6-10': {
        'quote':    '„Ako vas svijet mrzi, znajte da je mene mrzio prije nego vas.“', 
        'author':   'Ivan 15, 18', 
        'image':    'https://static.tumblr.com/e1vmzwc/gVopyzmoq/quotes_38.jpg' ,
        'saints':    ['<a href=""><p>Sveti Leonard</p></a>', '<a href=""><p>Sveti Pavao Carigradski</p></a>'],    
    },
    '7-10': {
        'quote':    '„Isus i Marija, moja nada!“', 
        'author':   'bl. Antonio Baldinucci', 
        'image':    'https://static.tumblr.com/e1vmzwc/Msypyzn84/quotes_39.jpg' ,
        'saints':    ['<a href=""><p>Sveti Engelbert</p></a>', '<a href=""><p>Blaženi Antonio Baldinucci</p></a>', '<a href=""><p>Sveti Prosdocim</p></a>'],    
    },
    '8-10': {
        'quote':    '„Dokazano je da je ljubav prava praksa.“', 
        'author':   'bl. Ivan Duns Scot', 
        'image':    'https://static.tumblr.com/e1vmzwc/TeLpyzo8c/quotes_40.jpg' ,
        'saints':    ['<a href=""><p>Blaženi Ivan Duns Scot</p></a>', '<a href=""><p>Sveti Adeodat</p></a>'],    
    },
    '9-10': {
        'quote':    '„Približite se izvoru spasa, Euharistiji, pa ćete naći utjehe i lijeka svojim dušama.“', 
        'author':   'bl. Gracija Kotorski', 
        'image':    'https://static.tumblr.com/e1vmzwc/TN9pyzocu/quotes_41.jpg' ,
        'saints':    ['<a href=""><p>Blaženi Gracija Kotorski</p></a>', '<a href=""><p>Sveta Elizabeta od Presvetog Trojstva</p></a>'],    
    },
    '10-10': {
        'quote':    '„Ne zaboravi da si izbavljen od sila mraka i vraćen u svijetlo kraljevstva Božjeg.“', 
        'author':   'sv. Leon Veliki', 
        'image':    'https://static.tumblr.com/e1vmzwc/weVpyzqp2/quotes_42.jpg' ,
        'saints':    ['<a href=""><p>Sveti Leon Veliki</p></a>', '<a href=""><p>Sveti Andrija Avellino</p></a>'],    
    },
    '11-10': {
        'quote':    '„Bože, ako me tvoj narod treba, neću ih odbiti.“', 
        'author':   'sv. Martin', 
        'image':    'https://static.tumblr.com/e1vmzwc/7yBpyzqtw/quotes_43.jpg' ,
        'saints':    ['<a href=""><p>Sveti Martin</p></a>', '<a href=""><p>Blaženi Kamen Vičev i bugarski mučenici</p></a>'],    
    },
    '12-10': {
        'quote':    '„Među vama sam kao pastir i trebate znati da bih bio sretan dati život za vas. Spreman sam umrijeti za Sveto Trojstvo, za vrhovnu vlast sv. Petra i njegovih nasljednika - vrhovnih papi.“', 
        'author':   'sv. Jozafat', 
        'image':    'https://static.tumblr.com/e1vmzwc/YXXpyzqyr/quotes_44.jpg' ,
        'saints':    ['<a href=""><p>Sveti Jozafat</p></a>', '<a href=""><p>Sveti Emilijan</p></a>'],    
    },
    '13-10': {
        'quote':    '„Što sam učinio za Krista? Što radim za Krista? Što trebam učiniti za Krista?“', 
        'author':   'sv. Stanislav Kostka', 
        'image':    'https://static.tumblr.com/e1vmzwc/1Wypyzr1q/quotes_45.jpg' ,
        'saints':    ['<a href=""><p>Sveti Stanislav Kostka</p></a>', '<a href=""><p>Sveti Brcko</p></a>'],    
    },
    '14-10': {
        'quote':    '„Tada će vas predavati na muke i ubijati vas. I svi će vas narodi zamrziti zbog imena moga.“', 
        'author':   'Matej 24, 9', 
        'image':    'https://static.tumblr.com/e1vmzwc/5cCpyzr68/quotes_46.jpg' ,
        'saints':    ['<a href=""><p>Sveti Nikola Tavelić</p></a>', '<a href=""><p>Sveti Ivan Trogirski</p></a>'],    
    },
    '15-10': {
        'quote':    '„Marija je Božanska stranica na kojoj je Otac napisao Riječ Božju – svoga Sina.“', 
        'author':   'sv. Albert Veliki', 
        'image':    'https://static.tumblr.com/e1vmzwc/CtRpyzrdw/quotes_47.jpg' ,
        'saints':    ['<a href=""><p>Sveti Albert Veliki</p></a>', '<a href=""><p>Sveti Josip Pignatelli</p></a>'],    
    },
    '16-10': {
        'quote':    '„Zahvaljujem ti svemogući Bože što si mi poslao tako veliku tugu da me očisti od mojih grijeha.“', 
        'author':   'sv. Margareta Škotska', 
        'image':    'https://static.tumblr.com/e1vmzwc/UoCpyzrha/quotes_48.jpg' ,
        'saints':    ['<a href=""><p>Sveta Margareta Škotska</p></a>', '<a href=""><p>Sveta Gertruda</p></a>'],    
    },
    '17-10': {
        'quote':    '„Ako ja toliko ljubim jedno smrtno stvorenje, koliko više moram ljubiti Gospodina, koji je besmrtan i gospodar sviju!“', 
        'author':   'sv. Elizabeta Ugarska', 
        'image':    'https://static.tumblr.com/e1vmzwc/QNTpyzrsk/quotes_49.jpg' ,
        'saints':    ['<a href=""><p>Sveta Elizabeta Ugarska</p></a>', '<a href=""><p>Sveti Dionizije Aleksandrijski</p></a>', '<a href=""><p>Sveti Roque González, Alfonso Rodríguez i Juan del Castillo</p></a>', '<a href=""><p>Blažena Salomea Krakovska</p></a>'],    
    },
    '18-10': {
        'quote':    '„Možda sada ne razumijemo Njegovu volju, ali u vječnosti veo će biti spušten i spoznat ćemo da je On sve činio samo za našu dobrobit.“', 
        'author':   'sv. Rose Philippine Duchesne', 
        'image':    'https://static.tumblr.com/e1vmzwc/CpUpyzrys/quotes_50.jpg' ,
        'saints':    ['<a href=""><p>Sveta Rose Philippine Duchesne</p></a>', '<a href=""><p>Blažena Karolina Kózka</p></a>', '<a href=""><p>Sveti Noa</p></a>'],    
    },
    '19-10': {
        'quote':    '„Svaki korak našeg života trebao bi nas približavati Bogu, i pomoći pružiti barem malo sreće bližnjemu.“', 
        'author':   'sv. Rafael Kalinowski', 
        'image':    'https://static.tumblr.com/e1vmzwc/USHpyztpa/quotes_51.jpg' ,
        'saints':    ['<a href=""><p>Sveta Matilda von Hackeborn</p></a>', '<a href=""><p>Sveti Rafael Kalinowski</p></a>', '<a href=""><p>Sveti Obadija</p></a>', '<a href=""><p>Sveti Faust Aleksandrijski</p></a>'],    
    },
    '20-10': {
        'quote':    '„On ponizne u pravdi vodi i uči malene putu svome.“', 
        'author':   'Psalmi 25, 9', 
        'image':    'https://static.tumblr.com/e1vmzwc/kZ5pyzu31/quotes_52.jpg' ,
        'saints':    ['<a href=""><p>Sveti Feliks de Valois</p></a>', '<a href=""><p>Sveti Bernward iz Hildesheima</p></a>'],    
    },
    '21-10': {
        'quote':    '„Pobožnost prema tebi, o presveta Djevice, jest kao spasonosno oružje što ga Bog daje onima koje hoće spasiti.“', 
        'author':   'Sv. Ivan Damaščanski o BDM', 
        'image':    'https://static.tumblr.com/e1vmzwc/MASpyzuu5/quotes_53.jpg' ,
        'saints':    ['<a href=""><p>Prikazanje Blažene Djevice Marije i Gospa od Zdravlja</p></a>', '<a href=""><p>Sveti Mauro Porečki</p></a>'],    
    },
    '22-10': {
        'quote':    '„Ustanite, vojnici Kristovi, odbacite djela tame i obucite oklop svjetla.“', 
        'author':   'sv. Cecilija', 
        'image':    'https://static.tumblr.com/e1vmzwc/ft9pyzv2y/quotes_54.jpg' ,
        'saints':    ['<a href=""><p>Sveta Cecilija</p></a>', '<a href=""><p>Sveti Filemon, Apija i Arhip</p></a>'],    
    },
    '23-10': {
        'quote':    '„Neka naša hvala bude u Bogu, a ne da je od nas jer Bog mrzi samohvalitelje.“', 
        'author':   'sv. Klement I.', 
        'image':    'https://static.tumblr.com/e1vmzwc/ADxpyzwxe/quotes_55.jpg' ,
        'saints':    ['<a href=""><p>Sveti Klement I.</p></a>', '<a href=""><p>Sveti Kolumban</p></a>', '<a href=""><p>Sveti Spes</p></a>'],    
    },
    '24-10': {
        'quote':    '„Ja sam Alfa i Omega, Prvi i Posljednji, Početak i Svršetak.“', 
        'author':   'Otkrivenje 22, 13', 
        'image':    'https://static.tumblr.com/e1vmzwc/C0qpyzx50/quotes_56.jpg' ,
        'saints':    ['<a href=""><p>Krist Kralj</p></a>', '<a href=""><p>Sveti vijetnamski mučenici</p></a>', '<a href=""><p>Sveti Krševan</p></a>'],    
    },
    '25-10': {
        'quote':    '„Sveta Kata snijeg na vrata“', 
        'author':   'Stara izreka', 
        'image':    'https://static.tumblr.com/e1vmzwc/9Plpyzxkz/quotes_57.jpg' ,
        'saints':    ['<a href=""><p>Sveta Katarina (Kata) Aleksandrijska</p></a>', '<a href=""><p>Blažena Elizabeta iz Reutea</p></a>'],    
    },
    '26-10': {
        'quote':    '„What graces, gifts and virtues the Holy Mass calls down.“', 
        'author':   'sv. Leonardo da Porto Maurizio', 
        'image':    'https://static.tumblr.com/e1vmzwc/K1vpyzyij/quotes_58.jpg' ,
        'saints':    ['<a href=""><p>Sveti Leonardo da Porto Maurizio</p></a>', '<a href=""><p>Sveti Ivan Berchmans</p></a>', '<a href=""><p>Blaženi Giacomo Alberione</p></a>'],    
    },
    '27-10': {
        'quote':    '„Zaodjenite se dakle - kao izabranici Božji, sveti i ljubljeni - u milosrdno srce, dobrostivost, poniznost, blagost, strpljivost.“', 
        'author':   'Kološanima 3, 12', 
        'image':    'https://static.tumblr.com/e1vmzwc/oK0pyzz9v/quotes_59.jpg' ,
        'saints':    ['<a href=""><p>Sveti Virgilije</p></a>', '<a href=""><p>Sveti Francesco Antonio Fasani</p></a>'],    
    },
    '28-10': {
        'quote':    '„Isus, Marija, blagoslovljena bila Isusova muka!“', 
        'author':   'sv. Jakov Markijski', 
        'image':    'https://static.tumblr.com/e1vmzwc/BRfpz00mh/quotes_60.jpg' ,
        'saints':    ['<a href=""><p>Sveti Jakov Markijski</p></a>', '<a href=""><p>Sveti Grgur III.</p></a>'],    
    },
    '29-10': {
        'quote':    '„U svima moramo vidjeti Boga!“', 
        'author':   'sv. Katarina Labouré', 
        'image':    'https://static.tumblr.com/e1vmzwc/wB7pz016m/quotes_61.jpg' ,
        'saints':    ['<a href=""><p>Sveta Katarina Labouré</p></a>', '<a href=""><p>Sveti Saturnin i Sizinije</p></a>'],    
    },
    '30-10': {
        'quote':    '„Reci nam kada će to biti i na koji se znak sve to ima svršiti?“', 
        'author':   'Marko 13, 4', 
        'image':    'https://static.tumblr.com/e1vmzwc/6tSpz01g7/quotes_62.jpg' ,
        'saints':    ['<a href=""><p>Sveti Andrija</p></a>', '<a href=""><p>Sveti Silvestar Guzzolini</p></a>'],    
    },

    
    // December      - 11
    '1-11': {
        'quote':    '„Kada sam shvatio kako Bog postoji, shvatio sam ujedno i kako mi ne preostaje ništa drugo doli Njemu jedino služiti.“', 
        'author':   'bl. Charles de Foucauld', 
        'image':    gitHubRawUrl+'quotes_63.jpg',
        'saints':    ['<a href=""><p>Sveti Edmund Campion</p></a>', '<a href=""><p>Sveti Eligije</p></a>', '<a href=""><p>Sveti Šimun Cirenac</p></a>', '<a href=""><p>Blaženi Charles de Foucauld</p></a>', '<a href=""><p>Sveti Nahum</p></a>'],    
    },
    '2-11': {
        'quote':    '„Bog svaki trenutak iznova stvara svijet.“', 
        'author':   'bl. Ivan Ruysbroeck', 
        'image':    gitHubRawUrl+'quotes_64.jpg',
        'saints':    ['<a href=""><p>Sveta Bibijana</p></a>', '<a href=""><p>Blaženi Ivan Ruysbroeck</p></a>'],    
    },
    '3-11': {
        'quote':    '„Nemoguće je naći sveca koji molitvu i pokoru nije shvatio ozbiljno.“', 
        'author':   'sv. Franjo Ksaverski', 
        'image':    gitHubRawUrl+'quotes_65.jpg',
        'saints':    ['<a href=""><p>Sveti Franjo Ksaverski</p></a>', '<a href=""><p>Blaženi Rafael Chyliński</p></a>', '<a href=""><p>Sveti Modest Karantanski</p></a>'],    
    },
    '4-11': {
        'quote':    '„Nema prave ljubavi bez pravednosti i nema prave pravednosti bez ljubavi.“', 
        'author':   'bl. Adolph Kolping', 
        'image':    gitHubRawUrl+'quotes_66.jpg',
        'saints':    ['<a href=""><p>Sveta Barbara</p></a>', '<a href=""><p>Blaženi Adolph Kolping</p></a>'],    
    },
    '5-11': {
        'quote':    '„Što koristi čovjeku, ako dobije cijeli svijet, a izgubi svoj život.“', 
        'author':   'Marko 8, 36', 
        'image':    gitHubRawUrl+'quotes_67.jpg',
        'saints':    ['<a href=""><p>Sveti Saba</p></a>', '<a href=""><p>Blaženi Niels Stensen</p></a>'],    
    },
    '6-11': {
        'quote':    '„Djeco, molim vas pročistite svoje misli i srca, kako biste postali ugodni Bogu. “', 
        'author':   'sv. Nikola', 
        'image':    gitHubRawUrl+'quotes_68.jpg',
        'saints':    ['<a href=""><p>Sveti Nikola</p></a>', '<a href=""><p>Blaženi János Scheffler</p></a>'],    
    },
    '7-11': {
        'quote':    '„Nitko ne može ozdraviti tako što ranjava drugoga.“', 
        'author':   'sv. Ambrozije', 
        'image':    gitHubRawUrl+'quotes_69.jpg',
        'saints':    ['<a href=""><p>Sveti Ambrozije</p></a>', '<a href=""><p>Sveta Marija Josipa Rossello</p></a>', '<a href=""><p>Blaženi Marin iz Kotora</p></a>'],    
    },
    '8-11': {
        'quote':    '„U Marijinoj je svetosti uključeno i to, da Marija nema ni istočnog ni osobnog grijeha, niti zle pohote.“', 
        'author':   'sv. Efrem Sirski o BDM', 
        'image':    gitHubRawUrl+'quotes_70.jpg',
        'saints':    ['<a href=""><p>Bezgrešno začeće Blažene Djevice Marije</p></a>', '<a href=""><p>Sveta Gorgonija</p></a>', '<a href=""><p>Sveti Teobald iz Marlyja</p></a>'],    
    },
    '9-11': {
        'quote':    '„Putem ljubavi mogu ići jedino oni koji su obilježeni znakom križa! Ljubav se mora vježbati vjerom i po vjeri!“', 
        'author':   'sv. Petar Fourier', 
        'image':    gitHubRawUrl+'quotes_71.jpg',
        'saints':    ['<a href=""><p>Sveti Petar Fourier</p></a>', '<a href=""><p>Sveta Valerija iz Limogesa</p></a>'],    
    },
    '10-11': {
        'quote':    '„Pravi sin Kristova mira.“', 
        'author':   'sv. Augustin o papi Miltijadu', 
        'image':    gitHubRawUrl+'quotes_72.jpg',
        'saints':    ['<a href=""><p>Loretska Gospa</p></a>', '<a href=""><p>Sveti Miltijad</p></a>'],    
    },
    '11-11': {
        'quote':    '„On koji hodajući morem umiri gorke valove, koji život daje umirućem sjemenu zemlje; On koji rastrgne okove smrti, i nakon tri dana uskrsne brata Martina: On će, vjerujem, i mene ponovo iz pepela podići.“', 
        'author':   'sv. Damaz', 
        'image':    gitHubRawUrl+'quotes_73.jpg',
        'saints':    ['<a href=""><p>Sveti Damaz</p></a>', '<a href=""><p>Sveti Sabin iz Piacenze</p></a>'],    
    },
    '12-11': {
        'quote':    '„Zar ja nisam tvoja Majka? Zar nisi pod mojim okriljem i zaštitom? Zar nisi na križanju mojih ruku? Postoji li išta drugo što trebaš?“', 
        'author':   'Gospa od Guadalupe sv. Juanu Diegu', 
        'image':    gitHubRawUrl+'quotes_74.jpg',
        'saints':    ['<a href=""><p>Gospa od Guadalupe</p></a>', '<a href=""><p>Sveta Ivana Franciska de Chantal</p></a>', '<a href=""><p>Sveti Simon Phan Đac Hoa</p></a>'],    
    },
    '13-11': {
        'quote':    '„Kad čisto živim, tijelo je moje stan Duha Svetoga.“', 
        'author':   'sv. Lucija', 
        'image':    gitHubRawUrl+'quotes_75.jpg',
        'saints':    ['<a href=""><p>Sveta Lucija</p></a>', '<a href=""><p>Sveta Odilija</p></a>'],    
    },
    '14-11': {
        'quote':    '„Kao što je mučen onaj tko padne u ruke neprijatelja, tako je mučena duša koja pušta, da je njene požude vuku i da njom gospodare.“', 
        'author':   'sv. Ivan od Križa', 
        'image':    gitHubRawUrl+'quotes_76.jpg',
        'saints':    ['<a href=""><p>Sveti Ivan od Križa</p></a>', '<a href=""><p>Sveti Spiridon</p></a>'],    
    },
    '15-11': {
        'quote':    '„I zazovi me u dan tjeskobe: oslobodit ću te, a ti ćeš me slaviti.“', 
        'author':   'Psalam 50, 15', 
        'image':    gitHubRawUrl+'quotes_77.jpg',
        'saints':    ['<a href=""><p>Blažene Drinske mučenice</p></a>', '<a href=""><p>Sveta Kristijana Gruzijska</p></a>'],    
    },
    '16-11': {
        'quote':    '„Ljubim te, Jahve, kreposti moja!“', 
        'author':   'Psalam 18, 2', 
        'image':    gitHubRawUrl+'quotes_78.jpg',
        'saints':    ['<a href=""><p>Sveta Adela</p></a>', '<a href=""><p>Sveta Marija Krucifiksa</p></a>'],    
    },
    '17-11': {
        'quote':    '„Sagradimo Nazared u svakom domu i učinimo od svake obitelji Svetu obitelj.“', 
        'author':   'Inspiracija kojom se vodio sv. Josipa Manyaneta', 
        'image':    gitHubRawUrl+'quotes_79.jpg',
        'saints':    ['<a href=""><p>Sveti Josip Manyanet</p></a>', '<a href=""><p>Sveti Ivan de Matha</p></a>'],    
    },
    '18-11': {
        'quote':    '„Jer Ja, Jahve, ne mijenjam se, a vi se, sinovi Jakovljevi, mijenjate bez prestanka! Od vremena svojih otaca odstupate od Mojih Uredaba i ne čuvate ih.“', 
        'author':   'Malahija 3, 6-7', 
        'image':    gitHubRawUrl+'quotes_80.jpg',
        'saints':    ['<a href=""><p>Sveti Gracijan Tourški</p></a>', '<a href=""><p>Sveti Malahija prorok</p></a>'],    
    },
    '19-11': {
        'quote':    '„Sjetimo se siromašnih i ne zaboravimo na dobrotu prema strancima; Povrh svega, ljubimo Boga svom svojom dušom, i snagom, i bližnje kao sami sebe.“', 
        'author':   'sv. Anastazije I.', 
        'image':    gitHubRawUrl+'quotes_81.jpg',
        'saints':    ['<a href=""><p>Blaženi Urban V.</p></a>', '<a href=""><p>Sveti Anastazije I.</p></a>'],    
    },
    '20-11': {
        'quote':    '„Sve je moguće onomu koji vjeruje!“', 
        'author':   'Marko 9, 23', 
        'image':    gitHubRawUrl+'quotes_82.jpg',
        'saints':    ['<a href=""><p>Sveti Dominik iz Silosa</p></a>', '<a href=""><p>Sveti Filogonije</p></a>'],    
    },
    '21-11': {
        'quote':    '„Ako imaš previše obaveza, uz Božju pomoć ćeš pronaći vrijeme da ih sve i obaviš.“', 
        'author':   'sv. Petar Kanizije', 
        'image':    gitHubRawUrl+'quotes_83.jpg',
        'saints':    ['<a href=""><p>Sveti Petar Kanizije</p></a>', '<a href=""><p>Blaženi Oton Pulski</p></a>'],    
    },
    '22-11': {
        'quote':    '„Svugdje ću ići i činiti sve kako bih naviještala ljubav Krista onima koji ga ne poznaju i onima koji su ga zaboravili.“', 
        'author':   'sv. Francesca Cabrini', 
        'image':    gitHubRawUrl+'quotes_84.jpg',
        'saints':    ['<a href=""><p>Sveta Francesca Cabrini</p></a>', '<a href=""><p>Blažena Jutta iz Sponheima</p></a>', '<a href=""><p>Sveti Flavijan</p></a>'],    
    },
    '23-11': {
        'quote':    '„Trudi se ispraviti pogrešno, ali čini to s radošću, strpljenjem, pristojnošću i ljubavlju. Grubošću ćeš samo nauditi vlastitoj duši i upropastiti najbolje namjere.“', 
        'author':   'sv. Ivan Kentijski', 
        'image':    gitHubRawUrl+'quotes_85.jpg',
        'saints':    ['<a href=""><p>Sveti Ivan Kentijski</p></a>', '<a href=""><p>Sveti Antun od Svete Ane Galvão</p></a>', '<a href=""><p>Sveti Dagobert</p></a>'],    
    },
    '24-11': {
        'quote':    '„Trebali biste shvatiti svrhu zbog koje ste došli na ovaj svijet.“', 
        'author':   'sv. Charbel Makhlouf', 
        'image':    gitHubRawUrl+'quotes_86.jpg',
        'saints':    ['<a href=""><p>Badnjak</p></a>', '<a href=""><p>Sveti Charbel Makhlouf</p></a>', '<a href=""><p>Sveti Jakov patrijarh</p></a>'],    
    },
    '25-11': {
        'quote':    '„Ne bojte se, jer vam, evo, donosim radosnu vijest o velikom veselju za sav narod: Danas vam se u Davidovu gradu rodio Spasitelj - Krist Gospodin.“', 
        'author':   'Luka 2, 10', 
        'image':    gitHubRawUrl+'quotes_87.jpg',
        'saints':    ['<a href=""><p>Božić</p></a>', '<a href=""><p>Sveti Petar Nolasco</p></a>'],    
    },
    '26-11': {
        'quote':    '„I dok su ga kamenovali, Stjepan je zazivao: "Gospodine Isuse, primi duh moj!“', 
        'author':   'Djela apostolska 7, 54', 
        'image':    gitHubRawUrl+'quotes_88.jpg',
        'saints':    ['<a href=""><p>Sveti Stjepan</p></a>', '<a href=""><p>Sveti Dionizije papa</p></a>'],    
    },
    '27-11': {
        'quote':    '„Tko ne ljubi, ne upozna Boga jer Bog je ljubav.“', 
        'author':   '1. Ivanova poslanica 4, 8', 
        'image':    gitHubRawUrl+'quotes_89.jpg',
        'saints':    ['<a href=""><p>Sveti Ivan Evanđelist</p></a>', '<a href=""><p>Blaženi Francesco Spoto</p></a>'],    
    },
    '28-11': {
        'quote':    '„Vidjevši da su ga mudraci izigrali, Herod se silno rasrdi i posla poubijati sve dječake u Betlehemu i po svoj okolici, od dvije godine naniže - prema vremenu što ga razazna od mudraca.“', 
        'author':   'Matej 2, 16', 
        'image':    gitHubRawUrl+'quotes_90.jpg',
        'saints':    ['<a href=""><p>Nevina dječica</p></a>', '<a href=""><p>Sveta Fabiola Rimska</p></a>'],    
    },
    '29-11': {
        'quote':    '„A povrh svega - ljubav! To je sveza savršenstva.“', 
        'author':   'Kološanima 3, 14', 
        'image':    gitHubRawUrl+'quotes_91.jpg',
        'saints':    ['<a href=""><p>Sveta Obitelj</p></a>', '<a href=""><p>Sveti Toma Becket</p></a>', '<a href=""><p>Sveti David, prorok i kralj</p></a>'],    
    },
    '30-11': {
        'quote':    '„Zahvaljujem Tebi, dragi Gospodine, što si dopustio da moje tijelo postane slabo i nemoćno, kako bih slobodnije dušu vratila Tebi.“', 
        'author':   'bl. Margherita Colonna', 
        'image':    gitHubRawUrl+'quotes_92.jpg',
        'saints':    ['<a href=""><p>Blažena Eugenia Ravasco</p></a>', '<a href=""><p>Blažena Margherita Colonna</p></a>', '<a href=""><p>Sveti Eugen Milanski</p></a>'],    
    },
    '31-11': {
        'quote':    '„Dakle, je li tko u Kristu, nov je stvor. Staro uminu, novo, gle, nasta!“', 
        'author':   '2. poslanica Korinćanima 5, 17', 
        'image':    gitHubRawUrl+'quotes_93.jpg',
        'saints':    ['<a href=""><p>Sveti Silvestar</p></a>', '<a href=""><p>Sveti Ivan Franjo Régis</p></a>'],    
    },
}

/* Initializind everythign */
window.addEventListener('DOMContentLoaded', setTimeout(function(){
    let quote = quotes[currentDate];
    document.querySelector(".quotes .quote").innerHTML = quote['quote'];
    
    let saintsContainer = document.querySelector(".quotes .saints");
    saintsContainer.innerHTML = '';
    let saints = quote['saints'];

    for(let i=0; i<saints.length; i++){
        saintsContainer.innerHTML += saints[i];
    }
    
    document.querySelector(".quotes .author").innerHTML = quote['author'];
    document.querySelector(".quote-image").style.background = "url("+quote['image']+")";
    
    document.querySelector(".dropdown .month").selectedIndex = month;
    document.querySelector(".dropdown .day").selectedIndex = day-1;
    
}, 100)); 
    
/* Called when month is changed */
function callBoth(e){
    checkMonth(e);
    changeSaintsMonth(e)
}

/* Calibrating month length */
function checkMonth(e){
    let days = document.querySelectorAll(".dropdown .day option");
    if(e == 1){
        if(year%4==0){
            days[29].style.display = 'none';
            days[30].style.display = 'none';
        }
        else {
            days[28].style.display = 'none';
            days[29].style.display = 'none';
            days[30].style.display = 'none';
        }
    } 
    else if (e == 3 || e == 5 || e == 8 || e == 10){
        days[28].style.display = '';
        days[29].style.display = '';
        days[30].style.display = 'none';
    }
    else{
        days[28].style.display = '';
        days[29].style.display = '';
        days[30].style.display = '';
    }
}

/* Displaying new saint when month is changed */
function changeSaintsMonth(currentMonth){
    let currentDay = document.querySelector(".dropdown .day").selectedIndex + 1;
    let newDate = currentDay+"-"+currentMonth;
    let quote = quotes[newDate];
    document.querySelector(".quotes .quote").innerHTML = quote['quote'];

    let saintsContainer = document.querySelector(".quotes .saints");
    saintsContainer.innerHTML = '';
    let saints = quote['saints'];
    for(let i=0; i<saints.length; i++){
        saintsContainer.innerHTML += saints[i];
    }
    document.querySelector(".quotes .author").innerHTML = quote['author'];
    document.querySelector(".quote-image").style.background = "url("+quote['image']+")";
}
  
/* Displaying new saint when day is changed */
function changeSaintsDay(currentDay){
    let currentMonth = document.querySelector(".dropdown .month").selectedIndex;
    let newDate = currentDay+"-"+currentMonth;
    let quote = quotes[newDate];
    document.querySelector(".quotes .quote").innerHTML = quote['quote'];


    let saintsContainer = document.querySelector(".quotes .saints");
    saintsContainer.innerHTML = '';
    let saints = quote['saints'];
    for(let i=0; i<saints.length; i++){
        saintsContainer.innerHTML += saints[i];
    }
    document.querySelector(".quotes .author").innerHTML = quote['author'];
    document.querySelector(".quote-image").style.background = "url("+quote['image']+")";
}
        