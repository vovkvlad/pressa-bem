BN.addDecl('accordian-list').blockTemplate(function(ctx){
    ctx.tag('ul');
    ctx.content([
        {block : 'accordian-to-the-main-page', item_title: 'To the main page'},
        {block : 'accordian-list-item', item_title: 'Students Life'},
        {block : 'accordian-list-item', item_title: 'News'},
        {block : 'accordian-list-item', item_title: 'Conferences'}
    ]);
});

BN('accordian-list').instanceProp({
    osSetMod: {
        'js': function(){
            this.items = findBlocksInside('accordian-list-item');
            this.bindTo(this.items, 'click', function(){
                for(var i =0; i<this.items.length; i++){
                    this.items._onClick();
                }
            });
        }
    }
});