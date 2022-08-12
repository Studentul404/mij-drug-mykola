


<?php
$request = $_SERVER['REQUEST_URI'];

switch ($request) {
    case '/' :
        require __DIR__ . '/main.html';
        break;
    case '/?i=1' :
        require __DIR__ . '/main.html';
        break; 
    case '/ajutor' :
        require __DIR__ . '/pages/ajutor.html';
        break; 
    case '/alimente' :
        require __DIR__ . '/pages/alimente.html';
        break; 
    case '/asistenti' :
        require __DIR__ . '/pages/asistenti.html';
        break; 
    case '/cumparaturi' :
        require __DIR__ . '/pages/cumparaturi.html';
        break; 
    case '/doctor' :
        require __DIR__ . '/pages/doctor.html';
        break; 
    case '/est' :
        require __DIR__ . '/pages/est.html';
        break; 
    case '/familie' :
        require __DIR__ . '/pages/familie.html';
        break; 
    case '/moldova' :
        require __DIR__ . '/pages/moldova.html';
        break; 
    case '/nord' :
        require __DIR__ . '/pages/nord.html';
        break;
    case '/politia' :
        require __DIR__ . '/pages/politia.html';
        break; 
    case '/pompierii' :
        require __DIR__ . '/pages/pompierii.html';
        break; 
    case '/primaria' :
        require __DIR__ . '/pages/primaria.html';
        break; 
    case '/sanatate' :
        require __DIR__ . '/pages/sanatate.html';
        break; 
    case '/scoala' :
        require __DIR__ . '/pages/scoala.html';
        break; 
    case '/slova' :
        require __DIR__ . '/pages/slova.html';
        break; 
    case '/sud' :
        require __DIR__ . '/pages/sud.html';
        break; 
    case '/vest' :
        require __DIR__ . '/pages/vest.html';
        break; 
    case '/vidpochinok' :
        require __DIR__ . '/pages/vidpochinok.html';
        break; 
    case '/viata-de-zi-cu-zi' :
        require __DIR__ . '/pages/vita de zi cu zi.html';
        break; 
    case '/voluntari' :
        require __DIR__ . '/pages/voluntari.html';
        break; 
    case '/404' :
        require __DIR__ . '/errors/404.html';
        break; 
    case '/403' :
        require __DIR__ . '/errors/403.html';
        break; 
    case '/500' :
        require __DIR__ . '/errors/500.html';
        break; 
    default:
        require __DIR__ . '/errors/404.html';

}
?>