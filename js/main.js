const photoFolders = {
  paris: [
    {
      small: "p1_small.jpg",
      large: "p1.jpg",
    },
    {
      small: "p2_small.jpg",
      large: "p2.jpg",
    },
    {
      small: "p3_small.jpg",
      large: "p3.jpg",
    },
    {
      small: "p4_small.jpg",
      large: "p4.jpg",
    },
    {
      small: "p5_small.jpg",
      large: "p5.jpg",
    },
    {
      small: "p6_small.jpg",
      large: "p6.jpg",
    },
    {
      small: "p7_small.jpg",
      large: "p7.jpg",
    },
    {
      small: "p8_small.jpg",
      large: "p8.jpg",
    },
  ],
  amsterdam: [
    {
      small: "a1_small.jpg",
      large: "a1.jpg",
    },
    {
      small: "a2_small.jpg",
      large: "a2.jpg",
    },
    {
      small: "a3_small.jpg",
      large: "a3.jpg",
    },
    {
      small: "a4_small.jpg",
      large: "a4.jpg",
    },
    {
      small: "a5_small.jpg",
      large: "a5.jpg",
    },
    {
      small: "a6_small.jpg",
      large: "a6.jpg",
    },
    {
      small: "a7_small.jpg",
      large: "a7.jpg",
    },
  ],
  Schweiz: [
    {
      small: "sch1_small.jpg",
      large: "sch1.jpg",
    },
    {
      small: "sch2_small.jpg",
      large: "sch2.jpg",
    },
    {
      small: "sch3_small.jpg",
      large: "sch3.jpg",
    },
    {
      small: "sch4_small.jpg",
      large: "sch4.jpg",
    },
    {
      small: "sch5_small.jpg",
      large: "sch5.jpg",
    },
  ],
  milano: [
    {
      small: "m1_small.jpg",
      large: "m1.jpg",
    },
    {
      small: "m2_small.jpg",
      large: "m2.jpg",
    },
    {
      small: "m3_small.jpg",
      large: "m3.jpg",
    },
  ],
  brussel: [
    {
      small: "b1_small.jpg",
      large: "b1.jpg",
    },
    {
      small: "b2_small.jpg",
      large: "b2.jpg",
    },
    {
      small: "b3_small.jpg",
      large: "b3.jpg",
    },
    {
      small: "b4_small.jpg",
      large: "b4.jpg",
    },
    {
      small: "b5_small.jpg",
      large: "b5.jpg",
    },
    {
      small: "b6_small.jpg",
      large: "b6.jpg",
    },
    {
      small: "b7_small.jpg",
      large: "b7.jpg",
    },
  ],
};

$(document).ready(function () {
  const $galleryContainer = $("#gallery-container");
  let counter = 1;

  $.each(photoFolders, function (folder, photos) {
    // Grupper für jeder Land/Stadt
    const $groupContainer = $("<div>", {
      class: "gallery-group",
    });
    const $title = $("<h3>", {
      text: folder.charAt(0).toUpperCase() + folder.slice(1), // Überschrift mit dem Namen der Stadt
      id: `city-title-${counter}`,
    });

    const $gallery = $("<div>", {
      class: "gallery",
    });

    // Bilder zur Galerie hinzufügen
    $.each(photos, function (index, photo) {
      const $imgElement = $("<a>", {
        href: `images/${folder}/${photo.large}`, // Link zum großen Bild
        "data-lightbox": "gallery",
        "data-title": `${folder.charAt(0).toUpperCase() + folder.slice(1)} - ${
          photo.large
        }`,
      }).append(
        $("<img>", {
          src: `images/${folder}/${photo.small}`,
          alt: photo.large,
        })
      );

      $gallery.append($imgElement);
    });

    // Fügen der Gruppe eine Kopfzeile und eine Galerie hinzu
    $groupContainer.append($title).append($gallery);
    // Hinzufügen im container
    $galleryContainer.append($groupContainer);

    counter++;
  });
});

//top-button-------------------------------------
$(document).ready(function () {
  // Eine Funktion, die einer Seite eine Schaltfläche hinzufügt
  function createScrollButton() {
    $("body").append(
      '<a href="#" class="scroll-to-top"><i class="arrow-up">&#9650;</i></a>'
    );

    // Scrollen auf der Seite beim Klicken auf die button
    $(".scroll-to-top").click(function (e) {
      e.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, "280");
    });
  }

  // Prüfen, ob die button zur Seite hinzugefügt wurde
  let isButtonAdded = false;

  $(window).scroll(function () {
    if ($(this).scrollTop() > 280) {
      if (!isButtonAdded) {
        createScrollButton(); //
        isButtonAdded = true;
      }
      $(".scroll-to-top").addClass("show");
    } else {
      $(".scroll-to-top").removeClass("show");
    }
  });
});
//header-menu---------------------------------------
$(document).ready(function () {
  var logo = $(".logo_img");
  var header = $(".header-main, .header-main_all");
  var originalLogoWidth = logo.css("max-width");

  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      logo.css("max-width", "6rem"); // Verkleiner Logo
      header.addClass("sticky");
    } else {
      logo.css("max-width", originalLogoWidth); // Logo originale
      header.removeClass("sticky");
    }
  });

  //  $("a").attr("target", "_blank");
});

//touren.html------------------------------

function openTab(evt, tabName) {
  // Alle Tab-Elemente ausblenden
  var tabContents = document.getElementsByClassName("tab-content");
  for (var i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = "none";
  }

  // Entfernen die aktive class aus allen tab
  var tabs = document.getElementsByClassName("tab");
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].className = tabs[i].className.replace(" active", "");
  }

  // Die aktuelle Tab anzeigen und die aktive Klasse hinzufügen
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

//Beim Start der Seite automatisch die erste Rubrik öffnen
document.addEventListener("DOMContentLoaded", function () {
  openTab(new Event("click"), "tab1");
});

const tabItemGalerie = document.querySelectorAll(".tabs_btn-item");
const tabContent = document.querySelectorAll(".tabs_content-item");

tabItemGalerie.forEach(function (element) {
  element.addEventListener("click", open);
});

function open(event) {
  const tabTarget = event.currentTarget;
  const button = tabTarget.dataset.button;

  tabItemGalerie.forEach(function (item) {
    item.classList.remove("tabs_btn-item-active");
  });

  tabTarget.classList.add("tabs_btn-item-active");

  tabContent.forEach(function (item) {
    item.classList.remove("tabs_content-item-active");
  });
  document
    .querySelector(`#${button}`)
    .classList.add("tabs_content-item-active");
}

//sweiper index.html------------------------------------------------------
var swiper = new Swiper(".mySwiper", {
  effect: "fade",
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: true,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
