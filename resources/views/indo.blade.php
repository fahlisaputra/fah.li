<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Fahli Saputra</title>
    <link rel="apple-touch-icon" sizes="180x180" href="/assets/img/logos/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/assets/img/logos/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/assets/img/logos/favicon-16x16.png">
    <link rel="manifest" href="/assets/img/logos/site.webmanifest">
    <link rel="mask-icon" href="/assets/img/logos/safari-pinned-tab.svg" color="#0b1120">
    <meta name="msapplication-TileColor" content="#0b1120">
    <meta name="theme-color" content="#0b1120">
    <link rel="stylesheet" href="/assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="/assets/css/style.css">
    <link rel="stylesheet" href="/assets/vendors/icons/bootstrap-icons.css">
    <script src="/assets/js/jquery.js"></script>
    <script src="/assets/js/feather.js"></script>
    <script src="/assets/js/theme.js"></script>
    <script>
      if ("serviceWorker" in navigator) {
        window.addEventListener("load", function () {
          navigator.serviceWorker
            .register("/serviceWorker.js")
            .then((res) => console.log("Service worker registered"))
            .catch((err) => console.log("Couldn't register service worker. Caused by ", err));
        });
      }
    </script>
</head>
<body>
    <nav class="navbar navbar-expand-lg fixed-top">
        <div class="container-fluid container-lg">
             <button class="navbar-toggler main-menu-toggle menu-toggle" data-bs-toggle="offcanvas" data-bs-target="#mainMenuCanvas" aria-controls="mainMenuCanvas" aria-expanded="false" aria-label="Toggle navigation">
                <span>
                </span>
            </button>
            <a class="navbar-brand nav-dark d-none" href="#"><img class="logo" src="/assets/img/logos/logo_dark.png" alt=""></a>
            <a class="navbar-brand nav-light d-none" href="#"><img class="logo" src="/assets/img/logos/logo_light.png" alt=""></a>
            <div class="d-flex d-lg-none">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link nav-icon" aria-current="page" href="#"><i data-feather="command" class="icon feather-16"></i></a>
                    </li>
                </ul>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link nav-icon theme-switcher" aria-current="page" ><i data-feather="sun" class="icon feather-16"></i></a>
                    </li>
                </ul>
            </div>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link semibold active" aria-current="page" href="#">Beranda</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link semibold" aria-current="page" href="#">Tentang</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link semibold" aria-current="page" href="#">Project</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link semibold" aria-current="page" href="#">Talk</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link semibold" aria-current="page" href="#">Blog</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link semibold" aria-current="page" href="#">Comunity Wall</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link semibold" aria-current="page" href="#">Kontak</a>
                    </li>
                </ul>

                <div class="d-flex">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link nav-icon" aria-current="page" href="#"><i data-feather="command" class="icon feather-16"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link nav-icon theme-switcher" aria-current="page" ><i data-feather="sun" class="icon feather-16"></i></a>
                        </li>
                    </ul>
                    <button class="btn btn-primary ms-1 semibold">Hire Me <i data-feather="arrow-right" class="icon-margin feather-16"></i></button>
                </div>
            </div>
        </div>    
    </nav>
    <div class="offcanvas offcanvas-start offcanvas-menu" tabindex="-1" id="mainMenuCanvas" aria-labelledby="offcanvasLabel">
        <div class="offcanvas-body">
            Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here.
        </div>
    </div>

    <div class="main">
        <div class="glow-navbar">
            <br><br><br>
        </div>

        <div class="glow-background-1">
            <br><br><br>
        </div>
        <div class="container pt-5">
            <div class="row">
                <div class="col-12 col-lg-7 order-2 order-lg-1 d-flex align-items-center text-center text-lg-start text-dynamic-primary">
                    <div>
                        <div class="header-text-container mt-5 mt-lg-0">
                            <h1 class="bold">
                                Hai. Saya Fahli, seorang
                                <span class="magic">
                                    <span class="magic-star">
                                    <svg viewBox="0 0 512 512">
                                    <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
                                    </svg>
                                    </span>
                                    <span class="magic-star">
                                    <svg viewBox="0 0 512 512">
                                    <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
                                    </svg>
                                    </span>
                                    <span class="magic-star">
                                    <svg viewBox="0 0 512 512">
                                    <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
                                    </svg>
                                    </span>
                                    <span class="magic-text">Fullstack Software Engineer</span>
                                </span>
                            </h1>
                        </div>
                        <p class="mb-4 text-lg">
                            Mengenal pemrograman sejak sekolah dasar hingga sekarang. Berpengalaman dalam membangun aplikasi web, mobile, dan desktop selama <b>9 tahun</b>. Juga mahir dengan Linux untuk menyiapkan server dan mengelola infrastruktur IT.
                        </p>
                        <button class="btn-hero bold me-sm-4">
                            Baca blog
                            <div class="arrow-wrapper">
                                <div class="arrow"></div>
                            </div>
                        </button>
                        <span class="d-block d-sm-inline mt-3 mt-sm-0">
                            <button class="btn-arrow bold">
                                <p>Lebih lanjut tentang saya</p>
                                <svg stroke-width="4" stroke="currentColor" viewBox="0 0 24 24" fill="none" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-linejoin="round" stroke-linecap="round"></path>
                                </svg>
                            </button>
                        </span>
                    </div>
                </div>
                <div class="col-12 col-lg-5 order-1 order-lg-2 text-center text-lg-end">
                    <img src="/assets/img/photos/fahli_3.png" alt="" width="90%">
                </div>
            </div>
        </div>

        <br><br><br><br><br><br><br><br>
        <br><br><br><br><br><br><br><br>
        <br><br><br><br><br><br><br><br>
        <br><br><br><br><br><br><br><br>
    </div>
    <script src="/assets/js/bootstrap.bundle.min.js"></script>
    <script src="/assets/js/fahli.js"></script>
    <script src="/assets/js/magic_text.js"></script>
</body>
</html>