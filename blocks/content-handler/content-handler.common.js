BN.addDecl('content-handler').blockTemplate(function(ctx){
    var params = ctx.json();
    if(!params.isarticle)
    {
        ctx.content([
            {block: 'sidebar'},
            {block: 'newsblocks-handler'}
        ])
    }
    else
    {
        ctx.content([
            {block: 'sidebar'},
            {block: 'article', newsid: params.isarticle}
        ]);
    }

});