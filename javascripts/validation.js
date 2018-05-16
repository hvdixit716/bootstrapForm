$(function(){

  $.validator.setDefaults({
    errorClass: 'text-danger',
    errorPlacement: function(error, element){
      if(element.prop('id') === 'country' || element.prop('id') === 'joiningDate'){
        error.insertAfter(element.parent());
      } else {
        error.insertAfter(element);
      }
    }
  });

  $.validator.addMethod('validName', function(value, element){
    return this.optional(element) || /^[a-zA-Z.]+$/i.test(value);
  }, 'Only Alphabets and .(dot) allowed.');

  $.validator.addMethod('validNameLength', function(value, element){
    return this.optional(element) || value.length>=3 && value.length<=50;
  }, 'Please enter a name between 3 and 50 characters.');

  $.validator.addMethod('validDescription', function(value, element){
    return this.optional(element) || value.length>=5 && value.length<=220;
  }, 'Please enter a description between 5 and 220 characters.');

  $.validator.addMethod('validCompanyName', function(value, element){
    return this.optional(element) || /^[a-zA-Z0-9.\-]+$/i.test(value);
  }, 'Only Alphabets, Numbers, .(dot) and -(dash) allowed.');

  $.validator.addMethod('validCompanyNameLength', function(value, element){
    return this.optional(element) || value.length>=2 && value.length<=50;
  }, 'Please enter a name between 2 and 50 characters.');

  $.validator.addMethod('validUrlLength', function(value, element){
    return value.length<=20;
  }, 'URL cannot be longer than 20 characters');

  $('#profileForm').validate({
    submitHandler: function(){
      $('div#validationDiv').removeClass('alert-danger');
      $('div#validationDiv').addClass('alert');
      $('div#validationDiv').addClass('alert-success');
      $('div#validationDiv').html('<h5>Form Saved Successfully.</h5>');
    },
    invalidHandler: function(event, validator){
      var errors = validator.numberOfInvalids();
      console.log(errors);
      if(errors!=0){
        $('div#validationDiv').removeClass('alert-success');
        $('div#validationDiv').addClass('alert');
        $('div#validationDiv').addClass('alert-danger');
        $('div#validationDiv').html('<h5>Please fill the form correctly.</h5>');
      }
    },
    rules: {
      firstName: {
        required: true,
        validName: true,
        validNameLength: true
      },
      lastName: {
        required: true,
        validName: true,
        validNameLength: true
      },
      description: {
        required: true,
        validDescription: true
      },
      companyName: {
        required: true,
        validCompanyName: true,
        validCompanyNameLength: true
      },
      designation: {
        required: true,
        validCompanyName: true,
        validCompanyNameLength: true
      },
      country: {
        required: true
      },
      joiningDate: {
        required: true
      },
      linkedInLink: {
        url: true,
        validUrlLength: true
      },
      instagramLink: {
        url: true,
        validUrlLength: true
      }
    },
    messages:{
      designation:{
        validCompanyNameLength: 'Please enter a designation between 2 and 50 characters'
      }
    }
  });

});
