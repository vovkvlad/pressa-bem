BN.addDecl('article-page', 'page', {
    route: /^\/[0-9]*$/
}).staticProp({
    init: function(matches){
        return this.out({block: 'main-container', newsid: matches[0].slice(1)});
    },
    update: function(){

    },
    destruct: function(){

    }
});