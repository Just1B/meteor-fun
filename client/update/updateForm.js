AutoForm.addHooks('carsAutoFormUpdate', {
	onSuccess: function(formType, result) {
		$('#modal').modal('hide')
	}
});

Template.updateForm.helpers({
	selectedCarsDoc: function(){
		return cars.findOne({_id: Session.get('carsId')});
	}
});
