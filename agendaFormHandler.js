// $(document).ready(function() {
//     var max_fields      = 10; //maximum input boxes allowed
//     var wrapper   		= $(".form-container"); //Fields wrapper
//     var add_button      = $(".add_field_button"); //Add button ID
    
//     var x = 1; //initlal text box count
//     $(add_button).click(function(e){ //on add input button click
//     e.preventDefault();
//         if(x < max_fields){ //max input box allowed
//             x++; //text box increment
//             const string = '<divclass="dkh-form-field"><inputautofocusclass="dkh-form-field__input"type="text"name="agenda"id="agenda"placeholder="Agenda"></div><divclass="dkh-form-field"><inputclass="dkh-form-field__input"name="password"type="number"id="timeAlloted"placeholder="TimeAlloted(Mins)"></div>'
//             const string2 = '<div class="dkh-form-body additional-body"><div class="dkh-form-field"><input autofocus class="dkh-form-field__input" type="text" name="agenda" id="agenda" placeholder="Agenda"></div><div class="dkh-form-field"><input class="dkh-form-field__input" name="password" type="number" id="timeAlloted" placeholder="TimeAlloted(Mins)"></div></div>'
//             const string3 = '<div class="input-group mb-3"><input placeholder="Enter Price" type="text" name="mytext[]" class="form-control"><div class="input-group-append"><button class="btn btn-outline-danger remove_field" type="button">Remove</button></div></div>'
//             $(wrapper).append(string2); //add input box
//         }
//     });
    
//     $(wrapper).on("click",".remove_field", function(e){ //user click on remove text
//         e.preventDefault(); $(this).parent('div').parent('div').remove(); x--;
//         })
//     });