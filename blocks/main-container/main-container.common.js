BN.addDecl('main-container').blockTemplate(function(ctx){
    ctx.content([
        {block: 'header'},
        {block: 'outer-breaking-news'},
        {block: "content-handler"} //logicaly - all blocks inside content-handler will be included there
    ]);
});