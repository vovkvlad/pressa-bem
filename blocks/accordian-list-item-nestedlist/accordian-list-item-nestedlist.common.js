BN.addDecl('accordian-list-item-nestedlist').blockTemplate(function(ctx){
    var text = ctx.param('lastTitles') || [];
    ctx.tag('ul');
    ctx.content(text.map(function (item) {
        return {elem: 'nested-list-item', liText: item.title, nid: item.nid};
    }).concat([{elem: 'nested-list-item-see-others'}]));

}).elemTemplate({ //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ask about linking logic !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        'nested-list-item': function(ctx){
            ctx.tag('li');
            var linkInfo = ctx.json();
            ctx.content({
                block: 'b-link',
                url: 'pressa.univ.kiev.ua/' + linkInfo.nid,
                content: linkInfo.liText
            });
        },
        'nested-list-item-see-others': function(ctx){
            ctx.tag('li');
            ctx.content({
                block: "b-link",
                url: "http://pressa.univ.kiev.ua",
                content: "Litext"
            });
        }
    });

BN.addDecl('accordian-list-item-nestedlist').instanceProp({
    open: function(){
        this.domElem.slideDown();
    },
    close: function(){
        this.domElem.slideUp();
    }
});
