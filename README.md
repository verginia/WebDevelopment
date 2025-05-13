# WebDevelopment

Task7: coding challenge:
![First HTML Challenge](../WebDevelopment/media/images/README/html_Challenge_1.png)

Task8:
Tema site-ului sa fie o prezentare de mașini și să fie realizat strict cu HTML - practic scheletul site-ului.
Site-ul să conțină 3 pagini pe care le poți accesa dintr-un meniu în partea de sus a fiecărei pagini.

Prima pagina - Acasă:
Să conțină un tabel cu mai multe mașini, ca intrari: imagine cu mașina, modelul mașinii, marca, transmisiunea și anul fabricației.

A doua pagina - Detalii:
Despre o singura masina la alegere, aici poți sa ai o lista cu mai multe detalii, de exemplu opțiuni, mai multe imagini cu mașina, combustibil, kilometri, puterea, preț etc.

Iar ultima pagina Contact:
Sa conțină un formular de contact, niște inputs de tip text pentru nume, prenume, e-mail, mesaj.

Alte site-uri asemănătoare de unde te poți inspira:

https://www.autovit.ro/

https://www.bestauto.ro/auto/

https://www.alles.auto/

https://www.mobile.de/ro

CSS Ghid:
https://docs.google.com/document/d/1lMEjqVEVv0yBQNqJp2BPZs-L9QnBtqhfatf1uUdvJ-s/edit?tab=t.94b587w16une#heading=h.1whnadcm7lf3

Task16: Proiect HTML & CSS
![HTML & CSS](../WebDevelopment/media/images/README/Portfolio_Site.png)

Task17: [1] Challenge
În această lecție, vă invit să creați o pagină web care să arate astfel 👇

Link către site: https://teachbit.github.io/Proiect-HTML-CSS/

De asemenea, aveți link-ul cu site-ul creat + codul acestuia în cazul în care este necesar.
Recomandat ar fi să vizualizați PDF-ul sau link-ul, și să vă folosiți de uneltele învățate pentru crearea acestei pagini web.

Task18: [2] Challenge
În această lecție, vă invit să creați o pagină web care să arate astfel 👇

Link către site: https://webdeveloperii.github.io/project-recipe/

Task19: 
Comments for Task 17:
-> task-ul 17 arata foarte bine, la fel in zona de styling (fisierul css) te rog sa-l formatezi.
-> Pe ecranul mobil iti recomand sa aliniezi text-ul 'About Us' la centru si logo-ul sa il formatezi mai mic (width + height).
-> sectiunile ai putea sa le numesti exact ce reprezinta -> #about-us #contact etc.
-> iti recomand sa nu adaugi stilizarile pe id-uri -> ci doar pe clase.

Task 18:
-> iti recomand sa folosesti 'section' pentru a imparti zonele paginii (preparation, instructiuni etc.) 
-> iar la zona de css iti recomand sa formatezi codul pentru ca este greu de inteles 
-> iti recomand sa folosesti extensia Prettier - https://www.skool.com/webdeveloperiiro-3487/visual-studio-code-extensii-si-utilizare

Task21: CSS Bootstrap Project
În această lecție, vă invit să creați o pagină web care să arate astfel 👇

Link cǎtre site: Proiect - Bootstrap https://teachbit.github.io/Proiect-Bootstrap/

De asemenea, aveți link-ul cu site-ul creat + codul acestuia în cazul în care este necesar.

Recomandat ar fi să vizualizați PDF-ul sau link-ul, și să vă folosiți de uneltele învățate pentru crearea acestei pagini web.

Task22: JavaScript Fudamentals:
-> JavaScript Ghid: 
https://docs.google.com/document/d/1XuPwaSQK4D8YlmBjfCae9a-3isAPWMjPeaTk-p7tJLw/edit?tab=t.0#heading=h.lrwby1u1jaz1


Task23: JavaScript Weather Project

- used API Ninjas,
- used Bootstrap,
- used web Postman: https://web.postman.co/,
- used API with QueryParam and X-Api-Key,
- used Fetch API.

Comments:
3 recomandari la proiect: 
-> in functia de updateUiInfo ai putea sa faci update la logica:
--- icon.classList.remove("bi-brightness-high", "bi-brightness-alt-high", "bi-snow2");
--- sa muti classList.remove deasupra de if pentru ca orice clauza din if face remove la acel item.
if(info.temp > 20){
icon.classList.add("bi-brightness-high");
} else if(info.temp < 10){
icon.classList.add("bi-snow2");
} else{
icon.classList.add("bi-brightness-alt-high");
}
-> si in loc de 20,10 iti recomand sa folosesti o constanta ca sa descrii ce verifica, de exemplu:
MIN_SUNNY_DEGREE_VALUE= 20
MAX_SNOW_DEGREE_VALUE = 10
-> si ultima recomandare este legata de adaugarea unui loading state pana cand se incarca datele, practic in `getWeatherDataForCity` ai putea sa adaugi un boolean (sau un helper function) care incarca un element de loading (chiar din bootsrap) si la cel try-catch poti adauga un finally care sa resteze (inchida) loading state-ul

Task24: 
-> JavaScript Advanced Ghid:
https://docs.google.com/document/d/1nKqfzYB6kLTED2ioE9xsyR_kegB8zU7nUesuud2F8zY/edit?tab=t.o02vklwk2vgt#heading=h.m01tza6la9eu
-> Object: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
-> Array: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

