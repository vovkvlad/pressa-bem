BN.addDecl('inner-breaking-news').dataTemplate(function(ctx){
    return BN('pressa-api').get('breaking').then(function(data){
        ctx.param('breakingNews', data);
    });
});
