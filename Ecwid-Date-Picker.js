
///

Ecwid.OnPageLoaded.add(function(page) {
    if (page.type == "PRODUCT") {

        ec.order = ec.order || {};
        ec.order.extraFields = ec.order.extraFields || {};

        ec.order.extraFields.pickup_time_select = {
        'title': 'Selecciona la Fecha de entrega',
        'required': true,
        'type': 'datetime',
        'checkoutDisplaySection': 'payment_details',
        'orderDetailsDisplaySection': 'order_comments',
        // Default date picker presets
        'datePickerOptions': {
            'minDate': new Date(new Date().getTime() + 72*60*60*1000), // Order is prepared for 2 hours minimum. Hiding 2 hours from the current time. Default is 0
            'maxDate': new Date(2020, 12, 31),
            'showTime': true,
            'incrementMinuteBy': 180,
            // limit available hours for each week day
            'limitAvailableHoursWeekly': {
                'MON': [
                    ['09:00', '17:30']
                ],
                'TUE': [
                    ['09:00', '17:30']
                ],
                'WED': [
                    ['09:00', '17:30']
                ],
                'THU': [
                    ['09:00', '17:30']
                ],
                'FRI': [
                    ['09:00', '17:30']
                ],
                'SAT': [
                    ['09:00', '17:30']
                ],
                'SUN': [
                    ['09:00', '17:30']
                ]
            }
        }
    };

Ecwid.refreshConfig();    

        
        
// ec.order = ec.order || {};
// ec.order.extraFields = ec.order.extraFields || {};

// Add a new optional text input 'How should we sign the package?' to shipping address form  Holaa
// ec.order.extraFields.wrapping_box_signature = {
//     'title': 'How should we sign the package?',
   //  'textPlaceholder': 'Package sign',
 //    'type': 'text',
    // 'tip': 'We will put a label on a box so the recipient knows who it is from',
    // 'required': false,
   //  'checkoutDisplaySection': 'shipping_address'
// };

// Ecwid.refreshConfig();        
        
        
        
        
    }
});


