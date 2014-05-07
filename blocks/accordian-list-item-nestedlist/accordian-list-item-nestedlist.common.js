BN.addDecl('accordian-list-item-nestedlist').blockTemplate(function(ctx){
    var text = ctx.param('lastTitles');
    ctx.tag('ul');
    ctx.content(text.map(function (item) {
        return {elem: 'nested-list-item', liText: item.title, nid: item.nid};
    }).concat([{elem: 'nested-list-item-see-others'}]));

}).elemTemplate({ //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ask about linking logic !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        'nested-list-item': function(ctx){
            var linkInfo = ctx.json();
            ctx.content({
                block: 'b-link',
                url: 'pressa.univ.kiev.ua/' + linkInfo.nid,
                content: linkInfo.liText
            });
        }
    });

BN('accordian-list-item-nestedlist').instanceProp({
    open: function(){
        this.domElem.slideDown();
    },
    close: function(){
        this.domElem.slideUp();
    }
});