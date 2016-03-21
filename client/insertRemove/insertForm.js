AutoForm.addHooks('carsAutoFormInsert', {
	onSuccess: function(formType, result) {
		$('#modal').modal('hide')
	}
});
