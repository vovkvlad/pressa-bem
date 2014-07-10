BN.addDecl('inner-breaking-news').blockTemplate(function(ctx){
    var linkinfo = ctx.param('breakingNews') || {};
    ctx.content({elem: 'title', text: linkinfo[0].title, url: linkinfo[0].nid})
}).elemTemplate({
        'title': function(ctx){
            var data = ctx.json();
            ctx.tag('h2');
            ctx.content({
                block: 'b-link',
                url: 'pressa.univ.kiev.ua/' + data.url,
                content: data.text
            });
        }
    });
