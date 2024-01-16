$(document).ready(function () {
    var t = $('#in4'),
        e = t[0]?.selectionStart,
        i = t.val()
    t
        .inputmask({
            alias: 'email',
            greedy: !1,
            clearIncomplete: !0,
            showMaskOnHover: !1,
        })
        .on('keyup paste', function () {
            this.value && /[^_a-zA-Z0-9@\-.]/i.test(this.value)
                ? ((this.value = i), this.setSelectionRange(e, e))
                : ((e = this?.selectionStart), (i = this.value))
        }),
        document.getElementById('in3')
    var n = document.querySelector('#in3')
    function l() {
        '' == $('#in3').val() &&
            ($('.select-country').removeClass('active2'),
            $('#in3').removeClass('ready'),
            $('.select-country__list').attr('style', 'display:none;'))
    }
    ;(document.querySelector('.select-country').onmousedown = function (t) {
        document.activeElement === n && t.preventDefault()
    }),
        (document.querySelector('.select-country__list').onmousedown =
            function (t) {
                $('#in3').val(''),
                    $('#in3').attr('placeholder', ''),
                    document.activeElement === n && t.preventDefault()
            }),
        $('.select-country__item').click(function () {
            $(this).parents().siblings('.select-country').hasClass('ua')
                ? $(this)
                      .parents()
                      .siblings('.select-country')
                      .removeClass('ua')
                : $(this).parents().siblings('.select-country').hasClass('ru')
                ? $(this)
                      .parents()
                      .siblings('.select-country')
                      .removeClass('ru')
                : $(this).parents().siblings('.select-country').hasClass('by')
                ? $(this)
                      .parents()
                      .siblings('.select-country')
                      .removeClass('by')
                : $(this)
                      .parents()
                      .siblings('.select-country')
                      .hasClass('kz') &&
                  $(this)
                      .parents()
                      .siblings('.select-country')
                      .removeClass('kz')
            var t = $(this).data('country')
            $(this).parents().siblings('.select-country').addClass(t),
                $(this).parents().siblings('.select-country').hasClass('ua')
                    ? ($("input[name='country']").val('UA'),
                      Inputmask.extendDefinitions({
                          '~': {
                              validator: '[1245679]',
                          },
                      }),
                      $("input[name='phone']").inputmask({
                          mask: '+38 (0~9) 999-99-99',
                          greedy: !1,
                          clearIncomplete: !0,
                          placeholder: '_',
                          rightAlign: !1,
                          showMaskOnHover: !1,
                          showMaskOnFocus: !0,
                      }))
                    : $(this)
                          .parents()
                          .siblings('.select-country')
                          .hasClass('ru')
                    ? ($("input[name='country']").val('RU'),
                      Inputmask.extendDefinitions({
                          '~': {
                              validator: '[123456789]',
                          },
                          k: {
                              validator: '[1234569]',
                          },
                      }),
                      $("input[name='phone']").inputmask({
                          mask: '+7 (k~9) 999-99-99',
                          greedy: !1,
                          clearIncomplete: !0,
                          placeholder: '_',
                          rightAlign: !1,
                          showMaskOnHover: !1,
                          showMaskOnFocus: !0,
                      }))
                    : $(this)
                          .parents()
                          .siblings('.select-country')
                          .hasClass('by')
                    ? ($("input[name='country']").val('BY'),
                      Inputmask.extendDefinitions({
                          '~': {
                              validator: '[3459]',
                          },
                          k: {
                              validator: '[234]',
                          },
                      }),
                      $("input[name='phone']").inputmask({
                          mask: '+375 (k~) 999-99-99',
                          greedy: !1,
                          clearIncomplete: !0,
                          placeholder: '_',
                          rightAlign: !1,
                          showMaskOnHover: !1,
                          showMaskOnFocus: !0,
                      }))
                    : $(this)
                          .parents()
                          .siblings('.select-country')
                          .hasClass('kz') &&
                      ($("input[name='country']").val('KZ'),
                      Inputmask.extendDefinitions({
                          k: {
                              validator: '[7]',
                          },
                      }),
                      $("input[name='phone']").inputmask({
                          mask: '+7 (k99) 999-99-99',
                          greedy: !1,
                          clearIncomplete: !0,
                          placeholder: '_',
                          rightAlign: !1,
                          showMaskOnHover: !1,
                          showMaskOnFocus: !0,
                      })),
                $(this)
                    .parents()
                    .siblings('.select-country')
                    .removeClass('active'),
                $('.select-country__list').fadeOut('slow')
        }),
        Inputmask.extendDefinitions({
            '~': {
                validator: '[1245679]',
            },
        }),
        $("input[name='phone']").inputmask({
            mask: '+38 (0~9) 999-99-99',
            greedy: !1,
            clearIncomplete: !0,
            placeholder: '_',
            rightAlign: !1,
            showMaskOnHover: !1,
            showMaskOnFocus: !0,
        }),
        Inputmask.extendDefinitions({
            '~': {
                validator: '[1245679]',
            },
        }),
        $(document).ready(function () {
            $('input[name="name"]').on('keyup', function () {
                ;(this.value = this.value.replace(
                    /[^а-яА-ЯёЁіІїЇєЄ-\s]/gi,
                    ''
                )),
                    (this.value = this.value.replace(/^-/, '')),
                    (this.value = this.value.replace(/-+/g, '-')),
                    (this.value = this.value.replace(/\s+/g, ' ')),
                    (this.value = this.value.replace(/\s-/g, '-')),
                    (this.value = this.value.replace(/-\s/g, '-'))
            })
        })

    var t,
        s =
            (document.querySelector('html').clientWidth,
            document.getElementById('userDomain')),
        a = document.getElementById('domenTagLeft'),
        l = document.getElementById('domenTagRight')
    var e = 'ua'
    var n = document.getElementById('userMail')
    ;(n.onfocus = function () {
        this.setAttribute('placeholder', ''), this.classList.add('userInpEmail')
        $(this).siblings('.tooltip').fadeIn(300)
    }),
        (n.onblur = function () {
            ;('ru' != e && 'ua' != e) ||
                this.setAttribute('placeholder', 'Ваш E-mail'),
                ('' != this.value &&
                    null != this.value &&
                    !$('#userMail').hasClass('error')) ||
                    ($('#userMail').val(''),
                    $('#userMail').removeClass('error'),
                    $('#emailFalse').attr('style', 'display:none;'))
            $(this).siblings('.tooltip').fadeOut(300)
        })
    var r = $('#userMail'),
        i = r[0].selectionStart,
        u = r.val()
    r
        .inputmask({
            mask: '*{1,50}[.*{1,50}][.*{1,50}]@*{1,50}.*{1,20}[.*{1,20}][.*{1,20}]',
            greedy: !1,
            clearIncomplete: !0,
            showMaskOnHover: !1,
            definitions: { '*': { validator: '[^_@.]' } },
        })
        .on('keyup paste', function () {
            this.value && /[^_a-zA-Z0-9@\-.]/i.test(this.value)
                ? ((this.value = u),
                  this.setSelectionRange(i, i),
                  r.trigger('input'))
                : ((i = this.selectionStart), (u = this.value))
        }),
        (check = !1),
        $('#userMail').on('keyup', function (e) {
            var s = $('#userMail').val()
            null !==
            s.match(/^[a-zA-Z0-9-.]+\@[a-zA-Z0-9-\.]+\.[a-zA-Z0-9-]{2,}$/gim)
                ? ((timerCheck2 = setTimeout(function () {
                      $.ajax({
                          url: '../../create/check_email.php',
                          method: 'POST',
                          data: { email: s, op: 'check_email' },
                          success: function (e) {
                              ;(e = e.split('|')),
                                  'ok' === e[0]
                                      ? ($('#emailTrue').attr(
                                            'style',
                                            'display:block;'
                                        ),
                                        $('#emailFalse').attr(
                                            'style',
                                            'display:none;'
                                        ),
                                        $('#userMail').addClass('succes'),
                                        $('#userMail').removeClass('error'))
                                      : ($('#emailTrue').attr(
                                            'style',
                                            'display:none;'
                                        ),
                                        $('#emailFalse').attr(
                                            'style',
                                            'display:block;'
                                        ),
                                        $('#userMail').addClass('error'),
                                        $('#userMail').removeClass('succes'))
                          },
                      })
                  }, 300)),
                  (check = !0))
                : 1 == check &&
                  ('undefined' != typeof timerCheck2 &&
                      null !== timerCheck2 &&
                      clearTimeout(timerCheck2),
                  $('#emailTrue').attr('style', 'display:none;'),
                  $('#emailFalse').attr('style', 'display:block;'),
                  $('#userMail').addClass('error'),
                  $('#userMail').removeClass('succes'))
        })
    document.getElementById('userTel')
    $('#userTel').focus(function () {
        $('.select-country').addClass('active2'),
            $('#userTel').addClass('ready')
        $(this).siblings('.tooltip').fadeIn(300)
    })
    var o = document.querySelector('#userTel')
    function c() {
        '' == $('#userTel').val() &&
            (('ru' != e && 'ua' != e) ||
                $('#userTel').attr('placeholder', 'Ваш телефон'),
            $('.select-country').removeClass('active2'),
            $('#userTel').removeClass('ready'),
            $('.select-country__list').attr('style', 'display:none;'))
    }
    ;(o.onblur = function () {
        setTimeout(c, 10)
        $(this).siblings('.tooltip').fadeOut(300)
    }),
        (document.querySelector('.select-country').onmousedown = function (e) {
            document.activeElement === o && e.preventDefault()
        }),
        (document.querySelector('.select-country__list').onmousedown =
            function (e) {
                $('#userTel').val(''),
                    $('#userTel').attr('placeholder', ''),
                    document.activeElement === o && e.preventDefault()
            }),
        $('.select-country').click(function (e) {
            // console.log(e.target.className.split(" "))
            var s, t
            ;(s = e.target.className.split(' ')),
                (t = $('.select-country')),
                t.hasClass('active')
                    ? (t.removeClass('active'),
                      $('.select-country__list').fadeOut(100))
                    : (t.addClass('active'),
                      $('.select-country__list').fadeIn(100))
        }),
        $('.select-country__item').click(function () {
            $(this).parents().siblings('.select-country').hasClass('ua')
                ? $(this)
                      .parents()
                      .siblings('.select-country')
                      .removeClass('ua')
                : $(this).parents().siblings('.select-country').hasClass('ru')
                ? $(this)
                      .parents()
                      .siblings('.select-country')
                      .removeClass('ru')
                : $(this).parents().siblings('.select-country').hasClass('by')
                ? $(this)
                      .parents()
                      .siblings('.select-country')
                      .removeClass('by')
                : $(this)
                      .parents()
                      .siblings('.select-country')
                      .hasClass('kz') &&
                  $(this)
                      .parents()
                      .siblings('.select-country')
                      .removeClass('kz')
            var e = $(this).data('country')
            $(this).parents().siblings('.select-country').addClass(e),
                $(this).parents().siblings('.select-country').hasClass('ua')
                    ? ($("input[name='country']").val('UA'),
                      Inputmask.extendDefinitions({
                          '~': { validator: '[1245679]' },
                      }),
                      $("input[name='phone']").inputmask({
                          mask: '+38 (0~9) 999-99-99',
                          greedy: !1,
                          clearIncomplete: !0,
                          placeholder: '_',
                          rightAlign: !1,
                          showMaskOnHover: !1,
                          showMaskOnFocus: !0,
                      }))
                    : $(this)
                          .parents()
                          .siblings('.select-country')
                          .hasClass('ru')
                    ? ($("input[name='country']").val('RU'),
                      Inputmask.extendDefinitions({
                          '~': { validator: '[123456789]' },
                          k: { validator: '[1234569]' },
                      }),
                      $("input[name='phone']").inputmask({
                          mask: '+7 (k~9) 999-99-99',
                          greedy: !1,
                          clearIncomplete: !0,
                          placeholder: '_',
                          rightAlign: !1,
                          showMaskOnHover: !1,
                          showMaskOnFocus: !0,
                      }))
                    : $(this)
                          .parents()
                          .siblings('.select-country')
                          .hasClass('by')
                    ? ($("input[name='country']").val('BY'),
                      Inputmask.extendDefinitions({
                          '~': { validator: '[3459]' },
                          k: { validator: '[234]' },
                      }),
                      $("input[name='phone']").inputmask({
                          mask: '+375 (k~) 999-99-99',
                          greedy: !1,
                          clearIncomplete: !0,
                          placeholder: '_',
                          rightAlign: !1,
                          showMaskOnHover: !1,
                          showMaskOnFocus: !0,
                      }))
                    : $(this)
                          .parents()
                          .siblings('.select-country')
                          .hasClass('kz') &&
                      ($("input[name='country']").val('KZ'),
                      Inputmask.extendDefinitions({ k: { validator: '[7]' } }),
                      $("input[name='phone']").inputmask({
                          mask: '+7 (k99) 999-99-99',
                          greedy: !1,
                          clearIncomplete: !0,
                          placeholder: '_',
                          rightAlign: !1,
                          showMaskOnHover: !1,
                          showMaskOnFocus: !0,
                      })),
                $(this)
                    .parents()
                    .siblings('.select-country')
                    .removeClass('active'),
                $('.select-country__list').fadeOut('slow')
        }),
        Inputmask.extendDefinitions({ '~': { validator: '[1245679]' } }),
        $("input[name='phone']").inputmask({
            mask: '+38 (0~9) 999-99-99',
            greedy: !1,
            clearIncomplete: !0,
            placeholder: '_',
            rightAlign: !1,
            showMaskOnHover: !1,
            showMaskOnFocus: !0,
        })
})
