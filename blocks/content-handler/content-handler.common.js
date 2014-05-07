BN.addDecl('content-handler').blockTemplate(function(ctx){
    ctx.content([
        {block: 'sidebar'},
        {block: 'newsblocks-handler'}
    ])
});