BN.addDecl('outer-breaking-news').blockTemplate(function(ctx){
    ctx.content({block: 'inner-breaking-news'});
});

BN.addDecl('inner-breaking-news').blockTemplate(function(ctx){
    ctx.content({elem: 'title'})
}).elemTemplate({
        'title': function(ctx){
            ctx.tag('h2');
            /*information for this link should come from outside(should be pulled from db)*/
            var json = ctx.json();
            ctx.content({
                block: 'b-link',
                url: json.url,
                content: json.text
            });
        }
    });