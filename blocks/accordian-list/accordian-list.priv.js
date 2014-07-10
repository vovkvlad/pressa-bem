BN.addDecl('accordian-list').blockTemplate(function(ctx){
    ctx.tag('ul');
    ctx.js(true);
    ctx.content([
        {block : 'accordian-to-the-main-page', item_title: 'To the main page'},
        {block : 'accordian-list-item', item_title: 'Students Life', category: 'studentslife'},
        {block : 'accordian-list-item', item_title: 'News', category: 'News'},
        {block : 'accordian-list-item', item_title: 'Conferences', category: 'conferences'}
    ]);
});