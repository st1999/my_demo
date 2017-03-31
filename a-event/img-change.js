(function($) {
    $.fn.imgChange = function() {
        var defaults = {
            data: [{
                imgURL: 'img/change3.png',
                bgType: 'color',
                bg: '#002e82',
                imgWidth: 1020,
                imgHeight: 294,
            }, {
                bgType: 'image',
                imgWidth: 1020,
                imgHeight: 294,
                bg: 'img/change23.png',
                imgURL: 'img/change22.png',

            }, {
                bgType: 'color',
                imgWidth: 1020,
                imgHeight: 294,
                bg: '#07080a',
                imgURL: 'img/change33.png',
            }]
            // callback:
        };
        var list = 1;
        var settings = $.extend({}, defaults);
        var _imgCarousel = function(index) {

            var index = index + 1;

            list = index;
            if (list == that.find('.item').length + 1) {
                list = 1;
            }
            var bg = that.find('.item' + list).css('background-image');
            if (bg == 'none') {
                bg = that.find('.item' + list).css('background-color');
            }
            that.find('.item').css({
                'width': '0px',
                'margin-left': '100%'
            }).hide();
            that.css('background', bg);
            that.find('.item' + list).show().animate({
                width: '100%',
                'margin-left': '0'
            }, 300);
            that.find('.item-page').removeClass('item-page-select');
            that.find('.item-page' + list).addClass('item-page-select');
            // window.clearInterval(window.setVal);
        };
        var _imgChange = function() {
            window.clearInterval(window.setValCarousel);
            // alert(1);
            var index = $(this).index();
            _imgCarousel(index);

        };
        var _imgChangeState = function() {
            window.setIntervalCarousel = window.setInterval(function() {
                _imgCarousel(list);
            }, 5000);
        };
        var tmpl = [
            '<div class="img-list">',
            '     <div class="item item{{i+1}} item-select" style="{{if i ==0}} width:100%;margin-left:0;{{else}}width:0;margin-left:100% ;{{/if}} background-{{item.bgType}}: {{if item.bgType == "color"}}{{item.bg}}{{else}}url({{item.bg}}){{/if}}">',
            '    		<div style="width:{{imgWidth}};margin:0 auto;" class="img-border"><img src="{{item.imgURL}}" height="{{item.imgHeight}}" width="{{item.imgWidth}}" alt=""></div>',
            '	</div>',
            '</div>',
            '<div class="item-list"><div class="item-page item-page{{j+1}} {{if j==0}}item-page-select{{/if}}"></div></div>'
        ].join(' ');
        var that = $(this);
        var html = '';
        var addEvent = function() {
            window.setIntervalCarousel = window.setInterval(function() {
                _imgCarousel(list);
            }, 5000);
            that.on('mouseenter', '.item-page', _imgChange);
            that.on('mouseleave ', '.item-page', _imgChangeState);
        }

        var init = function() {
            if (settings.data && settings.data.length > 0) {
                var htmlImg = '<div class="img-list" style="width:100%;height:100%;overflow:hidden;">',
                    htmlList = '<div class="item-list" style="width:100%;">';
                for (var i = 0; i < settings.data.length; i++) {
                    var item = settings.data[i];
                    if (i == 0) {
                        htmlList += '<div class="item-page item-page' + (i + 1) + ' item-page-select"></div>'
                        htmlImg += '<div class="item item' + (i + 1) + ' item-select" style="width:100%;margin-left:0;background-' + item.bgType + ':';
                    } else {
                        htmlList += '<div class="item-page item-page' + (i + 1) + '"></div>'
                        htmlImg += '<div class="item item' + (i + 1) + ' item-select" style="width:0;margin-left:100%;background-' + item.bgType + ':';
                    }
                    if (item.bgType == "color") {
                        htmlImg += item.bg + '">';
                    } else {
                        htmlImg += 'url(' + item.bg + ')">';
                    }
                    htmlImg += '<div style="width:' + item.imgWidth + 'px;margin:0 auto;" class="img-border"> <img src="' + item.imgURL + '" height="' + item.imgHeight + '" width="' + item.imgWidth + '" alt=""></div></div>'
                }
                html = htmlImg + '</div>' + htmlList + '</div>'
                that.css('position', 'relative').empty().html(html);
                addEvent();
            }

        }
        init();
    }
})(jQuery);