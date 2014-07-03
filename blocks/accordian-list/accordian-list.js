BN.addDecl('accordian-list').onSetMod({
    'js': function(){
        this.items = this.findBlocksInside('accordian-list-item');
//            this.bindTo(this.items, 'click', function(){
//                this.items._onClick();
//            });

        this.items.forEach(function(item){
            var allitems = this.items;
            item.on('click', function(){
                allitems.forEach(function(item_in_allitems){
                    item_in_allitems._close();
                });
                this._onClick();
            }, item);
//            item.on('click', item._onClick.bind(this));
//            this.bindTo(element, 'click', function(){element._onClick();})
        }.bind(this));
    }
});
