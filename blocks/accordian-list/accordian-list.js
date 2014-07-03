BN.addDecl('accordian-list').onSetMod({
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
