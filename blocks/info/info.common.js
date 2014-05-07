BN.addDecl('info').blockTemplate(function(ctx){
    ctx.content([
        {elem: 'title'},
        {elem: 'address'},
        {elem: 'telephone'},
        {elem: 'email'}
    ]);
}).elemTemplate({
        'title': function(ctx){
            ctx.tag('h3');
            ctx.content('Контакти:');
        },
        'address': function(ctx){
            ctx.tag('p');
            ctx.content([{
                block: 'bold',
                content: 'Адреса:'
            },
                'вул. Володимирська, 60, к.268,Київ 01033 Україна'
            ]);
        },
        'telephone': function(ctx){
            ctx.tag('p');
            ctx.content([{
                block: 'bold',
                content: 'Тел/Факс:'
            },
                '+380 (44) 239-3466'
            ]);
        },
        'email': function(ctx){
            ctx.tag('p');
            ctx.content([{
                block: 'bold',
                content: 'Email:'
            },
                'pressa@univ.kiev.ua'
            ]);
        }
    });

