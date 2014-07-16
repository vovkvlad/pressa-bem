BN.addDecl('article').blockTemplate(function(ctx){
    var article = ctx.json().currentarticle[0];
    console.log(article);
    ctx.content([
        {elem: 'title', content: article.title},
        {elem: 'line'},
        {elem: 'text', content: article.content}
    ]);
}).elemTemplate({
        title: function(ctx){
            ctx.tag('h2');
        },
        text: function(ctx){
            ctx.tag('p');
        }
    });