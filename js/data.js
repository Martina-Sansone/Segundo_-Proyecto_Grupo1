const juegos = JSON.parse(localStorage.getItem('juegos')) || []

if (juegos.length === 0) {

    const juegosObj = [
        {
            id: 1,
            nombre: "Fortnite",
            precio: "$0,00",
            img: "https://i.postimg.cc/qR2wwSdJ/img1.jpg",
            sinopsis: "Fortnite es un juego de batalla real en línea donde 100 jugadores luchan por ser el último en pie.",
            imgCarrousel: {
                img1: "https://i.postimg.cc/sghbbV7y/1366-2000.jpg",
                img2: "https://i.postimg.cc/Lskw6Nxb/fortnite-battle-royale-9.jpg",
                img3: "https://i.postimg.cc/Xv6tbTk5/fortnite-grind-rails-1920x1080-cbdee6a21adf.jpg",
            },
            edad: {
                categoria: "Teen",
                descripcion: "Content is generally suitable for ages 13 and up. May contain violence, suggestive themes, crude humor, minimal blood, simulated gambling and/or infrequent use of strong language.",
                edadImg: "https://www.globalratings.com/images/ESRB_T_68.png"
            },
            logo: "https://i.postimg.cc/DwgNPybz/logo1.png",
            reembolso: "Disponible",
            desarrolladora: "Epic Games",
          
        },
        {
            id: 2,
            nombre: "Rocket League",
            precio: "$19.99",
            img: "https://i.postimg.cc/HxT8Ghys/img2.jpg",
            sinopsis: "Rocket League combina fútbol con vehículos para crear una experiencia única y emocionante.",
            imgCarrousel: {
                img1: "https://i.postimg.cc/nzzjcwHF/el-auto-del-agente-secreto-mas-famoso-del-cine-llego-a-rocket-league-1440x810-wmk.webp",
                img2: "https://i.postimg.cc/PJvC1pp0/rocket-league-review-e1436834946674.webp",
                img3: "https://i.postimg.cc/4dSKKbdz/rocket-league-time-warp-846x443.jpg",
            },
            edad: {
                categoria: "EVERYONE",
                descripcion: "Content is generally suitable for all ages. May contain minimal cartoon, fantasy or mild violence and/or infrequent use of mild language.",
                edadImg: "https://www.globalratings.com/images/ESRB_E_68.png"
            },
            logo: "https://i.postimg.cc/qR9DvNW1/logo2.png",
            reembolso: "Disponible",
            desarrolladora: "Psyonix",
          
        },
        {
            id: 3,
            nombre: "GTA V",
            precio: "$29.99",
            img: "https://i.postimg.cc/jj0Jc5qf/img3.jpg",
            sinopsis: "Grand Theft Auto V es un juego de acción y aventuras que se desarrolla en un mundo abierto.",
            imgCarrousel: {
                img1: "https://i.postimg.cc/QtdnQN6W/gta-v-portada.jpg",
                img2: "https://i.postimg.cc/C5ZP2Pph/gta-v-trailer-gameplay-es-fr3n-1280.jpg",
                img3: "https://i.postimg.cc/cCV9GRdQ/2019-09-30-product-4-scaled.jpg",
            },
            edad: {
                categoria: "MATURE 17+",
                descripcion: "Content is generally suitable for ages 17 and up. May contain intense violence, blood and gore, sexual content and/or strong language.",
                edadImg: "https://www.globalratings.com/images/ESRB_M_68.png"
            },
            logo: "https://i.postimg.cc/Xv1DtHLS/logo3.png",
            reembolso: "Autoreembolsable",
            desarrolladora: "Rockstar North",
       
        },
        {
            id: 4,
            nombre: "Minecraft",
            precio: "$26.95",
            img: "https://i.postimg.cc/RCQGnkRG/img4.png",
            sinopsis: "Minecraft es un juego de construcción y aventuras con un mundo abierto donde puedes explorar y crear.",
            imgCarrousel: {
                img1: "https://i.postimg.cc/QCj0YDs8/guia-todos-trucos-consejos-minecraft.jpg",
                img2: "https://i.postimg.cc/gj44f7kv/Minecraft-games.jpg",
                img3: "https://i.postimg.cc/J0bt0wBk/450-1000.webp",
            },
            edad: {
                categoria: "EVERYONE",
                descripcion: "Content is generally suitable for all ages. May contain minimal cartoon, fantasy or mild violence and/or infrequent use of mild language.",
                edadImg: "https://www.globalratings.com/images/ESRB_E_68.png"
            },
            logo: "https://i.postimg.cc/WzgWF2vT/logo4.png",
            reembolso: "Autoreembolsable",
            desarrolladora: "Mojang",
       
        },
        {
            id: 5,
            nombre: "League of Legends",
            precio: "Gratis con compras dentro del juego",
            img: "https://i.postimg.cc/kG9cpsnx/img5.jpg",
            sinopsis: "League of Legends es un juego MOBA donde dos equipos compiten para destruir la base del otro.",
            imgCarrousel: {
                img1: "https://i.postimg.cc/KvfBDLRg/league-of-legends-1693381536-154.jpg",
                img2: "https://i.postimg.cc/52tv70CK/league-of-legends-9945-9.jpg",
                img3: "https://i0.wp.com/www.gamerfocus.co/wp-content/uploads/2022/12/League-of-Legends.jpg?resize=740%2C504&ssl=1",
            },
            edad: {
                categoria: "TEEN",
                descripcion: "Content is generally suitable for ages 13 and up. May contain violence, suggestive themes, crude humor, minimal blood, simulated gambling and/or infrequent use of strong language.",
                edadImg: "https://www.globalratings.com/images/ESRB_T_68.png"
            },
            logo: "https://i.postimg.cc/52nPF7ZY/logo5.png",
            reembolso: "No disponible",
            desarrolladora: "Riot Games",
         
        },
        {
            id: 6,
            nombre: "Valorant",
            precio: "Gratis con compras dentro del juego",
            img: "https://i.postimg.cc/7hVV8z6j/img6.jpg",
            sinopsis: "Valorant es un juego de disparos táctico en primera persona con personajes únicos y habilidades.",
            imgCarrousel: {
                img1: "https://i.postimg.cc/yYnpsKSw-/579204024-184280459-1706x960.jpg",
                img2: "https://i.postimg.cc/43GgqsCj/19801.jpg",
                img3: "https://i.postimg.cc/L8LSxhWz/Cul-Reveal-Reactor-A-VALORANT.jpg",
            },
            edad: {
                categoria: "TEEN",
                descripcion: "Content is generally suitable for ages 13 and up. May contain violence, suggestive themes, crude humor, minimal blood, simulated gambling and/or infrequent use of strong language.",
                edadImg: "https://www.globalratings.com/images/ESRB_T_68.png"
            },
            logo: "https://i.postimg.cc/wBjGf8hQ/logo6.png",
            reembolso: "No disponible",
            desarrolladora: "Riot Games",
       
        },
        {
            id: 7,
            nombre: "Dark Souls",
            precio: "$39.99",
            img: "https://i.postimg.cc/Z5gLS4bY/img7.jpg",
            sinopsis: "Dark Souls es un desafiante juego de acción y rol con un mundo oscuro y peligroso.",
            imgCarrousel: {
                img1: "https://i.postimg.cc/wxr3PywP/dark-souls-remastered-disponible-un-dia-antes-en-steam.jpg",
                img2: "https://i.postimg.cc/8c7ccNzt/ss-3a71463e4ccaf28c5c27f6cf8d32a3a125f45404-600x338.jpg",
                img3: "https://i.postimg.cc/yx2dStJB/ss-92b2ba470cbfdb8839b649b3f478e5531dd81a17-600x338.jpg",
            },
            edad: {
                categoria: "MATURE 17+",
                descripcion: "Content is generally suitable for ages 17 and up. May contain intense violence, blood and gore, sexual content and/or strong language.",
                edadImg: "https://www.globalratings.com/images/ESRB_M_68.png"
            },
            logo: "https://i.postimg.cc/RCHbbTny/logo7.png",
            reembolso: "Autoreembolsable",
            desarrolladora: "FromSoftware",
         
        },
        {
            id: 8,
            nombre: "Marvel Spider-Man",
            precio: "$39.99",
            img: "https://i.postimg.cc/PJxLJvyg/img8.png",
            sinopsis: "Spider-Man ofrece una emocionante experiencia de superhéroes con una historia cautivadora.",
            imgCarrousel: {
                img1: "https://i.postimg.cc/QMRhm18k/Marvels-Spider-Man-Portada.jpg",
                img2: "https://i.postimg.cc/qvFTBy3V/ss-427677cf78195df94702f0a963cd9eaeb9d8935a-600x338.jpg",
                img3: "https://i.postimg.cc/P5JHk2NQ/ss-dfe778bf6d66e952e4acd4e1f926f7615b609ddf-600x338.jpg",
            },
            edad: {
                categoria: "TEEN",
                descripcion: "Content is generally suitable for ages 13 and up. May contain violence, suggestive themes, crude humor, minimal blood, simulated gambling and/or infrequent use of strong language.",
                edadImg: "https://www.globalratings.com/images/ESRB_T_68.png"
            },
            logo: "https://i.postimg.cc/28NXpBQ6/logo8.png",
            reembolso: "Disponible",
            desarrolladora: "Insomniac Games",
        
        },
        {
            id: 9,
            nombre: "Final Fantasy X",
            precio: "$29.99",
            img: "https://i.postimg.cc/NjrHRTtY/img9.jpg",
            sinopsis: "Final Fantasy X es un juego de rol épico con una historia envolvente y personajes memorables.",
            imgCarrousel: {
                img1: "https://i.postimg.cc/SRc6R6sZ/header.jpg",
                img2: "https://i.postimg.cc/qMdcY5bW/ss-6c7ece776d88f1a7252a08321dbdf1c9ee0e48e9-600x338.jpg",
                img3: "https://i.postimg.cc/RVQ1zL2h/ss-8fc00bc1b853f17adb5378ad012ef127098affad-600x338.jpg",
            },
            edad: {
                categoria: "TEEN",
                descripcion: "Content is generally suitable for ages 13 and up. May contain violence, suggestive themes, crude humor, minimal blood, simulated gambling and/or infrequent use of strong language.",
                edadImg: "https://www.globalratings.com/images/ESRB_T_68.png"
            },
            logo: "https://i.postimg.cc/Dw2j0kY3/logo9.png",
            reembolso: "Disponible",
            desarrolladora: "Square Enix",
       
        },
        {
            id: 10,
            nombre: "Mortal Kombat",
            precio: "$49.99",
            img: "https://i.postimg.cc/NjrHRTtY/img9.jpg",
            sinopsis: "Mortal Kombat es un juego de lucha brutal con personajes únicos y movimientos especiales.",
            imgCarrousel: {
                img1: "https://i.postimg.cc/4ynCT3xN/header.jpg",
                img2: "https://i.postimg.cc/br57YjZ0/ss-4fa4fd2ea1b7ff6c6b699dc9eb717986f80845a4-600x338.jpg",
                img3: "https://i.postimg.cc/NGPqkRdy/ss-aa70f659fe14e3c07033474249096b60c17021b3-600x338.jpg",
            },
            edad: {
                categoria: "MATURE 17+",
                descripcion: "Content is generally suitable for ages 17 and up. May contain intense violence, blood and gore, sexual content and/or strong language.",
                edadImg: "https://www.globalratings.com/images/ESRB_M_68.png"
            },
            logo: "https://i.postimg.cc/xTGp9T5P/logo10.png",
            reembolso: "Autoreembolsable",
            desarrolladora: "NetherRealm Studios",
        
        }
    ];

    localStorage.setItem('juegos', JSON.stringify(juegosObj))
}

