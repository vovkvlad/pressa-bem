//TODO decide something with teaser(only part of text should be derrived)
BN.addDecl('newsblocks-handler').blockTemplate(function(ctx){//possibly should use 2 api blocks as 2-nd for images
    var news = ctx.param('LastNews');
    ctx.content(news.map(function(newsitem){
        return {block: 'newsblock', newsid: newsitem.nid, image: newsitem.img, title: newsitem.title, teaser: newsitem.content};
    }));
});

