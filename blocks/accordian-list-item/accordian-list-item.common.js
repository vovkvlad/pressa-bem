BN.addDecl('accordian-list-item').blockTemplate(function(ctx){
    var title = ctx.param('item_title');
    ctx.tag('li');
    ctx.content([
        {elem : 'title', content: title},
        {block: 'accordian-list-item-nestedlist', category: title}
    ]);
}).elemTemplate({
        'title': function(ctx){
            ctx.tag('h3');
        }
    });

BN('accordian-list-item').instanceProp({
    onSetMod: {
        'js': function(){
            this.nestedList = this.findBlockInside('accordian-list-item-nestedlist');
            /*this.bindTo('click',function(){
                var nestedList = this.findBlockInside('accordian-list-item-nestedlist');
                if (!(nestedList.next().is(':visible')))
                {
                    nestedList.open();
                }
                else
                {
                    nestedList.close();
                }
            });*/
        }
    },
    _onClick: function(){
        if(!(this.nestedList.next().is(':visible')))
        {
            this.nestedList.open();
        }
        else {this.nestedList.close();}
    }
});