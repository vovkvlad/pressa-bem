/*
* main-page controller
*/
BN.addDecl('main-page', 'page',{
    route: /^\/$/
}).staticProp({
        init: function(){
            return this.out({block: 'main-container'});
        },
        update: function(){

        },
        destruct: function(){

        }
    });
//.setTtile('Прес-центр Кну').setMeta('CONTENT-TYPE', 'text/html; charset=utf-8')