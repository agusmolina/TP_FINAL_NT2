var demo = new Vue({
    el: '#main',
    data: {
        
        layout: 'grid',

        articles: [{
            "title": "Joker",
            "Gender": "Accion",
            "url": "https://www.youtube.com/watch?v=EIyZqNbZQI8",
            "image": {
                "large": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/joker-poster-2-1567070106.jpg?resize=320:*",
                "small": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/joker-poster-2-1567070106.jpg?resize=320:*"
            }
        },
        {
            "title": "Vengadores Endgame",
            "Gender": "Accion",
            "url": "https://www.youtube.com/watch?v=TcMBFSGVi1c",
            "image": {
                "large": "http://images.coveralia.com/audio/b/Bso_Vengadores_Endgame_(Avengers_Endgame)--Frontal.jpg",
                "small": "http://images.coveralia.com/audio/b/Bso_Vengadores_Endgame_(Avengers_Endgame)--Frontal.jpg"
            }
        },
        {
            "title": "Crepusculo",
            "Gender": "Adolescente",
            "url": "https://www.youtube.com/watch?v=6UTwp0Qv_Sg",
            "image": {
                "large": "http://www.librerialeon.com.mx/imagenes/9786071/978607110163.GIF",
                "small": "http://www.librerialeon.com.mx/imagenes/9786071/978607110163.GIF"
            }
        },
        {
            "title": "Malefica",
            "Gender": "Niños",
            "url": "https://www.youtube.com/watch?v=NcqiH-Z_a4A",
            "image": {
                "large": "https://m.guiadelocio.com/var/guiadelocio.com/storage/images/cine/archivo-peliculas/malefica/16612844-8-esl-ES/malefica.jpg",
                "small": "https://m.guiadelocio.com/var/guiadelocio.com/storage/images/cine/archivo-peliculas/malefica/16612844-8-esl-ES/malefica.jpg"
            }
        },
        {
            "title": "Capitana Marvel",
            "Gender": "Accion",
            "url": "https://www.youtube.com/watch?v=MJIz2gf3Wa8",
            "image": {
                "large": "http://t0.gstatic.com/images?q=tbn:ANd9GcSvrR2wjVfAucVBIaE048zDXv2G3cHCmxetx27P8HHsI7wr3yoJ",
                "small": "http://t0.gstatic.com/images?q=tbn:ANd9GcSvrR2wjVfAucVBIaE048zDXv2G3cHCmxetx27P8HHsI7wr3yoJ"
            }
        },
        {
            "title": "Terminator",
            "Gender": "Accion",
            "url": "https://www.youtube.com/watch?v=lyZu5PNyYCc",
            "image": {
                "large": "http://t1.gstatic.com/images?q=tbn:ANd9GcSVuqQSz4kSpX0_leVKFd7vnmT_yXjTnL56sBT9GsTPo3CW8nla",
                "small": "http://t1.gstatic.com/images?q=tbn:ANd9GcSVuqQSz4kSpX0_leVKFd7vnmT_yXjTnL56sBT9GsTPo3CW8nla"
            }
        }]

    }
});