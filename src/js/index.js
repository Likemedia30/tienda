document.addEventListener('DOMContentLoaded', function () {

  //Header

  (function(){
    const burger = document.getElementById('burger'),
          body = document.querySelector('body'),
          menu = document.getElementById('menu'),
          headerButton = document.querySelectorAll('.header__button'),
          closeMenuButton = document.getElementById('closeMenu'),
          headerBack = document.querySelectorAll('.header__back'),
          headerCabinet = document.getElementById('headerCabinet'),
          headerCabinetButton = document.getElementById('headerCabinetButton'),
          closeCabinetButton = document.getElementById('closeCabinet');

    function openCabinet() {
      body.classList.add('hiddenCabinet');
      headerCabinet.style.transform = "translateX(0)";
    }
    function closeCabinet() {
      body.classList.remove('hiddenCabinet');
      headerCabinet.style.transform = "translateX(-110vw)";
    }

    const openMenu = (e) => {
      if(e.target.classList.contains('burgerOpen')) {
        closeMenu();
      } else {
        burger.classList.add('burgerOpen');
        body.classList.add('hidden');
        menu.style.transform = "translateX(0)";
      }
    }

    function closeMenu() {
      burger.classList.remove('burgerOpen')
      body.classList.remove('hidden');
      menu.style.transform = "translateX(-110vw)";
    }

    function openSubmenu () {
      this.nextElementSibling.style.transform = "translateX(0)";
    }

    function closeSubmenu () {
      this.parentNode.style.transform = "translateX(-110vw)";
    }

    headerButton.forEach(e => e.addEventListener("click", openSubmenu));
    headerBack.forEach(e => e.addEventListener("click", closeSubmenu));

    burger.addEventListener("click", openMenu);
    closeMenuButton.addEventListener("click", closeMenu);

    headerCabinetButton.addEventListener("click", openCabinet);
    closeCabinetButton.addEventListener("click", closeCabinet);

    // close menu on click outside menu

    document.addEventListener("click", (e) => {
      let isClickInside = menu.contains(e.target);
      
      if(e.target !== burger && !isClickInside && burger.classList.contains('burgerOpen')) {
        closeMenu();
      }
    })


    // close cabinet on click outside menu

    document.addEventListener("click", (e) => {
      let isClickInside = headerCabinet.contains(e.target);
      if(!headerCabinetButton.contains(e.target) && !isClickInside) {
        closeCabinet();
      }
    })
  })();

  //Footer

  (function(){
    const footerButton = document.querySelectorAll('.footer__button'),
          footerCardBody = document.querySelectorAll('.footer__card-body');

          function openCard () {
            
            
            if (this.classList.contains('footer__button--active')) {
              this.classList.remove('footer__button--active');
              this.nextElementSibling.classList.remove('footer__card-body--active');
            } else {
              footerButton.forEach(e => e.classList.remove('footer__button--active'));
              footerCardBody.forEach(e => e.classList.remove('footer__card-body--active'));

              this.classList.add('footer__button--active');
              this.nextElementSibling.classList.add('footer__card-body--active');
            }
          }

    footerButton.forEach(e => e.addEventListener('click', openCard));

  })();

  // filter 

  (function(){
    if(document.getElementById('filter') || document.getElementById('sort')) {
      const filterButton = document.getElementById('filterButton'),
            filterButtonsContainer = document.getElementById('filterButtonsContainer'),
            top = filterButtonsContainer.offsetTop,
            sortButton = document.getElementById('sortButton'),
            filterContainer = document.getElementById('filter'),
            sortContainer = document.getElementById('sort'),
            closeFilterButton = document.getElementById('closeFilter'),
            closeSortButton = document.getElementById('closeSort'),
            formFilter = document.getElementById('formFilter'),
            clearFormFilter = document.getElementById('clearFormFilter'),
            showMoreButton = document.querySelectorAll('.filter__more'),
            filterItems = document.querySelectorAll('.filter__item[data-show]'),
            body = document.querySelector('body');    

      // get filter buttons fixed on top on scroll page    
      window.onscroll = function(ev) {
      
        if ((window.innerHeight + window.pageYOffset - top ) >= screen.height) {
          filterButtonsContainer.classList.add('fixedTop');
        } else {
          filterButtonsContainer.classList.remove('fixedTop');
        }
              
      };
      

      function openSort() {
        sortContainer.setAttribute('style','opacity: 1; transform: translateY(0)');
        body.classList.add('hidden');
      }

      function closeFilter() {
        filterContainer.setAttribute('style','opacity: 0; transform: translateY(100vh)');
        body.classList.remove('hidden');
      }

      function closeSort() {
        sortContainer.setAttribute('style','opacity: 0; transform: translateY(100vh)');
        body.classList.remove('hidden');
      }

      function showMore() {
        const item = this.parentNode.querySelectorAll('.filter__item[data-show]');

        if(this.getAttribute('data-status') === 'true') {
          item.forEach(e => e.setAttribute('data-show', 'false'));
          this.setAttribute('data-status', 'false');
          this.textContent = '+ Show more'
        } else {
          item.forEach(e => e.setAttribute('data-show', 'true'));
          this.setAttribute('data-status', 'true');
          this.textContent = '- Show less'
        }
      }

      if(filterButton) {

        // open filter
        filterButton.addEventListener('click', openFilter);

        //close filter
        closeFilterButton.addEventListener('click', closeFilter);

        // Reset Filter form 
        clearFormFilter.addEventListener('click', () => formFilter.reset());

        document.addEventListener("click", (e) => {
          let isClickInside = filterContainer.contains(e.target);
          
          if (e.target !== filterButton && !isClickInside) {
            closeFilter();
          }
        })
      }


      // open sort
      sortButton.addEventListener('click', openSort);
      

      
      //close sort
      closeSortButton.addEventListener('click', closeSort);
      

      
      // Show more items
      showMoreButton.forEach(e => e.addEventListener('click', showMore));


      // close menu on click outside menu

      document.addEventListener("click", (e) => {
        let isClickInsideSort = sortContainer.contains(e.target);
        
        if(e.target !== sortButton && !isClickInsideSort) {
          closeSort();
        } 
      })

    }
  })();

  // Sliders 

  (function(){
    const slider = document.querySelectorAll('.slider');

    $('.slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      centerMode: true,
      variableWidth: true,
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 574,
          settings: {
            slidesToShow: 1,
            variableWidth: false
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            variableWidth: false
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            variableWidth: false
          }
        }
      ]
    });

    $('.testimonials__slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      centerMode: true,
      arrows: false,
      dots: true,
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3
          }
        }
      ]
    })
  })();

  // anchors on product 

  (function(){
    let anchorItems = document.querySelectorAll('.anchors__item');

    if(anchorItems) {
      anchorItems.forEach(e => {
        e.addEventListener("click", (e) => {
          anchorItems.forEach(e => e.classList.remove('anchors__item-active'));
          e.target.classList.add('anchors__item-active');
        })
      })
    }
  })();
  
  //Modal

  (function(){

    document.addEventListener("click", (e) => {
      if(e.target.getAttribute("data-toggle") === 'modal') {
        const id = e.target.getAttribute('data-target');
        openModal(id);
      } else if(e.target.closest('[data-toggle="modal"')) {
        const id = e.target.closest('[data-toggle="modal"]').getAttribute('data-target');
        openModal(id);
      } else {
        return
      }
    });

    function openModal(id) {
      closeModal();
      const target = document.getElementById(id),
            body = document.querySelector('body'),
            node = document.createElement('div'),
            closeModalButton = target.querySelectorAll('[data-dismiss="modal"]');

      body.classList.add('hiddenModal');
      body.appendChild(node);
      node.classList.add('backdrop');
      node.classList.add('show');
      target.classList.add('show');
      
      closeOnClickBack(target);

      closeModalButton.forEach(e => e.addEventListener('click', closeModal));
    }

    function closeModal() {
      const backdrop = document.querySelector('.backdrop'),
            modal = document.querySelectorAll('.modal'),
            body = document.querySelector('body');

      body.classList.remove('hiddenModal');
      modal.forEach(e => e.classList.remove('show'))
      backdrop && backdrop.remove();
    }

    // click on backdrop hide modal
    function closeOnClickBack (targetModal) {
      targetModal.addEventListener('click', function(e) {
        if(e.target === this) {
          closeModal();
        }
      })
    }
  })();

  //cabinet page 

  (function(){
    let passButton = document.getElementById('passwordChangeButton')

    function togglePasswordBlock() {
      
      if(this.classList.contains('active')) {
        this.nextElementSibling.style.height = "0";
        this.classList.remove('active')
      } else {
        this.nextElementSibling.style.height = "auto";
        this.classList.add('active')
      }
    }
    passButton && passButton.addEventListener("click", togglePasswordBlock);
  })();

  // auth modal 

  (function(){
    const tabs = document.querySelectorAll('.authTabs__tab'),
    containers = document.querySelectorAll('.authTabs__item');

    

    tabs.forEach(e => e.addEventListener("click", e => {
      const targetId = e.target.getAttribute('data-target');
      containers.forEach(e => e.classList.remove('active-tab'));
      tabs.forEach(e => e.classList.remove('active-tab'));
      document.getElementById(targetId).classList.add('active-tab');
      e.target.classList.add('active-tab');
    }))
  })();

  // accordeon 

  (function(){
    const accordeonItems = document.querySelectorAll('.accordeon__item');

    accordeonItems.forEach(e => e.addEventListener('click', openAccordeon));

    function openAccordeon() {
      if(this.classList.contains('open')) {
        this.classList.remove('open');
      } else {
        accordeonItems.forEach(e => e.classList.remove('open'));
        this.classList.add('open');
      }
    }
  })();
})

