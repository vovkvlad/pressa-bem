
BN.addDecl('accordian-to-the-main-page').blockTemplate(function(ctx){
    var title = ctx.param('item_title');
    ctx.tag('li');
    ctx.content({elem: 'to-the-main-title', text: title});
}).elemTemplate({
        'to-the-main-title': function(ctx){
            var linkinfo = ctx.json();
            ctx.tag('h3');
            ctx.content({
                block: 'b-link',
                url: 'pressa.univ.kiev.ua',
                content: 'linkinfo.text'
            });
        }
    });
