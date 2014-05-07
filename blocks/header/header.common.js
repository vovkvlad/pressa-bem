BN.addDecl('header').blockTemplate(function(ctx){
    ctx.content({elem: 'text'});
}).elemTemplate({
        'text': function(ctx){
            ctx.tag('h1');
            ctx.content('Прес-центр Київського Національного Університету ім. Т.Г. Шевченка');
        }
    });