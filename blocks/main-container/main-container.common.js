BN.addDecl('main-container').blockTemplate(function(ctx){
    var data = ctx.json();
    ctx.content([
        {block: 'header'},
        {block: 'outer-breaking-news'},
        {block: "content-handler", isarticle: data.newsid} //logicaly - all blocks inside content-handler will be included there
    ]);
});