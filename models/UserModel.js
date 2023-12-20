import db from "../config/Supabase.js"


const userDumy = [
    {
     "fullname": "M. PADILA",
     "email": "m.padila@students.polmed.ac.id",
     "semester": 6,
     "majoring": "Desain Grafis",
     "interest": "Graphic Design",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 20
    },
    {
     "fullname": "RAPAEL ROSINTA TUMANGGER",
     "email": "rapaelrosintatumangger@students.polmed.ac.id",
     "semester": 3,
     "majoring": "Desain Grafis",
     "interest": "Graphic Design",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 20
    },
    {
     "fullname": "AQIL JABBAR RAIHAN",
     "email": "aqiljabbarraihan@students.polmed.ac.id",
     "semester": 2,
     "majoring": "Desain Grafis",
     "interest": "Graphic Design",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 20
    },
    {
     "fullname": "FRANS THEO ANDIKA SEMBIRING",
     "email": "franstheoandika@students.polmed.ac.id",
     "semester": 7,
     "majoring": "Desain Grafis",
     "interest": "Graphic Design",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 22
    },
    {
     "fullname": "ADJI ADRIAN RAHMANDA",
     "email": "adjiadrianrahmanda@students.polmed.ac.id",
     "semester": 5,
     "majoring": "Desain Grafis",
     "interest": "Graphic Design",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 18
    },
    {
     "fullname": "ZULFADHILAH",
     "email": "zulfadhilah@students.polmed.ac.id",
     "semester": 1,
     "majoring": "Desain Grafis",
     "interest": "Graphic Design",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 20
    },
    {
     "fullname": "AUDREY RIZKY SAFINKA",
     "email": "audreyrizkysafinka@students.polmed.ac.id",
     "semester": 4,
     "majoring": "Desain Grafis",
     "interest": "Graphic Design",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 18
    },
    {
     "fullname": "RIZKA APRILLIA KHAIRUNNISSA",
     "email": "rizkaaprilliakhairunnissa@students.polmed.ac.id",
     "semester": 8,
     "majoring": "Desain Grafis",
     "interest": "Graphic Design",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 18
    },
    {
     "fullname": "HAFIZ FAUZAN DALIMUNTHE",
     "email": "hafizfauzandalimunthe@students.polmed.ac.id",
     "semester": 6,
     "majoring": "Desain Grafis",
     "interest": "Graphic Design",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 21
    },
    {
     "fullname": "ABIYU FARIZ DALIMUNTHE",
     "email": "abiyufarizdalimunthe@students.polmed.ac.id",
     "semester": 2,
     "majoring": "Desain Grafis",
     "interest": "Graphic Design",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 18
    },
    {
     "fullname": "RAJFI ABDI SIREGAR",
     "email": "rajfiabdisiregar@students.polmed.ac.id",
     "semester": 1,
     "majoring": "Desain Grafis",
     "interest": "Graphic Design",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 20
    },
    {
     "fullname": "IRZI AL - FAHREZI",
     "email": "irzial-@students.polmed.ac.id",
     "semester": 7,
     "majoring": "Desain Grafis",
     "interest": "Graphic Design",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 19
    },
    {
     "fullname": "NISA ISTIFARRA",
     "email": "nisaistifarra@students.polmed.ac.id",
     "semester": 3,
     "majoring": "Desain Grafis",
     "interest": "Graphic Design",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 18
    },
    {
     "fullname": "WAN ARYA ARRAMADHAN DAULAY",
     "email": "wanaryaarramadhan@students.polmed.ac.id",
     "semester": 5,
     "majoring": "Desain Grafis",
     "interest": "Graphic Design",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 20
    },
    {
     "fullname": "M.FADHLAN ATH-THORIQ",
     "email": "m.fadhlanath-thoriq@students.polmed.ac.id",
     "semester": 4,
     "majoring": "Desain Grafis",
     "interest": "Graphic Design",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 18
    },
    {
     "fullname": "IGNATIUS BAGAS PARDAMEAN MANIHURUK",
     "email": "ignatiusbagaspardamean@students.polmed.ac.id",
     "semester": 8,
     "majoring": "Desain Grafis",
     "interest": "Graphic Design",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 20
    },
    {
     "fullname": "BONARDO SIHOMBING",
     "email": "bonardosihombing@students.polmed.ac.id",
     "semester": 2,
     "majoring": "Desain Grafis",
     "interest": "Graphic Design",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 21
    },
    {
     "fullname": "AHMAD YASIN NASUTION",
     "email": "ahmadyasinnasution@students.polmed.ac.id",
     "semester": 6,
     "majoring": "Desain Grafis",
     "interest": "Graphic Design",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 21
    },
    {
     "fullname": "NADHIFAH MEUTIA DEWI",
     "email": "nadhifahmeutiadewi@students.polmed.ac.id",
     "semester": 1,
     "majoring": "Desain Komunikasi Visual",
     "interest": "Graphic Design",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 19
    },
    {
     "fullname": "MUHAMMAD BUKHARI LUBIS",
     "email": "muhammadbukharilubis@students.polmed.ac.id",
     "semester": 7,
     "majoring": "Desain Komunikasi Visual",
     "interest": "Graphic Design",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 19
    },
    {
     "fullname": "RAFIF MUHAMMAD",
     "email": "rafifmuhammad@students.polmed.ac.id",
     "semester": 4,
     "majoring": "Desain Komunikasi Visual",
     "interest": "Graphic Design",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 18
    },
    {
     "fullname": "FERNANDO RICKOT SINAGA",
     "email": "fernandorickotsinaga@students.polmed.ac.id",
     "semester": 3,
     "majoring": "Desain Komunikasi Visual",
     "interest": "Graphic Design",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 21
    },
    {
     "fullname": "JESICA OKTAVIA MANIK",
     "email": "jesicaoktaviamanik@students.polmed.ac.id",
     "semester": 5,
     "majoring": "Desain Komunikasi Visual",
     "interest": "Graphic Design",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 19
    },
    {
     "fullname": "MHD ALSYA JOUVANKA",
     "email": "mhdalsyajouvanka@students.polmed.ac.id",
     "semester": 8,
     "majoring": "Desain Komunikasi Visual",
     "interest": "Graphic Design",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 18
    },
    {
     "fullname": "SWETHA WINDA AGUSTINA SIAGIAN",
     "email": "swethawindaagustina@students.polmed.ac.id",
     "semester": 2,
     "majoring": "Desain Produk ",
     "interest": "Graphic Design",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 20
    },
    {
     "fullname": "CARDINAL HASAN WIJAYA",
     "email": "cardinalhasanwijaya@students.polmed.ac.id",
     "semester": 6,
     "majoring": "Desain Produk ",
     "interest": "Graphic Design",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 20
    },
    {
     "fullname": "BAIHAQI ABDILLAH RAHMA",
     "email": "baihaqiabdillahrahma@students.polmed.ac.id",
     "semester": 4,
     "majoring": "Desain Produk ",
     "interest": "Graphic Design",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 22
    },
    {
     "fullname": "AYU ANNISA NASUTION",
     "email": "ayuannisanasution@students.polmed.ac.id",
     "semester": 7,
     "majoring": "Desain Produk ",
     "interest": "Graphic Design",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 20
    },
    {
     "fullname": "AL SYAH TRI RAMADHANI",
     "email": "alsyahtri@students.polmed.ac.id",
     "semester": 3,
     "majoring": "Desain Interior",
     "interest": "Graphic Design",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 21
    },
    {
     "fullname": "MUHAMMAD HILAL RAMADHAN",
     "email": "muhammadhilalramadhan@students.polmed.ac.id",
     "semester": 1,
     "majoring": "Desain Interior",
     "interest": "Graphic Design",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 20
    },
    {
     "fullname": "BABY AGUSTIN",
     "email": "babyagustin@students.polmed.ac.id",
     "semester": 5,
     "majoring": "Desain Interior",
     "interest": "Graphic Design",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 21
    },
    {
     "fullname": "ONDO HAPOSAN HARAHAP",
     "email": "ondohaposanharahap@students.polmed.ac.id",
     "semester": 8,
     "majoring": "Desain Interior",
     "interest": "Graphic Design",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 22
    },
    {
     "fullname": "FITRI.WULANDARI",
     "email": "fitri.wulandari@students.polmed.ac.id",
     "semester": 2,
     "majoring": "Desain Arsitektur",
     "interest": "Graphic Design",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 19
    },
    {
     "fullname": "WILLY GURNING",
     "email": "willygurning@students.polmed.ac.id",
     "semester": 6,
     "majoring": "Desain Arsitektur",
     "interest": "Graphic Design",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 19
    },
    {
     "fullname": "CUT EGA BR.MANURUNG",
     "email": "cutegabr.manurung@students.polmed.ac.id",
     "semester": 3,
     "majoring": "Desain Fashion",
     "interest": "Graphic Design",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 19
    },
    {
     "fullname": "PUTRI AZURA ELPRIDO",
     "email": "putriazuraelprido@students.polmed.ac.id",
     "semester": 1,
     "majoring": "Desain Fashion",
     "interest": "Graphic Design",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 19
    },
    {
     "fullname": "NUR AISYAH NAINGGOLAN",
     "email": "nuraisyahnainggolan@students.polmed.ac.id",
     "semester": 4,
     "majoring": "Desain Fashion",
     "interest": "Graphic Design",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 21
    },
    {
     "fullname": "YURIKO FARISHA AINI SARAGIH",
     "email": "yurikofarishaaini@students.polmed.ac.id",
     "semester": 7,
     "majoring": "Desain Fashion",
     "interest": "Graphic Design",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 19
    },
    {
     "fullname": "SITI MASITAH ARNESIA",
     "email": "sitimasitaharnesia@students.polmed.ac.id",
     "semester": 5,
     "majoring": "Desain Permainan",
     "interest": "Graphic Design",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 19
    },
    {
     "fullname": "INRIANA OKTAVIANI",
     "email": "inrianaoktaviani@students.polmed.ac.id",
     "semester": 8,
     "majoring": "Desain Permainan",
     "interest": "Graphic Design",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 19
    },
    {
     "fullname": "FEBRIANA ANGELICA BR MANURUNG",
     "email": "febrianaangelicabr@students.polmed.ac.id",
     "semester": 2,
     "majoring": "Desain Animasi",
     "interest": "Graphic Design",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 19
    },
    {
     "fullname": "YUDHA HADI PRAKOSO",
     "email": "yudhahadiprakoso@students.polmed.ac.id",
     "semester": 6,
     "majoring": "Desain Animasi",
     "interest": "Graphic Design",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 20
    },
    {
     "fullname": "GILANG ADITYA PRAYUDHA",
     "email": "gilangadityaprayudha@students.polmed.ac.id",
     "semester": 1,
     "majoring": "Desain Teknologi Games",
     "interest": "Graphic Design",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 18
    },
    {
     "fullname": "ALFI.SYAHRIN",
     "email": "alfi.syahrin@students.polmed.ac.id",
     "semester": 4,
     "majoring": "Desain Teknologi Games",
     "interest": "Graphic Design",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 21
    },
    {
     "fullname": "MUHAMMAD FARHAN22",
     "email": "muhammadfarhan22@students.polmed.ac.id",
     "semester": 7,
     "majoring": "Seni Rupa",
     "interest": "Graphic Design",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 19
    },
    {
     "fullname": "ALWI ZIDANE SIREGAR",
     "email": "alwizidanesiregar@students.polmed.ac.id",
     "semester": 3,
     "majoring": "Seni Rupa",
     "interest": "Graphic Design",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 18
    },
    {
     "fullname": "RUTH KESATRI YOHANA DAMANIK",
     "email": "ruthkesatriyohana@students.polmed.ac.id",
     "semester": 5,
     "majoring": "Data Science ",
     "interest": "Data Science & Data Analysis",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 20
    },
    {
     "fullname": "DELLA FEMINANNA BR KETAREN",
     "email": "dellafeminannabr@students.polmed.ac.id",
     "semester": 8,
     "majoring": "Data Science ",
     "interest": "Data Science & Data Analysis",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 21
    },
    {
     "fullname": "EKADIA WIDANINGRUM KASINDI",
     "email": "ekadiawidaningrumkasindi@students.polmed.ac.id",
     "semester": 2,
     "majoring": "Data Science ",
     "interest": "Data Science & Data Analysis",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 20
    },
    {
     "fullname": "MUHAMMAD DIMAS AQILLA",
     "email": "muhammaddimasaqilla@students.polmed.ac.id",
     "semester": 6,
     "majoring": "Data Science ",
     "interest": "Data Science & Data Analysis",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 19
    },
    {
     "fullname": "MUHAMMAD ASYRAF RIZKI",
     "email": "muhammadasyrafrizki@students.polmed.ac.id",
     "semester": 1,
     "majoring": "Data Science ",
     "interest": "Data Science & Data Analysis",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 22
    },
    {
     "fullname": "MUHAMMAD FAHRUL RIFQI",
     "email": "muhammadfahrulrifqi@students.polmed.ac.id",
     "semester": 7,
     "majoring": "Data Science ",
     "interest": "Data Science & Data Analysis",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 20
    },
    {
     "fullname": "DEA FADILLAH SUSANTO",
     "email": "deafadillahsusanto@students.polmed.ac.id",
     "semester": 4,
     "majoring": "Data Science ",
     "interest": "Data Science & Data Analysis",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 22
    },
    {
     "fullname": "GORDON SAMUEL HAMONANGAN HUTAGALUNG",
     "email": "gordonsamuelhamonangan@students.polmed.ac.id",
     "semester": 3,
     "majoring": "Data Science ",
     "interest": "Data Science & Data Analysis",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 19
    },
    {
     "fullname": "LOYDE THIORIA SITUMEANG",
     "email": "loydethioriasitumeang@students.polmed.ac.id",
     "semester": 5,
     "majoring": "Data Science ",
     "interest": "Data Science & Data Analysis",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 22
    },
    {
     "fullname": "MUHAMMAD REYHAN",
     "email": "muhammadreyhan@students.polmed.ac.id",
     "semester": 8,
     "majoring": "Data Science ",
     "interest": "Data Science & Data Analysis",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 19
    },
    {
     "fullname": "RESPRAMON SOLLUS SIHOMBING",
     "email": "respramonsollussihombing@students.polmed.ac.id",
     "semester": 2,
     "majoring": "Statistika",
     "interest": "Data Science & Data Analysis",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 21
    },
    {
     "fullname": "FATAHILLAH RAHMAN",
     "email": "fatahillahrahman@students.polmed.ac.id",
     "semester": 6,
     "majoring": "Statistika",
     "interest": "Data Science & Data Analysis",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 18
    },
    {
     "fullname": "ARON ANDRIAN J SILABAN",
     "email": "aronandrianj@students.polmed.ac.id",
     "semester": 1,
     "majoring": "Statistika",
     "interest": "Data Science & Data Analysis",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 21
    },
    {
     "fullname": "RIANDA LESMANA SIHALOHO",
     "email": "riandalesmanasihaloho@students.polmed.ac.id",
     "semester": 7,
     "majoring": "Statistika",
     "interest": "Data Science & Data Analysis",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 19
    },
    {
     "fullname": "MIFTAHUDDIN SIREGAR",
     "email": "miftahuddinsiregar@students.polmed.ac.id",
     "semester": 4,
     "majoring": "Statistika",
     "interest": "Data Science & Data Analysis",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 22
    },
    {
     "fullname": "RAIHANA GHAFIRA",
     "email": "raihanaghafira@students.polmed.ac.id",
     "semester": 3,
     "majoring": "Statistika",
     "interest": "Data Science & Data Analysis",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 19
    },
    {
     "fullname": "DIVA KHAIRANY",
     "email": "divakhairany@students.polmed.ac.id",
     "semester": 5,
     "majoring": "Statistika",
     "interest": "Data Science & Data Analysis",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 21
    },
    {
     "fullname": "RAFLY",
     "email": "rafly@students.polmed.ac.id",
     "semester": 8,
     "majoring": "Statistika",
     "interest": "Data Science & Data Analysis",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 22
    },
    {
     "fullname": "AZIZ AYYASY",
     "email": "azizayyasy@students.polmed.ac.id",
     "semester": 2,
     "majoring": "Statistika",
     "interest": "Data Science & Data Analysis",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 18
    },
    {
     "fullname": "RIZKI AHMAD KAHFI",
     "email": "rizkiahmadkahfi@students.polmed.ac.id",
     "semester": 6,
     "majoring": "Statistika",
     "interest": "Data Science & Data Analysis",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 21
    },
    {
     "fullname": "MUHAMMAD AULIA",
     "email": "muhammadaulia@students.polmed.ac.id",
     "semester": 1,
     "majoring": "Ilmu Komputer",
     "interest": "Data Science & Data Analysis",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 19
    },
    {
     "fullname": "HABIB HASAN SIMANJUNTAK",
     "email": "habibhasansimanjuntak@students.polmed.ac.id",
     "semester": 7,
     "majoring": "Ilmu Komputer",
     "interest": "Data Science & Data Analysis",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 18
    },
    {
     "fullname": "ATHA NADHIEF RIDWAN SIREGAR",
     "email": "athanadhiefridwan@students.polmed.ac.id",
     "semester": 4,
     "majoring": "Ilmu Komputer",
     "interest": "Data Science & Data Analysis",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 19
    },
    {
     "fullname": "NADIA SIMATUPANG",
     "email": "nadiasimatupang@students.polmed.ac.id",
     "semester": 3,
     "majoring": "Ilmu Komputer",
     "interest": "Data Science & Data Analysis",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 22
    },
    {
     "fullname": "TESSYA OLIVIA NAPITUPULU",
     "email": "tessyaolivianapitupulu@students.polmed.ac.id",
     "semester": 5,
     "majoring": "Ilmu Komputer",
     "interest": "Data Science & Data Analysis",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 18
    },
    {
     "fullname": "CLEN WILLIEM PARTOGI PAKPAHAN",
     "email": "clenwilliempartogi@students.polmed.ac.id",
     "semester": 8,
     "majoring": "Ilmu Komputer",
     "interest": "Data Science & Data Analysis",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 21
    },
    {
     "fullname": "ROY TRI PRASTYO",
     "email": "roytriprastyo@students.polmed.ac.id",
     "semester": 2,
     "majoring": "Ilmu Komputer",
     "interest": "Data Science & Data Analysis",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 20
    },
    {
     "fullname": "AMALIA WULAN SHAFARINDAH",
     "email": "amaliawulanshafarindah@students.polmed.ac.id",
     "semester": 6,
     "majoring": "Ilmu Komputer",
     "interest": "Data Science & Data Analysis",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 21
    },
    {
     "fullname": "SUKMA AULIA AZZAHRA",
     "email": "sukmaauliaazzahra@students.polmed.ac.id",
     "semester": 1,
     "majoring": "Ilmu Komputer",
     "interest": "Data Science & Data Analysis",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 19
    },
    {
     "fullname": "EVI SIGALINGGING",
     "email": "evisigalingging@students.polmed.ac.id",
     "semester": 7,
     "majoring": "Ilmu Komputer",
     "interest": "Data Science & Data Analysis",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 19
    },
    {
     "fullname": "RAFLESIA PUTRI NATALIA SIMANULLANG",
     "email": "raflesiaputrinatalia@students.polmed.ac.id",
     "semester": 4,
     "majoring": "Teknik Informatika",
     "interest": "Data Science & Data Analysis",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 19
    },
    {
     "fullname": "RAFIE ZAIDAN AMRI",
     "email": "rafiezaidanamri@students.polmed.ac.id",
     "semester": 3,
     "majoring": "Teknik Informatika",
     "interest": "Data Science & Data Analysis",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 19
    },
    {
     "fullname": "DINDA AZZURA",
     "email": "dindaazzura@students.polmed.ac.id",
     "semester": 5,
     "majoring": "Teknik Informatika",
     "interest": "Data Science & Data Analysis",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 22
    },
    {
     "fullname": "RIO VIERIAWAN",
     "email": "riovieriawan@students.polmed.ac.id",
     "semester": 8,
     "majoring": "Teknik Informatika",
     "interest": "Data Science & Data Analysis",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 19
    },
    {
     "fullname": "MHD. ERLANGGA PAMUNGKAS",
     "email": "mhd.erlanggapamungkas@students.polmed.ac.id",
     "semester": 2,
     "majoring": "Teknik Informatika",
     "interest": "Data Science & Data Analysis",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 22
    },
    {
     "fullname": "ABEDNEGO SIRAIT",
     "email": "abednegosirait@students.polmed.ac.id",
     "semester": 6,
     "majoring": "Teknik Informatika",
     "interest": "Data Science & Data Analysis",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 19
    },
    {
     "fullname": "UMMI BALQHIS BR DAULAY",
     "email": "ummibalqhisbr@students.polmed.ac.id",
     "semester": 1,
     "majoring": "Teknik Informatika",
     "interest": "Data Science & Data Analysis",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 22
    },
    {
     "fullname": "NUR AISYAH ASWARI",
     "email": "nuraisyahaswari@students.polmed.ac.id",
     "semester": 4,
     "majoring": "Teknik Informatika",
     "interest": "Data Science & Data Analysis",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 19
    },
    {
     "fullname": "PUTRI  WULANDARIHASIBUAN",
     "email": "putriwulandarihasibuan@students.polmed.ac.id",
     "semester": 4,
     "majoring": "Teknik Informatika",
     "interest": "Data Science & Data Analysis",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 22
    },
    {
     "fullname": "ARINI SYAMLIA HARAHAP",
     "email": "arinisyamliaharahap@students.polmed.ac.id",
     "semester": 3,
     "majoring": "Teknik Informatika",
     "interest": "Data Science & Data Analysis",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 21
    },
    {
     "fullname": "AFRIANTI FADILLAH",
     "email": "afriantifadillah@students.polmed.ac.id",
     "semester": 5,
     "majoring": "Sistem Informasi",
     "interest": "Data Science & Data Analysis",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 18
    },
    {
     "fullname": "ROMI RISKI FAHROZI RAMBE",
     "email": "romiriskifahrozi@students.polmed.ac.id",
     "semester": 8,
     "majoring": "Sistem Informasi",
     "interest": "Data Science & Data Analysis",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 22
    },
    {
     "fullname": "FAUZAN ALY FALEVI",
     "email": "fauzanalyfalevi@students.polmed.ac.id",
     "semester": 2,
     "majoring": "Sistem Informasi",
     "interest": "Data Science & Data Analysis",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 22
    },
    {
     "fullname": "DANIEL HALOMOAN SIREGAR",
     "email": "danielhalomoansiregar@students.polmed.ac.id",
     "semester": 6,
     "majoring": "Sistem Informasi",
     "interest": "Data Science & Data Analysis",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 21
    },
    {
     "fullname": "GILANG DARMAWAN DALIMUNTHE",
     "email": "gilangdarmawandalimunthe@students.polmed.ac.id",
     "semester": 1,
     "majoring": "Sistem Informasi",
     "interest": "Data Science & Data Analysis",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 18
    },
    {
     "fullname": "MUHAMMAD ABDULLAH AZZAM",
     "email": "muhammadabdullahazzam@students.polmed.ac.id",
     "semester": 7,
     "majoring": "Sistem Informasi",
     "interest": "Data Science & Data Analysis",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 21
    },
    {
     "fullname": "RIDHO PRAYOGA",
     "email": "ridhoprayoga@students.polmed.ac.id",
     "semester": 4,
     "majoring": "Sistem Informasi",
     "interest": "Data Science & Data Analysis",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 19
    },
    {
     "fullname": "AZKIA NUR RAHMAN EL KARIM",
     "email": "azkianurrahman@students.polmed.ac.id",
     "semester": 3,
     "majoring": "Sistem Informasi",
     "interest": "Data Science & Data Analysis",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 18
    },
    {
     "fullname": "ERWIN PUTRA MARPAUNG",
     "email": "erwinputramarpaung@students.polmed.ac.id",
     "semester": 5,
     "majoring": "Sistem Informasi",
     "interest": "Data Science & Data Analysis",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 21
    },
    {
     "fullname": "RAYHAN DWI PERMANA",
     "email": "rayhandwipermana@students.polmed.ac.id",
     "semester": 8,
     "majoring": "Sistem Informasi",
     "interest": "Data Science & Data Analysis",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 20
    },
    {
     "fullname": "RIVALDI",
     "email": "rivaldi@students.polmed.ac.id",
     "semester": 2,
     "majoring": "Digital Marketing",
     "interest": "Digital Marketing",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 22
    },
    {
     "fullname": "MAHMUD SALEH HARAHAP",
     "email": "mahmudsalehharahap@students.polmed.ac.id",
     "semester": 6,
     "majoring": "Digital Business & Marketing",
     "interest": "Digital Marketing",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 18
    },
    {
     "fullname": "YUHDI YAHDI",
     "email": "yuhdiyahdi@students.polmed.ac.id",
     "semester": 1,
     "majoring": "Digital Business & Marketing",
     "interest": "Digital Marketing",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 18
    },
    {
     "fullname": "FITRA ANSYARI IFRON",
     "email": "fitraansyariifron@students.polmed.ac.id",
     "semester": 7,
     "majoring": "Digital Business Technology",
     "interest": "Digital Marketing",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 20
    },
    {
     "fullname": "EMIA DATITA BR SINULINGGA",
     "email": "emiadatitabr@students.polmed.ac.id",
     "semester": 4,
     "majoring": "Bisnis Digital",
     "interest": "Digital Marketing",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 19
    },
    {
     "fullname": "NURUL AZIZAH",
     "email": "nurulazizah@students.polmed.ac.id",
     "semester": 3,
     "majoring": "Digital Marketing",
     "interest": "Digital Marketing",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 20
    },
    {
     "fullname": "FAJAR BIMA SAKTI",
     "email": "fajarbimasakti@students.polmed.ac.id",
     "semester": 5,
     "majoring": "Digital Marketing",
     "interest": "Digital Marketing",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 18
    },
    {
     "fullname": "ARI ANTONIUS SIBARANI",
     "email": "ariantoniussibarani@students.polmed.ac.id",
     "semester": 8,
     "majoring": "Digital Marketing",
     "interest": "Digital Marketing",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 18
    },
    {
     "fullname": "FELIX APRIANTO ARITONANG",
     "email": "felixapriantoaritonang@students.polmed.ac.id",
     "semester": 2,
     "majoring": "Ilmu Ekonomi",
     "interest": "Economics & Finance",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 20
    },
    {
     "fullname": "QADHAFY MUHAMMAD TERA",
     "email": "qadhafymuhammadtera@students.polmed.ac.id",
     "semester": 6,
     "majoring": "Ilmu Ekonomi",
     "interest": "Economics & Finance",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 21
    },
    {
     "fullname": "M.FARIDH",
     "email": "m.faridh@students.polmed.ac.id",
     "semester": 1,
     "majoring": "Ilmu Ekonomi",
     "interest": "Economics & Finance",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 19
    },
    {
     "fullname": "ATIKAH WIDYA",
     "email": "atikahwidya@students.polmed.ac.id",
     "semester": 7,
     "majoring": "Ilmu Ekonomi",
     "interest": "Economics & Finance",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 19
    },
    {
     "fullname": "INDAH RITONGA",
     "email": "indahritonga@students.polmed.ac.id",
     "semester": 4,
     "majoring": "Ilmu Ekonomi",
     "interest": "Economics & Finance",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 19
    },
    {
     "fullname": "GILANG ADITIA",
     "email": "gilangaditia@students.polmed.ac.id",
     "semester": 3,
     "majoring": "Ilmu Ekonomi",
     "interest": "Economics & Finance",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 18
    },
    {
     "fullname": "IKE FADILLAH",
     "email": "ikefadillah@students.polmed.ac.id",
     "semester": 5,
     "majoring": "Ilmu Ekonomi",
     "interest": "Economics & Finance",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 18
    },
    {
     "fullname": "MUHAMMAD RIZKY LUBIS",
     "email": "muhammadrizkylubis@students.polmed.ac.id",
     "semester": 8,
     "majoring": "Ilmu Ekonomi",
     "interest": "Economics & Finance",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 20
    },
    {
     "fullname": "AUDI IKHSAN",
     "email": "audiikhsan@students.polmed.ac.id",
     "semester": 2,
     "majoring": "Ilmu Ekonomi",
     "interest": "Economics & Finance",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 18
    },
    {
     "fullname": "AFIFAH ZAHRA DAULAY",
     "email": "afifahzahradaulay@students.polmed.ac.id",
     "semester": 6,
     "majoring": "Akuntansi",
     "interest": "Economics & Finance",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 18
    },
    {
     "fullname": "ANIQ ARDABILI",
     "email": "aniqardabili@students.polmed.ac.id",
     "semester": 1,
     "majoring": "Akuntansi",
     "interest": "Economics & Finance",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 21
    },
    {
     "fullname": "MUHAMMAD AGUNG PRAMUDIA",
     "email": "muhammadagungpramudia@students.polmed.ac.id",
     "semester": 7,
     "majoring": "Akuntansi",
     "interest": "Economics & Finance",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 18
    },
    {
     "fullname": "AYU ANDINI",
     "email": "ayuandini@students.polmed.ac.id",
     "semester": 4,
     "majoring": "Akuntansi",
     "interest": "Economics & Finance",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 19
    },
    {
     "fullname": "FIFI FITRIANTI",
     "email": "fififitrianti@students.polmed.ac.id",
     "semester": 3,
     "majoring": "Akuntansi",
     "interest": "Economics & Finance",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 18
    },
    {
     "fullname": "M.RANDI ARIFA",
     "email": "m.randiarifa@students.polmed.ac.id",
     "semester": 5,
     "majoring": "Akuntansi",
     "interest": "Economics & Finance",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 20
    },
    {
     "fullname": "WAN RIZKY RAFLY ALAMSYAH",
     "email": "wanrizkyrafly@students.polmed.ac.id",
     "semester": 8,
     "majoring": "Akuntansi",
     "interest": "Economics & Finance",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 21
    },
    {
     "fullname": "DERIUS ANDRIANUS NAINGGOLAN",
     "email": "deriusandrianusnainggolan@students.polmed.ac.id",
     "semester": 2,
     "majoring": "Akuntansi",
     "interest": "Economics & Finance",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 18
    },
    {
     "fullname": "ANDIKA WARDANA",
     "email": "andikawardana@students.polmed.ac.id",
     "semester": 6,
     "majoring": "Manajemen",
     "interest": "Economics & Finance",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 19
    },
    {
     "fullname": "MUHAMMAD DIO PRATAMA",
     "email": "muhammaddiopratama@students.polmed.ac.id",
     "semester": 1,
     "majoring": "Manajemen",
     "interest": "Economics & Finance",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 18
    },
    {
     "fullname": "PARIS ATAURRAZAQ",
     "email": "parisataurrazaq@students.polmed.ac.id",
     "semester": 7,
     "majoring": "Manajemen",
     "interest": "Economics & Finance",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 22
    },
    {
     "fullname": "MUHAMMAD FARID",
     "email": "muhammadfarid@students.polmed.ac.id",
     "semester": 4,
     "majoring": "Manajemen",
     "interest": "Economics & Finance",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 19
    },
    {
     "fullname": "BAYU SETIAWAN",
     "email": "bayusetiawan@students.polmed.ac.id",
     "semester": 3,
     "majoring": "Manajemen",
     "interest": "Economics & Finance",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 21
    },
    {
     "fullname": "ALFIAN MAULANA",
     "email": "alfianmaulana@students.polmed.ac.id",
     "semester": 5,
     "majoring": "Manajemen",
     "interest": "Economics & Finance",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 19
    },
    {
     "fullname": "RYAN KUSUMA",
     "email": "ryankusuma@students.polmed.ac.id",
     "semester": 8,
     "majoring": "Manajemen",
     "interest": "Economics & Finance",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 19
    },
    {
     "fullname": "AMANDA SYAHFITRI",
     "email": "amandasyahfitri@students.polmed.ac.id",
     "semester": 2,
     "majoring": "Manajemen",
     "interest": "Economics & Finance",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 18
    },
    {
     "fullname": "AYU PRATIWI",
     "email": "ayupratiwi@students.polmed.ac.id",
     "semester": 6,
     "majoring": "Keuangan",
     "interest": "Economics & Finance",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 19
    },
    {
     "fullname": "MUHAMMAD ATHALLAH ZUHDI",
     "email": "muhammadathallahzuhdi@students.polmed.ac.id",
     "semester": 1,
     "majoring": "Keuangan",
     "interest": "Economics & Finance",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 22
    },
    {
     "fullname": "STEVI SIMANGUNSONG",
     "email": "stevisimangunsong@students.polmed.ac.id",
     "semester": 7,
     "majoring": "Keuangan",
     "interest": "Economics & Finance",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 18
    },
    {
     "fullname": "SITI ARIANI",
     "email": "sitiariani@students.polmed.ac.id",
     "semester": 4,
     "majoring": "Keuangan",
     "interest": "Economics & Finance",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 21
    },
    {
     "fullname": "MUHAMMAD ARI HAFID",
     "email": "muhammadarihafid@students.polmed.ac.id",
     "semester": 3,
     "majoring": "Keuangan",
     "interest": "Economics & Finance",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 21
    },
    {
     "fullname": "REZA ADILANDA",
     "email": "rezaadilanda@students.polmed.ac.id",
     "semester": 5,
     "majoring": "Keuangan",
     "interest": "Economics & Finance",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 18
    },
    {
     "fullname": "ALYA NADELA AMANDA",
     "email": "alyanadelaamanda@students.polmed.ac.id",
     "semester": 8,
     "majoring": "Keuangan",
     "interest": "Economics & Finance",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 18
    },
    {
     "fullname": "AHMED KHIYARI SHOLIHIN",
     "email": "ahmedkhiyarisholihin@students.polmed.ac.id",
     "semester": 2,
     "majoring": "Keuangan",
     "interest": "Economics & Finance",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 20
    },
    {
     "fullname": "MIRNA LEVINA MAHA",
     "email": "mirnalevinamaha@students.polmed.ac.id",
     "semester": 6,
     "majoring": "Islamic Finance",
     "interest": "Economics & Finance",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 18
    },
    {
     "fullname": "DINA SYARIFAH SALSABILA",
     "email": "dinasyarifahsalsabila@students.polmed.ac.id",
     "semester": 1,
     "majoring": "Islamic Finance",
     "interest": "Economics & Finance",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 21
    },
    {
     "fullname": "THOUFAN DIVA ADITAMAIA PINEM",
     "email": "thoufandivaaditamaia@students.polmed.ac.id",
     "semester": 7,
     "majoring": "Islamic Finance",
     "interest": "Economics & Finance",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 22
    },
    {
     "fullname": "MALVIN ABRAR HARAHAP",
     "email": "malvinabrarharahap@students.polmed.ac.id",
     "semester": 4,
     "majoring": "Islamic Finance",
     "interest": "Economics & Finance",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 20
    },
    {
     "fullname": "NICKO FIRMANSYAH",
     "email": "nickofirmansyah@students.polmed.ac.id",
     "semester": 3,
     "majoring": "Islamic Finance",
     "interest": "Economics & Finance",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 20
    },
    {
     "fullname": "TIARA PADMA BALQIS HASIBUAN",
     "email": "tiarapadmabalqis@students.polmed.ac.id",
     "semester": 5,
     "majoring": "Islamic Finance",
     "interest": "Economics & Finance",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 19
    },
    {
     "fullname": "LIZA INDAH FADILLAH",
     "email": "lizaindahfadillah@students.polmed.ac.id",
     "semester": 8,
     "majoring": "Ilmu Komunikasi",
     "interest": "Communication",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 19
    },
    {
     "fullname": "REYHAN DIKHA",
     "email": "reyhandikha@students.polmed.ac.id",
     "semester": 2,
     "majoring": "Ilmu Komunikasi",
     "interest": "Communication",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 19
    },
    {
     "fullname": "FAKHRUSY HASSAN SIREGAR",
     "email": "fakhrusyhassansiregar@students.polmed.ac.id",
     "semester": 6,
     "majoring": "Ilmu Komunikasi",
     "interest": "Communication",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 21
    },
    {
     "fullname": "ALFAN SURI",
     "email": "alfansuri@students.polmed.ac.id",
     "semester": 1,
     "majoring": "Ilmu Komunikasi",
     "interest": "Communication",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 22
    },
    {
     "fullname": "MUHAMMAD DAFA FAHLEVI",
     "email": "muhammaddafafahlevi@students.polmed.ac.id",
     "semester": 7,
     "majoring": "Ilmu Komunikasi",
     "interest": "Communication",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 18
    },
    {
     "fullname": "MUHAMMAD TAUFIQ MANDILI NASUTION",
     "email": "muhammadtaufiqmandili@students.polmed.ac.id",
     "semester": 4,
     "majoring": "Ilmu Komunikasi",
     "interest": "Communication",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 21
    },
    {
     "fullname": "INDAH RAMADHANI MUNTHE",
     "email": "indahramadhanimunthe@students.polmed.ac.id",
     "semester": 3,
     "majoring": "Ilmu Komunikasi",
     "interest": "Communication",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 22
    },
    {
     "fullname": "PUTRI SYAHARANI NABILA LUBIS",
     "email": "putrisyaharaninabila@students.polmed.ac.id",
     "semester": 5,
     "majoring": "Ilmu Komunikasi",
     "interest": "Communication",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 19
    },
    {
     "fullname": "SISKA IMELDA NDURU",
     "email": "siskaimeldanduru@students.polmed.ac.id",
     "semester": 8,
     "majoring": "Ilmu Komunikasi",
     "interest": "Communication",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 18
    },
    {
     "fullname": "DIA RAHAYU",
     "email": "diarahayu@students.polmed.ac.id",
     "semester": 2,
     "majoring": "Ilmu Komunikasi",
     "interest": "Communication",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 20
    },
    {
     "fullname": "RACHEL DESY MUTIARA SIPAHUTAR",
     "email": "racheldesymutiarasipahutar@students.polmed.ac.id",
     "semester": 6,
     "majoring": "Ilmu Komunikasi",
     "interest": "Communication",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 22
    },
    {
     "fullname": "MULIANA ENDRAHA",
     "email": "mulianaendraha@students.polmed.ac.id",
     "semester": 1,
     "majoring": "Ilmu Komunikasi",
     "interest": "Communication",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 19
    },
    {
     "fullname": "TONY WIJAYA SINAGA",
     "email": "tonywijayasinaga@students.polmed.ac.id",
     "semester": 7,
     "majoring": "Ilmu Komunikasi",
     "interest": "Communication",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 20
    },
    {
     "fullname": "SYAUQI AULIANSYAH",
     "email": "syauqiauliansyah@students.polmed.ac.id",
     "semester": 4,
     "majoring": "Ilmu Komunikasi",
     "interest": "Communication",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 18
    },
    {
     "fullname": "PANGERAN SALOMO SIMARMATA",
     "email": "pangeransalomosimarmata@students.polmed.ac.id",
     "semester": 3,
     "majoring": "Ilmu Komunikasi",
     "interest": "Communication",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 22
    },
    {
     "fullname": "SUCI RAMADHANI",
     "email": "suciramadhani@students.polmed.ac.id",
     "semester": 5,
     "majoring": "Ilmu Komunikasi",
     "interest": "Communication",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 20
    },
    {
     "fullname": "NAIA DAWAMI HAFILLAH",
     "email": "naiadawamihafillah@students.polmed.ac.id",
     "semester": 8,
     "majoring": "Ilmu Komunikasi",
     "interest": "Communication",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 21
    },
    {
     "fullname": "DEBY YOLA EMLEGINTA BR SEMBIRING",
     "email": "debyyolaemlegintabrsembiring@students.polmed.ac.id",
     "semester": 2,
     "majoring": "Ilmu Komunikasi",
     "interest": "Communication",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 21
    },
    {
     "fullname": "MIRANDA SIHOMBING",
     "email": "mirandasihombing@students.polmed.ac.id",
     "semester": 6,
     "majoring": "Ilmu Komunikasi",
     "interest": "Communication",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 19
    },
    {
     "fullname": "VINNA WIJAYANTI",
     "email": "vinnawijayanti@students.polmed.ac.id",
     "semester": 1,
     "majoring": "Public Relations",
     "interest": "Communication",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 22
    },
    {
     "fullname": "RADJA JEREMY SIAGIAN",
     "email": "radjajeremysiagian@students.polmed.ac.id",
     "semester": 7,
     "majoring": "Public Relations",
     "interest": "Communication",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 19
    },
    {
     "fullname": "WESLY CHRISTIAN SINAMBELA",
     "email": "weslychristiansinambela@students.polmed.ac.id",
     "semester": 4,
     "majoring": "Public Relations",
     "interest": "Communication",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 19
    },
    {
     "fullname": "MUHAMMAD BINTANG SYA'BAN",
     "email": "muhammadbintangsya'ban@students.polmed.ac.id",
     "semester": 3,
     "majoring": "Public Relations",
     "interest": "Communication",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 21
    },
    {
     "fullname": "PUTRI MEILANI HUTAGALUNG",
     "email": "putrimeilanihutagalung@students.polmed.ac.id",
     "semester": 5,
     "majoring": "Public Relations",
     "interest": "Communication",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 18
    },
    {
     "fullname": "DEO DEARDO MUNTHE",
     "email": "deodeardomunthe@students.polmed.ac.id",
     "semester": 8,
     "majoring": "Public Relations",
     "interest": "Communication",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 18
    },
    {
     "fullname": "MELPA YURIZA BR MILALA",
     "email": "melpayurizabrmilala@students.polmed.ac.id",
     "semester": 2,
     "majoring": "Public Relations",
     "interest": "Communication",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 18
    },
    {
     "fullname": "NURUL AINI ASLAN",
     "email": "nurulainiaslan@students.polmed.ac.id",
     "semester": 6,
     "majoring": "Public Relations",
     "interest": "Communication",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 18
    },
    {
     "fullname": "ANJULINA SIDAURUK",
     "email": "anjulinasidauruk@students.polmed.ac.id",
     "semester": 1,
     "majoring": "Public Relations",
     "interest": "Communication",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 22
    },
    {
     "fullname": "MISAEL MAHANAIM BANGUN",
     "email": "misaelmahanaimbangun@students.polmed.ac.id",
     "semester": 7,
     "majoring": "Public Relations",
     "interest": "Communication",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 21
    },
    {
     "fullname": "REGGY DIO PRATAMA",
     "email": "reggydiopratama@students.polmed.ac.id",
     "semester": 4,
     "majoring": "Public Relations",
     "interest": "Communication",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 18
    },
    {
     "fullname": "BIMO PUSPITO",
     "email": "bimopuspito@students.polmed.ac.id",
     "semester": 3,
     "majoring": "Public Relations",
     "interest": "Communication",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 18
    },
    {
     "fullname": "FAJAR MAULANA NUGRAHA",
     "email": "fajarmaulananugraha@students.polmed.ac.id",
     "semester": 5,
     "majoring": "Public Relations",
     "interest": "Communication",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 21
    },
    {
     "fullname": "PUTRI HANDAYANI",
     "email": "putrihandayani@students.polmed.ac.id",
     "semester": 8,
     "majoring": "Public Relations",
     "interest": "Communication",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 18
    },
    {
     "fullname": "AFRYAN PRATAMA",
     "email": "afryanpratama@students.polmed.ac.id",
     "semester": 2,
     "majoring": "Public Relations",
     "interest": "Communication",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 21
    },
    {
     "fullname": "HYAS YOSUA HUTAGALUNG",
     "email": "hyasyosuahutagalung@students.polmed.ac.id",
     "semester": 6,
     "majoring": "Broadcasting",
     "interest": "Communication",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 21
    },
    {
     "fullname": "HANNA LAMSIHAR BUTAR-BUTAR",
     "email": "hannalamsiharbutar-butar@students.polmed.ac.id",
     "semester": 1,
     "majoring": "Broadcasting",
     "interest": "Communication",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 22
    },
    {
     "fullname": "GUSTINA LAFAU",
     "email": "gustinalafau@students.polmed.ac.id",
     "semester": 7,
     "majoring": "Broadcasting",
     "interest": "Communication",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 19
    },
    {
     "fullname": "SANTAFIRA AUREL",
     "email": "santafiraaurel@students.polmed.ac.id",
     "semester": 4,
     "majoring": "Broadcasting",
     "interest": "Communication",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 20
    },
    {
     "fullname": "MUHAMMAD DAFFA RAMADHAN",
     "email": "muhammaddaffaramadhan@students.polmed.ac.id",
     "semester": 3,
     "majoring": "Broadcasting",
     "interest": "Communication",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 21
    },
    {
     "fullname": "MIFTA HULJANNAH",
     "email": "miftahuljannah23@students.polmed.ac.id",
     "semester": 5,
     "majoring": "Broadcasting",
     "interest": "Communication",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 20
    },
    {
     "fullname": "FERNANDO SIMANJUNTAK",
     "email": "fernandosimanjuntak@students.polmed.ac.id",
     "semester": 8,
     "majoring": "Broadcasting",
     "interest": "Communication",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 22
    },
    {
     "fullname": "BAYU BERUTU ",
     "email": "bayuberutu@students.polmed.ac.id",
     "semester": 2,
     "majoring": "Broadcasting",
     "interest": "Communication",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 19
    },
    {
     "fullname": "DANIEL KRISTANTO SIBARANI",
     "email": "danielkristantosibarani@students.polmed.ac.id",
     "semester": 6,
     "majoring": "Broadcasting",
     "interest": "Communication",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 21
    },
    {
     "fullname": "RAFLI MARCOPOLO SIAHAAN",
     "email": "raflimarcopolosiahaan@students.polmed.ac.id",
     "semester": 1,
     "majoring": "Broadcasting",
     "interest": "Communication",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 18
    },
    {
     "fullname": "GUSTIA MUKHAIRANI",
     "email": "gustiamukhairani@students.polmed.ac.id",
     "semester": 7,
     "majoring": "Broadcasting",
     "interest": "Communication",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 20
    },
    {
     "fullname": "HERU HERDIANTO SIHOTANG",
     "email": "heruherdiantosihotang@students.polmed.ac.id",
     "semester": 4,
     "majoring": "Broadcasting",
     "interest": "Communication",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 19
    },
    {
     "fullname": "A.FAHMI EGITA TARIGAN",
     "email": "afahmiegitatarigan@students.polmed.ac.id",
     "semester": 3,
     "majoring": "Broadcasting",
     "interest": "Communication",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 20
    },
    {
     "fullname": "FIRMAN CHRISTIAN PARDEDE",
     "email": "firmanchristianpardede@students.polmed.ac.id",
     "semester": 5,
     "majoring": "Jurnalisme",
     "interest": "Communication",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 18
    },
    {
     "fullname": "KEVIN KRISTIAN PAKPAHAN",
     "email": "kevinkristianpakpahan@students.polmed.ac.id",
     "semester": 8,
     "majoring": "Jurnalisme",
     "interest": "Communication",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 18
    },
    {
     "fullname": "T. NEO QUINN",
     "email": "tneoquinn@students.polmed.ac.id",
     "semester": 2,
     "majoring": "Jurnalisme",
     "interest": "Communication",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 19
    },
    {
     "fullname": "JOSUA LEONARD GINTING",
     "email": "josualeonardginting@students.polmed.ac.id",
     "semester": 6,
     "majoring": "Jurnalisme",
     "interest": "Communication",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 18
    },
    {
     "fullname": "GLORYA CAHAYA TARIHORAN ",
     "email": "gloryacahayatarihoran@students.polmed.ac.id",
     "semester": 1,
     "majoring": "Jurnalisme",
     "interest": "Communication",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 18
    },
    {
     "fullname": "ADITYA SURYA PUTRA",
     "email": "adityasuryaputra@students.polmed.ac.id",
     "semester": 7,
     "majoring": "Jurnalisme",
     "interest": "Communication",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 18
    },
    {
     "fullname": "KEVIN RAYNALDI SITANGGANG",
     "email": "kevinraynaldisitanggang@students.polmed.ac.id",
     "semester": 4,
     "majoring": "Jurnalisme",
     "interest": "Communication",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 18
    },
    {
     "fullname": "ANNISA ALLIYA",
     "email": "annisaalliya@students.polmed.ac.id",
     "semester": 3,
     "majoring": "Jurnalisme",
     "interest": "Communication",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 19
    },
    {
     "fullname": "AFIIF AZIS SIRAIT",
     "email": "afiifazissirait@students.polmed.ac.id",
     "semester": 5,
     "majoring": "Jurnalisme",
     "interest": "Communication",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 22
    },
    {
     "fullname": "DANIEL LUMBAN GAOL",
     "email": "daniellumbangaol@students.polmed.ac.id",
     "semester": 8,
     "majoring": "Jurnalisme",
     "interest": "Communication",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 21
    },
    {
     "fullname": "ANJU VALENTINO SITOHANG",
     "email": "anjuvalentinositohang@students.polmed.ac.id",
     "semester": 2,
     "majoring": "Jurnalisme",
     "interest": "Communication",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 21
    },
    {
     "fullname": "FANNY NAILATUL IZZAH",
     "email": "fannynailatulizzah@students.polmed.ac.id",
     "semester": 6,
     "majoring": "Jurnalisme",
     "interest": "Communication",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 21
    },
    {
     "fullname": "JOHANS TRIO APRILIAN SINULINGGA ",
     "email": "johanstrioapriliansinulingga@students.polmed.ac.id",
     "semester": 1,
     "majoring": "Jurnalisme",
     "interest": "Communication",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 19
    },
    {
     "fullname": "MUHAMMAD RAFFI YOGA",
     "email": "muhammadraffiyoga@students.polmed.ac.id",
     "semester": 7,
     "majoring": "Sastra Indonesia",
     "interest": "Language",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 21
    },
    {
     "fullname": "FADLAN MULIA NASUTION ",
     "email": "fadlanmulianasution@students.polmed.ac.id",
     "semester": 4,
     "majoring": "Sastra Indonesia",
     "interest": "Language",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 18
    },
    {
     "fullname": "THESALONIKA CORNELIA PUTRI MONTEIRO",
     "email": "thesalonikacorneliaputrimonteiro@students.polmed.ac.id",
     "semester": 3,
     "majoring": "Sastra Indonesia",
     "interest": "Language",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 20
    },
    {
     "fullname": "MARKUS AGUSTIAN SILITONGA ",
     "email": "markusagustiansilitonga@students.polmed.ac.id",
     "semester": 5,
     "majoring": "Sastra Indonesia",
     "interest": "Language",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 19
    },
    {
     "fullname": "IMMANUEL TUMANGGER",
     "email": "immanueltumangger@students.polmed.ac.id",
     "semester": 8,
     "majoring": "Sastra Indonesia",
     "interest": "Language",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 20
    },
    {
     "fullname": "AQSA MADINA",
     "email": "aqsamadina@students.polmed.ac.id",
     "semester": 2,
     "majoring": "Sastra Indonesia",
     "interest": "Language",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 21
    },
    {
     "fullname": "RIZKI SAKINAH SARI",
     "email": "rizkisakinahsari@students.polmed.ac.id",
     "semester": 6,
     "majoring": "Sastra Indonesia",
     "interest": "Language",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 20
    },
    {
     "fullname": "NAYLA NAZWA ALIYA",
     "email": "naylanazwaaliya@students.polmed.ac.id",
     "semester": 1,
     "majoring": "Sastra Indonesia",
     "interest": "Language",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 21
    },
    {
     "fullname": "ALIFIAH MEI HIDAYANTHY",
     "email": "alifiahmeihidayanthy@students.polmed.ac.id",
     "semester": 7,
     "majoring": "Sastra Indonesia",
     "interest": "Language",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 19
    },
    {
     "fullname": "AHMAD ARDIANSYAH DAULAY",
     "email": "ahmadardiansyahdaulay@students.polmed.ac.id",
     "semester": 4,
     "majoring": "Sastra Indonesia",
     "interest": "Language",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 18
    },
    {
     "fullname": "SEAN MARCEL BAGINDA LUMBAN BATU",
     "email": "seanmarcelbagindalumbanbatu@students.polmed.ac.id",
     "semester": 3,
     "majoring": "Sastra Indonesia",
     "interest": "Language",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 20
    },
    {
     "fullname": "ABDUL HABIB NASUTION",
     "email": "abdulhabibnasution@students.polmed.ac.id",
     "semester": 5,
     "majoring": "Sastra Indonesia",
     "interest": "Language",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 22
    },
    {
     "fullname": "BUNGA NAZWA AULIA",
     "email": "bunganazwaaulia@students.polmed.ac.id",
     "semester": 8,
     "majoring": "Sastra Indonesia",
     "interest": "Language",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 21
    },
    {
     "fullname": "ANGGI AULIYA NATASYA SIBURIAN ",
     "email": "anggiauliyanatasyasiburian@students.polmed.ac.id",
     "semester": 2,
     "majoring": "Sastra Indonesia",
     "interest": "Language",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 19
    },
    {
     "fullname": "AYU ANNISA BR SITEPU ",
     "email": "ayuannisabrsitepu@students.polmed.ac.id",
     "semester": 6,
     "majoring": "Sastra Indonesia",
     "interest": "Language",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 20
    },
    {
     "fullname": "EDI ELKANANTA S MELIALA",
     "email": "edielkanantasmeliala@students.polmed.ac.id",
     "semester": 1,
     "majoring": "Sastra Indonesia",
     "interest": "Language",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 21
    },
    {
     "fullname": "EDDIES ADELIA BR PANDIA",
     "email": "eddiesadeliabrpandia@students.polmed.ac.id",
     "semester": 7,
     "majoring": "Bahasa Inggris",
     "interest": "Language",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 19
    },
    {
     "fullname": "M. FAREL ADIB TITAN",
     "email": "mfareladibtitan@students.polmed.ac.id",
     "semester": 4,
     "majoring": "Bahasa Inggris",
     "interest": "Language",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 18
    },
    {
     "fullname": "JULIO SHESARRIO SITORUS",
     "email": "julioshesarriositorus@students.polmed.ac.id",
     "semester": 3,
     "majoring": "Bahasa Inggris",
     "interest": "Language",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 22
    },
    {
     "fullname": "JEREMI TAMBA TUA SIREGAR",
     "email": "jeremitambatuasiregar@students.polmed.ac.id",
     "semester": 5,
     "majoring": "Bahasa Inggris",
     "interest": "Language",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 20
    },
    {
     "fullname": "RESTU WIRATAMA",
     "email": "restuwiratama@students.polmed.ac.id",
     "semester": 8,
     "majoring": "Bahasa Inggris",
     "interest": "Language",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 20
    },
    {
     "fullname": "ADITIA HUTASOIT",
     "email": "aditiahutasoit@students.polmed.ac.id",
     "semester": 2,
     "majoring": "Bahasa Inggris",
     "interest": "Language",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 22
    },
    {
     "fullname": "RAHMAWANA DAMANIK",
     "email": "rahmawanadamanik@students.polmed.ac.id",
     "semester": 6,
     "majoring": "Bahasa Inggris",
     "interest": "Language",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 21
    },
    {
     "fullname": "FAISAL SATRIO SIMATUPANG",
     "email": "faisalsatriosimatupang@students.polmed.ac.id",
     "semester": 1,
     "majoring": "Bahasa Inggris",
     "interest": "Language",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 18
    },
    {
     "fullname": "DANIEL JONATHAN THEO BANGUN",
     "email": "danieljonathantheobangun@students.polmed.ac.id",
     "semester": 7,
     "majoring": "Bahasa Inggris",
     "interest": "Language",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 19
    },
    {
     "fullname": "REVA AMALIA PUTRI",
     "email": "revaamaliaputri@students.polmed.ac.id",
     "semester": 4,
     "majoring": "Bahasa Inggris",
     "interest": "Language",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 18
    },
    {
     "fullname": "LUKMAN HAKIM",
     "email": "lukmanhakim@students.polmed.ac.id",
     "semester": 3,
     "majoring": "Bahasa Inggris",
     "interest": "Language",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 22
    },
    {
     "fullname": "HANDIKA COVANDER SIMORANGKIR",
     "email": "handikacovandersimorangkir@students.polmed.ac.id",
     "semester": 5,
     "majoring": "Bahasa Inggris",
     "interest": "Language",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 19
    },
    {
     "fullname": "MUHAMMAD ALDO SIREGAR",
     "email": "muhammadaldosiregar@students.polmed.ac.id",
     "semester": 8,
     "majoring": "Bahasa Inggris",
     "interest": "Language",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 19
    },
    {
     "fullname": "TAMPAK ABED NEGO HUTAJULU",
     "email": "tampakabednegohutajulu@students.polmed.ac.id",
     "semester": 2,
     "majoring": "Bahasa Inggris",
     "interest": "Language",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 22
    },
    {
     "fullname": "DEWI B.C. SIRAIT",
     "email": "dewibcsirait@students.polmed.ac.id",
     "semester": 6,
     "majoring": "Bahasa Inggris",
     "interest": "Language",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 20
    },
    {
     "fullname": "LAUINA TRIANA BR SINGARIMBUN",
     "email": "lauinatrianabrsingarimbun@students.polmed.ac.id",
     "semester": 1,
     "majoring": "Bahasa Inggris",
     "interest": "Language",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 21
    },
    {
     "fullname": "GILANG ANDIKA",
     "email": "gilangandika@students.polmed.ac.id",
     "semester": 7,
     "majoring": "Linguistik",
     "interest": "Language",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 22
    },
    {
     "fullname": "YOHANNES LEO ALFREDO SITANGGANG",
     "email": "yohannesleoalfredositanggang@students.polmed.ac.id",
     "semester": 4,
     "majoring": "Linguistik",
     "interest": "Language",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 18
    },
    {
     "fullname": "ARYA AL HAFID",
     "email": "aryaalhafid@students.polmed.ac.id",
     "semester": 3,
     "majoring": "Linguistik",
     "interest": "Language",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 18
    },
    {
     "fullname": "SALSA NATASYA",
     "email": "salsanatasya@students.polmed.ac.id",
     "semester": 5,
     "majoring": "Linguistik",
     "interest": "Language",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 20
    },
    {
     "fullname": "REZA HEVENTA GINTING",
     "email": "rezaheventaginting@students.polmed.ac.id",
     "semester": 8,
     "majoring": "Linguistik",
     "interest": "Language",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 19
    },
    {
     "fullname": "RIAN RAMADHAN SIMANUNGKALIT",
     "email": "rianramadhansimanungkalit@students.polmed.ac.id",
     "semester": 2,
     "majoring": "Linguistik",
     "interest": "Language",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 22
    },
    {
     "fullname": "AMANDA ARLIN",
     "email": "amandaarlin@students.polmed.ac.id",
     "semester": 6,
     "majoring": "Linguistik",
     "interest": "Language",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 19
    },
    {
     "fullname": "FRISCIELLA SITORUS",
     "email": "frisciellasitorus@students.polmed.ac.id",
     "semester": 1,
     "majoring": "Linguistik",
     "interest": "Language",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 22
    },
    {
     "fullname": "RIDHO DAVRY KURNIAWAN",
     "email": "ridhodavrykurniawan@students.polmed.ac.id",
     "semester": 7,
     "majoring": "Linguistik",
     "interest": "Language",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 21
    },
    {
     "fullname": "MARIO CHRISTIAN SIMANJUNTAK",
     "email": "mariochristiansimanjuntak@students.polmed.ac.id",
     "semester": 4,
     "majoring": "Linguistik",
     "interest": "Language",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 22
    },
    {
     "fullname": "M. ROFIQ AZIZI",
     "email": "mrofiqazizi@students.polmed.ac.id",
     "semester": 3,
     "majoring": "Linguistik",
     "interest": "Language",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 20
    },
    {
     "fullname": "NAPIT SAPUTRA SIMANJUNTAK",
     "email": "napitsaputrasimanjuntak@students.polmed.ac.id",
     "semester": 5,
     "majoring": "Linguistik",
     "interest": "Language",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 21
    },
    {
     "fullname": "ANGELA APRILYA BR GINTING",
     "email": "angelaaprilyabrginting@students.polmed.ac.id",
     "semester": 8,
     "majoring": "Linguistik",
     "interest": "Language",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 21
    },
    {
     "fullname": "AIDAN FAHMI",
     "email": "aidanfahmi@students.polmed.ac.id",
     "semester": 2,
     "majoring": "Linguistik",
     "interest": "Language",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 18
    },
    {
     "fullname": "NAZWA IRWANDA PUTRI",
     "email": "nazwairwandaputri@students.polmed.ac.id",
     "semester": 6,
     "majoring": "Linguistik",
     "interest": "Language",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 20
    },
    {
     "fullname": "GREGORIUS MOSES AFERLIN HUTAURUK ",
     "email": "gregoriusmosesaferlinhutauruk@students.polmed.ac.id",
     "semester": 1,
     "majoring": "Linguistik",
     "interest": "Language",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 18
    },
    {
     "fullname": "NATANAEL HUTABARAT",
     "email": "natanaelhutabarat@students.polmed.ac.id",
     "semester": 7,
     "majoring": "Bahasa Asing",
     "interest": "Language",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 22
    },
    {
     "fullname": "MUHAMMAD IKHSAN FADILLAH",
     "email": "muhammadikhsanfadillah@students.polmed.ac.id",
     "semester": 4,
     "majoring": "Bahasa Asing",
     "interest": "Language",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 18
    },
    {
     "fullname": "NIKO TIMOTEUS SINAGA",
     "email": "nikotimoteussinaga@students.polmed.ac.id",
     "semester": 3,
     "majoring": "Bahasa Asing",
     "interest": "Language",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 21
    },
    {
     "fullname": "RAHMAD JULIANDANA S. DEPARI",
     "email": "rahmadjuliandanasdepari@students.polmed.ac.id",
     "semester": 5,
     "majoring": "Bahasa Asing",
     "interest": "Language",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 21
    },
    {
     "fullname": "SHELMU LAURIS KHALFANI",
     "email": "shelmulauriskhalfani@students.polmed.ac.id",
     "semester": 8,
     "majoring": "Bahasa Asing",
     "interest": "Language",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 22
    },
    {
     "fullname": "DUTA PERDANA",
     "email": "dutaperdana@students.polmed.ac.id",
     "semester": 2,
     "majoring": "Bahasa Asing",
     "interest": "Language",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 20
    },
    {
     "fullname": "WIANDA AULIA AZZAHRA",
     "email": "wiandaauliaazzahra@students.polmed.ac.id",
     "semester": 6,
     "majoring": "Bahasa Asing",
     "interest": "Language",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 19
    },
    {
     "fullname": "REINHARD MARCELINO SITOMPUL",
     "email": "reinhardmarcelinositompul@students.polmed.ac.id",
     "semester": 1,
     "majoring": "Bahasa Asing",
     "interest": "Language",
     "password": "$2b$10$hxua5Wo49dXahyNmzcZiU.t0QiXJ6akfi\/L6A2Hp1aWU1Xfi1FWWa",
     "age": 19
    }
   ]

