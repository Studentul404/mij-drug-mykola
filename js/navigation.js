export const nav = `<nav class="navbar navbar-expand-lg navbar-light fixed-top">
   <a class="navbar-brand" href="#"> <img src="/images/cropped-mein_freund_mykola.png" alt="Mykola" width="30px"></a>
   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
      aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
   </button>
   </button>

   <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav mr-auto sidenav" id="navAccordion">
         <li class="nav-item active">
            <div class="main-page-link">
               <img class="pig_image" src="/images/cropped-mein_freund_mykola.png" alt="" height="55">
               <a class="nav-link " href="/">  Головна - Principal  </a>
            </div>
         </li>
         <li class="nav-item">
            <a class="nav-link nav-link-collapse" href="/moldova" id="hasSubItems" data-toggle="collapse"
               data-target="#collapseSubItems2" aria-controls="collapseSubItems2" aria-expanded="false">Мапа - Hartă</a>
            <ul class="nav-second-level collapse" id="collapseSubItems2" data-parent="#navAccordion">
               <li class="nav-item">
                  <a class="nav-link" href="/moldova">
                     <span class="nav-link-text">Про Молдову - Despre Moldova</span>
                  </a>
               </li>
               <li class="nav-item">
                  <a class="nav-link" href="/nord">
                     <span class="nav-link-text">Північ – Nord</span>
                  </a>
               </li>
               <li class="nav-item">
                  <a class="nav-link" href="/vest">
                     <span class="nav-link-text">Захід – Vest</span>
                  </a>
               </li>
               <li class="nav-item">
                  <a class="nav-link" href="/est">
                     <span class="nav-link-text">Схід – Est</span>
                  </a>
               </li>
               <li class="nav-item">
                  <a class="nav-link" href="/sud">
                     <span class="nav-link-text">Південь – Sud</span>
                  </a>
               </li>
            </ul>
         </li>
         <li class="nav-item">
            <a class="nav-link nav-link-collapse" href="#" id="hasSubItems" data-toggle="collapse"
               data-target="#collapseSubItems4" aria-controls="collapseSubItems4" aria-expanded="false"> Словник -
               Vocabular </a>
            <ul class="nav-second-level collapse" id="collapseSubItems4" data-parent="#navAccordion">
               <li class="nav-item">
                  <a class="nav-link" href="/slova">
                     <span class="nav-link-text">Важливі слова –
                        Cuvinte importante</span>
                  </a>
               </li>
               <li class="nav-item">
                  <a class="nav-link" href="/familie">
                     <span class="nav-link-text">Сім’я – Familie</span>
                  </a>
               </li>
               <li class="nav-item">
                  <a class="nav-link" href="/viata-de-zi-cu-zi">
                     <span class="nav-link-text">Повсякденне життя – Viata de zi cu zi</span>
                  </a>
               </li>
               <li class="nav-item">
                  <a class="nav-link" href="/vidpochinok">
                     <span class="nav-link-text">Вільний час - timp liber</span>
                  </a>
               </li>
               
               <li class="nav-item">
                  <a class="nav-link" href="/cumparaturi">
                     <span class="nav-link-text">Покупки – Cumpărături</span>
                  </a>
               </li>
               <li class="nav-item">
                  <a class="nav-link" href="/scoala">
                     <span class="nav-link-text">Школа – Şcoală</span>
                  </a>
               </li>
               <li class="nav-item">
                  <a class="nav-link" href="/alimente">
                     <span class="nav-link-text">Їжа – Alimente</span>
                  </a>
               </li>
               <li class="nav-item">
                  <a class="nav-link" href="/sanatate">
                     <span class="nav-link-text">Здоров’я – Sănătate</span>
                  </a>
               </li>
            </ul>
         </li>
         <li class="nav-item">
            <a class="nav-link nav-link-collapse" href="/ajutor" id="hasSubItems" data-toggle="collapse"
               data-target="#collapseSubItems3" aria-controls="collapseSubItems3" aria-expanded="false"> Допомога -
               Ajutor</a>
            <ul class="nav-second-level collapse" id="collapseSubItems3" data-parent="#navAccordion">
               <li class="nav-item">
                  <a class="nav-link" href="/ajutor">
                     <span class="nav-link-text">Хто може мені допомогти? – Cine ma poate
                        ajuta?</span>
                  </a>
               </li>
               <li class="nav-item">
                  <a class="nav-link" href="/politia">
                     <span class="nav-link-text">Поліція – Poliția</span>
                  </a>
               </li>
               <li class="nav-item">
                  <a class="nav-link" href="/pompierii">
                     <span class="nav-link-text">Пожежники – Pompierii</span>
                  </a>
               </li>
               <li class="nav-item">
                  <a class="nav-link" href="/doctor">
                     <span class="nav-link-text">Лікарня та Лікар – Spital și Doctor</span>
                  </a>
               </li>
               <li class="nav-item">
                  <a class="nav-link" href="/primaria">
                     <span class="nav-link-text">Мерія та муніципалітет – Primărie și
                        primărie </span>
                  </a>
               </li>
               <li class="nav-item">
                  <a class="nav-link" href="/voluntari">
                     <span class="nav-link-text">Волонтери – Voluntari</span>
                  </a>
               </li>
            </ul>
         </li>
         <li class="nav-item active">
            <a class="nav-link" href="/asistenti">Помічники Миколи – Asistenții lui Mykola</a>
         </li>
      </ul>
   </div>
</nav>`