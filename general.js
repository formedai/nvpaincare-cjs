function enableDisable(dispatcherSelector, targetSelector, values, required=false){
    dispatcherSelector= dispatcherSelector.split(",");
    targetSelector = targetSelector.split(",");
    values = values.split(",");
    
    $.each(dispatcherSelector, function( dispatcher_index, dispatcher_selector ) {
        addEvent(dispatcher_selector, targetSelector, values, required);  
    });
    
    // triggers blur event to start evaluation
    $.each(dispatcherSelector, function( dispatcher_index, dispatcher_selector ) {
        if ($(dispatcher_selector).is(":checked")){
            $(dispatcher_selector).blur();
            return false;  // if we found the one that was selected, stop looping
        } else {        
            $(dispatcher_selector).blur();
        }
    });
}

function addEvent(dispatcherSelector, targetSelector, values, required=false){
    $(document).on('blur change click select2:select', dispatcherSelector, function (){
        if ($(this).val() !== '' && ($(this).attr('type') == 'checkbox' || $(this).attr('type') == 'radio')){
            included = values.includes($(this).val()); 
            if($(this).is(":checked") && included){
                $.each(targetSelector, function( target_index, target_value ) {
                    showElement(target_value, required);
                });
                $(document).trigger('ready');
            } else {
                $.each(targetSelector, function( target_index, target_value ) {
                    hideElement(target_value);
                });
            }
        } else if ( // if type=select
            $(this).attr('type') != 'radio' 
            && $(this).attr('type') != 'checkbox' 
            ){
                let currentValue = $(this).val();
                $.each(targetSelector, function( target_index, target_value ) {
                    hideElement(target_value);
                });
                $.each(values, function( values_key, values_value ) {
                    if(currentValue == values_value) {
                        $.each(targetSelector, function( target_index, target_value ) {
                            showElement(target_value, required);
                        });
                    }
                });
        } else if($(this).attr('data-object-type') == 'section') {
            $.each(targetSelector, function( index, selector ) {
                showElement(selector, required);
            });
        } else {
            $.each(targetSelector, function( index, selector ) {
                hideElement(selector);
            });
        }
    });
    
}

// For text inputs, Show/Hide related inputs when text not empty
function hideRelatedInputs(dispatcherSelector, targetSelector, required=false){
    $(document).on('blur change', dispatcherSelector, function () {      
        if ($(this).val() !== ''){
            showElement(targetSelector,required);
        } else {
            hideElement(targetSelector);
        }
    });
    $.each(dispatcherSelector.split(","), function( index, selector ) {
        if ($(selector).is(":checked")){
            $(selector).blur();
        }
    });
}

// hides an element
function hideElement(element){  
    if($(element).attr('data-object-type') == 'section') {
        $(element).find('input').each(function () {
            hideElement($(this));
        });        
        $(element).hide();
    } else {
        if($(element).attr('type') == 'text') {
            //$(element).val('');
        }
        setRequired(element,false);
        $(element).parent().hide();
        if ($(element).is(":checked")){
            $(element).blur();
        }
    }  
}

// shows an element
function showElement(element, required=false) {
    if($(element).attr('data-object-type') == 'section') {
        $(element).show();
        $(element).find('input').each(function () {
            showElement($(this), required);
        });
    } else {
        $(element).parent().show();
        setRequired(element,required);
        if ($(element).is(":checked")){
            $(element).blur();
        }
    }
}

// set an element as required or optional
function setRequired(element, required=true){
    if($(element).attr('data-object-type') == 'section') {
        console.log('setRequired can only be used on elements, not on sections');
    } else {
        if(required) {
            if ($(element).attr('type') == 'checkbox' || $(element).attr('type') == 'radio'){
                $(element).parent().attr("required", "true");
            } else {
                $(element).attr("required", "true");    
            }
        } else {
            if ($(element).attr('type') == 'checkbox' || $(element).attr('type') == 'radio'){
                $(element).parent().removeAttr("required", "true");
            } else {
                $(element).removeAttr("required", "true");    
            }
        }
    }
}