BN.addDecl('accordian-list-item-nestedlist').dataTemplate(function(ctx){
    return BN('pressa-api').get(ctx.param('category')).then(function(data){
        ctx.param('lastTitles', data);
    });
});
