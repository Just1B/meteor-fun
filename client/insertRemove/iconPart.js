Template.iconPart.events({
	'click #plus': function(){
    Session.set( "modalForm", "insertForm" );
  },
	'mouseover #trash' : function() {
					cars.remove({_id: Session.get('carsId')});
					delete Session.keys['carsId'];
    }
});
