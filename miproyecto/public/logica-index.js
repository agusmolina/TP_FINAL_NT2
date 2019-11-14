var demo = new Vue({
    el: '#main',
    data: {
        
        layout: 'grid',

        articles: [{
            "popularity": 270.155,
            "vote_count": 511,
            "video": false,
            "poster_path": "https://image.tmdb.org/t/p/w500/k7PuHoj2oE7nEHExwliF2FSXFnr.jpg",
            "id": 290859,
            "trailer": "https://www.youtube.com/watch?v=oxy8udgWRmo",
            "backdrop_path": "https://image.tmdb.org/t/p/w500/a6cDxdwaQIFjSkXf7uskg78ZyTq.jpg",
            "original_language": "en",
            "original_title": "Terminator: Dark Fate",
            "genre_ids": [
              28,
              878
            ],
            "title": "Terminator: destino oscuro",
            "vote_average": 6.4,
            "overview": "Sarah Connor une todas sus fuerzas con una mujer cyborg para proteger a una joven de un extremadamente poderoso y nuevo Terminator.",
            "release_date": "2019-10-23"
          },
          {
            "popularity": 155.302,
            "vote_count": 32,
            "video": false,
            "poster_path": "https://image.tmdb.org/t/p/w500/jnFCk7qGGWop2DgfnJXeKLZFuBq.jpg",
            "id": 330457,
            "adult": false,
            "backdrop_path": "https://image.tmdb.org/t/p/w500/xJWPZIYOEFIjZpBL7SVBGnzRYXp.jpg",
            "original_language": "en",
            "original_title": "Frozen II",
            "genre_ids": [
              12,
              16,
              35,
              14,
              10402,
              10751
            ],
            "title": "Frozen 2",
            "vote_average": 6.8,
            "overview": "¿Por qué nació Elsa con poderes mágicos? La respuesta le está llamando y amenaza su reino. Junto con Anna, Kristoff, Olaf y Sven emprenderá un viaje peligroso e inolvidable. En 'Frozen', Elsa temía que sus poderes fueran demasiado para el mundo. En 'Frozen 2', deseará que sean suficientes. Secuela de \"Frozen. El reino del hielo\" (2013), el film de animación más taquillero de la historia del cine, ganador del Oscar a la mejor película animada. Reunirá al mismo equipo artístico y técnico de la original.",
            "release_date": "2019-11-11"
          },
          {
            "popularity": 120.771,
            "vote_count": 337,
            "video": false,
            "poster_path": "https://image.tmdb.org/t/p/w500/2gucnaxqpzEDycFmPwwqjiwvemA.jpg",
            "id": 501170,
            "adult": false,
            "backdrop_path": "https://image.tmdb.org/t/p/w500/1nm0sk8UUx9jHCTHuMKe2jkt4Pn.jpg",
            "original_language": "en",
            "original_title": "Doctor Sleep",
            "genre_ids": [
              18,
              14,
              27
            ],
            "title": "Doctor Sueño",
            "vote_average": 7.1,
            "overview": "Secuela del film de culto \"El resplandor\" (1980) dirigido por Stanley Kubrick y también basado en una famosa novela de Stephen King. La historia transcurre algunos años después de los acontecimientos de \"The Shining\", y sigue a Danny Torrance (Ewan McGregor), traumatizado y con problemas de ira y alcoholismo que hacen eco de los problemas de su padre Jack, que cuando sus habilidades psíquicas resurgen, se contacta con una niña de nombre Abra Stone, a quien debe rescatar de un grupo de viajeros que se alimentan de los niños que poseen el don de \"el resplandor\".",
            "release_date": "2019-10-30"
          },
          {
            "popularity": 122.492,
            "vote_count": 42,
            "video": false,
            "poster_path": "https://image.tmdb.org/t/p/w500/MBiKqTsouYqAACLYNDadsjhhC0.jpg",
            "id": 486589,
            "adult": false,
            "backdrop_path": "https://image.tmdb.org/t/p/w500/bga3i5jcejBekr2FCGJga1fYCh.jpg",
            "original_language": "en",
            "original_title": "Red Shoes and the Seven Dwarfs",
            "genre_ids": [
              16,
              10749
            ],
            "title": "Red Shoes & the 7 Dwarfs",
            "vote_average": 6,
            "overview": "Los príncipes convertidos en enanos buscan los zapatos rojos de una dama para romper el hechizo, aunque no será fácil. Una parodia con un giro inesperado.",
            "release_date": "2019-07-25"
          },
          {
            "popularity": 79.395,
            "vote_count": 54,
            "video": false,
            "poster_path": "https://image.tmdb.org/t/p/w500/xL1yNzwGSXfassYpt13hXADpz6R.jpg",
            "id": 522162,
            "adult": false,
            "backdrop_path": "https://image.tmdb.org/t/p/w500/1ZSjrBUHP2jm1QlQEyLGufL289q.jpg",
            "original_language": "en",
            "original_title": "Midway",
            "genre_ids": [
              28,
              18,
              36,
              10752
            ],
            "title": "Midway",
            "vote_average": 6.2,
            "overview": "1942, Segunda Guerra Mundial. Después del devastador ataque sorpresa que destruyó Pearl Harbor, la Armada Imperial Japonesa se prepara para un nuevo ataque. Pero el Almirante Nimitz (Woody Harrelson) y Dick Best (Ed Skrein), el mejor piloto de la armada estadounidense, preparan un contraataque al imponente ejército japonés. Dick encabezará un ataque masivo que hará que Japón se dé cuenta de su error. Una decisión que cambió el curso de la historia para siempre. Mientras estos dos titánicos enemigos emprenden una letal batalla para cambiar el rumbo de la guerra, todas las miradas se vuelcan hacia la remota isla de Midway, donde una serie de impactantes ataques aéreos y marítimos pondrán a prueba la potencia y la fortaleza de ambas naciones.",
            "release_date": "2019-11-06"
          },
          {
            "popularity": 77.2,
            "vote_count": 362,
            "video": false,
            "poster_path": "https://image.tmdb.org/t/p/w500/fIkRmyo1UPlwM9zEVfs5QqevmuI.jpg",
            "id": 338967,
            "adult": false,
            "backdrop_path": "https://image.tmdb.org/t/p/w500/jCCdt0e8Xe9ttvevD4S3TSMNdH.jpg",
            "original_language": "en",
            "original_title": "Zombieland: Double Tap",
            "genre_ids": [
              28,
              35,
              27
            ],
            "title": "Zombieland: Mata y remata",
            "vote_average": 7.4,
            "overview": "En esta secuela y empleando el característico sentido del humor del que hizo gala \"Zombieland\", el grupo de protagonistas tendrá que viajar desde la Casa Blanca hasta el corazón de los Estados Unidos, sobreviviendo a nuevas clases de muertos vivientes que han evolucionado desde lo sucedido hace algunos años, así como a algunos supervivientes humanos rezagados. Pero, por encima de todo, tendrán que tratar de soportar los inconvenientes de convivir entre ellos.",
            "release_date": "2019-10-09"
          },
          {
            "popularity": 58.238,
            "vote_count": 1198,
            "video": false,
            "poster_path": "https://image.tmdb.org/t/p/w500/zHk9i6yFodI6fJPbY85z9HURNnQ.jpg",
            "id": 496243,
            "adult": false,
            "backdrop_path": "https://image.tmdb.org/t/p/w500/TU9NIjwzjoKPwQHoHshkFcQUCG.jpg",
            "original_language": "ko",
            "original_title": "기생충",
            "genre_ids": [
              35,
              18,
              53
            ],
            "title": "Parásitos",
            "vote_average": 8.5,
            "overview": "Tanto Gi Taek (Song Kang Ho) como su familia están sin trabajo. Cuando su hijo mayor, Gi Woo (Choi Woo Shik), empieza a recibir clases particulares en casa de Park (Lee Sun Gyun), las dos familias, que tienen mucho en común pese a pertenecer a dos mundos totalmente distintos, comienzan una interrelación de resultados imprevisibles.",
            "release_date": "2019-05-30"
          },
          {
            "popularity": 90.053,
            "vote_count": 203,
            "video": false,
            "poster_path": "https://image.tmdb.org/t/p/w500/tWZ9tgEEpeku0hBjjHLBPHd0jXT.jpg",
            "id": 480105,
            "adult": false,
            "backdrop_path": "https://image.tmdb.org/t/p/w500/3uG3aOhEzFCjcQulsJQiAzLSrw8.jpg",
            "original_language": "en",
            "original_title": "47 Meters Down: Uncaged",
            "genre_ids": [
              12,
              27,
              53
            ],
            "title": "A 47 metros 2: el terror emerge",
            "vote_average": 5,
            "overview": "Esta secuela de \"A 47 Metros\" traslada la mortífera acción de los tiburones desde México a Brasil, y seguirá a un grupo de chicas en busca de aventuras en la costa de Recife. Con la esperanza de salir del rutinario sendero turístico, las chicas escuchan algo acerca de unas ruinas submarinas ocultas, pero descubren que bajo las olas turquesas su Atlantis secreta no está completamente deshabitada.",
            "release_date": "2019-08-15"
          },
          {
            "popularity": 28.065,
            "vote_count": 14,
            "video": false,
            "poster_path": "https://image.tmdb.org/t/p/w500/i8lVYRplWdCEqYOutxpxeCtaD2a.jpg",
            "id": 552865,
            "adult": false,
            "backdrop_path": "https://image.tmdb.org/t/p/w500/3xxFtGWXybWoixONIgkMTpvbZCb.jpg",
            "original_language": "en",
            "original_title": "10 Minutes Gone",
            "genre_ids": [
              28,
              80,
              9648,
              53
            ],
            "title": "10 Minutes Gone",
            "vote_average": 6.1,
            "overview": "Un criminal pierde la memoria tras un atraco fallido a un banco. Para descubrir quién es el responsable de su caída en desgracia, tendrá que hacer todo lo posible por recuperar los 10 minutos que han desaparecido de su mente.",
            "release_date": "2019-09-30"
          },
          {
            "popularity": 76.007,
            "vote_count": 6,
            "video": false,
            "poster_path": "https://image.tmdb.org/t/p/w500/egCHwgAZ5UWkQl6HI0Ih8u9QulF.jpg",
            "id": 458897,
            "adult": false,
            "backdrop_path": "https://image.tmdb.org/t/p/w500/j9oM3c4D1qiVLmweBQm78Tm2grW.jpg",
            "original_language": "en",
            "original_title": "Charlie's Angels",
            "genre_ids": [
              28,
              12,
              35
            ],
            "title": "Los Ángeles de Charlie",
            "vote_average": 8.8,
            "overview": "Los Ángeles de Charlie siempre han proporcionado servicios de seguridad e investigación a clientes privados, y ahora la Agencia Townsend, y ahora la Agencia Townsend se ha expandido internacionalmente con las mujeres más inteligentes, valientes y mejor entrenadas a lo largo y ancho del planeta – varios equipos de Ángeles guiados por otros tantos Bosleys llevando a cabo los trabajos más duros por todo el mundo. Cuando un joven ingeniero de sistemas llama la atención sobre una peligrosa tecnología, los Ángeles son llamados a la acción, arriesgando sus vidas por protegernos a todos.",
            "release_date": "2019-11-14"
          },
          {
            "popularity": 47.516,
            "vote_count": 124,
            "video": false,
            "poster_path": "https://image.tmdb.org/t/p/w500/s2TPNe80v8JdZi4yKjJAkoI87cg.jpg",
            "id": 398978,
            "adult": false,
            "backdrop_path": "https://image.tmdb.org/t/p/w500/aZ1ZqJ4uO1RK5gU5jRsO4qG7rJo.jpg",
            "original_language": "en",
            "original_title": "The Irishman",
            "genre_ids": [
              80,
              18
            ],
            "title": "El irlandés",
            "vote_average": 8.7,
            "overview": "Biopic sobre Frank Sheeran, apodado \"el irlandés\", al que se le atribuyen más de 25 asesinatos relacionados con la mafia... Adaptación del libro \"I Heard You Paint Houses\", de Charles Brandt, a cargo del guionista Steven Zaillian (La lista de Schindler, American Gangster).",
            "release_date": "2019-11-01"
          },
          {
            "popularity": 33.71,
            "vote_count": 395,
            "video": false,
            "poster_path": "https://image.tmdb.org/t/p/w500/di8JeI8otBrQMy6SZr4Hc3Ve3oj.jpg",
            "id": 540901,
            "adult": false,
            "backdrop_path": "https://image.tmdb.org/t/p/w500/jTab4cf4X1dJJVS4F8UOGuesvPd.jpg",
            "original_language": "en",
            "original_title": "Hustlers",
            "genre_ids": [
              35,
              80,
              18
            ],
            "title": "Estafadoras de Wall Street",
            "vote_average": 6.1,
            "overview": "Inspirado por el artículo viral de la revista New York Magazine, Hustlers sigue a un grupo de ex empleadas de un club de striptease que se unen para vengarse de sus clientes de Wall Street.",
            "release_date": "2019-09-12"
          },
          {
            "popularity": 40.313,
            "vote_count": 191,
            "video": false,
            "poster_path": "https://image.tmdb.org/t/p/w500/307Y96L1iJ6gujCfuGPWNTqgbBd.jpg",
            "id": 481084,
            "adult": false,
            "backdrop_path": "https://image.tmdb.org/t/p/w500/ur4NTeFGZmQ6Hz5uEkAMgPI3WRg.jpg",
            "original_language": "en",
            "original_title": "The Addams Family",
            "genre_ids": [
              16,
              35,
              14,
              10751
            ],
            "title": "La familia Addams",
            "vote_average": 6.1,
            "overview": "Película de animación basada en la serie de La familia Addams.",
            "release_date": "2019-10-10"
          },
          {
            "popularity": 42.854,
            "id": 549053,
            "video": false,
            "vote_count": 25,
            "vote_average": 6.5,
            "title": "Last Christmas",
            "release_date": "2019-11-07",
            "original_language": "en",
            "original_title": "Last Christmas",
            "genre_ids": [
              35,
              10749,
              18
            ],
            "backdrop_path": "https://image.tmdb.org/t/p/w500/vQYwarUtaeyDYgwmcaTJYX1yix2.jpg",
            "adult": false,
            "overview": "Kate es una mujer joven que suele tomar siempre la decisión menos acertada. ¿Su último error? Haber aceptado un trabajo como elfo de Santa Claus en un centro comercial. Sin embargo, el destino la lleva a conocer a Tom, circunstancia que cambia por completo su vida. Para Kate, todo es demasiado bueno para ser cierto.",
            "poster_path": "https://image.tmdb.org/t/p/w500/jIbTPKCRWgmS2HaafKXeRaPHMGp.jpg"
          },
          {
            "popularity": 57.836,
            "vote_count": 31,
            "video": false,
            "poster_path": "https://image.tmdb.org/t/p/w500/6ApDtO7xaWAfPqfi2IARXIzj8QS.jpg",
            "id": 359724,
            "adult": false,
            "backdrop_path": "https://image.tmdb.org/t/p/w500/n3UanIvmnBlH531pykuzNs4LbH6.jpg",
            "original_language": "en",
            "original_title": "Ford v Ferrari",
            "genre_ids": [
              28,
              18
            ],
            "title": "Ford v Ferrari",
            "vote_average": 7.9,
            "overview": "Se centra en un excéntrico y decidido equipo americano de ingenieros y diseñadores liderados por el visionario automovilístico Carroll Shelby (Damon) y su conductor británico Ken Miles (Bale). Henry Ford II y Lee Iacocca les dan la misión de construir desde cero un nuevo automóvil con el fin de derrocar el dominio de Ferrari en el Campeonato del Mundo de Le Mans de 1966.",
            "release_date": "2019-10-10"
          },
          {
            "popularity": 38.093,
            "vote_count": 783,
            "video": false,
            "poster_path": "https://image.tmdb.org/t/p/w500/vPCQHc1LqLEC2ozuFQngqvc2SIO.jpg",
            "id": 511987,
            "adult": false,
            "backdrop_path": "https://image.tmdb.org/t/p/w500/lm4xH0YwFbVvTgdtau1thNK5S6J.jpg",
            "original_language": "en",
            "original_title": "Crawl",
            "genre_ids": [
              28,
              18,
              27,
              53
            ],
            "title": "Infierno bajo el agua",
            "vote_average": 6.1,
            "overview": "Cuando un enorme huracán llega a su pueblo en Florida, Haley ignora las órdenes de evacuación para buscar a su padre. Tras encontrarle gravemente herido, ambos quedan atrapados por la inundación. Prácticamente sin tiempo para escapar de la tormenta que arrecia, Haley y su padre descubren que la subida del nivel del agua es el menor de sus problemas.",
            "release_date": "2019-07-11"
          },
          {
            "popularity": 32.057,
            "vote_count": 61,
            "video": false,
            "poster_path": "https://image.tmdb.org/t/p/w500/fjmMu9fpqMMF17mCyLhNfkagKB0.jpg",
            "id": 578189,
            "adult": false,
            "backdrop_path": "https://image.tmdb.org/t/p/w500/zBAoNL50oFRCAJvEEQEKD8M48pV.jpg",
            "original_language": "en",
            "original_title": "Black and Blue",
            "genre_ids": [
              28,
              80,
              18
            ],
            "title": "Black and Blue",
            "vote_average": 5.3,
            "overview": "",
            "release_date": "2019-10-25"
          },
          {
            "popularity": 23.308,
            "vote_count": 72,
            "video": false,
            "poster_path": "https://image.tmdb.org/t/p/w500/10DEBjRtAH7ocGHYufecnGZOEq0.jpg",
            "id": 522924,
            "adult": false,
            "backdrop_path": "https://image.tmdb.org/t/p/w500/6esNUoXh4xQvucB7o7e3TCfjI65.jpg",
            "original_language": "en",
            "original_title": "The Art of Racing in the Rain",
            "genre_ids": [
              35,
              18,
              10749
            ],
            "title": "El arte de vivir bajo la lluvia",
            "vote_average": 8,
            "overview": "El argumento está basado en la novela publicada por Garth Stein, la cual responde al mismo nombre que el filme. La historia combina diferentes sentimientos y situaciones comprometidas para la sociedad como son el dolor, la liberación, el cariño o el riesgo. Enzo, un perro que ha experimentado muchas aventuras interesantes a lo largo de su vida, es el personaje que pone voz a la película. Pese a no ser una persona de carne y hueso, este entrañable animal será capaz de dar diferentes lecciones a los seres humanos sobre cuál tendría que ser la manera adecuada de actuar sea cual sea la situación en la que se encuentren.",
            "release_date": "2019-08-08"
          },
          {
            "popularity": 27.681,
            "vote_count": 30,
            "video": false,
            "poster_path": "https://image.tmdb.org/t/p/w500/pJUT5D7h2NPRFXxlS3851YYt0l8.jpg",
            "id": 393624,
            "adult": false,
            "backdrop_path": "https://image.tmdb.org/t/p/w500/JPLqPszdIZS3uknr7oG6qJyyKV.jpg",
            "original_language": "en",
            "original_title": "Official Secrets",
            "genre_ids": [
              18,
              53,
              10749,
              10752
            ],
            "title": "Secretos de Estado",
            "vote_average": 7.2,
            "overview": "Katharine Gun (Knightley) es una denunciante del Servicio de Inteligencia Británica que, justo después de que se anunciase la invasión de Iraq en 2003, filtró un documento secreto de la NSA. En él se especificaba una misión de espionaje cooperativa entre Estados Unidos y Reino Unido para investigar a los miembros del Consejo de Seguridad de las Naciones Unidas.",
            "release_date": "2019-08-30"
          },
          {
            "popularity": 20.672,
            "vote_count": 4308,
            "video": false,
            "poster_path": "https://image.tmdb.org/t/p/w500/2VS9hnGkKbIp7JiBtfiJSYfY6Ag.jpg",
            "id": 28,
            "adult": false,
            "backdrop_path": "https://image.tmdb.org/t/p/w500/fTuOyNf8GO6R9EthS7v9ZqokNMN.jpg",
            "original_language": "en",
            "original_title": "Apocalypse Now",
            "genre_ids": [
              18,
              10752
            ],
            "title": "Apocalypse Now",
            "vote_average": 8.2,
            "overview": "Con un reparto de lujo, cuenta la historia de un capitán del Ejército norteamericano (Martin Sheen) que es enviado en misión secreta por la peligrosa e hipnótica Camboya, con el fin de asesinar a un misterioso coronel renegado llamado Kurtz (Marlon Brando), que ha sucumbido a los horrores de la guerra y vive apartado en un poblado remoto.",
            "release_date": "1979-08-15"
          }]

    }
});