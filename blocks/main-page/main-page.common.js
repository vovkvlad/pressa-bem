/*
* main-page controller
*/
BN.addDecl('main-page', 'page',{
    route: /^\/$/
}).staticProp({
        init: function(){
            /* here should be connected all page blocks via this.out*/
        },
        update: function(){

        },
        destruct: function(){

        }
    }).setTtile('Прес-центр Кну').setMeta('CONTENT-TYPE', 'text/html; charset=utf-8');