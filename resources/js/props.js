window.api_call = "http://localhost:8000/api/Reg";
window.fetchData = (url = '', data = {}, method = 'POST') => {
    // Default options are marked with *
    return fetch(url, {
        method: method, // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
}
window.CountriesData_ = {
    "DZ": {
        code: "213",
        name: "Algeria (+213)"
    },
    "AD": {
        code: "376",
        name: "Andorra (+376)"
    },
    "AO": {
        code: "244",
        name: "Angola (+244)"
    },
    "AI": {
        code: "1264",
        name: "Anguilla (+1264)"
    },
    "AG": {
        code: "1268",
        name: "Antigua &amp; Barbuda (+1268)"
    },
    "AR": {
        code: "54",
        name: "Argentina (+54)"
    },
    "AM": {
        code: "374",
        name: "Armenia (+374)"
    },
    "AW": {
        code: "297",
        name: "Aruba (+297)"
    },
    "AU": {
        code: "61",
        name: "Australia (+61)"
    },
    "AT": {
        code: "43",
        name: "Austria (+43)"
    },
    "AZ": {
        code: "994",
        name: "Azerbaijan (+994)"
    },
    "BS": {
        code: "1242",
        name: "Bahamas (+1242)"
    },
    "BH": {
        code: "973",
        name: "Bahrain (+973)"
    },
    "BD": {
        code: "880",
        name: "Bangladesh (+880)"
    },
    "BB": {
        code: "1246",
        name: "Barbados (+1246)"
    },
    "BY": {
        code: "375",
        name: "Belarus (+375)"
    },
    "BE": {
        code: "32",
        name: "Belgium (+32)"
    },
    "BZ": {
        code: "501",
        name: "Belize (+501)"
    },
    "BJ": {
        code: "229",
        name: "Benin (+229)"
    },
    "BM": {
        code: "1441",
        name: "Bermuda (+1441)"
    },
    "BT": {
        code: "975",
        name: "Bhutan (+975)"
    },
    "BO": {
        code: "591",
        name: "Bolivia (+591)"
    },
    "BA": {
        code: "387",
        name: "Bosnia Herzegovina (+387)"
    },
    "BW": {
        code: "267",
        name: "Botswana (+267)"
    },
    "BR": {
        code: "55",
        name: "Brazil (+55)"
    },
    "BN": {
        code: "673",
        name: "Brunei (+673)"
    },
    "BG": {
        code: "359",
        name: "Bulgaria (+359)"
    },
    "BF": {
        code: "226",
        name: "Burkina Faso (+226)"
    },
    "BI": {
        code: "257",
        name: "Burundi (+257)"
    },
    "KH": {
        code: "855",
        name: "Cambodia (+855)"
    },
    "CM": {
        code: "237",
        name: "Cameroon (+237)"
    },
    "CA": {
        code: "1",
        name: "Canada (+1)"
    },
    "CV": {
        code: "238",
        name: "Cape Verde Islands (+238)"
    },
    "KY": {
        code: "1345",
        name: "Cayman Islands (+1345)"
    },
    "CF": {
        code: "236",
        name: "Central African Republic (+236)"
    },
    "CL": {
        code: "56",
        name: "Chile (+56)"
    },
    "CN": {
        code: "86",
        name: "China (+86)"
    },
    "CO": {
        code: "57",
        name: "Colombia (+57)"
    },
    "KM": {
        code: "269",
        name: "Comoros (+269)"
    },
    "CG": {
        code: "242",
        name: "Congo (+242)"
    },
    "CK": {
        code: "682",
        name: "Cook Islands (+682)"
    },
    "CR": {
        code: "506",
        name: "Costa Rica (+506)"
    },
    "HR": {
        code: "385",
        name: "Croatia (+385)"
    },
    "CU": {
        code: "53",
        name: "Cuba (+53)"
    },
    "CY": {
        code: "90392",
        name: "Cyprus North (+90392)"
    },
    "CY": {
        code: "357",
        name: "Cyprus South (+357)"
    },
    "CZ": {
        code: "42",
        name: "Czech Republic (+42)"
    },
    "DK": {
        code: "45",
        name: "Denmark (+45)"
    },
    "DJ": {
        code: "253",
        name: "Djibouti (+253)"
    },
    "DM": {
        code: "1809",
        name: "Dominica (+1809)"
    },
    "DO": {
        code: "1809",
        name: "Dominican Republic (+1809)"
    },
    "EC": {
        code: "593",
        name: "Ecuador (+593)"
    },
    "EG": {
        code: "20",
        name: "Egypt (+20)"
    },
    "SV": {
        code: "503",
        name: "El Salvador (+503)"
    },
    "GQ": {
        code: "240",
        name: "Equatorial Guinea (+240)"
    },
    "ER": {
        code: "291",
        name: "Eritrea (+291)"
    },
    "EE": {
        code: "372",
        name: "Estonia (+372)"
    },
    "ET": {
        code: "251",
        name: "Ethiopia (+251)"
    },
    "FK": {
        code: "500",
        name: "Falkland Islands (+500)"
    },
    "FO": {
        code: "298",
        name: "Faroe Islands (+298)"
    },
    "FJ": {
        code: "679",
        name: "Fiji (+679)"
    },
    "FI": {
        code: "358",
        name: "Finland (+358)"
    },
    "FR": {
        code: "33",
        name: "France (+33)"
    },
    "GF": {
        code: "594",
        name: "French Guiana (+594)"
    },
    "PF": {
        code: "689",
        name: "French Polynesia (+689)"
    },
    "GA": {
        code: "241",
        name: "Gabon (+241)"
    },
    "GM": {
        code: "220",
        name: "Gambia (+220)"
    },
    "GE": {
        code: "7880",
        name: "Georgia (+7880)"
    },
    "DE": {
        code: "49",
        name: "Germany (+49)"
    },
    "GH": {
        code: "233",
        name: "Ghana (+233)"
    },
    "GI": {
        code: "350",
        name: "Gibraltar (+350)"
    },
    "GR": {
        code: "30",
        name: "Greece (+30)"
    },
    "GL": {
        code: "299",
        name: "Greenland (+299)"
    },
    "GD": {
        code: "1473",
        name: "Grenada (+1473)"
    },
    "GP": {
        code: "590",
        name: "Guadeloupe (+590)"
    },
    "GU": {
        code: "671",
        name: "Guam (+671)"
    },
    "GT": {
        code: "502",
        name: "Guatemala (+502)"
    },
    "GN": {
        code: "224",
        name: "Guinea (+224)"
    },
    "GW": {
        code: "245",
        name: "Guinea - Bissau (+245)"
    },
    "GY": {
        code: "592",
        name: "Guyana (+592)"
    },
    "HT": {
        code: "509",
        name: "Haiti (+509)"
    },
    "HN": {
        code: "504",
        name: "Honduras (+504)"
    },
    "HK": {
        code: "852",
        name: "Hong Kong (+852)"
    },
    "HU": {
        code: "36",
        name: "Hungary (+36)"
    },
    "IS": {
        code: "354",
        name: "Iceland (+354)"
    },
    "IN": {
        code: "91",
        name: "India (+91)"
    },
    "ID": {
        code: "62",
        name: "Indonesia (+62)"
    },
    "IR": {
        code: "98",
        name: "Iran (+98)"
    },
    "IQ": {
        code: "964",
        name: "Iraq (+964)"
    },
    "IE": {
        code: "353",
        name: "Ireland (+353)"
    },
    "IL": {
        code: "972",
        name: "Israel (+972)"
    },
    "IT": {
        code: "39",
        name: "Italy (+39)"
    },
    "JM": {
        code: "1876",
        name: "Jamaica (+1876)"
    },
    "JP": {
        code: "81",
        name: "Japan (+81)"
    },
    "JO": {
        code: "962",
        name: "Jordan (+962)"
    },
    "KZ": {
        code: "7",
        name: "Kazakhstan (+7)"
    },
    "KE": {
        code: "254",
        name: "Kenya (+254)"
    },
    "KI": {
        code: "686",
        name: "Kiribati (+686)"
    },
    "KP": {
        code: "850",
        name: "Korea North (+850)"
    },
    "KR": {
        code: "82",
        name: "Korea South (+82)"
    },
    "KW": {
        code: "965",
        name: "Kuwait (+965)"
    },
    "KG": {
        code: "996",
        name: "Kyrgyzstan (+996)"
    },
    "LA": {
        code: "856",
        name: "Laos (+856)"
    },
    "LV": {
        code: "371",
        name: "Latvia (+371)"
    },
    "LB": {
        code: "961",
        name: "Lebanon (+961)"
    },
    "LS": {
        code: "266",
        name: "Lesotho (+266)"
    },
    "LR": {
        code: "231",
        name: "Liberia (+231)"
    },
    "LY": {
        code: "218",
        name: "Libya (+218)"
    },
    "LI": {
        code: "417",
        name: "Liechtenstein (+417)"
    },
    "LT": {
        code: "370",
        name: "Lithuania (+370)"
    },
    "LU": {
        code: "352",
        name: "Luxembourg (+352)"
    },
    "MO": {
        code: "853",
        name: "Macao (+853)"
    },
    "MK": {
        code: "389",
        name: "Macedonia (+389)"
    },
    "MG": {
        code: "261",
        name: "Madagascar (+261)"
    },
    "MW": {
        code: "265",
        name: "Malawi (+265)"
    },
    "MY": {
        code: "60",
        name: "Malaysia (+60)"
    },
    "MV": {
        code: "960",
        name: "Maldives (+960)"
    },
    "ML": {
        code: "223",
        name: "Mali (+223)"
    },
    "MT": {
        code: "356",
        name: "Malta (+356)"
    },
    "MH": {
        code: "692",
        name: "Marshall Islands (+692)"
    },
    "MQ": {
        code: "596",
        name: "Martinique (+596)"
    },
    "MR": {
        code: "222",
        name: "Mauritania (+222)"
    },
    "YT": {
        code: "269",
        name: "Mayotte (+269)"
    },
    "MX": {
        code: "52",
        name: "Mexico (+52)"
    },
    "FM": {
        code: "691",
        name: "Micronesia (+691)"
    },
    "MD": {
        code: "373",
        name: "Moldova (+373)"
    },
    "MC": {
        code: "377",
        name: "Monaco (+377)"
    },
    "MN": {
        code: "976",
        name: "Mongolia (+976)"
    },
    "MS": {
        code: "1664",
        name: "Montserrat (+1664)"
    },
    "MA": {
        code: "212",
        name: "Morocco (+212)"
    },
    "MZ": {
        code: "258",
        name: "Mozambique (+258)"
    },
    "MN": {
        code: "95",
        name: "Myanmar (+95)"
    },
    "NA": {
        code: "264",
        name: "Namibia (+264)"
    },
    "NR": {
        code: "674",
        name: "Nauru (+674)"
    },
    "NP": {
        code: "977",
        name: "Nepal (+977)"
    },
    "NL": {
        code: "31",
        name: "Netherlands (+31)"
    },
    "NC": {
        code: "687",
        name: "New Caledonia (+687)"
    },
    "NZ": {
        code: "64",
        name: "New Zealand (+64)"
    },
    "NI": {
        code: "505",
        name: "Nicaragua (+505)"
    },
    "NE": {
        code: "227",
        name: "Niger (+227)"
    },
    "NG": {
        code: "234",
        name: "Nigeria (+234)"
    },
    "NU": {
        code: "683",
        name: "Niue (+683)"
    },
    "NF": {
        code: "672",
        name: "Norfolk Islands (+672)"
    },
    "NP": {
        code: "670",
        name: "Northern Marianas (+670)"
    },
    "NO": {
        code: "47",
        name: "Norway (+47)"
    },
    "OM": {
        code: "968",
        name: "Oman (+968)"
    },
    "PW": {
        code: "680",
        name: "Palau (+680)"
    },
    "PA": {
        code: "507",
        name: "Panama (+507)"
    },
    "PG": {
        code: "675",
        name: "Papua New Guinea (+675)"
    },
    "PY": {
        code: "595",
        name: "Paraguay (+595)"
    },
    "PE": {
        code: "51",
        name: "Peru (+51)"
    },
    "PH": {
        code: "63",
        name: "Philippines (+63)"
    },
    "PL": {
        code: "48",
        name: "Poland (+48)"
    },
    "PT": {
        code: "351",
        name: "Portugal (+351)"
    },
    "PR": {
        code: "1787",
        name: "Puerto Rico (+1787)"
    },
    "QA": {
        code: "974",
        name: "Qatar (+974)"
    },
    "RE": {
        code: "262",
        name: "Reunion (+262)"
    },
    "RO": {
        code: "40",
        name: "Romania (+40)"
    },
    "RU": {
        code: "7",
        name: "Russia (+7)"
    },
    "RW": {
        code: "250",
        name: "Rwanda (+250)"
    },
    "SM": {
        code: "378",
        name: "San Marino (+378)"
    },
    "ST": {
        code: "239",
        name: "Sao Tome &amp; Principe (+239)"
    },
    "SA": {
        code: "966",
        name: "Saudi Arabia (+966)"
    },
    "SN": {
        code: "221",
        name: "Senegal (+221)"
    },
    "CS": {
        code: "381",
        name: "Serbia (+381)"
    },
    "SC": {
        code: "248",
        name: "Seychelles (+248)"
    },
    "SL": {
        code: "232",
        name: "Sierra Leone (+232)"
    },
    "SG": {
        code: "65",
        name: "Singapore (+65)"
    },
    "SK": {
        code: "421",
        name: "Slovak Republic (+421)"
    },
    "SI": {
        code: "386",
        name: "Slovenia (+386)"
    },
    "SB": {
        code: "677",
        name: "Solomon Islands (+677)"
    },
    "SO": {
        code: "252",
        name: "Somalia (+252)"
    },
    "ZA": {
        code: "27",
        name: "South Africa (+27)"
    },
    "ES": {
        code: "34",
        name: "Spain (+34)"
    },
    "LK": {
        code: "94",
        name: "Sri Lanka (+94)"
    },
    "SH": {
        code: "290",
        name: "St. Helena (+290)"
    },
    "KN": {
        code: "1869",
        name: "St. Kitts (+1869)"
    },
    "SC": {
        code: "1758",
        name: "St. Lucia (+1758)"
    },
    "SD": {
        code: "249",
        name: "Sudan (+249)"
    },
    "SR": {
        code: "597",
        name: "Suriname (+597)"
    },
    "SZ": {
        code: "268",
        name: "Swaziland (+268)"
    },
    "SE": {
        code: "46",
        name: "Sweden (+46)"
    },
    "CH": {
        code: "41",
        name: "Switzerland (+41)"
    },
    "SI": {
        code: "963",
        name: "Syria (+963)"
    },
    "TW": {
        code: "886",
        name: "Taiwan (+886)"
    },
    "TJ": {
        code: "7",
        name: "Tajikstan (+7)"
    },
    "TH": {
        code: "66",
        name: "Thailand (+66)"
    },
    "TG": {
        code: "228",
        name: "Togo (+228)"
    },
    "TO": {
        code: "676",
        name: "Tonga (+676)"
    },
    "TT": {
        code: "1868",
        name: "Trinidad &amp; Tobago (+1868)"
    },
    "TN": {
        code: "216",
        name: "Tunisia (+216)"
    },
    "TR": {
        code: "90",
        name: "Turkey (+90)"
    },
    "TM": {
        code: "7",
        name: "Turkmenistan (+7)"
    },
    "TM": {
        code: "993",
        name: "Turkmenistan (+993)"
    },
    "TC": {
        code: "1649",
        name: "Turks &amp; Caicos Islands (+1649)"
    },
    "TV": {
        code: "688",
        name: "Tuvalu (+688)"
    },
    "UG": {
        code: "256",
        name: "Uganda (+256)"
    },
    "UA": {
        code: "380",
        name: "Ukraine (+380)"
    },
    "AE": {
        code: "971",
        name: "United Arab Emirates (+971)"
    },
    "UY": {
        code: "598",
        name: "Uruguay (+598)"
    },
    "UZ": {
        code: "7",
        name: "Uzbekistan (+7)"
    },
    "VU": {
        code: "678",
        name: "Vanuatu (+678)"
    },
    "VA": {
        code: "379",
        name: "Vatican City (+379)"
    },
    "VE": {
        code: "58",
        name: "Venezuela (+58)"
    },
    "VN": {
        code: "84",
        name: "Vietnam (+84)"
    },
    "VG": {
        code: "84",
        name: "Virgin Islands - British (+1284)"
    },
    "VI": {
        code: "84",
        name: "Virgin Islands - US (+1340)"
    },
    "WF": {
        code: "681",
        name: "Wallis &amp; Futuna (+681)"
    },
    "YE": {
        code: "969",
        name: "Yemen (North)(+969)"
    },
    "YE": {
        code: "967",
        name: "Yemen (South)(+967)"
    },
    "ZM": {
        code: "260",
        name: "Zambia (+260)"
    },
    "ZW": {
        code: "263",
        name: "Zimbabwe (+263)"
    }
}