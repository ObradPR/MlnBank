"use strict";

// Select site page
const url = window.location.href;

if (url == `https://obradpr.github.io/MlnBank/` || url == `https://obradpr.github.io/MlnBank/index.html`) {
  // =============================================================================
  // =========================== Index Main Data =================================
  // =============================================================================

  // Nav
  const $navUl = $(`.nav_meni__ul`);
  // Section #1
  const $featuresContainer = $(`#features`);
  // Section #2
  const $operationsContainer = $(`#operations`);
  // Section #3
  const slides = document.querySelectorAll(`.slide`);

  // Functions
  const dynamicallyNavMeni = function () {
    let navMeni = [
      { href: `#section__1`, naziv: `Mogućnosti` },
      { href: `#section__2`, naziv: `Operacije` },
      { href: `#section__3`, naziv: `Utisci` },
      { href: `#section__4`, naziv: `Autor` },
      { href: `account.html`, naziv: `Vaš Račun` },
    ];

    for (let meniObj of navMeni) {
      $navUl.append(
        `<li class="nav_item">
        <a href="${meniObj.href}" class="nav__link">${meniObj.naziv}</a>
      </li>`
      );
    }
  };
  dynamicallyNavMeni();

  const dynamicallyFeatures = function () {
    let features = [
      {
        icon: `fa-solid fa-display`,
        h5: `Elektronsko bankarstvo`,
        info: `Vaša Mln banka nudi mogućnost elektronskog bankarstva. Već danas možete otvoriti vaš račun od kuće i slati ili primati novac od prijatelja, ili podići kredit.`,
        img: `online_banking.jpg`,
        imgAlt: `Online banking 100%`,
      },
      {
        icon: `fa-solid fa-arrow-up-right-dots`,
        h5: `Nadledajte vaš napredak`,
        info: `Prikaz transkacija, dobitaka ili gubitaka novca je olakšano. Pravite prave odluke u vezi sa novcem. Nadgledajte napredak Vašeg račuma.`,
        img: `money_grow.jpg`,
        imgAlt: `Watch your money grow`,
      },
      {
        icon: `fa-regular fa-id-card`,
        h5: `Besplatna kartica`,
        info: `Uz otvaranje računa u našoj banci dobijate besplatno debitnu dina karticu i visa karticu. Nakon toga internet postaje vaša prodavnica i kartica vaš novčanik.`,
        img: `free_debit_card.jpg`,
        imgAlt: `Free debit card`,
      },
    ];

    for (let feature of features) {
      let featureClassCont = document.createElement(`div`);
      featureClassCont.setAttribute(`class`, `features_feature`);

      let iconEl = document.createElement(`i`);
      let h5 = document.createElement(`h5`);
      let p = document.createElement(`p`);
      let img = document.createElement(`img`);

      iconEl.setAttribute(`class`, feature.icon);
      h5.innerHTML = feature.h5;
      p.innerHTML = feature.info;
      img.setAttribute(`src`, `assets/img/${feature.img}`);
      img.setAttribute(`alt`, feature.imgAlt);

      featureClassCont.appendChild(iconEl);
      featureClassCont.appendChild(h5);
      featureClassCont.appendChild(p);
      featureClassCont.appendChild(img);

      $featuresContainer.append(featureClassCont);
    }
  };
  dynamicallyFeatures();

  const dynamicallyOperations = function () {
    const createTabBtns = function () {
      let tabBtnTxt = [`Slanje Novca`, `Krediti`, `Zatvaranje Računa`];

      let tabContainer = document.createElement(`div`);
      tabContainer.setAttribute(`id`, `operations_tab__container`);

      for (let [i, btn] of tabBtnTxt.entries()) {
        let tabBtn = document.createElement(`button`);
        tabBtn.classList.add(`btn`);
        tabBtn.classList.add(`operations_tab`);
        tabBtn.classList.add(`operations_tab__${i + 1}`);

        if (i === 0) {
          tabBtn.classList.add(`operations_tab__active`);
        }

        tabBtn.setAttribute(`data-tab`, `${i + 1}`);

        tabBtn.innerHTML = btn;

        tabContainer.appendChild(tabBtn);
      }
      $operationsContainer.append(tabContainer);
    };

    const createTabInfo = function () {
      let operations = [
        {
          h5: `Pošaljite novac porodici ili prijatelju`,
          info: `<b>Operacija slanja i primanja novca</b> će olakšati plaćanje mesečnih računa, ili bilo kakvih drugih uplata upotrebom uplatnice, više nećete morati da čekate u redovima.<br/><b>Razmena novca</b> sa vašim prijateljima, porodicom ili poslovnim kolegama postaje prosta.`,
        },
        {
          h5: `Podigni kredit sa najmanjom fiksnom kamatnom stopom`,
          info: `<b>Podignite kredit</b> slobodno uz najmanje kamatne sotope već danas. Kupite dom ili auto iz vaših snova.<br/><u>Kamatna stopa</u> za tromesečnu otplatu je : <b>3%</b><br/><u>Kamatna stopa</u> za šestomesečnu otplatu je : <b>5%</b><br/><u>Kamatna stopa</u> za jedno ili dugo godišnju otplatu je : <b>7%</b>`,
        },
        {
          h5: `Zatvaranjne računa nikad lakše`,
          info: `<b>Ne treba vam račun više</b>, bez ikakve muke ga zatvorite online.<br/><b>Sve što vam je potrebno</b> jesu Vaše <u>ime</u> i <u>pin</u> koji dobijate pri otvaranju računa.<br/><b>Ulsed</b> neke greške pri zatvaranju računa pozvati call centar MLN Banke : <b>+381 113221127</b>
        `,
        },
      ];

      for (let i = 0; i < operations.length; i++) {
        let operationContainerClass = document.createElement(`div`);
        let h5 = document.createElement(`h5`);
        let p = document.createElement(`p`);

        operationContainerClass.classList.add(`operations_content`);
        operationContainerClass.classList.add(`operations_content__${i + 1}`);

        if (i === 0) {
          operationContainerClass.classList.add(`operations_content__active`);
        }

        h5.innerHTML = operations[i].h5;
        p.innerHTML = operations[i].info;

        operationContainerClass.appendChild(h5);
        operationContainerClass.appendChild(p);

        $operationsContainer.append(operationContainerClass);
      }
    };

    createTabBtns();
    createTabInfo();
  };
  dynamicallyOperations();

  const dynamicallyTestimonial = function () {
    let testimonial = [
      {
        h5: `Konačno moderne bankarske usluge.`,
        info: `Već dugo godina tražim banku sa kvalitetnim i upotpunjenim elektronskim bankarstvom.
      Usluge MLN banke su savrsene u poređennju sa drugim bankama.`,
        authorImg: `author_1.jpg`,
        authorAlt: `Slika Marka Smijića`,
        authorName: `Marko Smijić`,
        authorCity: `Beograd`,
      },
      {
        h5: `Online otvaranje računa dosta olakšano.`,
        info: `Veoma lako snalaženje i otvaranje računa. Zadovoljna sam uslugama koje banka pruža.
      Sve preporuke!`,
        authorImg: `author_2.jpg`,
        authorAlt: `Slika Elene Pajkić`,
        authorName: `Elena Pajkić`,
        authorCity: `Niš`,
      },
    ];

    for (let [i, slide] of slides.entries()) {
      let testimonialDiv = document.createElement(`div`);
      testimonialDiv.setAttribute(`class`, `testimonial`);

      let h5 = document.createElement(`h5`);
      h5.innerHTML = testimonial[i].h5;
      testimonialDiv.appendChild(h5);

      let testiTxt = document.createElement(`div`);
      testiTxt.setAttribute(`class`, `testimonial_text`);
      testiTxt.innerHTML = testimonial[i].info;
      testimonialDiv.appendChild(testiTxt);

      let author = document.createElement(`div`);
      author.setAttribute(`class`, `testimonial_author`);
      let img = document.createElement(`img`);
      img.setAttribute(`src`, `assets/img/${testimonial[i].authorImg}`);
      img.setAttribute(`alt`, testimonial[i].authorAlt);
      img.setAttribute(`class`, `testimonial_photo`);
      author.appendChild(img);

      let authorInfo = document.createElement(`div`);
      authorInfo.setAttribute(`class`, `author_info`);
      let h6 = document.createElement(`h6`);
      h6.innerHTML = testimonial[i].authorName;
      authorInfo.appendChild(h6);

      let p = document.createElement(`p`);
      p.innerHTML = testimonial[i].authorCity;
      authorInfo.appendChild(p);
      author.appendChild(authorInfo);

      testimonialDiv.appendChild(author);
      slide.appendChild(testimonialDiv);
    }
  };
  dynamicallyTestimonial();

  // =============================================================================
  // =========================== Index Function Data =============================
  // =============================================================================
  // Smooth scrolling
  const $btnScrollTo = $(`.btn_scroll__to`);
  const $section1 = $(`#section__1`);

  // Nav hover
  const $nav = $(`.nav`);

  // Sticky nav bar
  const $header = $(`header`)[0];
  const navHeight = $nav[0].getBoundingClientRect().height;

  // Elements appear on scroll
  const $sections = $(`.section`);

  // Tabbed element
  const $operationsTabsContainer = $(`#operations_tab__container`);
  const $operationTabs = $(`.operations_tab`);
  const $operationsContent = $(`.operations_content`);

  // Slider
  const $btnLeft = $(`.slider_btn__left`);
  const $btnRight = $(`.slider_btn__right`);
  // Slides array selected "slides"
  const $dotContainer = $(`.dots`);

  // Collapsing meni buttons
  const $collapsingBtn = $(`.collapsing_nav`);
  const $exitCollapsingBtn = $(`.exit_coll__nav`);

  // Functions
  const smoothScrolling = function () {
    // Button Smooth Scrolling
    $btnScrollTo.click(function () {
      $section1[0].scrollIntoView({ behavior: `smooth` });
    });

    // Nav Meni Smooth Scrolling
    $(`.nav_links`).click(function (e) {
      if (e.target.classList.contains(`nav__link`)) {
        let id = e.target.getAttribute(`href`);
        if (id === `account.html`) {
          return;
        } else {
          e.preventDefault();
          document.querySelector(id).scrollIntoView({ behavior: `smooth` });
        }
      }
    });
  };
  smoothScrolling();

  const navHoverEffect = function () {
    const handleHover = function (e, opacity) {
      if (e.target.classList.contains(`nav__link`)) {
        let link = e.target;
        let siblings = link.closest(`.nav`).querySelectorAll(`.nav__link`);
        let logo = link.closest(`.nav`).querySelector(`img`);

        siblings.forEach((el) => {
          if (el !== link) {
            el.style.opacity = opacity;
          }
        });
        logo.style.opacity = opacity;
      }
    };

    $nav.mouseover(function (e) {
      handleHover(e, 0.5);
    });

    $nav.mouseout(function (e) {
      handleHover(e, 1);
    });
  };
  navHoverEffect();

  const stickyNavBar = function () {
    let options = {
      root: null,
      threshold: 0,
      rootMargin: `-${navHeight}px`,
    };

    let stickyNav = function (entries) {
      const [entry] = entries;

      if (!entry.isIntersecting) {
        $nav.addClass(`nav__sticky`);
      } else {
        $nav.removeClass(`nav__sticky`);
      }
    };

    let headerObserver = new IntersectionObserver(stickyNav, options);

    headerObserver.observe($header);
  };
  stickyNavBar();

  const elAppearOnScroll = function () {
    let options = {
      root: null,
      threshold: 0.2,
    };

    let elAppear = function (entries, observer) {
      let [entry] = entries;

      if (!entry.isIntersecting) return;

      if (entry.isIntersecting) {
        entry.target.classList.remove(`section_hidden`);
      }

      observer.unobserve(entry.target);
    };

    let sectionObserver = new IntersectionObserver(elAppear, options);

    $sections.each(function (i) {
      sectionObserver.observe($sections[i]);
      $sections.addClass(`section_hidden`);
    });
  };
  elAppearOnScroll();

  const tabbedElement = function () {
    $operationsTabsContainer.click(function (e) {
      if (e.target.classList.contains(`operations_tab`)) {
        $operationTabs.each(() =>
          $operationTabs.removeClass(`operations_tab__active`)
        );
      }

      $operationsContent.each(() =>
        $operationsContent.removeClass(`operations_content__active`)
      );

      e.target.classList.add(`operations_tab__active`);
      $(`.operations_content__${e.target.dataset.tab}`).addClass(
        `operations_content__active`
      );
    });
  };
  tabbedElement();

  const slider = function () {
    let curSlide = 0;
    const maxSlide = slides.length;

    const createDots = function () {
      slides.forEach(function (_, i) {
        $dotContainer.append(
          `<button class="dots_dot" data-slide="${i}"></button>`
        );
      });
    };

    const activeDot = function (slide) {
      $(`.dots_dot`).each(() => $(`.dots_dot`).removeClass(`dots_dot__active`));

      $(`.dots_dot[data-slide="${slide}"]`).addClass(`dots_dot__active`);
    };

    const goToSlide = function (slide) {
      slides.forEach(function (s, i) {
        s.style.transform = `translateX(${100 * (i - slide)}%)`;
      });
    };

    const nextSlide = function () {
      if (curSlide === maxSlide - 1) {
        curSlide = 0;
      } else {
        curSlide++;
      }

      goToSlide(curSlide);
      activeDot(curSlide);
    };

    const prevSlide = function () {
      if (curSlide === 0) {
        curSlide = maxSlide - 1;
      } else {
        curSlide--;
      }

      goToSlide(curSlide);
      activeDot(curSlide);
    };

    const init = function () {
      createDots();
      activeDot(0);
      goToSlide(0);
    };
    init();

    $btnRight.click(nextSlide);
    $btnLeft.click(prevSlide);

    document.addEventListener(`keydown`, function (e) {
      if (e.key === `ArrowLeft`) prevSlide();
      if (e.key === `ArrowRight`) nextSlide();
    });

    $dotContainer.click(function (e) {
      if (e.target.classList.contains(`dots_dot`)) {
        const slide = e.target.dataset.slide;
        goToSlide(slide);
        activeDot(slide);
      }
    });
  };
  slider();

  const collapsingMeni = function () {
    $collapsingBtn.click(function () {
      $collapsingBtn.css(`display`, `none`);
      $exitCollapsingBtn.css(`display`, `block`);
      $(`.nav_meni__ul`).css(`display`, `block`);
    });

    $exitCollapsingBtn.click(function () {
      $(`.nav_meni__ul`).css(`display`, `none`);
      $exitCollapsingBtn.css(`display`, `none`);
      $collapsingBtn.css(`display`, `block`);
    });

    window.addEventListener(`resize`, function () {
      let width = $header.getBoundingClientRect().width;

      if (width >= 527) {
        $collapsingBtn.css(`display`, `none`);
        $(`.nav_meni__ul`).css(`display`, `flex`);
      }
      if (width <= 526) {
        $collapsingBtn.css(`display`, `block`);
        $exitCollapsingBtn.css(`display`, `none`);
        $(`.nav_meni__ul`).css(`display`, `none`);
      }
    });
  };
  collapsingMeni();
}

