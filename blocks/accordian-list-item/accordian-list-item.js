BN.addDecl('accordian-list-item').onSetMod({
    'js': function(){
        this.elem('title').on('click', this.trigger.bind(this, 'click'));
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
    }}).instanceProp({
        _onClick: function(){
            //if(!(this.nestedList.next().is(':visible')))
            var dom = this.nestedList.domElem;
            //if(!(this.nestedList.is(':visible')))
            if(!(dom.is(':visible')))
            {
                this.nestedList.open().bind(this);
//            dom.open();
            }
            else {this.nestedList.close().bind(this);}
        }
    });