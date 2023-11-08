const juegos = JSON.parse(localStorage.getItem('juegos')) || []

if (juegos.length === 0) {

    const juegosObj = [
        
        {
            id: 1,
            nombre: "Fortnite",
            img:"https://i.postimg.cc/qR2wwSdJ/img1.jpg",
            precio: "$0,00",
            sinopsis: "Fortnite es un juego de batalla real en línea donde 100 jugadores luchan por ser el último en pie.",
            img1: "https://i.postimg.cc/sghbbV7y/1366-2000.jpg",
            img2: "https://i.postimg.cc/Lskw6Nxb/fortnite-battle-royale-9.jpg",
            img3: "https://i.postimg.cc/Xv6tbTk5/fortnite-grind-rails-1920x1080-cbdee6a21adf.jpg",
            logo: "https://i.postimg.cc/DwgNPybz/logo1.png",

        },

           
        {
            id: 2,
            nombre: "Rocket League",
            img: "https://i.postimg.cc/HxT8Ghys/img2.jpg",
            precio: "19.99",
            sinopsis: "Rocket League combina fútbol con vehículos para crear una experiencia única y emocionante.",
            img1: "https://i.postimg.cc/nzzjcwHF/el-auto-del-agente-secreto-mas-famoso-del-cine-llego-a-rocket-league-1440x810-wmk.webp",
            img2: "https://i.postimg.cc/PJvC1pp0/rocket-league-review-e1436834946674.webp",
            img3: "https://i.postimg.cc/4dSKKbdz/rocket-league-time-warp-846x443.jpg",
            logo: "https://i.postimg.cc/qR9DvNW1/logo2.png",

        },


            {
                id: 3,
                nombre: "GTA V",
                img: "https://i.postimg.cc/jj0Jc5qf/img3.jpg",
                precio: "29.99",
                sinopsis: "Grand Theft Auto V es un juego de acción y aventuras que se desarrolla en un mundo abierto.",
                img1: "https://i.postimg.cc/QtdnQN6W/gta-v-portada.jpg",
                img2: "https://i.postimg.cc/C5ZP2Pph/gta-v-trailer-gameplay-es-fr3n-1280.jpg",
                img3: "https://i.postimg.cc/cCV9GRdQ/2019-09-30-product-4-scaled.jpg",
                logo: "https://i.postimg.cc/Xv1DtHLS/logo3.png",
    
            },

            {
                id: 4,
                nombre: "Minecraft",
                img: "https://i.postimg.cc/RCQGnkRG/img4.png",
                precio: "$26.95",
                sinopsis: "Minecraft es un juego de construcción y aventuras con un mundo abierto donde puedes explorar y crear..",
                img1: "https://cdn.britannica.com/62/200262-050-AFE1BDFF/Players-Minecraft-worlds-way-blocks-roaming-characters.jpg",
                img2: "https://i.postimg.cc/PJvC1pp0/rocket-league-review-e1436834946674.webp",
                img3: "https://i.postimg.cc/gj44f7kv/Minecraft-games.jpg",
                logo: "https://i.postimg.cc/WzgWF2vT/logo4.png",
    
            },
 
            {
                id: 5,
                nombre: "League of Legends",
                img: "https://i.postimg.cc/kG9cpsnx/img5.jpg",
                precio: "$0",
                sinopsis: "League of Legends es un juego MOBA donde dos equipos compiten para destruir la base del otro.",
                img1: "https://i.postimg.cc/KvfBDLRg/league-of-legends-1693381536-154.jpg",
                img2: "https://i.postimg.cc/52tv70CK/league-of-legends-9945-9.jpg",
                img3: "https://i0.wp.com/www.gamerfocus.co/wp-content/uploads/2022/12/League-of-Legends.jpg?resize=740%2C504&ssl=1",
                logo: "https://i.postimg.cc/52nPF7ZY/logo5.png",
    
            },

            {
                id: 6,
                nombre: "Valorant",
                img: "https://i.postimg.cc/7hVV8z6j/img6.jpg",
                precio: "$0",
                sinopsis: "Valorant es un juego de disparos táctico en primera persona con personajes únicos y habilidades.",
                img1: "https://i.postimg.cc/yYnpsKSw-/579204024-184280459-1706x960.jpg",
                img2: "https://i.postimg.cc/43GgqsCj/19801.jpg",
                img3: "https://i.postimg.cc/L8LSxhWz/Cul-Reveal-Reactor-A-VALORANT.jpg",
                logo: "https://i.postimg.cc/wBjGf8hQ/logo6.png",
    
            },
            {
                id: 7,
                nombre: "Dark Souls",
                img: "https://i.postimg.cc/Z5gLS4bY/img7.jpg",
                precio: "$39,99",
                sinopsis: "Valorant es un juego de disparos táctico en primera persona con personajes únicos y habilidades.",
                img1: "https://i.postimg.cc/wxr3PywP/dark-souls-remastered-disponible-un-dia-antes-en-steam.jpg",
                img2: "https://i.postimg.cc/8c7ccNzt/ss-3a71463e4ccaf28c5c27f6cf8d32a3a125f45404-600x338.jpg" ,
                img3: "https://i.postimg.cc/yx2dStJB/ss-92b2ba470cbfdb8839b649b3f478e5531dd81a17-600x338.jpg",
                logo: "https://i.postimg.cc/RCHbbTny/logo7.png",
    
            },
        
            {
                id: 9,
                nombre: "Final Fantasy X",
                img: "https://i.postimg.cc/NjrHRTtY/img9.jpg",
                precio: "$29,99",
                sinopsis: "Final Fantasy X es un RPG desarrollado y publicado por la compañía Squaresoft para el sistema PlayStation 2, llegando a Europa en 2002; es la décima entrega de la serie Final Fantasy,",
                img1: "https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2023/02/01/final-fantasy-x-hd-remaster.jpeg",
                img2: "https://fotografias.larazon.es/clipping/cmsimages01/2019/08/21/96E37DD8-35E1-4C6D-AB7B-93C5F4EF9174/98.jpg?crop=1031,580,x0,y0&width=1900&height=1069&optimize=low&format=webply" ,
                img3: "https://i.postimg.cc/RVQ1zL2h/ss-8fc00bc1b853f17adb5378ad012ef127098affad-600x338.jpg",
                logo: "https://i.postimg.cc/Dw2j0kY3/logo9.png",
    
            },


            {
                id: 10,
                nombre: "Mortal Kombat",
                img: "https://i.postimg.cc/xTXJSHcH/img10.png",
                precio: "$49,99",
                sinopsis: "Mortal Kombat es un juego de lucha brutal con personajes únicos y movimientos especiales.",
                img1: "https://i.postimg.cc/4ynCT3xN/header.jpg",
                img2: "https://i.postimg.cc/qMdcY5bW/ss-6c7ece776d88f1a7252a08321dbdf1c9ee0e48e9-600x338.jpg" ,
                img3: "https://i.postimg.cc/br57YjZ0/ss-4fa4fd2ea1b7ff6c6b699dc9eb717986f80845a4-600x338.jpg",
                logo: "https://i.postimg.cc/xTGp9T5P/logo10.png",
             
    
            },

        
    ];

    localStorage.setItem('juegos', JSON.stringify(juegosObj))
}

