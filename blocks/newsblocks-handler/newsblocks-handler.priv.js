BN('newsblocks-handler').dataTemplate(function(ctx){
    BN('pressa-api').get('/').then(function(data){
        ctx.param('LastNews', data);
    });
    BN('pressa-img-api').get().then(function(data){});
});