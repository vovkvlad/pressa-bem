BN.addDecl('main-page', 'page',{
    route: /^\/$/
}).staticProp({
        init: function(){
            return vow.reject();
        },
        update: function(){

        },
        destruct: function(){

        }
    });