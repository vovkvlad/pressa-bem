BN.addDecl('newsblocks-handler').dataTemplate(function(ctx){
    //рекурсія -- це кльово, особливо коли вона зроблена із фантазією
    //коли ти робиш BN('pressa-api').get('/') ти відсилаєш http запит
    //на урл 'http://localhost/', тобто на головну сторінку сайта,
    //це призводить до ще одного такого ж запиту, ну і т.д.
    //фіксим це зміною урл-а в blocks/pressa-api/pressa-api.priv.js
    return BN('pressa-api').get('/').then(function(data){
        ctx.param('LastNews', data);
    });
    //WTF????
    //BN('pressa-img-api').get().then(function(data){});
});
