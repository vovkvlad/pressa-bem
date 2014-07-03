BN.addDecl('accordian-list-item').blockTemplate(function(ctx){
    var title = ctx.param('item_title');
    ctx.js(true);
    ctx.tag('li');
    ctx.content([
        {elem : 'title', content: title},
        {block: 'accordian-list-item-nestedlist', category: title}
    ]);
}).elemTemplate({
        'title': function(ctx){
            ctx.tag('h3');
        }
    });
