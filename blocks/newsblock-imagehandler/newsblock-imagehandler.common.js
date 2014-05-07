BN.addDecl('imagehandler').blockTemplate(function(ctx){
    var imageinfo = ctx.param('image');
    ctx.content({block: 'b-icon', url: imageinfo.url});
});