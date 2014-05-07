BN.addDecl('outer-breaking-news').blockTemplate(function(ctx){
    ctx.content({block: 'inner-breaking-news'});
});