BN.addDecl('accordian-list').blockTemplate(function(ctx){
    ctx.tag('ul');
    ctx.js(true);
    ctx.content([
        {block : 'accordian-to-the-main-page', item_title: 'To the main page'},
        {block : 'accordian-list-item', item_title: 'Students Life'},
        {block : 'accordian-list-item', item_title: 'News'},
        {block : 'accordian-list-item', item_title: 'Conferences'}
    ]);
});

BN.addDecl('accordian-list').osSetMod({
    'js': function(){
        this.items = findBlocksInside('accordian-list-item');
//            this.bindTo(this.items, 'click', function(){
//                this.items._onClick();
//            });

        this.items.forEach(function(item){
            item.on('click', item._onClick.bind(this));
            //this.bindTo(element, 'click', function(){element._onClick();})
        }.bind(this));
    }
});
