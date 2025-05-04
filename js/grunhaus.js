//NAVBAR TOGGLE ICON ANIMATION
$(document).ready(function () {
  $(document).on("click", ".cta", function () {
    $(this).toggleClass("active");
  });
});

//REVEAL ANIMATION
$(".has-animation").each(function (index) {
  if (
    $(window).scrollTop() + $(window).height() >
    $(this).offset().top + $(this).outerHeight()
  ) {
    $(this)
      .delay($(this).data("delay"))
      .queue(function () {
        $(this).addClass("animate-in");
      });
  }
});

$(window).scroll(function () {
  $(".has-animation").each(function (index) {
    if ($(window).scrollTop() + $(window).height() > $(this).offset().top) {
      $(this)
        .delay($(this).data("delay"))
        .queue(function () {
          $(this).addClass("animate-in");
        });
    }
  });
});

//SHOP CATEGORY FILTER FUNCTION
$(document).ready(function () {
  $(".btn-filter").on("click", function () {
    const filterClass = $(this).data("filter");
    $(".filter-item").hide(); // hide all
    $("." + filterClass).show(); // show only matched
  });

  $(".btn-reset").on("click", function () {
    $(".filter-item").show(); // show all
  });
});

//PRODUCT THUMBNAIL INTERACTION
$(document).ready(function () {
  $(".thumbnail-img").on("click", function () {
    const newSrc = $(this).data("large");
    const $mainImage = $("#mainImage");

    if ($mainImage.attr("src") === newSrc) return;

    $(".thumbnail-img").removeClass("active");
    $(this).addClass("active");

    $mainImage.addClass("slide-right-out");

    setTimeout(() => {
      $mainImage.attr("src", newSrc);
      $mainImage.removeClass("slide-right-out").addClass("slide-in");

      setTimeout(() => {
        $mainImage.removeClass("slide-in");
      }, 400);
    }, 400);
  });
});
//QUANTITY ADD TO CART INTERACTION
$(document).ready(function () {
  const unitPrice = 19.99;

  $(".btn-minus").click(function () {
    const $input = $(this).closest(".quantity-group").find(".quantity-input");
    let value = parseInt($input.val()) || 1;
    if (value > 1) $input.val(value - 1);
  });

  $(".btn-plus").click(function () {
    const $input = $(this).closest(".quantity-group").find(".quantity-input");
    let value = parseInt($input.val()) || 1;
    if (value < 20) $input.val(value + 1);
  });

  $(".btn-add-to-cart").click(function () {
    const qty = parseInt($(".quantity-input").val()) || 1;
    const subtotal = (qty * unitPrice).toFixed(2);
    $("#cartQty").text(qty);
    $("#cartTotal").text(subtotal);
    $("#cartModal").modal("show");
  });
});