// Accounts Data

let curUser;
let validatePin;

let user = {};
let acc = {};
let accounts = [];

if (url == `https://obradpr.github.io/MlnBank/account.html`) {
  // =============================================================================
  // ====================== Account Main Data ====================================
  // =============================================================================
  // Dinamicka DDL
  const $selectContainer = $(`.reg_ddl__container`);

  // Dinamcki RB
  const $radioContainer = $(`.reg_rb__container`);

  // Dinamicki Inputi
  const $inputContainers = $(`.reg_input__container`);
  const $inputOperContainers = $(`.operations_block`);

  // Operation blocks
  const $operTransport = $(`.transport`);
  const $operLoan = $(`.loan`);
  const $operClose = $(`.close`);

  // Account stats
  const $accStatsContainer = $(`#account_stats`);

  // Functions
  function setAttributes(element, attributes) {
    Object.keys(attributes).forEach((attr) => {
      element.setAttribute(attr, attributes[attr]);
    });
  }

  // Dinamicko kreiranje sadrzaja

  const dynamicallySelect = function () {
    const selectEl = document.createElement(`select`);
    selectEl.setAttribute(`id`, `country`);

    const intlOption = document.createElement(`option`);
    intlOption.setAttribute(`value`, 0);

    const intlOptionText = document.createTextNode(`Odaklen ste`);

    intlOption.appendChild(intlOptionText);
    selectEl.appendChild(intlOption);

    let countryNames = [
      `Srbija`,
      `Nemačka`,
      `USA`,
      `Hrvatska`,
      `Bosna`,
      `Crna Gora`,
      `Grčka`,
      `Makedonija`,
      `Mađarska`,
      `Bugarska`,
    ];

    for (let country of countryNames) {
      let optionTag = document.createElement(`option`);
      optionTag.setAttribute(`value`, country);
      let optionText = document.createTextNode(country);

      optionTag.appendChild(optionText);
      selectEl.appendChild(optionTag);
    }

    $selectContainer.append(selectEl);
  };
  dynamicallySelect();

  const dynamicallyRb = function () {
    let genders = [
      {
        key: `Muški`,
        value: `male`,
      },
      {
        key: `Ženski`,
        value: `female`,
      },
    ];

    for (let gender of genders) {
      const labelEl = document.createElement(`label`);
      labelEl.setAttribute(`for`, gender.value);
      labelEl.setAttribute(`class`, gender.value + `_class`);
      const labelText = document.createTextNode(gender.key);
      labelEl.appendChild(labelText);
      $radioContainer.append(labelEl);

      const radioEl = document.createElement(`input`);
      radioEl.setAttribute(`type`, `radio`);
      radioEl.setAttribute(`name`, `gender`);
      radioEl.setAttribute(`id`, gender.value);
      radioEl.style.margin = `1rem 0.5rem`;

      $radioContainer.append(radioEl);
    }
  };
  dynamicallyRb();

  const dynamicallyInputs = function () {
    const dynamicallyReLogInputs = function () {
      let inputAttributes = [
        {
          type: `text`,
          id: `full_name`,
          placeholder: `Unesite puno ime`,
        },
        {
          type: `tel`,
          id: `phone_num`,
          placeholder: `Unesite Vaš mobilni telefon`,
        },
        {
          type: `email`,
          id: `email_address`,
          placeholder: `Unesite Vašu email adresu`,
        },
        {
          type: `text`,
          id: `full_name_login`,
          placeholder: `Unesite puno ime`,
        },
        {
          type: `password`,
          id: `pin`,
          placeholder: `Unesite dobijeni PIN`,
        },
      ];
      let spanErrorsId = [
        `name_error`,
        `phone_error`,
        `email_error`,
        `username_error`,
        `pin_error`,
      ];

      for (let i in inputAttributes) {
        const inputEl = document.createElement(`input`);
        setAttributes(inputEl, inputAttributes[i]);

        $inputContainers[i].append(inputEl);

        const spanEl = document.createElement(`span`);
        spanEl.setAttribute(`id`, spanErrorsId[i]);

        $inputContainers[i].append(spanEl);
      }
    };

    const dynamicallyOperBlock = function () {
      // inputOperContainers
      let operInputs = [
        {
          type: `text`,
          id: `transport_name`,
          placeholder: `Ime korisnika`,
        },
        {
          type: `number`,
          id: `transport_amount`,
          placeholder: `Kolicina novca`,
        },

        {
          type: `number`,
          id: `loan_amount`,
          placeholder: `Kolicina novca`,
        },

        {
          type: `text`,
          id: `username_close`,
          placeholder: `Vaše ime`,
        },
        {
          type: `password`,
          id: `pin_close`,
          placeholder: `Vaš pin`,
        },
      ];

      let btnAttr = [`operation_btn`, `transport_btn`, `loan_btn`, `close_btn`];

      let hTxt = [`Pošalji novac`, `Uzmite kredit`, `Zatvorite račun`];

      let num = 0;
      for (let i = 0; i < $inputOperContainers.length; i++) {
        // Creating operation_block__row
        let operRow = document.createElement(`div`);
        operRow.setAttribute(`class`, `operation_block__row`);

        // Creating heading
        let h4 = document.createElement(`h4`);
        h4.innerHTML = hTxt[i];

        $inputOperContainers[i].append(h4);

        while (num < operInputs.length) {
          // Creating transfer block
          if (num < 2) {
            let operInput = document.createElement(`input`);
            setAttributes(operInput, operInputs[num]);

            operRow.appendChild(operInput);

            if (num === 1) {
              num++;
              let btnEl = document.createElement(`button`);
              btnEl.setAttribute(`class`, btnAttr[0] + " " + btnAttr[i + 1]);
              let btnTxt = document.createTextNode(`Potvrdi`);
              btnEl.appendChild(btnTxt);

              operRow.appendChild(btnEl);

              $operTransport.append(operRow);
              break;
            }
            num++;
          }
          // Creating loan block
          if (num === 2) {
            let operInput = document.createElement(`input`);
            setAttributes(operInput, operInputs[num]);

            operRow.appendChild(operInput);

            let btnEl = document.createElement(`button`);
            btnEl.setAttribute(`class`, btnAttr[0] + " " + btnAttr[i + 1]);
            let btnTxt = document.createTextNode(`Potvrdi`);
            btnEl.appendChild(btnTxt);

            operRow.appendChild(btnEl);

            $operLoan.append(operRow);
            num++;
            break;
          }
          // Creating close block
          if (num > 2) {
            const operInput = document.createElement(`input`);
            setAttributes(operInput, operInputs[num]);

            operRow.appendChild(operInput);
            if (num === 4) {
              num++;

              let btnEl = document.createElement(`button`);
              btnEl.setAttribute(`class`, btnAttr[0] + " " + btnAttr[i + 1]);
              let btnTxt = document.createTextNode(`Potvrdi`);
              btnEl.appendChild(btnTxt);

              operRow.appendChild(btnEl);

              $operClose.append(operRow);
              break;
            }
            num++;
          }
        }
      }
    };

    dynamicallyReLogInputs();
    dynamicallyOperBlock();
  };
  dynamicallyInputs();

  const dynamicallyAccStats = function () {
    let h4 = [
      `Broj računa`,
      `Opis računa`,
      `Vlasnik računa`,
      `Zemlja`,
      `Pol`,
      `Status`,
      `Raspoloživa sredstva`,
      `Poslednja promena`,
      `Datum poslednje promene`,
    ];
    let h4Info = [
      `account_number`,
      `Tekući račun`,
      `account_name`,
      `account_country`,
      `account_gender`,
      `Aktivan`,
      `account_money`,
      `account_last__change`,
      `account_last__change-date`,
    ];

    for (let i = 0; i < h4.length; i++) {
      let rowDiv = document.createElement(`div`);
      rowDiv.setAttribute(`class`, `stats_row`);

      let h4El = document.createElement(`h4`);
      h4El.innerText = h4[i];
      rowDiv.appendChild(h4El);

      if (i === 1 || i === 5) {
        let h4InfoEl = document.createElement(`p`);
        h4InfoEl.innerText = h4Info[i];
        rowDiv.appendChild(h4InfoEl);
      } else {
        let h4InfoEl = document.createElement(`span`);
        h4InfoEl.setAttribute(`class`, h4Info[i]);
        rowDiv.appendChild(h4InfoEl);
      }
      $accStatsContainer.append(rowDiv);
    }
  };
  dynamicallyAccStats();

  // =============================================================================
  // ====================== Account Function Data ================================
  // =============================================================================
  // Form Buttnos
  const $loginBtn = $(`.login_btn`);
  const $registerBtn = $(`.register_btn`);
  const $accLoginBtn = $(`.login_btn_acc`);
  const $accRegisterBtn = $(`.register_btn_acc`);
  const $accInfoLoginBtn = $(`.login_btn_acc-2`);
  const $accInfoRegBtn = $(`.register_btn_acc-2`);

  // Display
  const $divRegister = $(`#register_form`);
  const $divLogin = $(`#login_form`);
  const $divAccountInfo = $(`#account_info`);

  // Form Inputs
  const $fullName = $(`#full_name`);
  const $mobileNum = $(`#phone_num`);
  const $emailAddress = $(`#email_address`);
  const radioMale = document.querySelector(`#male`);
  const radioFemale = document.querySelector(`#female`);
  const $maleLabel = $(`.male_class`);
  const $femaleLabel = $(`.female_class`);
  const $selectCountry = $(`#country`);
  const $userNameLogin = $(`#full_name_login`);
  const $userPinLogin = $(`#pin`);
  let userPin = null;

  // Form Errors
  const $nameError = $(`#name_error`);
  const $phoneError = $(`#phone_error`);
  const $emailError = $(`#email_error`);
  const $registerError = $(`#register_error`);
  const $userNameErorr = $(`#username_error`);
  const $pinError = $(`#pin_error`);
  const $loginError = $(`#login_error`);

  // Operation buttons
  const $transportBtn = $(`.transport_btn`);
  const $loanBtn = $(`.loan_btn`);
  const $closeBtn = $(`.close_btn`);

  // Operation inputs
  const $transportName = $(`#transport_name`);
  const $transportAmount = $(`#transport_amount`);
  const $loanAmount = $(`#loan_amount`);
  const $nameClose = $(`#username_close`);
  const $pinClose = $(`#pin_close`);

  // Account transaction
  const $divTransactionInfoDisplay = $(`#transactions_display`);

  // Account info
  const $accNum = $(`.account_number`);
  const $accOwner = $(`.account_name`);
  const $accCountry = $(`.account_country`);
  const $accGender = $(`.account_gender`);
  const $accMoney = $(`.account_money`);
  const $lastChange = $(`.account_last__change`);
  const $lastChangeDate = $(`.account_last__change-date`);

  // Functions

  function nameValidation($spanTag, $inputId) {
    let name = $inputId.val();

    if (name.length === 0) {
      $spanTag.html(`Upišite ime`);
      $inputId.css(`border`, `1px solid red`);
      return;
    }
    if (
      !name.match(/^[A-ZČĆŽŠĐ][a-zčćžšđ]{2,}((\s|-)[A-ZČĆŽŠĐ][a-zčćžšđ]{2,})+$/)
    ) {
      $spanTag.html(`Neispravno napisano ime`);
      $inputId.css(`border`, `1px solid red`);
      return;
    }
    $inputId.css(`border`, `solid 1px #9d9d9d`);
    $spanTag.html(`<i class="fa-solid fa-circle-check"></i>`);
    return true;
  }

  let validateName;
  $fullName.keyup(function () {
    if (nameValidation($nameError, $fullName)) {
      validateName = true;
      return;
    }
    validateName = false;
    return;
  });

  let validatePhone;
  $mobileNum.keyup(function () {
    let phone = $mobileNum.val();

    if (phone.length === 0) {
      $phoneError.html(`Upišite mobilni telefon`);
      $mobileNum.css(`border`, `1px solid red`);
      validatePhone = false;
      return;
    }
    if (!phone.match(/^[0-9]+$/)) {
      $phoneError.html(`Samo cifre smeju`);
      $mobileNum.css(`border`, `1px solid red`);
      validatePhone = false;
      return;
    }
    if (phone.length !== 10) {
      $phoneError.html(`Broj mora imati 10 cifara`);
      $mobileNum.css(`border`, `1px solid red`);
      validatePhone = false;
      return;
    }
    $mobileNum.css(`border`, `solid 1px #9d9d9d`);
    $phoneError.html(`<i class="fa-solid fa-circle-check"></i>`);
    validatePhone = true;
    return true;
  });

  let validateEmail;
  $emailAddress.keyup(function () {
    let email = $emailAddress.val();
    email = String(email).toLocaleLowerCase();

    if (email.length === 0) {
      $emailAddress.css(`border`, `solid 1px red`);
      $emailError.html(`Upišite Vašu email adresu`);
      validateEmail = false;
      return;
    }
    if (
      !email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      $emailAddress.css(`border`, `solid 1px red`);
      $emailError.html(`Neispravna email adresa`);
      validateEmail = false;
      return;
    }
    $emailAddress.css(`border`, `solid 1px #9d9d9d`);
    $emailError.html(`<i class="fa-solid fa-circle-check"></i>`);
    validateEmail = true;
    return true;
  });

  function validateSelect() {
    let value = $selectCountry.val();
    if (value == 0) {
      $(`select`).css(`border`, `2px solid red`);
      return;
    } else {
      $(`select`).css(`border`, `2px solid green`);
    }
    return true;
  }
  function validateGender() {
    if (!radioMale.checked && !radioFemale.checked) {
      $maleLabel.css(`color`, `red`);
      $femaleLabel.css(`color`, `red`);
      return;
    } else {
      $maleLabel.css(`color`, `#444`);
      $femaleLabel.css(`color`, `#444`);
    }
    return true;
  }

  let validateUserName;
  $userNameLogin.keyup(function () {
    if (nameValidation($userNameErorr, $userNameLogin)) {
      for (let i in accounts) {
        if ($userNameLogin.val() === accounts[i].owner) {
          validateUserName = true;
          return true;
        }
      }
    }
    validateUserName = false;
    return;
  });

  $userPinLogin.keyup(function () {
    let userPinValue = $userPinLogin.val();
    if (userPinValue.length === 0) {
      $userPinLogin.css(`border`, `solid 1px red`);
      $pinError.html(`Upišite vaš pin`);
      validatePin = false;
      return;
    }

    curUser = accounts.find((acc) => acc.owner === $userNameLogin.val());

    if (userPinValue.length > 4 || userPinValue.length < 4) {
      $userPinLogin.css(`border`, `solid 1px red`);
      $pinError.html(`Pin mora da ima 4 cifre`);
      validatePin = false;
      return;
    }
    if (+userPinValue !== curUser?.pin) {
      $userPinLogin.css(`border`, `solid 1px red`);
      $pinError.html(`Neispravan PIN`);
      validatePin = false;
      return;
    }
    if (+userPinValue === curUser.pin) {
      $fullName.css(`border`, `solid 1px #9d9d9d`);
      $pinError.html(`<i class="fa-solid fa-circle-check"></i>`);
      validatePin = true;
      return true;
    }
  });

  function displayError($spanErrorTag) {
    $spanErrorTag.css(`display`, `block`);
    $spanErrorTag.css(`color`, `red`);
    $spanErrorTag.html(`Molimo Vas ispravite greške`);
    setTimeout(function () {
      $spanErrorTag.css(`display`, `none`);
    }, 3000);
  }

  function createNewUser() {
    user.owner = $fullName.val();
    user.phone = $mobileNum.val();
    user.email = $emailAddress.val();
    user.gender = radioMale.checked ? `muški` : `ženski`;
    user.country = $selectCountry.val();
    user.pin = userPin;
    user.accountNumber = Math.trunc(
      1000000000000 + Math.random() * 9999999999999
    );
    user.transactions = [];
    user.lastChange = ``;
    user.lastChangeDate = ``;

    for (let i = 0; i < accounts.length + 1; ) {
      acc[i] = { ...user };
      accounts.push(acc[i]);
      i++;
      break;
    }
  }

  function curDate() {
    let date = new Date();

    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    return `${day}.${month}.${year}`;
  }

  function containsOnlyNumbers(num) {
    return /^[0-9]+$/.test(num);
  }

  const registerFun = function () {
    $registerBtn.click(function (e) {
      e.preventDefault();
      const validateForm = function () {
        if (
          !validateName ||
          !validatePhone ||
          !validateEmail ||
          !validateSelect() ||
          !validateGender()
        ) {
          displayError($registerError);
          return;
        } else {
          userPin = Math.trunc(Math.random() * 9000) + 1000;

          $registerError.css(`display`, `block`);
          $registerError.css(`color`, `green`);
          $registerError.html(
            `Vaš nalog je uspešno napravljen, možete se logovati, a vaš pin je <b>${userPin}</b>`
          );
          setTimeout(function () {
            $registerError.css(`display`, `none`);
          }, 10000);

          // Creating user test object
          createNewUser();
          return true;
        }
      };
      validateForm();

      // Losing focus
      $fullName.val(``);
      $mobileNum.val(``);
      $emailAddress.val(``);
      radioMale.checked = false;
      radioFemale.checked = false;
    });

    $accInfoRegBtn.click(function () {
      $divAccountInfo.addClass(`hidden`);
      $divRegister.removeClass(`hidden`);
    });
  };
  registerFun();

  const loginFun = function () {
    $loginBtn.click(function (e) {
      e.preventDefault();

      $divRegister.addClass(`hidden`);
      $divLogin.removeClass(`hidden`);
    });

    $accRegisterBtn.click(function (e) {
      e.preventDefault();
      $divLogin.addClass(`hidden`);
      $divRegister.removeClass(`hidden`);
    });

    $accLoginBtn.click(function (e) {
      e.preventDefault();

      if (!validateUserName || !validatePin) {
        displayError($loginError);
        return;
      } else {
        $divLogin.addClass(`hidden`);
        $userNameLogin.val(``);
        $userPinLogin.val(``);
        $divAccountInfo.removeClass(`hidden`);

        // Account info
        const accountInfo = function (curUser) {
          $accNum.html(curUser.accountNumber);
          $accOwner.html(curUser.owner);
          $accCountry.html(curUser.country);
          $accGender.html(curUser.gender);
          $accMoney.html(curUser.transactions.reduce((acc, el) => acc + el, 0));
          $lastChange.html(curUser.lastChange);
          $lastChangeDate.html(curUser.lastChangeDate);
        };
        accountInfo(curUser);

        const displayTrasactions = function () {
          $divTransactionInfoDisplay.html(``);

          let transactions = curUser.transactions;

          transactions.forEach(function (el, i) {
            let value = el;

            let information = `<div class="transaction">
        <span class="amount_money">${value} DIN</span>
        <span class="transaction_time">${curDate()}</span>
      </div>`;
            $divTransactionInfoDisplay.append(information);
          });
        };

        // Display if any transaction exists on account
        displayTrasactions();

        // Operations
        const transferMoney = function () {
          $transportBtn.click(function () {
            let forWho = $transportName.val();
            let amount = $transportAmount.val();

            for (let i = 0; i < accounts.length; i++) {
              if (forWho !== accounts[i].owner || forWho === curUser.owner)
                continue;
              else {
                if (!containsOnlyNumbers(amount)) {
                  return;
                }
                amount = +amount;

                curUser.lastChange = -amount;
                curUser.lastChangeDate = curDate();

                accounts[i].lastChange = amount;
                accounts[i].lastChangeDate = curDate();

                curUser.transactions.push(-amount);
                accounts[i].transactions.push(amount);
                displayTrasactions();
                accountInfo(curUser);

                $transportName.val(``);
                $transportAmount.val(``);
              }
            }
          });
        };
        transferMoney();

        const getLoan = function () {
          $loanBtn.click(function () {
            let amount = $loanAmount.val();
            if (!containsOnlyNumbers(amount)) return;
            accounts.forEach((acc) => {
              if (acc.owner === curUser.owner) {
                amount = +amount;

                curUser.lastChange = amount;
                curUser.lastChangeDate = curDate();

                curUser.transactions.push(amount);
                displayTrasactions();
                accountInfo(curUser);

                $loanAmount.val(``);
              }
            });
          });
        };
        getLoan();

        const closeAcc = function () {
          $closeBtn.click(function () {
            let accName = $nameClose.val();
            let pin = +$pinClose.val();

            if (accName === curUser.owner && pin === curUser.pin) {
              accounts.forEach((acc, i) => {
                if (curUser.owner === acc.owner) {
                  accounts.splice(i, i + 1);
                  curUser = null;
                  $nameClose.val(``);
                  $pinClose.val(``);
                  $divAccountInfo.addClass(`hidden`);
                  $divRegister.removeClass(`hidden`);
                }
              });
            } else return;
          });
        };
        closeAcc();
      }
    });

    $accInfoLoginBtn.click(function () {
      $divAccountInfo.addClass(`hidden`);
      $divLogin.removeClass(`hidden`);
    });
  };
  loginFun();
}
