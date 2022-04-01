
    function validate() {
      
        if( document.form1.email.value == "" || document.form1.email.value.length < 5 ) {
           alert( "Please provide a valid email" );
           document.form1.email.focus() ;
           return false;
        }
        if( document.form1.address.value == "" ) {
           alert( "Please provide your address" );
           document.form1.address.focus() ;
           return false;
        }
        if( document.form1.phone.value == "" ||
        document.form1.phone.value.length != 10 ) {
           
           alert( "Please provide a phone number. Should be 10 digits" );
           document.form1.phone.focus() ;
           return false;
        }
        if( document.form1.message.value == "" || document.form1.message.value.length < 10 ) {
           alert( "Please type your message. Should be at least 10 characters" );
           return false;
        }
        return( true );
    }