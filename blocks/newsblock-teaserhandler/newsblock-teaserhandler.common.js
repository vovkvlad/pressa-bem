BN.addDecl('newsblock-teaserhandler').blockTemplate(function(ctx){
    var data = ctx.json();
    ctx.content([
        {elem: 'newstitle', text: data.title, newsid: data.nid},
        {elem: 'line'},
        {elem: 'teaser', text: data.text}
    ]);
}).elemTemplate({
        'newstitle': function(ctx){
            var elemdata = ctx.json();
            ctx.tag('h2');
            ctx.content({block: 'b-link',  url: elemdata.newsid, content: elemdata.text });
        },
        'teaser': function(ctx){
            var text = ctx.param('text');
            ctx.tag('p');
            ctx.content(text);
        }
    });