BN.addDecl('article').dataTemplate(function(ctx){
    var nid = ctx.param('newsid');
    return BN('pressa-api').get(nid).then(function(data){
        ctx.param('currentarticle', data);
    });
});