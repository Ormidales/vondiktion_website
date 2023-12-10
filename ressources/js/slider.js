function resetAnimations() {
    const elements = [
        { el: sliderMain.text_title, class: 'fadeInUp' },
        { el: sliderMain.text_subtitle, class: 'fadeInUp' },
        { el: sliderMain.text_content, class: 'fadeInUp' },
        { el: sliderMain.text_button, class: 'fadeInUp' },
        { el: sliderMain.image_right, class: 'fadeInRight' },
        { el: sliderMain.text_upertitle, class: 'fadeInDown' },
    ];

    elements.forEach(element => {
        if (element.el) {
        element.el.classList.remove(element.class);
        void element.el.offsetWidth;
        element.el.classList.add(element.class);
        }
    });
}

// Script de fonctionnement du slider principal
var sliderMain = {
    slider: document.getElementById("sliderMain"),
    button_previous: document.getElementById("sliderMain_button_previous"),
    button_next: document.getElementById("sliderMain_button_next"),
    text_title: document.getElementById("sliderMain_text_title"),
    text_subtitle: document.getElementById("sliderMain_text_subtitle"),
    text_upertitle: document.getElementById("sliderMain_text_upertitle"),
    text_content: document.getElementById("sliderMain_text_content"),
    text_button: document.getElementById("sliderMain_text_button"),
    text_counter: document.getElementById("sliderMain_text_counter"),
    image_right: document.getElementById("sliderMain_img_right"),
    interval: null,
    progressBarWidth: 0,
    index: 0,
    // Fonction pour changer de background de slide
    backgroundImages: [
        "ressources/img/bgbg.png",
        "ressources/img/tga.png",
        "ressources/img/slider1.png",
        "ressources/img/bg.png",
        "ressources/img/slider4.png",
        "ressources/img/slider3.png",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/2c7aa5177428193.64d5e23323a31.jpg",
    ],
    // Fonction pour changer de titre de slide
    textTitles: [
        "Crossed Paths : Law & Disorder",
        "VirtualVanguard Awards 2024",
        "Projet Starlight",
        "Projet Merveille",
        "AMFIV : Gallion",
        "AMFIV : Chapitre 1",
        "QuantumLeap v2.0.5",
    ],
    // Fonction pour changer de sous-titre de slide
    textSubtitles: [
        "[ Un jeu d'aventure en monde ouvert ]",
        "[ Le plus grand évènement de l'industrie du jeu vidéo ]",
        "[ Nouvelle IP en développement chez Vondiktion ]",
        "[ Nouvelle IP en développement chez Vondiktion ]",
        "[ Des aventures en haute mer ]",
        "[ Une aventure dans un monde fantastique ]",
        "[ Nouvelle mise à jour disponible ]",
    ],
    // Fonction pour changer de sur-titre de slide
    textUppertitles: [
        '<div class="w-full px-3 py-2 text-xs text-white border-b border-white/[15%]">NOUVEAU TRAILER DISPONIBLE</div>',
        '<div class="w-full px-3 py-2 text-xs text-white border-b border-white/[15%]">NE MANQUEZ PAS L\'ÉVÈNEMENT VIDÉOLUDIQUE DE L\'ANNÉE</div>',
        '',
        '',
        '',
        '',
        '<div class="w-full px-3 py-2 text-xs text-white border-b border-white/[15%]">Téléchargement disponible dès maintenant et gratuitement</div>',
    ],
    // Fonction pour changer de contenu de slide
    textContents: [
        'Dans cette nouvelle aventure par les créateurs de A Memory From IronHeart Valley, vous incarnez trois personnages différents, qui vont se croiser dans une histoire pleine de rebondissements. Le jeu est prévu pour 2024, et sera disponible sur PC, PS5, Xbox Series X.',
        'Les VirtualVanguard Awards sont les plus grands évènements de l\'industrie du jeu vidéo. Ils récompensent les meilleurs jeux de l\'année, et sont organisés par Vondiktion. Les VirtualVanguard Awards 2024 auront lieu le 12 décembre 2024, et seront diffusés en direct sur Youtube, Facebook, et Amazon Luna.',
        'Projet Starlight est une nouvelle IP développée par Vondiktion. Ce jeu est un jeu de rôle en monde ouvert, dans un univers fantastique. Le jeu est actuellement en développement, et sera disponible sur PC, PS5, Xbox Series X, Nintendo Switch. Nous recherchons actuellement des développeurs pour nous aider à développer ce jeu.',
        'Projet Merveille est une nouvelle IP développée par Vondiktion. Ce jeu est un jeu de rôle en monde ouvert, dans un univers fantastique. Le jeu est actuellement en développement, et sera disponible sur PC, PS5, Xbox Series X, Nintendo Switch. Nous recherchons actuellement des développeurs pour nous aider à développer ce jeu.',
        'A Memory From IronHeart Valley : Gallion est un jeu d\'aventure en monde ouvert, dans un univers de pirates. Le jeu est actuellement en développement, et sera disponible sur PC, PS5, Xbox Series X, Nintendo Switch. Le jeu est prévu pour 2024.',
        'A Memory From IronHeart Valley : Chapitre 1 est un jeu d\'aventure en monde ouvert, dans un univers fantastique. Le jeu est actuellement en développement, et sera disponible sur PC, PS5, Xbox Series X, Nintendo Switch. Le jeu est prévu pour 2024.',
        'QuantumLeap est un moteur de jeu 3D et 2D développé par Vondiktion. Il est utilisé pour les jeux de Vondiktion, et est disponible gratuitement pour les développeurs indépendants. La version 2.0.5 est disponible dès maintenant sur la page \'Téléchargements\' dans la section QuantumLeap.',
    ],
    // Fonction pour changer de bouton de slide
    buttons: [
        '<button class="px-4 py-2 text-sm text-white bg-stone-800/[75%] border border-white/[15%] active:scale-95 transition-all cursor-pointer shadow-xl shadow-stone-800/[25%] hover:border-white/[25%]">Aller sur le site officiel</button><button class="px-4 py-2 text-sm text-white bg-stone-800/[75%] border border-white/[15%] active:scale-95 transition-all cursor-pointer shadow-xl shadow-stone-800/[25%] flex items-center gap-3 hover:border-white/[25%]"><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-5" fill="white"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>Voir le trailer sur Youtube</button>',

        '<button class="px-4 py-2 text-sm text-white bg-stone-800/[75%] border border-white/[15%] active:scale-95 transition-all cursor-pointer shadow-xl shadow-stone-800/[25%] hover:border-white/[25%]">Aller sur le site officiel</button><button class="tooltip px-4 py-2 text-sm text-white bg-stone-800/[75%] border border-white/[15%] active:scale-95 transition-all cursor-pointer shadow-xl shadow-stone-800/[25%] hover:border-white/[25%]" data-tooltip="Voir les VirtualVanguard Awards en live sur Youtube"><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-5" fill="white"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></button><button class="tooltip px-4 py-2 text-sm text-white bg-stone-800/[75%] border border-white/[15%] active:scale-95 transition-all cursor-pointer shadow-xl shadow-stone-800/[25%] hover:border-white/[25%]" data-tooltip="Voir les VirtualVanguard Awards en live sur Facebook"><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-5" fill="white"><title>Facebook</title><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/></svg></button><button class="tooltip px-4 py-2 text-sm text-white bg-stone-800/[75%] border border-white/[15%] active:scale-95 transition-all cursor-pointer shadow-xl shadow-stone-800/[25%] hover:border-white/[25%]" data-tooltip="Voir les VirtualVanguard Awards en live sur Amazon Luna"><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-5" fill="white"><title>Amazon Luna</title><path d="M21.757 15.4031a4.5796 4.5796 0 0 0-.8157-.3675h-.0038c-.0431-.015-.0863-.0244-.1294-.0375-.5081-.1556-2.4-.8494-3.4782-2.8126v.002l-1.9256-3.334c-.81-1.4212-.6732-3.6844-.585-4.5413a4.519 4.519 0 0 0 .0393-.3244.2659.2659 0 0 0 .0038-.0206h-.0019c.0056-.077.0113-.152.0113-.2307-.002-1.9388-1.5732-3.512-3.512-3.512s-3.512 1.5732-3.512 3.512c0 .0769.0075.1538.0113.2307h-.0038s.0019.0168.0056.045c.0075.09.0188.1762.032.2643.09.8363.2455 3.1876-.6057 4.624h.0018l-2.7582 4.7757v-.0037l-.0318.0581-.2588.45c-.0206.0375-.0356.0769-.0562.1144-.285.4931-.72 1.2057-1.1982 1.8507-.3994.54-1.0238 1.0725-1.637 1.4325l.0076.002c-.0563.028-.1144.0524-.1688.0862a2.3952 2.3952 0 0 0-.8625.8737c-.6694 1.1588-.2719 2.642.8869 3.3114.6056.3506 1.2975.4012 1.9182.2119l-.0038.0056c1.0688-.3732 2.237-.7014 2.8351-.8382 1.0032-.2288 2.4882-.285 3.332-.2963h.96c4.2845.0412 6.4558 1.8582 6.4558 1.8582l.0038-.0038c.1744.1387.3544.27.5531.3844 2.1451 1.2394 4.8902.5043 6.1277-1.6426 1.245-2.145.51-4.8901-1.637-6.1277zm-5.0308 2.267c-.4482.7743-1.0857 1.1568-2.1432 1.2375-1.0575.0806-1.2863.1425-3.2232.1425-1.937 0-2.2295-.06-3.2232-.1425-.992-.0825-1.695-.4632-2.1432-1.2376-.4482-.7744-.4107-1.6594 0-2.475.4106-.8157.6731-1.4457 1.4363-2.7676.7631-1.322 1.0669-1.8226 1.785-2.8145.72-.9919 1.2488-1.2375 2.1432-1.2375.8944 0 1.4644.3319 2.1432 1.2375.6788.9057.8719 1.2563 1.7138 2.7151s1.0556 1.952 1.5075 2.867c.4557.915.45 1.7006.0038 2.475z"/></svg></button>',

        '<button class="px-4 py-2 text-sm text-white bg-stone-800/[75%] border border-white/[15%] active:scale-95 transition-all cursor-pointer shadow-xl shadow-stone-800/[25%] hover:border-white/[25%]">Aller sur la page du jeu</button><button class="px-4 py-2 text-sm text-white bg-stone-800/[75%] border border-white/[15%] active:scale-95 transition-all cursor-pointer shadow-xl shadow-stone-800/[25%] flex items-center gap-3 hover:border-white/[25%]"><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-5" fill="white"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>Voir les recrutements</button>',

        '<button class="px-4 py-2 text-sm text-white bg-stone-800/[75%] border border-white/[15%] active:scale-95 transition-all cursor-pointer shadow-xl shadow-stone-800/[25%] hover:border-white/[25%]">Aller sur la page du jeu</button><button class="px-4 py-2 text-sm text-white bg-stone-800/[75%] border border-white/[15%] active:scale-95 transition-all cursor-pointer shadow-xl shadow-stone-800/[25%] flex items-center gap-3 hover:border-white/[25%]"><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-5" fill="white"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>Voir les recrutements</button>',

        '<button class="px-4 py-2 text-sm text-white bg-stone-800/[75%] border border-white/[15%] active:scale-95 transition-all cursor-pointer shadow-xl shadow-stone-800/[25%] hover:border-white/[25%]">Aller sur la page du jeu</button><button class="px-4 py-2 text-sm text-white bg-stone-800/[75%] border border-white/[15%] active:scale-95 transition-all cursor-pointer shadow-xl shadow-stone-800/[25%] flex items-center gap-3 hover:border-white/[25%]"><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-5" fill="white"><title>Steam</title><path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z"/></svg>Aller sur la page Steam</button>',

        '<button class="px-4 py-2 text-sm text-white bg-stone-800/[75%] border border-white/[15%] active:scale-95 transition-all cursor-pointer shadow-xl shadow-stone-800/[25%] hover:border-white/[25%]">Aller sur la page du jeu</button><button class="px-4 py-2 text-sm text-white bg-stone-800/[75%] border border-white/[15%] active:scale-95 transition-all cursor-pointer shadow-xl shadow-stone-800/[25%] flex items-center gap-3 hover:border-white/[25%]"><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-5" fill="white"><title>Steam</title><path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z"/></svg>Aller sur la page Steam</button>',

        '<button class="px-4 py-2 text-sm text-white bg-stone-800/[75%] border border-white/[15%] active:scale-95 transition-all cursor-pointer shadow-xl shadow-stone-800/[25%] hover:border-white/[25%]">Aller sur la page du moteur de jeu</button><button class="px-4 py-2 text-sm text-white bg-stone-800/[75%] border border-white/[15%] active:scale-95 transition-all cursor-pointer shadow-xl shadow-stone-800/[25%] hover:border-white/[25%]">Voir les changelogs de la nouvelle version</button>',
        
    ],
    // Fonction pour changer d'image à droite de slide
    imagesRight: [
        '',
        '',
        '',
        '',
        '',
        '<img src="ressources/img/vince.png" class="w-[20rem] mr-28 object-cover object-center">',
        '',
    ],
    init: function() {
        this.preloadImages();
        this.updateSlider();
        this.button_previous.addEventListener("click", this.previous.bind(this));
        this.button_next.addEventListener("click", this.next.bind(this));
        this.resetAndStartInterval();
    },
    updateSlider: function() {
        // Créez un nouveau div pour l'image de fond avec la transition scaleDown
        const newBackground = document.createElement("div");
        newBackground.className = "slider-background scaleDown"; // Ajoutez ici la classe scaleDown
        newBackground.style.backgroundImage = "url('" + this.backgroundImages[this.index] + "')";
        newBackground.style.position = "absolute";
        newBackground.style.top = 0;
        newBackground.style.left = 0;
        newBackground.style.width = "100%";
        newBackground.style.height = "100%";
        newBackground.style.backgroundSize = "cover";
        newBackground.style.backgroundPosition = "center";

        // Supprimez l'ancien fond (s'il existe) et ajoutez le nouveau
        const oldBackground = this.slider.querySelector(".slider-background");
        if (oldBackground) {
            this.slider.removeChild(oldBackground);
        }
        this.slider.appendChild(newBackground);

        // Mettez à jour le reste du contenu du slider
        this.text_title.innerHTML = this.textTitles[this.index];
        this.text_subtitle.innerHTML = this.textSubtitles[this.index];
        this.text_content.innerHTML = this.textContents[this.index];
        this.text_button.innerHTML = this.buttons[this.index];
        this.image_right.innerHTML = this.imagesRight[this.index];
        this.text_upertitle.innerHTML = this.textUppertitles[this.index];
        this.text_counter.innerHTML = (this.index + 1) + '/' + this.backgroundImages.length;

        resetAnimations();
        this.resetProgressBar();
        setTimeout(() => {
            document.getElementById("sliderProgress").style.width = "100%";
        }, 100);
    },
    preloadImages: function() {
        this.backgroundImages.forEach(image => {
            const img = new Image();
            img.src = image;
        });
    },
    resetProgressBar: function() {
        const progressBar = document.getElementById("sliderProgress");
        progressBar.style.transition = 'none';
        progressBar.style.width = '0%';
        progressBar.getBoundingClientRect(); // Trigger reflow
        progressBar.style.transition = 'width 10s linear';
    },
    updateProgressBar: function(reset = false) {
        const progressBar = document.getElementById("sliderProgress");
        if (reset) {
            // Réinitialise la barre de progression à 0 et reprend son animation
            progressBar.style.transition = 'none';
            progressBar.style.width = '0%';
            progressBar.getBoundingClientRect(); // Trigger reflow
            progressBar.style.transition = 'width 10s linear';
            setTimeout(() => {
                progressBar.style.width = "100%";
            }, 100);
        } else {
            // Garde la barre de progression à son état actuel
            progressBar.style.width = this.progressBarWidth + '%';
        }
    },
    resetAndStartInterval: function() {
        if (this.interval != null) {
            clearInterval(this.interval);
        }
        this.interval = setInterval(this.next.bind(this), 10000);
        this.resetProgressBar(); // Réinitialiser la barre de progression à chaque intervalle
    },
    previous: function() {
        this.index--;
        if(this.index < 0) {
            this.index = this.backgroundImages.length - 1;
        }
        this.updateSlider();
        this.updateProgressBar(this.interval != null);
        if (this.isPaused) {
            this.updateProgressBar(true);
        } else {
            this.resetProgressBar();
            this.resetAndStartInterval();
        }
    },
    next: function() {
        this.index++;
        if(this.index >= this.backgroundImages.length) {
            this.index = 0;
        }
        this.updateSlider();
        this.updateProgressBar(this.interval != null);
        if (this.isPaused) {
            this.updateProgressBar(true);
        } else {
            this.resetProgressBar();
            this.resetAndStartInterval();
        }
    },
}

sliderMain.init();