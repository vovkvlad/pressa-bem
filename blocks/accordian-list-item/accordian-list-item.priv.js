BN.addDecl('accordian-list-item').blockTemplate(function(ctx){
    var title = ctx.param('item_title');
    var data = ctx.json();
    ctx.js(true);
    ctx.tag('li');
    ctx.content([
        {elem : 'title', content: data.item_title},
        {block: 'accordian-list-item-nestedlist', category: data.category}
    ]);
}).elemTemplate({
        'title': function(ctx){
            ctx.tag('h3');
        }
    });
