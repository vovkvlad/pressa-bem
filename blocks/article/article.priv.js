BN.addDecl('article').dataTemplate(function(ctx){
    var nid = ctx.param('newsid');
    return BN('presa-api').get('/'+nid).then(function(data){
        ctx.param('currentarticle', data);
    });
});