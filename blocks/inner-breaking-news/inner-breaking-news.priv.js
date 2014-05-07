BN.('inner-breaking-news').dataTemplate(function(ctx){
    BN('pressa-api').get('/breaking').then(function(data){
        ctx.param('breakingNews', data);
    });
});