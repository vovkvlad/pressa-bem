BN.addDecl('inner-breaking-news').blockTemplate(function(ctx){
    var linkinfo = ctx.param('breakingNews') || {};
    ctx.content({elem: 'title', text: linkinfo.title, url: linkinfo.nid})
}).elemTemplate({
        'title': function(ctx){
            ctx.tag('h2');
            var json = ctx.json();
            ctx.content({
                block: 'b-link',
                url: 'pressa.univ.kiev.ua/' + json.url,
                content: json.text
            });
        }
    });
