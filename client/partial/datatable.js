Template.datatable.events ({
  'mouseover .selected' : function() {
    // if (document.getElementsByClassName("selected") !== [] ) {
    Session.set( "carsId", this.children_id);
    // }
  }
});