function insertUsers({ fullname, email, password }) {
    return db
        .from('users')
        .insert([{ fullname: fullname, email: email, password: password }])
}

function updateMajoringAndAge({ id, majoring, age }) {
    return db
        .from('users')
        .update({ majoring: majoring, age: age })
        .eq('id', id)
}

function getUserById(id) {
    return db
        .from('users')
        .select('*')
        .eq('id', id)
}

function getUsers() {
    return db
        .from('users')
        .select('*')
}

function getUserByEmail(email) {
    return db
        .from('users')
        .select('*')
        .eq('email', email)
}

function updateUserToken({ id, refreshToken }) {
    return db
        .from('users')
        .update({ refresh_token: refreshToken })
        .eq('id', id)
}


function getUserByRefreshToken(refreshToken) {
    return db
        .from('users')
        .select('*')
        .eq('refresh_token', refreshToken)
}

function insertUserRating({ user_id, course_id, user_rating }) {
    return db
        .from('user_rating')
        .insert([{ user_id: user_id, course_id: course_id, user_rating: user_rating }])

}

function getUserRating() {
    return db
        .from('user_rating')
        .select('*')
}

const UserModel = {
    insertUsers,
    getUsers,
    getUserByEmail,
    getUserByRefreshToken,
    updateUserToken,
    getUserById,
    updateMajoringAndAge,
    insertUserRating,
    getUserRating
}


export default UserModel;
