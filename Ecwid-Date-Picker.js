
///

Ecwid.OnPageLoaded.add(function(page) {
    if (page.type == "CART") {

        ec.order = ec.order || {};
        ec.order.extraFields = ec.order.extraFields || {};

        ec.order.extraFields.pickup_time_select = {
        'title': 'Select date of pickup',
        'required': true,
        'type': 'datetime',
        'checkoutDisplaySection': 'pickup_details',
        'orderDetailsDisplaySection': 'order_comments',
        // Default date picker presets
        'datePickerOptions': {
            'minDate': new Date(new Date().getTime() + 2*60*60*1000), // Order is prepared for 2 hours minimum. Hiding 2 hours from the current time. Default is 0
            'maxDate': new Date(2020, 12, 31),
            'showTime': true,
            'incrementMinuteBy': 30,
            // limit available hours for each week day
            'limitAvailableHoursWeekly': {
                'MON': [
                    ['08:30', '13:30'],
                    ['14:00', '17:30']
                ],
                'TUE': [
                    ['14:00', '17:30']
                ],
                'WED': [
                    ['01:00', '13:30']
                ],
                'THU': [
                    ['14:00', '23:30']
                ],
                'FRI': [
                    ['14:00', '17:30']
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


