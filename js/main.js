/*
 * show pass
 * otp input
 * delete Item
 * back Page
 * clear Text
 * message
 * gallery
 * image select
 * active Suggestions
 * change value
 * load more
 * check item
 * touch spin
 * show notification
 * preloader 
 * hide popup 
 * touchSpin
 * preloader 
 * tree view

 */
(function ($) {
  "use strict";

  /* show pass
  ------------------------------------------------------------------------------------- */
  var showPass = function () {
    $(".show-pass").on("click", function () {
      $(this).toggleClass("active");
      if ($(".password-field").attr("type") == "password") {
        $(".password-field").attr("type", "text");
      } else if ($(".password-field").attr("type") == "text") {
        $(".password-field").attr("type", "password");
      }
    });

    $(".show-pass2").on("click", function () {
      $(this).toggleClass("active");
      if ($(".password-field2").attr("type") == "password") {
        $(".password-field2").attr("type", "text");
      } else if ($(".password-field2").attr("type") == "text") {
        $(".password-field2").attr("type", "password");
      }
    });
    $(".show-pass3").on("click", function () {
      $(this).toggleClass("active");
      if ($(".password-field3").attr("type") == "password") {
        $(".password-field3").attr("type", "text");
      } else if ($(".password-field3").attr("type") == "text") {
        $(".password-field3").attr("type", "password");
      }
    });
    $(".show-pass4").on("click", function () {
      $(this).toggleClass("active");
      if ($(".password-field4").attr("type") == "password") {
        $(".password-field4").attr("type", "text");
      } else if ($(".password-field4").attr("type") == "text") {
        $(".password-field4").attr("type", "password");
      }
    });
  };

  /* otp input
  ------------------------------------------------------------------------------------- */
  var otpInput = function () {
    if ($(".digit-group").length > 0) {
      $(".digit-group")
        .find("input")
        .each(function () {
          $(this).attr("maxlength", 1);
          $(this).on("keyup", function (e) {
            var valNum = $(this).val();
            var parent = $($(this).parent());

            if (e.keyCode === 8 || e.keyCode === 37) {
              var prev = parent.find("input#" + $(this).data("previous"));

              if (prev.length) {
                $(prev).select();
              }
            } else if (
              (e.keyCode >= 48 && e.keyCode <= 57) ||
              (e.keyCode >= 65 && e.keyCode <= 90) ||
              (e.keyCode >= 96 && e.keyCode <= 105) ||
              e.keyCode === 39
            ) {
              var next = parent.find("input#" + $(this).data("next"));
              if (!$.isNumeric(valNum)) {
                $(this).val("");
                return false;
              }

              if (next.length) {
                $(next).select();
              } else {
                if (parent.data("autosubmit")) {
                  parent.submit();
                }
              }
            }
          });
        });
    }
  };

  /* delete Item 
  ------------------------------------------------------------------------------------- */
  var delItem = function () {
    if ($("div").hasClass("list-history")) {
      $(".del-item").on("click", function () {
        this.closest(".list-history").remove();
      });
    }
  };
  /* progress circle  
  ------------------------------------------------------------------------------------- */
  var progressCircle = function () {
    $(".circle_percent").each(function () {
      var $this = $(this),
        $dataV = $this.data("percent"),
        $dataDeg = $dataV * 3.6,
        $round = $this.find(".round_per");
      $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
      $this.append(
        '<div class="circle_inbox"><span class="percent_text"></span></div>'
      );
      $this.prop("Counter", 0).animate(
        { Counter: $dataV },
        {
          duration: 2000,
          easing: "swing",
          step: function (now) {
            $this.find(".percent_text").text(Math.ceil(now) + "%");
          },
        }
      );
      if ($dataV >= 51) {
        $round.css("transform", "rotate(" + 360 + "deg)");
        setTimeout(function () {
          $this.addClass("percent_more");
        }, 1000);
        setTimeout(function () {
          $round.css(
            "transform",
            "rotate(" + parseInt($dataDeg + 180) + "deg)"
          );
        }, 1000);
      }
    });
  };
  /* input file 
  ------------------------------------------------------------------------------------- */
  var flcustominput = function () {
    $("input[type=file]").change(function (e) {
      $(this)
        .parents(".uploadfile")
        .find(".file-name")
        .text(e.target.files[0].name);
    });
  };

  /* back Page
  ------------------------------------------------------------------------------------- */
  var backPage = function () {
    $(".back-btn").on("click", function (e) {
      e.stopPropagation();
      e.preventDefault();
      window.history.go(-1);
    });
  };

  /* clear Text
  ------------------------------------------------------------------------------------- */
  var clearText = function () {
    $(".icon-cancel").on("click", function () {
      $(".ip-field").val("");
    });
  };
  /* message
  ------------------------------------------------------------------------------------- */
  var handleMessage = function () {
    $(".btn-message").on("click", function () {
      var ipMessage = $(".ip-message");
      var messValue = ipMessage.val();
      var currentTime = new Date();
      var hours = currentTime.getHours() >= 12 ? "PM" : "AM";
      var realTime =
        (currentTime.getHours() % 12) +
        ":" +
        currentTime.getMinutes() +
        " " +
        hours;

      var domMessage =
        '<div class="bubble bubble-me box-buble-me">' +
        '<div class="content">' +
        '<span class="time">' +
        realTime +
        "</span>" +
        '<p class="start">' +
        messValue +
        "</p>" +
        "</div>" +
        "</div>";

      if (messValue.length > 0) {
        $(".chat-area").append(domMessage);
      }

      window.scrollTo(0, document.body.scrollHeight);
      ipMessage.val("");
    });
  };
  /* gallery
  ------------------------------------------------------------------------------------- */
  var lightGalleryBox = function () {
    if ($("#lightgallery").length > 0) {
      lightGallery(document.getElementById("lightgallery"), {
        plugins: [lgZoom, lgThumbnail],
      });
    }
    if ($("#lightgallery2").length > 0) {
      lightGallery(document.getElementById("lightgallery2"), {
        plugins: [lgZoom, lgThumbnail],
      });
    }
    if ($("#lightgallery3").length > 0) {
      lightGallery(document.getElementById("lightgallery3"), {
        plugins: [lgZoom, lgThumbnail],
      });
    }
  };

  /* image select
  ------------------------------------------------------------------------------------- */
  var selectImages = function () {
    if ($(".image-select").length > 0) {
      const selectIMG = $(".image-select");
      selectIMG.find("option").each((idx, elem) => {
        const selectOption = $(elem);
        const imgURL = selectOption.attr("data-thumbnail");
        if (imgURL) {
          selectOption.attr(
            "data-content",
            "<img src='%i'/> %s"
              .replace(/%i/, imgURL)
              .replace(/%s/, selectOption.text())
          );
        }
      });
      selectIMG.selectpicker();
    }
  };

  /* active Suggestions
  ------------------------------------------------------------------------------------- */
  var activeSuggest = function () {
    if ($("div").hasClass("language")) {
      $(".item-check").on("click", function () {
        $(this)
          .parents(".language")
          .find(".item-check.active")
          .removeClass("active");
        $(this).addClass("active");
      });
    }

    $(".act-suggest").click(function () {
      $(".act-suggest.active").removeClass("active");
      $(this).toggleClass("active");
    });
    $(".fc-daygrid-day-frame").click(function () {
      $(".fc-daygrid-day-frame.active").removeClass("active");
      $(this).toggleClass("active");
    });
  };

  /* change value
  ------------------------------------------------------------------------------------- */
  var changeValue = function () {
    $(".language-val").click(function () {
      $(".text-val-language").text($(this).text());
    });

    $(".val-access").click(function (event) {
      $(".text-val-access").text($(this).find(".title-access").text());
      $(".desc-val-access").text($(this).find(".desc-access").text());
    });
  };

  var handleCalendar = function () {
    $("#calendarStart").on("shown.bs.modal", function () {
      $("#calendar-start").fullCalendar("render");
    });
  };

  /* load more
  ------------------------------------------------------------------------------------- */
  var loadmore = function () {
    if ($("ul").hasClass("loadmore-item")) {
      $(".fl-item").slice(0, 9).show();
      $("#button-loadmore").on("click", function (e) {
        console.log("Loadin");
        e.preventDefault();
        $(".fl-item:hidden").slice(0, 3).slideDown();
        if ($(".fl-item:hidden").length == 0) {
          $("#button-loadmore").hide();
        }
      });
    }
  };
  /* check item
  -------------------------------------------------------------------------------- */
  var checkAllItem = function () {
    $("#checkCartAll").click(function () {
      $(":checkbox.checkItem").prop("checked", this.checked);
    });
    $(".del-cartAll").click(function () {
      $(":checkbox.checkItem, :checkbox#checkCartAll").prop("checked", false);
    });
  };

  /* touch spin
  ----------------------------------------------------------------------------------------- */
  var touchSpin = function () {
    if ($(".stepper").length > 0) {
      $(".stepper").TouchSpin();
    }
  };

  /* preloader 
  ------------------------------------------------------------------------------------- */
  var preloader = function () {
    setTimeout(function () {
      $(".preload").fadeOut("slow", function () {
        $(this).remove();
      });
    }, 200);
  };

  /* modal click handler
  ------------------------------------------------------------------------------------- */
  var clickModalSecond = function () {
    $(".btn-choose-page").click(function () {
      $("#modalPage").modal("show");
    });
    $(".btn-choose-component").click(function () {
      $("#modalComponent").modal("show");
    });
  };

  /* tree view
  ------------------------------------------------------------------------------------- */
  var treeView = function () {
    if ($("#treeview1").length > 0) {
      $("#treeview1").jstree({
        plugins: ["dnd", "types"],
      });
    }
    if ($("#treeview2").length > 0) {
      $("#treeview2").jstree({
        plugins: ["dnd", "wholerow", "checkbox", "types"],
      });
    }
  };
  /* tab slide 
  ------------------------------------------------------------------------------------- */
  var tabSlide = function () {
    if ($(".tab-slide").length > 0) {
      var $1 = $(".tab-slide li.active").width();
      var $2 = $(".tab-slide li.active").position().left;
      $(".nav-item-slide").css({
        width: $1,
        transform: "translateX(" + $2 + "px)",
      });
      $(".tab-slide li").on("click", function () {
        var itemTab = $(this).parent().find("li");
        $(itemTab).removeClass("active");
        $(this).addClass("active");
        var $3 = $(this).width();
        var $4 = $(this).position().left;
        var sideEffect = $(this).parent().find(".item-slide-effect");
        $(sideEffect).css({ width: $3, transform: "translateX(" + $4 + "px)" });
      });
    }
  };

  $(function () {
    showPass();
    otpInput();
    delItem();
    backPage();
    clearText();
    handleMessage();
    lightGalleryBox();
    activeSuggest();
    selectImages();
    loadmore();
    touchSpin();
    treeView();
    changeValue();
    checkAllItem();
    progressCircle();
    clickModalSecond();
    flcustominput();
    tabSlide();
    // handleCalendar();
    preloader();
  });
})(jQuery);
