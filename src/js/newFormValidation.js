$(document).ready(function () {
    // console.log($(".language-selector-container").find('.active').html().toLowerCase())
    
    var t,
        e = $(".language-selector-container").find('.active').html().toLowerCase(),
        s = (document.querySelector("html").clientWidth, document.getElementById("userDomain")),
        a = document.getElementById("domenTagLeft"),
        l = document.getElementById("domenTagRight");
    $("#userDomain").attr('placeholder', e == 'ru' ? 'Придумайте название CRM-кабинета' : 'Придумайте назву CRM-кабінету');
    // $("#userMail").attr('placeholder', e == 'ru' ? 'Придумайте название CRM-кабинета' : 'Придумайте назву CRM-кабінету')
    // $("#userTel").attr('placeholder', e == 'ru' ? 'Придумайте название CRM-кабинета' : 'Придумайте назву CRM-кабінету')
    $("#userName").attr('placeholder', e == 'ru' ? 'Ваше имя' : 'Ваше i\'\мя');
    
    // setInterval(function () {
    //     s.value = s.value.replace(/[^a-zA-Z0-9]/i, "");
    // }, 200),
        $("#userDomain").on("keyup", function () {
            (this.value = this.value.replace(/[^a-zA-Z0-9]/i, "")),
                (this.value = this.value.replace(/[A-Z]/g, function (e) {
                    return e.toLowerCase();
                }));
        }),
        (s.onfocus = function () {
            this.setAttribute("placeholder", ""), this.classList.add("userInpDomain"), a.setAttribute("style", "display:block;"), l.setAttribute("style", "display:block;");
        }),
        $("#userDomain").on("keyup", function (e) {
            var s = $("#userDomain").val();
            3 <= s.length
                ? ((t = t && clearTimeout(t)),
                  (t = setTimeout(function () {
                      $.ajax({
                          url: "../../create/check_domain.php",
                          method: "POST",
                          data: { domain: s, op: "check_domain" },
                          success: function (e) {
                              "ok" === e
                                  ? ($("#domenTrue").attr("style", "display:block;"), $("#domenFalse").attr("style", "display:none;"), $("#userDomain").addClass("succes"), $("#userDomain").removeClass("error"))
                                  : ($("#domenTrue").attr("style", "display:none;"), $("#domenFalse").attr("style", "display:block;"), $("#userDomain").addClass("error"), $("#userDomain").removeClass("succes"));
                          },
                      });
                  }, 300)))
                : s.length < 3 && (null != t && clearTimeout(t), $("#domenTrue").attr("style", "display:none;"), $("#domenFalse").attr("style", "display:block;"), $("#userDomain").addClass("error"), $("#userDomain").removeClass("succes"));
        }),
        $("#userDomain").blur(function () {
            "ru" == e ? $(this).attr("placeholder", "Придумайте название CRM-кабинета") : "ua" == e && $(this).attr("placeholder", "Придумайте назву CRM-кабінету"),
                ("" != this.value && null != this.value && !$("#userDomain").hasClass("error")) ||
                    ($("#userDomain").val(""), $("#userDomain").removeClass("error"), $("#domenFalse").attr("style", "display:none;"), $(".domenTag").attr("style", "display:none;"), $("#userDomain").removeClass("userInpDomain"));
        });
    var n = document.getElementById("userMail");
    (n.onfocus = function () {
        this.setAttribute("placeholder", ""), this.classList.add("userInpEmail");
        $(this).siblings('.tooltip').fadeIn(300)

    }),
        (n.onblur = function () {
            ("ru" != e && "ua" != e) || this.setAttribute("placeholder", "Ваш E-mail"),
                ("" != this.value && null != this.value && !$("#userMail").hasClass("error")) || ($("#userMail").val(""), $("#userMail").removeClass("error"), $("#emailFalse").attr("style", "display:none;"));
            $(this).siblings('.tooltip').fadeOut(300)
        });
    var r = $("#userMail"),
        i = r[0].selectionStart,
        u = r.val();
    r.inputmask({ mask: "*{1,50}[.*{1,50}][.*{1,50}]@*{1,50}.*{1,20}[.*{1,20}][.*{1,20}]", greedy: !1, clearIncomplete: !0, showMaskOnHover: !1, definitions: { "*": { validator: "[^_@.]" } } }).on("keyup paste", function () {
        this.value && /[^_a-zA-Z0-9@\-.]/i.test(this.value) ? ((this.value = u), this.setSelectionRange(i, i), r.trigger("input")) : ((i = this.selectionStart), (u = this.value));
    }),
        (check = !1),
        $("#userMail").on("keyup", function (e) {
            var s = $("#userMail").val();
            null !== s.match(/^[a-zA-Z0-9-.]+\@[a-zA-Z0-9-\.]+\.[a-zA-Z0-9-]{2,}$/gim)
                ? ((timerCheck2 = setTimeout(function () {
                      $.ajax({
                          url: "../../create/check_email.php",
                          method: "POST",
                          data: { email: s, op: "check_email" },
                          success: function (e) {
                              (e = e.split("|")),
                                  "ok" === e[0]
                                      ? ($("#emailTrue").attr("style", "display:block;"), $("#emailFalse").attr("style", "display:none;"), $("#userMail").addClass("succes"), $("#userMail").removeClass("error"))
                                      : ($("#emailTrue").attr("style", "display:none;"), $("#emailFalse").attr("style", "display:block;"), $("#userMail").addClass("error"), $("#userMail").removeClass("succes"));
                          },
                      });
                  }, 300)),
                  (check = !0))
                : 1 == check &&
                  ("undefined" != typeof timerCheck2 && null !== timerCheck2 && clearTimeout(timerCheck2),
                  $("#emailTrue").attr("style", "display:none;"),
                  $("#emailFalse").attr("style", "display:block;"),
                  $("#userMail").addClass("error"),
                  $("#userMail").removeClass("succes"));
        });
    document.getElementById("userTel");
    $("#userTel").focus(function () {
        $(".select-country").addClass("active2"), $("#userTel").addClass("ready");
        $(this).siblings('.tooltip').fadeIn(300)
    });
    var o = document.querySelector("#userTel");
    function c() {
        "" == $("#userTel").val() &&
            (
                ("ru" != e && "ua" != e) || $("#userTel").attr("placeholder", "Ваш телефон"),
                 $(".select-country").removeClass("active2"), $("#userTel").removeClass("ready"), 
                 $(".select-country__list").attr("style", "display:none;")
            );
    }
    (o.onblur = function () {
        setTimeout(c, 10);
        $(this).siblings('.tooltip').fadeOut(300)
    }),
        (document.querySelector(".select-country").onmousedown = function (e) {
            document.activeElement === o && e.preventDefault();
        }),
        (document.querySelector(".select-country__list").onmousedown = function (e) {
            $("#userTel").val(""), $("#userTel").attr("placeholder", ""), document.activeElement === o && e.preventDefault();
        }),
        $(".select-country").click(function (e) {
            // console.log(e.target.className.split(" "))
            var s, t;
            (s = e.target.className.split(" ")),
                (t = $(".select-country")),
                 t.hasClass("active")
                    ? (t.removeClass("active"), $(".select-country__list").fadeOut(100))
                    : (t.addClass("active"), $(".select-country__list").fadeIn(100));
        }),
        $(".select-country__item").click(function () {
            $(this).parents().siblings(".select-country").hasClass("ua")
                ? $(this).parents().siblings(".select-country").removeClass("ua")
                : $(this).parents().siblings(".select-country").hasClass("ru")
                ? $(this).parents().siblings(".select-country").removeClass("ru")
                : $(this).parents().siblings(".select-country").hasClass("by")
                ? $(this).parents().siblings(".select-country").removeClass("by")
                : $(this).parents().siblings(".select-country").hasClass("kz") && $(this).parents().siblings(".select-country").removeClass("kz");
            var e = $(this).data("country");
            $(this).parents().siblings(".select-country").addClass(e),
                $(this).parents().siblings(".select-country").hasClass("ua")
                    ? ($("input[name='country']").val("UA"),
                      Inputmask.extendDefinitions({ "~": { validator: "[1245679]" } }),
                      $("input[name='phone']").inputmask({ mask: "+38 (0~9) 999-99-99", greedy: !1, clearIncomplete: !0, placeholder: "_", rightAlign: !1, showMaskOnHover: !1, showMaskOnFocus: !0 }))
                    : $(this).parents().siblings(".select-country").hasClass("ru")
                    ? ($("input[name='country']").val("RU"),
                      Inputmask.extendDefinitions({ "~": { validator: "[123456789]" }, k: { validator: "[1234569]" } }),
                      $("input[name='phone']").inputmask({ mask: "+7 (k~9) 999-99-99", greedy: !1, clearIncomplete: !0, placeholder: "_", rightAlign: !1, showMaskOnHover: !1, showMaskOnFocus: !0 }))
                    : $(this).parents().siblings(".select-country").hasClass("by")
                    ? ($("input[name='country']").val("BY"),
                      Inputmask.extendDefinitions({ "~": { validator: "[3459]" }, k: { validator: "[234]" } }),
                      $("input[name='phone']").inputmask({ mask: "+375 (k~) 999-99-99", greedy: !1, clearIncomplete: !0, placeholder: "_", rightAlign: !1, showMaskOnHover: !1, showMaskOnFocus: !0 }))
                    : $(this).parents().siblings(".select-country").hasClass("kz") &&
                      ($("input[name='country']").val("KZ"),
                      Inputmask.extendDefinitions({ k: { validator: "[7]" } }),
                      $("input[name='phone']").inputmask({ mask: "+7 (k99) 999-99-99", greedy: !1, clearIncomplete: !0, placeholder: "_", rightAlign: !1, showMaskOnHover: !1, showMaskOnFocus: !0 })),
                $(this).parents().siblings(".select-country").removeClass("active"),
                $(".select-country__list").fadeOut("slow");
        }),
        Inputmask.extendDefinitions({ "~": { validator: "[1245679]" } }),
        $("input[name='phone']").inputmask({ mask: "+38 (0~9) 999-99-99", greedy: !1, clearIncomplete: !0, placeholder: "_", rightAlign: !1, showMaskOnHover: !1, showMaskOnFocus: !0 });
    // var m = document.getElementById("userName");
    // setInterval(function () {
    //     m.value = m.value.replace(/[^а-яА-ЯёЁіІїЇєЄ-\s]/i, "");
    // }, 200),
    //     $("#userName").focus(function () {
    //         $(this).attr("placeholder", "");
    //     }),
    //     $("#userName").blur(function () {
    //         "ru" == e ? $(this).attr("placeholder", "Ваше имя") : "ua" == e && $(this).attr("placeholder", "Ваше ім'я");
    //     }),
    //     $("#userName").on("keyup", function () {
    //         (this.value = this.value.replace(/[^а-яА-ЯёЁіІїЇєЄ-\s]/i, "")),
    //             (this.value = this.value.replace(/^-/, "")),
    //             (this.value = this.value.replace(/-+/g, "-")),
    //             (this.value = this.value.replace(/\s+/g, " ")),
    //             (this.value = this.value.replace(/\s-/g, "-")),
    //             (this.value = this.value.replace(/-\s/g, "-"));
    //     }),
    //     m.addEventListener("input", function () {
    //         var e, s;
    //         (e = this),
    //             (m.value = e.value.replace(/[A-ZА-ЯІЇЁЄ]/g, function (e) {
    //                 return e.toLowerCase();
    //             })),
    //             ((s = this).value = s.value.replace(/( |^|-)[a-zа-яёіїє]/g, function (e) {
    //                 return e.toUpperCase();
    //             })),
    //             (function () {
    //                 var e = m.value;
    //                 {
    //                     var s;
    //                     (result = e.match(/\s/g)), null === result || (3 <= result.length && (((s = e.split(" "))[0] = s[0] + " "), (s[1] = s[1] + " "), (s[2] = s[2] + " "), (m.value = s.join(""))));
    //                 }
    //             })(),
    //             (function () {
    //                 var e = m.value;
    //                 {
    //                     var s;
    //                     (result = e.match(/\-/g)), null === result || (1 <= result.length && (((s = e.split("-"))[0] = s[0] + "-"), (m.value = s.join(""))));
    //                 }
    //             })();
    //     });
});
