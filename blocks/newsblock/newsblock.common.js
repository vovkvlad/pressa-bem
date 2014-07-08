BN.addDecl('newsblock').blockTemplate(function(ctx){
    var data = ctx.json();

    ctx.content([
        {block: 'newsblock-imagehandler'/*, image: data.image*/},
        {block: 'newsblock-teaserhandler', nid: data.newsid, title: data.title, text: data.teaser}
    ]);
});
